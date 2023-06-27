import './Beat.css';
import Line from './Line';
import uuid from 'react-uuid';
import React, { memo, useState, useEffect } from 'react';

const Beat = ({addNoteCallback, items}) => {


    const [lines, setLines] = useState([]);

    useEffect(() => {
        var positions = items.map(item => item.position);
        var min = Math.min(...positions) < 0 ? Math.min(...positions) : 0;
        var max = Math.max(...positions) > 8 ? Math.max(...positions) : 8;
        var linesarr = [];

        for (var i = min; i <= max; i++) {
            linesarr.push({
                position: i,
                type: findItemByPosition(items, i)?.[0]?.type
            });
        }

        setLines(linesarr.reverse());
    }, [items]);

    const findItemByPosition = (items, position) => {
        return items.filter(item => item.position == position)
    }


    return (
        <div className='beat-parent'>
            {
                lines.map(line => <Line key={uuid()} position={line.position} type={line.type} addNoteCallback={addNoteCallback}></Line>)
            }
        </div>
    )

}

export default memo(Beat);