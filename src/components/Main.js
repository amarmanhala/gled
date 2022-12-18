import React, {useState} from 'react'
import AddTransaction from './AddTransaction';
import Button from './designSystem/Button';

export default function Main() {
  const [addTransactionForm, setAddTransactionForm] = useState(false);
  return (
    <main className="bg-white dark:bg-surface-dark border-l border-borderColor dark:border-borderColorDark h-full flex items-center justify-center bg-slate-50">
      {addTransactionForm && <AddTransaction onClick={() => setAddTransactionForm(!addTransactionForm)}></AddTransaction>}
      {!addTransactionForm && (
        <div>
      <h1 className="text-2xl font-semibold pb-6 text-textColor">Did you spend anything today?</h1>
      <Button onClick={() => setAddTransactionForm(!addTransactionForm)}>+ Add Transaction</Button>
      </div>
      )}
      
     
    </main>
  )
}
