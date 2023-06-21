import './Beat.css';
import Line from './Line';
import React, { useState, useEffect } from 'react';

const Beat = ({selectedToolboxItem, items}) => {


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

    const addItem = (position, type) => {
        var lineIndex = lines.findIndex(line => line.position == position);
        lines[lineIndex].type = type;

        setLines(lines);

    }

    return (
        <div className='beat-parent'>
            {
                lines.map(line => <Line line={line} selectedToolboxItem={selectedToolboxItem} addItemHandler={addItem}></Line>)
            }
        </div>
    )

}

export default Beat;