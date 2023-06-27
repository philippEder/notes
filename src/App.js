import React from 'react';
import './App.css';
import Page from './components/Page';
import Toolbox from './components/Toolbox';
import Footer from './components/Footer';
import { DndProvider } from 'react-dnd';
import { useState, useEffect } from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {

  var selectedToolboxItem = "quaterNote";

  useEffect(() => {
    document.title = 'noz';
  }, []);

  const selectToolboxItem = (item) => {
    selectedToolboxItem = item;
  }


  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <Toolbox onSelectItemHandler={selectToolboxItem}></Toolbox>
        <Page selectedToolboxItem={selectedToolboxItem}></Page>
        <Footer></Footer>
      </div>
    </DndProvider>
  )


}

export default App;

