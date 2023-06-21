import React from "react";
import QuaterNoteUpIcon from '../icons/QuaterNoteUpIcon.js';


const QuaterNoteUpToolboxIcon = ({isSelected, onPress}) => {

  const type = "quaterNote"

  return (
    <div className={isSelected ? 'selected' : null} onClick={() => onPress(type)}>
      <QuaterNoteUpIcon></QuaterNoteUpIcon>
    </div>

  );
}

export default QuaterNoteUpToolboxIcon;
