import React from "react";
import HalfNoteUpIcon from '../icons/HalfNoteUpIcon.js';


const HalfNoteUpToolboxIcon = ({isSelected, onPress}) => {

    const type = "halfNote"

    return (
        <div className={isSelected ? 'selected' : null} onClick={() => onPress(type)}>
            <HalfNoteUpIcon></HalfNoteUpIcon>
        </div>

    );
}

export default HalfNoteUpToolboxIcon;
