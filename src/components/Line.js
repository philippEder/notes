import { BarItem } from '../common/BarItem';
import './Line.css';
import { useState, memo } from 'react';

function Line({type, position, addNoteCallback}) {

    const onClick = () => {
        addNoteCallback(1, position);

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

        if (position % 2 == 0) {
            styles += "beat-line ";

            if (position < 0 || position > 8) {
                styles += "beat-singleline "
            }

        } else {
            styles += "beat-noline "
        }

        return styles;
    }


    return (
        <div onClick={onClick}  
             className={getStyle()}>
                
                {getContent()}
                
        </div>
    )



}

export default memo(Line);