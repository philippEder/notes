import { BarItem } from '../common/BarItem';
import './Bar.css';

import Beat from './Beat.js';
import React from 'react';

class Bar extends React.Component {

    render() {
        return (
            <div id="bar" className="bar">

                {

                    this.props.data.beats.map(beat => 
                        <Beat items={beat.items}></Beat>
                    )

                }

            </div>
        )
    }

}

export default Bar;