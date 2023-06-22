import './Bar.css';
import Beat from './Beat.js';
import uuid from 'react-uuid';

function Bar(props) {

    return (
        <div id="bar" className="bar">

            {
                props.data.beats.map(beat =>
                    <Beat key={uuid()} selectedToolboxItem={props.selectedToolboxItem} items={beat.items}></Beat>
                )
            }

        </div>
    )

}

export default Bar;