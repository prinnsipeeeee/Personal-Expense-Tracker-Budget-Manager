# ₱ Personal Expense Tracker & Budget Manager (PWA)

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![PWA](https://img.shields.io/badge/PWA-Ready-4A90E2?style=flat-square&logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com/)

A modern, responsive, and mobile-first **Progressive Web Application (PWA)** engineered for effortless personal finance management, bill tracking, and income monitoring. Built with React, Vite, Tailwind CSS v4, and persistent client-side storage.

---

## 📌 Executive Summary

**ExpenseTracker PWA** addresses daily budgeting needs by offering a lightweight, zero-latency financial dashboard. It operates completely client-side with offline capability, allowing users to keep track of their net available cash, unpaid bills, and recurring income without relying on an external backend or database server.

---

## ✨ Core Features

- 🟢 **Real-Time Financial Analytics:**
  - **Current Available Balance:** Automatically computed as `(Total Income) - (Paid Bills)`.
  - **Pending Bills:** Real-time tally of all unresolved bill obligations.
  - **Expected Income:** Cumulative total of all logged earnings and payouts.
- 🟢 **Transaction Form & Validation:**
  - Segmented toggle UI for switching between `Bill / Expense` and `Income / Salary`.
  - Context-aware dynamic category selector.
  - SweetAlert2 dark-themed modals for field validation and success notifications.
  - Currency-formatted input field with custom Philippine Peso (`₱`) prefixing.
- 🟢 **Interactive Transaction Ledger:**
  - Multi-tab filter controls (`All`, `Bills`, `Income`, `Pending`, `Paid`).
  - One-tap status toggling (`⏳ Mark Paid` $\leftrightarrow$ `✓ Paid`) with instant balance re-calculation.
  - Inline **✏️ Edit Modal** powered by SweetAlert2 for instant corrections.
  - Delete entry action guarded by a confirmation prompt.
- 🟢 **PWA & Offline Capability:**
  - Full Web App Manifest and Service Worker caching via `vite-plugin-pwa`.
  - Installable directly to Android and iOS home screens as a standalone web application.
  - Persistent data storage utilizing browser `localStorage`.

---

## 💻 Tech Stack & Architecture

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Core** | React 18 | Declarative component structure and reactive state management |
| **Build System** | Vite 6 | Rapid HMR and optimized production asset bundling |
| **Styling** | Tailwind CSS v4 | Utility-first, responsive dark glassmorphism styling |
| **Alerts & Modals** | SweetAlert2 | Production-ready custom modals and toast notifications |
| **PWA Service** | `vite-plugin-pwa` | Web Manifest injection and offline Service Worker precaching |
| **Hosting** | Vercel | HTTPS deployment host for PWA installation support |

---

## 📂 Project Directory Structure

```text
expense-tracker/
├── public/
│   ├── favicon.ico
│   ├── pwa-192x192.png
│   └── pwa-512x512.png
├── src/
│   ├── components/
│   │   ├── Header.jsx           # App navigation & PWA status indicator
│   │   ├── SummaryCards.jsx     # Financial metrics & mathematical logic
│   │   ├── TransactionForm.jsx  # Input form with SweetAlert2 & dynamic categories
│   │   └── TransactionList.jsx  # Interactive ledger with filters, edit, & status actions
│   ├── utils/
│   │   └── storage.js           # LocalStorage CRUD persistence handler
│   ├── App.jsx                  # Root controller & view orchestration
│   ├── main.jsx                 # Application entry point
│   └── index.css                # Tailwind CSS import directive
├── index.html                   # Base HTML document
├── vite.config.js               # Vite & PWA build configuration
├── package.json                 # Node dependencies and scripts
└── README.md                    # Project documentation