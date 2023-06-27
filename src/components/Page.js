import Bar from './Bar';
import './Page.css';
import faceTestdata from '../testdata/example1.json'
import React, {memo, useState } from 'react';
import uuid from 'react-uuid';

function Page(props) {

  const [page, setPage] = useState(faceTestdata);

  function addNote(barId, position) {

    var newPage = JSON.parse(JSON.stringify(page));

    newPage.bars[1].beats[1].items.push({
      "position": position,
      "type": props.selectedToolboxItem
    });



    setPage(newPage);
  }




  return (

    <div className="page">

      <h1>{faceTestdata.title}</h1>

      <div>
        {
          page.bars.map(bar =>
            <Bar key={uuid()} addNoteCallback={addNote} beats={bar.beats}></Bar>
          )
        }
      </div>


    </div>



  )

}

export default memo(Page);