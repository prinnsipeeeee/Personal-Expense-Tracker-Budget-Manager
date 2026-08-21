import React, { useState } from 'react';
import Swal from 'sweetalert2';

// 1. Dynamic Categories list
const BILL_CATEGORIES = [
  'Utilities (Electricity, Water, Net)',
  'Rent & Housing',
  'Food & Groceries',
  'Subscriptions (Netflix, Spotify)',
  'Credit Card & Loans',
  'Personal & Others',
];

const INCOME_CATEGORIES = [
  'Salary & Job Pay',
  'Freelance & Side Hustle',
  'Business Income',
  'Investments & Dividends',
  'Gifts & Allowances',
  'Savings Payout',
  'Other Income',
];

export default function TransactionForm({ onAddTransaction }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('bill'); // 'bill' o 'income'
  const [category, setCategory] = useState(BILL_CATEGORIES[0]); // Default bill category
  const [dueDate, setDueDate] = useState('');
  const [isPaid, setIsPaid] = useState(false);

  // 2. Handler kapag pinindot ang Bill o Income toggle
  const handleTypeChange = (newType) => {
    setType(newType);
    // Automatic selection ng unang angkop na category batay sa Type
    if (newType === 'income') {
      setCategory(INCOME_CATEGORIES[0]);
    } else {
      setCategory(BILL_CATEGORIES[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount || !dueDate) {
      Swal.fire({
        title: 'Kulang sa Impormasyon!',
        text: 'Mangyaring punan ang Title, Amount, at Date bago magpatuloy.',
        icon: 'warning',
        confirmButtonText: 'Naintindihan',
        confirmButtonColor: '#10b981',
        background: '#1e293b',
        color: '#f8fafc',
      });
      return;
    }

    const newTransaction = {
      id: Date.now().toString(),
      title,
      amount: parseFloat(amount),
      type,
      category,
      dueDate,
      isPaid: type === 'bill' ? isPaid : true,
    };

    onAddTransaction(newTransaction);

    Swal.fire({
      icon: 'success',
      title: 'Naidagdag na!',
      text: `${type === 'bill' ? 'Bill' : 'Income'} entry recorded successfully.`,
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      background: '#1e293b',
      color: '#f8fafc',
    });

    // Reset Form
    setTitle('');
    setAmount('');
    setDueDate('');
    setIsPaid(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 mb-8">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800/90 border border-slate-700/80 p-6 rounded-2xl shadow-2xl backdrop-blur-sm"
      >
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-700/60">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
            Add New Transaction
          </h3>

          {/* Segmented Type Toggle (Bill vs Income UI) */}
          <div className="flex bg-slate-900/80 p-1 rounded-xl border border-slate-700/60 w-fit">
            <button
              type="button"
              onClick={() => handleTypeChange('bill')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                type === 'bill'
                  ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              💸 Bill / Expense
            </button>
            <button
              type="button"
              onClick={() => handleTypeChange('income')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                type === 'income'
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              💰 Income / Salary
            </button>
          </div>
        </div>

        {/* Inputs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {/* Input 1: Title */}
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
              Title & Description
            </label>
            <input
              type="text"
              placeholder={type === 'bill' ? 'e.g. Meralco, Rent, Netflix' : 'e.g. Monthly Salary, Upwork Payout'}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
            />
          </div>

          {/* Input 2: Amount */}
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
              Amount (PHP)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">
                ₱
              </span>
              <input
                type="number"
                step="0.01"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-slate-900/90 border border-slate-700 rounded-xl pl-8 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
              />
            </div>
          </div>

          {/* Input 3: Dynamic Category Select */}
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all cursor-pointer"
            >
              {/* Dynamic options batay sa Type */}
              {(type === 'bill' ? BILL_CATEGORIES : INCOME_CATEGORIES).map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Footer Row: Date, Checkbox, and Submit Button */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-slate-700/60">
          <div className="flex flex-wrap items-center gap-6">
            {/* Input 4: Date */}
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1 uppercase tracking-wider">
                {type === 'bill' ? 'Due Date' : 'Target / Received Date'}
              </label>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all cursor-pointer"
              />
            </div>

            {/* Paid Checkbox (Lumalabas lang kung Bill) */}
            {type === 'bill' && (
              <div className="flex items-center gap-2.5 mt-4 sm:mt-5 bg-slate-900/50 px-3 py-1.5 rounded-xl border border-slate-700/50">
                <input
                  type="checkbox"
                  id="isPaid"
                  checked={isPaid}
                  onChange={(e) => setIsPaid(e.target.checked)}
                  className="w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-slate-800 cursor-pointer"
                />
                <label htmlFor="isPaid" className="text-xs text-slate-300 font-medium cursor-pointer select-none">
                  Already Paid?
                </label>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-7 py-2.5 rounded-xl shadow-lg shadow-emerald-500/20 transition-all active:scale-95 cursor-pointer hover:shadow-emerald-500/30"
          >
            + Add Transaction
          </button>
        </div>
      </form>
    </div>
  );
}