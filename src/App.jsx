import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SummaryCards from './components/SummaryCards';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import { getStoredTransactions, saveStoredTransactions } from './utils/storage';

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const loadedData = getStoredTransactions();
    setTransactions(loadedData);
  }, []);

  const handleAddTransaction = (newTransaction) => {
    const updatedList = [newTransaction, ...transactions];
    setTransactions(updatedList);
    saveStoredTransactions(updatedList);
  };

  const handleTogglePaid = (id) => {
    const updatedList = transactions.map((item) => {
      if (item.id === id) {
        return { ...item, isPaid: !item.isPaid };
      }
      return item;
    });
    setTransactions(updatedList);
    saveStoredTransactions(updatedList);
  };
  
  const handleDeleteTransaction = (id) => {
    const updatedList = transactions.filter((item) => item.id !== id);
    setTransactions(updatedList);
    saveStoredTransactions(updatedList);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans pb-12">
      <Header />
      <SummaryCards transactions={transactions} />
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <TransactionList 
        transactions={transactions}
        onTogglePaid={handleTogglePaid}
        onDeleteTransaction={handleDeleteTransaction}
      />
    </div>
  );
}

export default App;