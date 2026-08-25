# MLLMLANanofab - Maskless Lithography & Micro-Nanofabrication Systems
*(Heidelberg Instruments Replica Web Application)*

MLLMLANanofab is a production-ready, full-stack website and interactive optics simulation platform replicating [heidelberg-instruments.com](https://heidelberg-instruments.com).

## 🌟 Key Features

1. **Header & Navigation Replica**:
   - Heidelberg Instruments style brand logo with metallic cyan/sapphire optics badge
   - Top utility bar with global search, [ DE | EN ] language switcher pill, and user authentication widget
   - Single top `<Header>` and bottom `<Footer>` component scoping to eliminate duplicate UI headers across 24 sub-routes

2. **2D Interactive Physics & Exposure Engine (`MLAOpticsCanvas.jsx`)**:
   - HTML5 2D Canvas modeling laser wavelengths (UV 375nm, 405nm, Green 532nm), Numerical Aperture (NA 0.1 - 0.95), laser power (mW), scan speed, and photoresist threshold
   - Real-time diffraction-limited spot size calculation \(w_0 = \frac{\lambda}{\pi \cdot \text{NA}}\), Rayleigh length, and dosage energy profile
   - Direct-write scan animation with real-time resist exposure map
   - System presets for MLA 150, MLA 300, DWL 66+, and NanoFrazor t-SPL

3. **Product & Application Showcase**:
   - MLA Maskless Aligners, DWL Direct Write Laser Lithography, NanoFrazor Thermal Scanning Probe, Micro-Optics Grayscale 3D
   - Industry sectors: Quantum Devices, 2D Materials (Graphene), Micro-Optics, MEMS & Sensors, Semiconductor Packaging, Nanofluidics

4. **Django REST Backend & Dual Database Sync**:
   - Django 5.x REST API with Django Messages Framework extractor (`extract_django_messages`)
   - Dual Database Architecture: Local SQLite (`db.sqlite3`) + Cloud MongoDB Atlas (`mllmlananofab_db`) sync
   - Stripe payment checkout endpoints (`/api/v1/stripe/create-payment-intent/`, `/api/v1/subscribe/`)
   - Executive Admin Passcode Authorization Console (`X-Admin-Passcode: aliabbas1234578!`)

---

## 🚀 Quick Start Guide

### Frontend Setup (Vite + React 18)
```bash
cd frontend
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Backend Setup (Django 5.x)
```bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver 8000
```
API endpoints will run at [http://localhost:8000/api/v1/](http://localhost:8000/api/v1/).

---

## 🛡️ Admin Authorization Credentials
- **Admin Console URL**: Nav link "Admin 🛡️"
- **Admin Secret Passcode**: `aliabbas1234578!`
- **Superuser Email**: `admin@mllmlananofab.com`

---

## 📦 Project Structure
```
mllmlananofab/
├── MASTER_AI_PROMPT_WEBSITE_BUILDER.txt
├── README.md
├── mllmlananofab_project_summary.md
├── frontend/
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   └── src/
│       ├── index.css
│       ├── main.jsx
│       ├── App.jsx
│       ├── context/ToastContext.jsx
│       ├── components/
│       │   ├── common/ (Header, Footer, AuthModal, CheckoutModal, TrialModal, SearchModal, ToastNotification)
│       │   └── canvas/ (MLAOpticsCanvas.jsx)
│       └── pages/ (HomePage, DesignerPage, ProductsPage, ApplicationsPage, ShopPage, SupportPage, AboutPage, AdminPage, PremiumConsultationPage, LegalPage, AuthPage, sub-routes...)
└── backend/
    ├── requirements.txt
    ├── manage.py
    ├── mllmlananofab_backend/ (settings.py, urls.py, wsgi.py)
    └── api/ (models.py, db_mongo.py, views.py, urls.py)
```
