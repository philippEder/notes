import Bar from './Bar';
import './Page.css';
import faceTestdata from '../testdata/example1.json'
import React, { memo } from 'react';
import uuid from 'react-uuid';
import DownloadIcon from '../icons/DownloadIcon';
import UploadIcon from '../icons/UploadIcon';

function Page(props) {

  var page = faceTestdata;

  const exportPage = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(page)
    )}`;

    const link = document.createElement("a");
    link.href = jsonString;
    link.download = page.title + ".json";

    link.click();
  };

  const importPage = () => {
    //TODO
  };


  const addNote = (barIdx, beatIdx, position) => {

    var newPage = JSON.parse(JSON.stringify(page));
    newPage.bars[barIdx].beats[beatIdx].items.push({
      "position": position,
      "type": props.selectedToolboxItem
    });

    page = newPage;
  }



  return (

    <div className="page">

      <div className='button-group'>

        <button className='button' type="button" onClick={exportPage}>
          <DownloadIcon></DownloadIcon>
        </button>

        <button className='button' type="button" onClick={importPage}>
          <UploadIcon></UploadIcon>
        </button>

      </div>

      <h1>{faceTestdata.title}</h1>


      {
        page.bars.map((bar, idx) =>
          <Bar key={uuid()} addNoteCallback={addNote} idx={idx} beats={bar.beats}></Bar>
        )
      }


    </div>



  )

}

export default memo(Page);