import React, { useRef, useEffect, useState } from 'react';
import { Sliders, Play, RotateCcw, Zap, Sparkles, Activity, Eye, Layers } from 'lucide-react';

export const MLAOpticsCanvas = () => {
  const canvasRef = useRef(null);

  // Simulation Parameters
  const [wavelength, setWavelength] = useState(375); // nm (375, 405, 532)
  const [numericalAperture, setNumericalAperture] = useState(0.75); // NA
  const [laserPower, setLaserPower] = useState(120); // mW
  const [scanSpeed, setScanSpeed] = useState(35); // mm/s
  const [resistThreshold, setResistThreshold] = useState(80); // mJ/cm²
  const [activePreset, setActivePreset] = useState('MLA 150');
  const [isScanning, setIsScanning] = useState(true);
  const [scanProgress, setScanProgress] = useState(0);

  // Calculated Telemetry
  const spotSizeMicrons = ((wavelength * 1e-9) / (Math.PI * numericalAperture) * 1e6).toFixed(2);
  const rayleighLengthMicrons = ((Math.PI * Math.pow(parseFloat(spotSizeMicrons), 2)) / (wavelength * 1e-3)).toFixed(2);
  const calculatedDosage = ((laserPower / (scanSpeed * parseFloat(spotSizeMicrons))) * 10).toFixed(1);

  const applyPreset = (presetKey) => {
    setActivePreset(presetKey);
    switch (presetKey) {
      case 'MLA 150':
        setWavelength(375);
        setNumericalAperture(0.75);
        setLaserPower(120);
        setScanSpeed(35);
        setResistThreshold(80);
        break;
      case 'MLA 300':
        setWavelength(405);
        setNumericalAperture(0.65);
        setLaserPower(300);
        setScanSpeed(85);
        setResistThreshold(60);
        break;
      case 'DWL 66+':
        setWavelength(405);
        setNumericalAperture(0.85);
        setLaserPower(200);
        setScanSpeed(20);
        setResistThreshold(110);
        break;
      case 'NanoFrazor':
        setWavelength(350);
        setNumericalAperture(0.95);
        setLaserPower(50);
        setScanSpeed(10);
        setResistThreshold(150);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    let animId;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let scanPos = 0;

    const render = () => {
      const w = canvas.width;
      const h = canvas.height;

      // Clear dark cleanroom background
      ctx.fillStyle = '#06101E';
      ctx.fillRect(0, 0, w, h);

      // Draw optical bench grid
      ctx.strokeStyle = 'rgba(0, 229, 255, 0.08)';
      ctx.lineWidth = 1;
      const gridSize = 25;
      for (let x = 0; x < w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Draw Laser Diode Source on Left
      ctx.fillStyle = '#0F2342';
      ctx.strokeStyle = '#00E5FF';
      ctx.lineWidth = 2;
      ctx.fillRect(20, h / 2 - 45, 90, 90);
      ctx.strokeRect(20, h / 2 - 45, 90, 90);

      // Label laser source
      ctx.fillStyle = '#00E5FF';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText(`${wavelength}nm UV Diode`, 28, h / 2 - 15);
      ctx.fillStyle = '#94A3B8';
      ctx.font = '10px sans-serif';
      ctx.fillText(`P: ${laserPower}mW`, 28, h / 2 + 5);
      ctx.fillText(`NA: ${numericalAperture}`, 28, h / 2 + 20);

      // Beam color spectrum based on wavelength
      let beamColor = 'rgba(0, 229, 255, 0.6)';
      let glowColor = '#00E5FF';
      if (wavelength === 405) {
        beamColor = 'rgba(168, 85, 247, 0.6)';
        glowColor = '#A855F7';
      } else if (wavelength === 532) {
        beamColor = 'rgba(34, 197, 94, 0.6)';
        glowColor = '#22C55E';
      }

      // Draw Spatial Light Modulator (SLM / DMD)
      const slmX = 220;
      ctx.fillStyle = '#1E3A60';
      ctx.strokeStyle = glowColor;
      ctx.fillRect(slmX, h / 2 - 60, 20, 120);
      ctx.strokeRect(slmX, h / 2 - 60, 20, 120);
      ctx.fillStyle = glowColor;
      ctx.font = '9px sans-serif';
      ctx.fillText('SLM DMD', slmX - 10, h / 2 - 70);

      // Incident Laser Beam from Diode to SLM
      ctx.beginPath();
      ctx.moveTo(110, h / 2 - 15);
      ctx.lineTo(slmX, h / 2 - 25);
      ctx.lineTo(slmX, h / 2 + 25);
      ctx.lineTo(110, h / 2 + 15);
      ctx.closePath();
      ctx.fillStyle = beamColor;
      ctx.fill();

      // Focusing Objective Lens
      const lensX = 360;
      ctx.beginPath();
      ctx.ellipse(lensX, h / 2, 14, 55, 0, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.strokeStyle = glowColor;
      ctx.lineWidth = 2;
      ctx.fill();
      ctx.stroke();

      // Beam focusing envelope from SLM to Lens to Focal Spot
      const focusX = 540;
      ctx.beginPath();
      ctx.moveTo(slmX + 20, h / 2 - 25);
      ctx.lineTo(lensX, h / 2 - 40);
      ctx.lineTo(focusX, h / 2 - parseFloat(spotSizeMicrons) * 4);
      ctx.lineTo(focusX, h / 2 + parseFloat(spotSizeMicrons) * 4);
      ctx.lineTo(lensX, h / 2 + 40);
      ctx.lineTo(slmX + 20, h / 2 + 25);
      ctx.closePath();
      ctx.fillStyle = beamColor;
      ctx.fill();

      // Draw Wafer Substrate & Photoresist Layer
      const waferX = 480;
      const waferY = h / 2 + 40;
      ctx.fillStyle = '#1E293B';
      ctx.fillRect(waferX, waferY, 260, 50);
      ctx.strokeStyle = '#475569';
      ctx.strokeRect(waferX, waferY, 260, 50);

      // Photoresist Top Coat Layer (Greenish/Golden)
      ctx.fillStyle = 'rgba(212, 175, 55, 0.4)';
      ctx.fillRect(waferX, waferY, 260, 12);
      ctx.fillStyle = '#D4AF37';
      ctx.font = '10px sans-serif';
      ctx.fillText('Substrate (Si/Glass) + Photoresist Coat', waferX + 10, waferY + 32);

      // Direct Write Scanning Animation on Substrate
      if (isScanning) {
        scanPos = (scanPos + (scanSpeed / 15)) % 220;
        setScanProgress(Math.floor((scanPos / 220) * 100));

        // Animated laser exposure spot
        const currentSpotX = waferX + 20 + scanPos;
        ctx.beginPath();
        ctx.arc(currentSpotX, waferY + 6, Math.max(3, parseFloat(spotSizeMicrons) * 3), 0, Math.PI * 2);
        ctx.fillStyle = glowColor;
        ctx.shadowColor = glowColor;
        ctx.shadowBlur = 15;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Exposed resist track
        ctx.fillStyle = parseFloat(calculatedDosage) >= resistThreshold ? 'rgba(0, 229, 255, 0.9)' : 'rgba(239, 68, 68, 0.7)';
        ctx.fillRect(waferX + 10, waferY + 2, scanPos, 8);
      }

      // Telemetry Overlay Info Box on Canvas
      ctx.fillStyle = 'rgba(15, 35, 66, 0.9)';
      ctx.strokeStyle = 'rgba(0, 229, 255, 0.3)';
      ctx.fillRect(w - 230, 20, 210, 130);
      ctx.strokeRect(w - 230, 20, 210, 130);

      ctx.fillStyle = '#00E5FF';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText('LIVE OPTICS TELEMETRY', w - 215, 40);

      ctx.fillStyle = '#E2E8F0';
      ctx.font = '10px monospace';
      ctx.fillText(`Spot Size w0: ${spotSizeMicrons} µm`, w - 215, 60);
      ctx.fillText(`Rayleigh (zR): ${rayleighLengthMicrons} µm`, w - 215, 78);
      ctx.fillText(`Dosage: ${calculatedDosage} mJ/cm²`, w - 215, 96);

      const isExposed = parseFloat(calculatedDosage) >= resistThreshold;
      ctx.fillStyle = isExposed ? '#10B981' : '#EF4444';
      ctx.font = 'bold 10px sans-serif';
      ctx.fillText(isExposed ? '✓ OPTIMAL EXPOSURE' : '⚠ UNDER-EXPOSED DOSAGE', w - 215, 118);

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [wavelength, numericalAperture, laserPower, scanSpeed, resistThreshold, isScanning, spotSizeMicrons, calculatedDosage]);

  return (
    <div style={{ background: '#0F2342', border: '1px solid rgba(0, 229, 255, 0.3)', borderRadius: '16px', overflow: 'hidden', padding: '1.5rem' }}>
      
      {/* Header & Controls Bar */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', gap: '1rem' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#00E5FF', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            <Activity size={14} /> Maskless Exposure & Laser Physics Simulator
          </div>
          <h2 style={{ color: '#FFFFFF', fontSize: '1.4rem', fontWeight: 700 }}>
            Interactive Lithography Optics Engine
          </h2>
        </div>

        {/* System Preset Buttons */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {['MLA 150', 'MLA 300', 'DWL 66+', 'NanoFrazor'].map((preset) => (
            <button
              key={preset}
              onClick={() => applyPreset(preset)}
              style={{
                padding: '0.35rem 0.75rem',
                borderRadius: '6px',
                fontSize: '0.8rem',
                fontWeight: 600,
                background: activePreset === preset ? '#00E5FF' : 'rgba(255,255,255,0.06)',
                color: activePreset === preset ? '#040D1A' : '#CBD5E1',
                border: activePreset === preset ? 'none' : '1px solid rgba(255,255,255,0.1)'
              }}
            >
              {preset}
            </button>
          ))}
        </div>
      </div>

      {/* HTML5 Canvas Display */}
      <div style={{ position: 'relative', width: '100%', overflowX: 'auto', borderRadius: '12px', border: '1px solid rgba(0,229,255,0.2)', marginBottom: '1.5rem' }}>
        <canvas
          ref={canvasRef}
          width={760}
          height={320}
          style={{ width: '100%', height: 'auto', display: 'block', background: '#06101E' }}
        />
      </div>

      {/* Sliders & Parameter Tuning Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', background: 'rgba(255,255,255,0.03)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
        
        {/* Wavelength Selector */}
        <div>
          <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#CBD5E1', marginBottom: '0.35rem', fontWeight: 600 }}>
            <span>Laser Wavelength (\(\lambda\))</span>
            <span style={{ color: '#00E5FF' }}>{wavelength} nm</span>
          </label>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {[375, 405, 532].map((wl) => (
              <button
                key={wl}
                onClick={() => setWavelength(wl)}
                style={{
                  flex: 1,
                  padding: '0.3rem',
                  fontSize: '0.75rem',
                  borderRadius: '4px',
                  background: wavelength === wl ? 'rgba(0,229,255,0.2)' : 'rgba(255,255,255,0.05)',
                  color: wavelength === wl ? '#00E5FF' : '#94A3B8',
                  border: wavelength === wl ? '1px solid #00E5FF' : '1px solid transparent'
                }}
              >
                {wl}nm
              </button>
            ))}
          </div>
        </div>

        {/* Numerical Aperture NA Slider */}
        <div>
          <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#CBD5E1', marginBottom: '0.35rem', fontWeight: 600 }}>
            <span>Numerical Aperture (NA)</span>
            <span style={{ color: '#00E5FF' }}>{numericalAperture}</span>
          </label>
          <input
            type="range"
            min="0.10"
            max="0.95"
            step="0.05"
            value={numericalAperture}
            onChange={(e) => setNumericalAperture(parseFloat(e.target.value))}
            style={{ width: '100%', accentColor: '#00E5FF' }}
          />
        </div>

        {/* Laser Power Slider */}
        <div>
          <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#CBD5E1', marginBottom: '0.35rem', fontWeight: 600 }}>
            <span>Laser Power (P)</span>
            <span style={{ color: '#00E5FF' }}>{laserPower} mW</span>
          </label>
          <input
            type="range"
            min="10"
            max="500"
            step="10"
            value={laserPower}
            onChange={(e) => setLaserPower(parseInt(e.target.value))}
            style={{ width: '100%', accentColor: '#00E5FF' }}
          />
        </div>

        {/* Scan Speed Slider */}
        <div>
          <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#CBD5E1', marginBottom: '0.35rem', fontWeight: 600 }}>
            <span>Write Speed (v)</span>
            <span style={{ color: '#00E5FF' }}>{scanSpeed} mm/s</span>
          </label>
          <input
            type="range"
            min="5"
            max="100"
            step="5"
            value={scanSpeed}
            onChange={(e) => setScanSpeed(parseInt(e.target.value))}
            style={{ width: '100%', accentColor: '#00E5FF' }}
          />
        </div>

      </div>

      {/* Action Footer */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={() => setIsScanning(!isScanning)}
            className="btn-outline"
            style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem' }}
          >
            <Play size={14} /> {isScanning ? 'Pause Simulation' : 'Run Exposure Scan'}
          </button>
          <span style={{ fontSize: '0.8rem', color: '#94A3B8' }}>
            Scan Progress: <strong style={{ color: '#00E5FF' }}>{scanProgress}%</strong>
          </span>
        </div>

        <div style={{ fontSize: '0.8rem', color: '#64748B' }}>
          Equation: w0 = λ / (π · NA) • Dosage D = P / (v · w0)
        </div>
      </div>
    </div>
  );
};
