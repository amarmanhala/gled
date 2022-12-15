import React from "react";
import Button from "./designSystem/Button";

export default function About() {
  return (
    <div className="h-screen w-screen bg-white dark:bg-surface-dark text-textColor dark:text-white"> <div className="flex flex-col w-[780px] mx-auto my-0 pt-28">
    <div>
      <h1 className="text-4xl font-bold tracking-wide">
        Gled is an app made to help you to keep track of your expenses and
        savings.
      </h1>
    </div>
    <div className="pt-8 text-2xl">
      <p className="pb-4">
        You tell it how much money you earn, along with how much and where you
        spend—and on what—and it tells you how much you have left and more
        over it will tell your future savings .
      </p>
      <p className="pb-4">
        It tells you nice and clearly whether you’re safe, at risk, or
        spending too much.
      </p>
      <p className="pb-4">
        Brills doesn’t connect to any financial institutions, and your data
        never leaves Gled servers.
      </p>
    </div>
    <div className="pt-12">
      <a href="/">
        <Button><span className="text-3xl">🤩</span>&nbsp; Let's explore</Button>
      </a>
    </div>
  </div></div>
   
  );
}
