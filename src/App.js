import React from 'react';
import HeaderComponent from './components/header.component';
import './App.css';
import BalanceComponent from './components/balance.component';
import IncomeExpenseComponent from './components/income-expense.component';
import TransactionListComponent from './components/transaction-list.component';
import AddTransactionComponent from './components/add-transaction.component';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <div className="container">
        <BalanceComponent />
        <IncomeExpenseComponent />
        <TransactionListComponent />
        <AddTransactionComponent />
      </div>
    </div>
  );
}

export default App;
