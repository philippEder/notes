import { BarItem } from '../common/BarItem';
import './Line.css';
import React, { useState } from 'react';

function Line(props) {

    const [type, setType] = useState(props.line.type);

    var isHover = true;
    var previousType = props.line.type;


    const onClick = () => {
        isHover = false;
        setTypeFromTooblox();
    }

    const setTypeFromTooblox = () => {
        var selected = props.selectedToolboxItem;
        setType(selected);
    }

    const getContent = () => {
        var ret;

        switch (type) {
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

    const hover = () => {
        isHover = true;
        previousType = type;
        setTypeFromTooblox();
    }

    const fade = () => {
        if (isHover) {
            setType(previousType);
        }
        isHover = false;
    }


    return (
        <div onClick={onClick} 
             onMouseEnter={hover}
             onMouseLeave={fade} 
             className={getStyle()}>
                
                {getContent()}
                
        </div>
    )



}

export default Line;