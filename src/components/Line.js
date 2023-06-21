import { BarItem } from '../common/BarItem';
import './Beat.css';
import React from 'react';
import { useDrop } from 'react-dnd';

function Line(props) {

    const [collectedProps, drop] = useDrop(() => ({
        accept: "toobloxItem",
        drop(item, monitor) {
            console.log("drop");
        }
      }))


    const getContent = () => {
        var ret;

        switch (props.line.type) {
            case 'quaterNote':
                ret = BarItem.quaterNoteDown; break;
            case 'halfNote':
                ret = BarItem.halfNoteDown; break;
            default:
                ret = <span className='note'></span>;
        }

        return ret;
    }

    const getStyle = () => {

        var styles = "";
        var pos = props.line.position;

        if (pos % 2 == 0) {
            styles += "beat-line ";

            if (pos < 0 || pos > 8) {
                styles += "beat-singleline "
            }

        } else {
            styles += "beat-noline "
        }

        return styles;
    }


    return (
        <div ref={drop} className={getStyle()}>{getContent()}</div>
    )



}

export default Line;