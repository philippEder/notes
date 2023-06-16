import Bar from './Bar';
import './Page.css';
import Notes from '../common/Notes'
import clef from '../icons/violin-clef.png'
import faceTestdata from '../testdata/example1.json'
import React from 'react';

class Page extends React.Component {




  render() {
    return (

      <div className="page">

        <h1>{faceTestdata.title}</h1>

        {
        faceTestdata.bars.map(bar =>
            <Bar data={bar}></Bar>
          )
         }
      </div>



    )
  }

}

export default Page;