import React from "react";
import BalanceCard from "./BalanceCard";
import Card from "./Card";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Transactions from "./Transactions";

export default function Layout() {
  return (
    <>
    <div className="grid-container">
        <div className="header">
          <Header></Header>
        </div>
        <div className="sidebar h-full">
          <Sidebar></Sidebar>
        </div>
        <div className="main h-full">
          <Main></Main>
        </div>
        <div className="bg-sky-600 footer h-12">
          <Footer></Footer>
        </div>
    </div>
    </>
    
  );
}
