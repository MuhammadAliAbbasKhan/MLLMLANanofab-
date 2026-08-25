# MLLMLANanofab - Maskless Laser Lithography & Micro-Nanofabrication Platform

![MLLMLANanofab Banner](https://heidelberg-instruments.com/wp-content/uploads/2025/11/Our-Solutions-for-Industry-and-RD.webp)

**MLLMLANanofab** is a production-ready, full-stack web application and simulation platform for maskless laser lithography systems, direct write optical lithography, thermal scanning probe nanolithography (t-SPL), and 2.5D grayscale micro-optics patterning.

---

## 🌟 Key Features

### 🔬 1. Interactive 2D Maskless Lithography & Laser Optics Engine
- Real-time 2D HTML5 Canvas simulation of direct-write laser diode exposure ($375\text{ nm}$, $405\text{ nm}$, $532\text{ nm}$).
- Live physics telemetry:
  - Spot Size calculation: $w_0 = \frac{\lambda}{\pi \cdot \text{NA}}$
  - Rayleigh Length ($z_R$)
  - Resist Exposure Dosage ($\text{mJ/cm}^2$) vs. sensitivity thresholds.
- Interactive parameter sliders for Wavelength, Numerical Aperture (NA), Laser Power ($\text{mW}$), Write Speed ($\text{mm}^2/\text{min}$), and Photoresist Sensitivity.
- System presets: **MLA 150**, **MLA 300**, **DWL 66+**, **NanoFrazor t-SPL**.

### 💼 2. Consolidated Pricing & Stripe Payment Gateway Simulation
- **Free Basic DESIGNER Suite**: 2D optics simulator, spot sizing, diffraction calculation, and GDSII CAD pre-checking are **100% FREE** for all users.
- **Consolidated Single-Form Pricing Tiers**:
  - **Basic Premium Service**: **$100 USD / month** ($80 USD yearly) – GDSII converters & downloadable PDF recipe exports.
  - **Professional Premium Service**: **$150 USD / month** ($120 USD yearly) – 2.5D Grayscale depth profiler & multi-layer wafer alignment.
  - **Enterprise Premium Service**: **$200 USD / month** ($160 USD yearly) – Full cleanroom wafer fab integration, SECS/GEM fab automation API & MongoDB Atlas cloud sync.
- **Stripe Credit Card Checkout (`CheckoutModal.jsx`)**:
  - Form validation enforcing Cardholder Full Name, Billing Email, 16-digit Card Number, Expiration Date (`MM/YY`), and Security CVC Code.
  - Active subscription state persistence (`is_active: true`, `payment_reference`) preventing duplicate monthly charges.

### 🌐 3. Multi-Language Switcher System
- Built-in React Language Context (`LanguageContext.jsx`) supporting 6 global languages:
  - 🇬🇧 English (`EN`)
  - 🇩🇪 Deutsch (`DE`)
  - 🇨🇳 简体中文 (`ZH`)
  - 🇯🇵 日本語 (`JA`)
  - 🇪🇸 Español (`ES`)
  - 🇫🇷 Français (`FR`)
- Instant dynamic UI translation across navigation bars, headers, buttons, product specs, and legal footers.

### 📱 4. 100% Mobile & iOS Safari Responsiveness
- Viewport safe area insets (`viewport-fit=cover`, `maximum-scale=1.0`, `user-scalable=no`).
- iOS touch momentum scrolling (`-webkit-overflow-scrolling: touch`) and instant touch action response (`touch-action: manipulation`).
- Mobile menu slide-out drawer with dedicated mobile authentication & language widgets.
- Bounded modal viewports (`maxWidth: 440px`, `width: 92vw`, `maxHeight: 90vh`) with top-right circular close cross button (`✕`).

### 🛡️ 5. Dual Database Architecture: SQLite + MongoDB Atlas Cloud Sync
- **Primary Database**: Local SQLite (`db.sqlite3`) for Django ORM models.
- **Cloud Database**: Real-time sync to MongoDB Atlas (`mllmlananofab_db`) for user accounts, subscription tiers, trial requests, and cleanroom service tickets.
- **Executive Control Console (`AdminPage.jsx`)**: Guarded by passcode `aliabbas1234578!` with interactive user table management and trial approvals.

---

## 🛠️ Technology Stack

### Frontend
- **Framework**: React 18 + Vite 5 SPA
- **Styling**: Vanilla CSS3, Source Sans Pro / Outfit typography, responsive flex/grid layouts
- **Icons**: Lucide React Icons
- **Simulation**: HTML5 2D Canvas API

### Backend
- **Framework**: Python 3.12 + Django 5.x REST Framework
- **Databases**: SQLite3 & PyMongo (MongoDB Atlas Cloud Sync)
- **Static Assets**: WhiteNoise WSGI

---

## 🚀 Quick Start Guide

### 1. Clone & Setup Frontend
```bash
git clone https://github.com/MuhammadAliAbbasKhan/MLLMLANanofab-.git
cd MLLMLANanofab-/frontend

# Install dependencies
npm install

# Run Vite Development Server
npm run dev
```

### 2. Setup Django Backend
```bash
cd ../backend

# Install Python requirements
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Start Django Development Server
python manage.py runserver 8000
```

---

## 📝 License & Copyright

Copyright © 2026 **MLLMLANanofab GmbH**. All rights reserved.  
Designed & Developed for Precision Laser Lithography & Micro-Nanofabrication Systems.
