# MLLMLANanofab Project Summary

## Executive Overview
**MLLMLANanofab** is a production-ready, full-stack website clone and physics simulation web application built to replicate the design, functionality, navigation structure, and technical catalog of **Heidelberg Instruments** ([heidelberg-instruments.com](https://heidelberg-instruments.com)).

---

## 🛠️ Architecture & Specifications Built

1. **Master AI Blueprint Prompt (`MASTER_AI_PROMPT_WEBSITE_BUILDER.txt`)**:
   - Contains 100% comprehensive system instructions, header/footer layout replicas, physics engine specifications, dual DB sync instructions, Stripe integration guide, and deployment steps.

2. **Frontend Engine (React 18 + Vite 5 SPA)**:
   - **Header & Footer**: Replicates Heidelberg Instruments layout with top control bar (Search trigger, [ DE | EN ] language switcher, Auth widget), primary navigation with dropdowns, single top header & bottom footer scoping in `App.jsx`.
   - **2D Laser Lithography Physics Canvas (`MLAOpticsCanvas.jsx`)**: HTML5 Canvas 2D simulation with numerical aperture (NA) sliders, wavelength diode selectors, spot size \(w_0 = \frac{\lambda}{\pi \cdot \text{NA}}\), Rayleigh range, dosage energy profiles, and direct-write scan animations.
   - **24+ Sub-Routes Supported**: Home, Designer, Products, Applications, Shop & Pricing, Process & Support, Company, Admin Console, Premium Consultation Portal, Legal Notice, Privacy Statement, Terms, Service Specifications, How to Order, Functions, Benefits, Basics, Videos, Brochure, Partners, Testimonials, System Requirements, Demo, Tutorials, FAQ, Handbook, Changelog.
   - **Modal System**: AuthModal, CheckoutModal (Stripe credit card simulation), TrialModal (30-day evaluation request), SearchModal (instant global site search).
   - **Toast Notification System**: Django message consumer displaying color-coded alerts.

3. **Backend Engine (Django 5.x REST API)**:
   - **REST API Endpoints**: Authentication, Stripe checkout intents, trial requests, custom nanofab service requests, and admin analytics.
   - **Django Messages Extractor**: `extract_django_messages(request)` extracts messages queued in `django.contrib.messages` and returns them in JSON API responses.
   - **Dual Database Engine**: SQLite ORM + PyMongo driver sync to MongoDB Cloud Atlas (`mllmlananofab_db`).
   - **Admin Passcode Security**: Protected endpoints requiring `X-Admin-Passcode: aliabbas1234578!`.

---

## 📁 File Structure & Paths
- Master Prompt: `d:\Batch new\1 -15 websites\mllmlananofab\MASTER_AI_PROMPT_WEBSITE_BUILDER.txt`
- Frontend: `d:\Batch new\1 -15 websites\mllmlananofab\frontend\`
- Backend: `d:\Batch new\1 -15 websites\mllmlananofab\backend\`
- Documentation: `d:\Batch new\1 -15 websites\mllmlananofab\README.md`
