import React from 'react';
import './App.css';
import Page from './components/Page'
import Toolbox from './components/Toolbox';
import Footer from './components/Footer';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

class App extends React.Component {

  componentDidMount() {
    document.title = "noz"
  }


  render() {
    return (
      <DndProvider backend={HTML5Backend}>
        <div>
          <Toolbox></Toolbox>
          <Page></Page>
          <Footer></Footer>
        </div>
      </DndProvider>
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

