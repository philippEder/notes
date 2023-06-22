import Bar from './Bar';
import './Page.css';
import faceTestdata from '../testdata/example1.json'
import React from 'react';
import uuid from 'react-uuid';

function Page(props) {

  return (

    <div className="page">

      <h1>{faceTestdata.title}</h1>

      <div>
        {
          faceTestdata.bars.map(bar =>
            <Bar key={uuid()} selectedToolboxItem={props.selectedToolboxItem} data={bar}></Bar>
          )
        }
      </div>


    </div>



  )

}

export default Page;