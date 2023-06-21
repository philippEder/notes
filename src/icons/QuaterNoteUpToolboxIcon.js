import React from "react";
import { useDrag } from 'react-dnd';
import QuaterNoteUpIcon from '../icons/QuaterNoteUpIcon.js';


function QuaterNoteUpToolboxIcon() {

  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: 'toolboxItem',
    collect: (monitor) => ({
      type: "quaterNote",
      isDragging: monitor.isDragging()
    })
  }))

  return (
    <span
      ref={drag}>
      <QuaterNoteUpIcon></QuaterNoteUpIcon>
    </span>

  );
}

export default QuaterNoteUpToolboxIcon;
