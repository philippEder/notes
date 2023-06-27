import './Bar.css';
import Beat from './Beat.js';
import uuid from 'react-uuid';
import React, { memo } from 'react';

function Bar({idx, beats, addNoteCallback}) {

    const addNote = (beatIdx, position) => addNoteCallback(idx, beatIdx, position);

    return (
        <div id="bar" className="bar">

            {
                beats.map((beat, idx) =>
                    <Beat key={uuid()} idx={idx} addNoteCallback={addNote} items={beat.items}></Beat>
                )
            }

        </div>
    )

}

export default memo(Bar);