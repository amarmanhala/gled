import axios from 'axios';
import React, { useEffect, useState } from 'react'
import TransactionCard from './TransactionCard'
import Pagination from './Pagination';

export default function Transactions() {
 const [transactions, setTransactions] = useState([]);
 const [loading, setLoading] = useState(false);
 const [currentPage, setCurrentPage] = useState(1);
 const [transactionsPerPage, setTransactionsPerPage] = useState(8);
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
    <div className="w-full">
     <div className="w-full h-[600px] flex flex-col divide-y overflow-scroll">
      { loading ? (<div>Loading...</div>) : (
        <ul>
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
