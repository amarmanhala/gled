import axios from 'axios';
import React, { useEffect, useState } from 'react'
import TransactionCard from './TransactionCard'
import Pagination from './Pagination';
import {CONSTANTS} from "../CONSTANTS"

export default function Transactions() {
 const [transactions, setTransactions] = useState([]);
 const [loading, setLoading] = useState(false);
 const [currentPage, setCurrentPage] = useState(1);
 const [transactionsPerPage, setTransactionsPerPage] = useState(CONSTANTS.TRANSACTIONS_PER_PAGE);
 const [active, setActive] = useState(1);

 useEffect(() => {
  const fetchTransactions = async () => {
    setLoading(true);
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setTransactions(res.data);
    setLoading(false);
  }
  fetchTransactions();
 }, []);

 //get current transactions
 const indexOfLastTransaction = currentPage * transactionsPerPage;
 const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
 const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

 //Change Page
 const paginate = (pageNumber) => {setCurrentPage(pageNumber)
setActive(pageNumber)

};

  return (
    <div className="w-full pt-6">
     <div className="w-full h-[500px] flex flex-col overflow-hidden">
      { loading ? (<div>Loading...</div>) : (
        <ul className="divide-y dark:divide-borderColorDark">
          { currentTransactions.map(txn => (
            <TransactionCard key={txn.id} title={txn.title}></TransactionCard>
          )) }
        </ul>
      ) }
      
    </div>
    <Pagination transactionsPerPage={transactionsPerPage} totalTransactions={transactions.length} paginate={paginate} active={active}></Pagination>
    </div>
   
  )
}
