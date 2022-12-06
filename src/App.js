import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';

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
    <Layout />
    </div>
  );
}

export default App;
