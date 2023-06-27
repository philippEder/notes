import './Bar.css';
import Beat from './Beat.js';
import uuid from 'react-uuid';

function Bar({beats, addNoteCallback}) {

    return (
        <div id="bar" className="bar">

            {
                beats.map(beat =>
                    <Beat key={uuid()} addNoteCallback={addNoteCallback} items={beat.items}></Beat>
                )
            }

        </div>
    )

}

export default Bar;