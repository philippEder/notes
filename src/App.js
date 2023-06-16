import React from 'react';
import './App.css';
import Page from'./components/Page' 
import Toolbox from './components/Toolbox';
import Footer from './components/Footer';

class App extends React.Component {

  componentDidMount() {
    document.title = "noz"
  }


  render() {
    return(
      <div>
        <Toolbox></Toolbox>
        <Page></Page>
        <Footer></Footer>
      </div>
    )
  }
  
}

export default App;




/*

return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

  */

  