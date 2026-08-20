# Personal Expense Tracker & Budget Manager (PWA)

A Progressive Web Application (PWA) built with React, Vite, and Tailwind CSS designed for tracking personal cash flow, upcoming bills, and expected income.

---

## 📌 Executive Summary

This project provides an offline-capable budget tracking solution directly within the browser. It allows users to monitor their available cash balance, view pending bill obligations, and manage incoming income sources without requiring a backend server.

---

## 🛠️ Tech Stack & Dependencies

- **Frontend Library:** React (v18+)
- **Build Tool:** Vite
- **Styling:** Tailwind CSS (v4)
- **PWA Integration:** `vite-plugin-pwa`
- **Data Persistence:** Client-side `localStorage`

---

## ✅ Completed Deliverables — Day 1

### 1. Environment & Build Configuration
- Initialized React project setup powered by Vite.
- Integrated Tailwind CSS (v4) for utility-first responsive layout design.
- Configured Web App Manifest and Service Worker registration via `vite-plugin-pwa` in `vite.config.js`.

### 2. Data Persistence Layer (`src/utils/storage.js`)
- Created helper utility functions (`getStoredTransactions`, `saveStoredTransactions`).
- Configured default mock data structures to initialize dashboard metrics upon first load.

### 3. Application Layout & Header Component (`src/components/Header.jsx`)
- Built a responsive navigation header featuring the application identity.
- Added a visual status indicator badge confirming PWA and offline readiness.

### 4. Financial Summary Metrics (`src/components/SummaryCards.jsx`)
- Developed dynamic financial computation cards:
  - **Current Available Balance:** `Total Income - Total Paid Bills`
  - **Pending Bills:** Sum of unpaid bills (`isPaid === false`).
  - **Expected Income:** Sum of all recorded income entries (`type === 'income'`).
- Integrated `Intl.NumberFormat` for currency values formatted in Philippine Peso (`PHP ₱`).

---

## 📂 Current Repository Structure

```text
expense-tracker/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Top navigation & PWA status indicator
│   │   └── SummaryCards.jsx    # Real-time financial summary metrics
│   ├── utils/
│   │   └── storage.js          # LocalStorage data handler functions
│   ├── App.jsx                 # Main application controller & state container
│   ├── main.jsx                # Application root entry point
│   └── index.css               # Tailwind CSS entry directive
├── vite.config.js              # Vite & PWA build configuration
├── package.json
└── README.md                   # Project documentation