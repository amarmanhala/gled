import React from "react";
import Card from "./Card";
import Header from "./Header";
import Search from "./Search";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <>
    <Header></Header>
    <div className="min-h-screen flex flex-col w-[680px] my-4 mx-auto">
    <Card></Card>
    
    </div>
    </>
    
  );
}
