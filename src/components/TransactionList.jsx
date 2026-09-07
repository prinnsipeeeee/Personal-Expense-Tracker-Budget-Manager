import React, { useState } from 'react';
import Swal from 'sweetalert2';

export default function TransactionList({ transactions = [], onTogglePaid, onDeleteTransaction }) {
  const [filter, setFilter] = useState('all');

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP',
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const filteredTransactions = transactions.filter((item) => {
    if (filter === 'bill') return item.type === 'bill';
    if (filter === 'income') return item.type === 'income';
    if (filter === 'pending') return item.type === 'bill' && !item.isPaid;
    if (filter === 'paid') return item.type === 'bill' && item.isPaid;
    return true; // 'all'
  });

  const handleDeleteClick = (id, title) => {
    Swal.fire({
      title: 'Are you sure?',
      text: `Are you sure you want to delete "${title}"? This action cannot be undone.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ef4444', 
      cancelButtonColor: '#64748b',
      confirmButtonText: 'Yes, Delete',
      cancelButtonText: 'Cancel',
      background: '#1e293b',
      color: '#f8fafc',
    }).then((result) => {
      if (result.isConfirmed) {
        onDeleteTransaction(id);
        Swal.fire({
          icon: 'success',
          title: 'Transaction Deleted Successfully',
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
          background: '#1e293b',
          color: '#f8fafc',
        });
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-6 mb-12">
      <div className="bg-slate-800/90 border border-slate-700/80 p-6 rounded-2xl shadow-2xl backdrop-blur-sm">
        
        {/* Header & Filter Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-700/60">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-400"></span>
              Transaction History & Ledger
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Showing {filteredTransactions.length} of {transactions.length} total entries
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap bg-slate-900/80 p-1 rounded-xl border border-slate-700/60">
            {[
              { id: 'all', label: 'All' },
              { id: 'bill', label: '💸 Bills' },
              { id: 'income', label: '💰 Income' },
              { id: 'pending', label: '⏳ Pending' },
              { id: 'paid', label: '✅ Paid' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-slate-700 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredTransactions.length === 0 ? (
          <div className="text-center py-12 text-slate-500">
            <p className="text-sm font-medium">Walang Transaction Oma ko, Hinahanap mo jan.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredTransactions.map((item) => {
              const isBill = item.type === 'bill';

              return (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-slate-900/70 border border-slate-700/50 hover:border-slate-600 transition-all gap-4"
                >
                  {/* Left: Icon, Title & Details */}
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg border ${
                        isBill
                          ? 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                          : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                      }`}
                    >
                      {isBill ? '💸' : '💰'}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-white text-sm">{item.title}</h4>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {isBill ? 'Due:' : 'Date:'} {item.dueDate}
                      </p>
                    </div>
                  </div>

                  {/* Right: Amount, Status Toggle & Delete */}
                  <div className="flex items-center justify-between sm:justify-end gap-4 border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-800">
                    <div className="text-right">
                      <p
                        className={`font-extrabold text-base ${
                          isBill ? 'text-rose-400' : 'text-emerald-400'
                        }`}
                      >
                        {isBill ? '-' : '+'}{formatCurrency(item.amount)}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      {isBill && (
                        <button
                          onClick={() => onTogglePaid(item.id)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer border ${
                            item.isPaid
                              ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/30'
                              : 'bg-amber-500/20 text-amber-400 border-amber-500/30 hover:bg-amber-500/30'
                          }`}
                        >
                          {item.isPaid ? '✓ Paid' : '⏳ Mark Paid'}
                        </button>
                      )}

                      {/* Delete Button */}
                      <button
                        onClick={() => handleDeleteClick(item.id, item.title)}
                        className="p-1.5 text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors cursor-pointer"
                        title="Delete Transaction"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}