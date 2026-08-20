import React from "react";

export default function SummaryCards({transactions = [] }) {

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-PH' , {
            style: 'currency',
            currency: 'PHP',
            minimumFractionDigits: 2,
        }).format(amount);
    };

    const totalIncome = transactions
        .filter((t) => t.type === 'income')
        .reduce((sum, item) => sum + Number(item.amount), 0);

    const totalPaidBills = transactions
        .filter((t) => t.type === 'bill' && t.isPaid === true)
        .reduce((sum, item) => sum + Number(item.amount), 0);

    const pendingBills = transactions
        .filter((t) => t.type === 'bill' && t.isPaid === false)
        .reduce((sum, item) => sum + Number(item.amount), 0);

    const currentBalance = totalIncome - totalPaidBills;
    
    return(
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            
            {/* CARD 1 */}
            <div className="bg-slate-800/80 borde border-slate-700/70 p-6 rounded-2xl shadow-lg relative overflow-hidden">
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl pointer-events-none"></div>
                <p className="text-sm font-medium text-slate-400 mb-1">Current Balance</p>
                <h2 className="text-3xl font-extrabold text-emerald-400">
                    {formatCurrency(currentBalance)}
                </h2>
                <p className="text-xs text-slate-400 mt-2">
                    Total Income ({formatCurrency(totalIncome)}) minus Paid Bilss
                </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-slate-800/90 border border-slate-700/70 p-6 rounded-2xl shadow-lg realative overflow-hidden">
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-rose-500/10 rounded-full blur-xl pointer-events-none"></div>
                <p className="text-sm font-medium text-slate-400 mb-1">Pending Bills</p>
                <h2 className="text-3xl font-extrabold text-rose -400">
                    {formatCurrency(pendingBills)}
                </h2>
                <p className="text-xs text-slate-400 mt-2">
                    Unpaid Bills needing attention
                </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-slate-800/80 border border-slate-700/70 p-6 rounded-2xl shadow-lg relative overflow-hidden">
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none"></div>
                <p className="text-sm font-medium text-slate-400 mb-1">Expected Income</p>
                <h2 className="text-3xl font-extrabold text-blue-400">
                    {formatCurrency(totalIncome)}
                </h2>
                <p className="text-xs text-slate-400 mt-2">
                    Total recorded earings & payouts
                </p>
            </div>
        </div>
    );
}