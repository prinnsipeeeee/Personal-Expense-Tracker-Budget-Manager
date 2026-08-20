import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SummaryCards from './components/SummaryCards';
import { getStoredTransactions } from './utils/storage';

function App() {
  // State para sa ating listahan ng transactions
  const [transactions, setTransactions] = useState([]);

  // Kapag nag-load ang App, kunin ang data mula sa localStorage
  useEffect(() => {
    const loadedData = getStoredTransactions();
    setTransactions(loadedData);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans pb-12">
      <Header />
      <SummaryCards transactions={transactions} />
    </div>
  );
}

export default App;