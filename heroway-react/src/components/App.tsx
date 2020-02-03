import React from 'react';
import logo from './logo.svg';
import './App.css';
// import HelloWorld from './HelloWorld';
// import Counter from './Counter'
import StyledButton from './home-work/button'
import BankAccount from './home-work/bankAccount'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         
        <StyledButton backgroundColor ={"red"} text = {"Clique aqui ... "} />
        <BankAccount initialValue = {20}/>
      </header>
    </div>
  );
}

export default App;
