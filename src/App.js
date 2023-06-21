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

