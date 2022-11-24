import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
     <Header />
      <div className="flex-1 flex flex-row mx-6">
        <div className="order-first w-full lg:w-1/4"><Sidebar /></div>
        <main className="flex-1 hidden lg:grid">01</main>
      </div>
     <footer className="">Footer</footer>
    </div>
  );
}
