import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {

    // 👇️ adding multiple classes to body tag
    document.body.classList.add(
      'dark:bg-surface-dark',
      'bg-surface-light',
      'overflow-hidden',
    );

    // 👇️ removing classes from body element
   // document.body.classList.remove('my-class-3');
  }, []);
  return (
    <div className="App">
      <div className="grid gap-1 grid-cols-4 lg:grid-cols-12 h-screen">
        <div className="col-span-4 m-4 grid">
          <div className="grid w-full h-full dark:bg-surface-secondary-dark bg-surface-secondary-light rounded-xl">
          hi sidebar
          </div>
        </div>
        <div className="col-span-8 m-4 hidden lg:grid rounded-2xl">01</div>
      </div>
    </div>
  );
}

export default App;
