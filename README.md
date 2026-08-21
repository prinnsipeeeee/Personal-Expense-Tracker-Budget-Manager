# Personal Expense Tracker & Budget Manager (PWA)

A client-side Progressive Web Application (PWA) built with React, Vite, and Tailwind CSS designed for tracking personal cash flow, managing recurring bills, and monitoring incoming revenues in real-time.

---

## 📌 Executive Summary

This application provides a seamless, offline-first personal budgeting tool. Users can log their daily income and expenses, monitor upcoming bill due dates, toggle payment status ("Mark as Paid"), and observe instant mathematical adjustments to their Net Available Balance and Pending Bill obligations.

---

## 🛠️ Tech Stack & Dependencies

- **Frontend Library:** React (v18+)
- **Build Tool:** Vite (v6+)
- **Styling Engine:** Tailwind CSS (v4)
- **Modal & Notifications:** SweetAlert2 (Custom Dark Theme UI)
- **PWA Integration:** `vite-plugin-pwa`
- **Data Persistence:** Client-side `localStorage`

---

## ✅ Completed Deliverables — Day 1 & Day 2

### 🟢 Day 1: Foundation & Architecture
- [x] Initialized Vite + React project architecture.
- [x] Configured Tailwind CSS v4 and PWA Web App Manifest in `vite.config.js`.
- [x] Built `src/utils/storage.js` data persistence layer.
- [x] Developed `src/components/Header.jsx` with real-time PWA status indicator.
- [x] Implemented `src/components/SummaryCards.jsx` for real-time Balance, Pending Bills, and Expected Income calculations.

### 🟢 Day 2: Form Input, Interactive Ledger & Notifications
- [x] **Transaction Input Form (`TransactionForm.jsx`)**:
  - Segmented Type Selector (💸 Bill vs 💰 Income) with dynamic color states.
  - Context-aware dynamic Category dropdowns (switches available options automatically based on transaction type).
  - Form field validation and success notifications integrated with **SweetAlert2**.
  - Currency-formatted input styling with Philippine Peso (`₱`) prefixing.
- [x] **Transaction Ledger & History (`TransactionList.jsx`)**:
  - Full transaction history ledger displaying type icons, categories, due dates, and formatted amounts.
  - Multi-tab filter control (`All`, `Bills`, `Income`, `Pending`, `Paid`).
  - Interactive status toggle button (`⏳ Mark Paid` $\leftrightarrow$ `✓ Paid`) triggering immediate balance updates.
  - SweetAlert2 delete confirmation modal to prevent accidental data loss.

---

## 📂 Repository Directory Architecture

```text
expense-tracker/
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Application header & PWA indicator
│   │   ├── SummaryCards.jsx     # Real-time financial summary metrics
│   │   ├── TransactionForm.jsx  # Input form with SweetAlert2 & dynamic categories
│   │   └── TransactionList.jsx  # Interactive ledger with filters & status actions
│   ├── utils/
│   │   └── storage.js           # LocalStorage CRUD helper utility
│   ├── App.jsx                  # Root state orchestration container
│   ├── main.jsx                 # Application entry point
│   └── index.css                # Tailwind CSS import directives
├── vite.config.js               # Vite & PWA build configuration
├── package.json
└── README.md                    # Project documentation