import React from "react";

export default function Header() {

    return(
        <header className="bg-slate-800 border-b border-slate-700 py-7 px-6 mb-8 shadow-lg">
            <div className="max-w-6xl mx-auto flex- items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-extrabold text-xl border border-emerald-500/30">
                        ₱
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-white tracking-wide">
                            MoneyMap<span className="text-emerald-400"></span>
                        </h1>
                        <p className="text-xs text-slate-400">Personal Finance Tracker</p>
                    </div>
                </div>

                <div className="hidden sm:flex items-center gap-2 bg-slate-900/60 px-3 py-1.5 rounded-full border border-slate-700/50">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-xs font-medium text-slate-300">PWA Ready & Offline Supported</span>
                </div>
            </div>
        </header>
    );
}