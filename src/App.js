import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

class App extends React.Component{
  render(){
  return (
    <>
      <h1>hi there</h1>
        <Header />
       <Main />
       <Footer /> 
    </>
    
  );
}
}

export default App;
