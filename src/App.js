import React from 'react';
import HeaderComponent from './components/header.component';
import './App.css';
import BalanceComponent from './components/balance.component';
import IncomeExpenseComponent from './components/income-expense.component';
import TransactionListComponent from './components/transaction-list.component';
import AddTransactionComponent from './components/add-transaction.component';
import { GlobalProvider } from './context/globalState';

function App() {
  return (
    <GlobalProvider>
      <HeaderComponent />
      <div className="container">
        <BalanceComponent />
        <IncomeExpenseComponent />
        <TransactionListComponent />
        <AddTransactionComponent />
      </div>
    </GlobalProvider>

  );
}

export default App;
