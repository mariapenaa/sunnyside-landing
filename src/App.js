import React from 'react'
import './App.scss';
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <div className="App" id="top">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
