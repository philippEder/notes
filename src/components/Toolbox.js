import { ToolboxItem } from '../common/TooboxItems';
import QuaterNoteUpToolboxIcon from '../icons/QuaterNoteUpToolboxIcon';
import HalfNoteUpToolboxIcon from '../icons/HalfNoteUpToolboxIcon.js';
import './Toolbox.css';
import { useState, useEffect } from 'react';

const Toolbox = ({ onSelectItemHandler }) => {

  const initiallySelected = "none";
  const [selected, setSelected] = useState("none");

  useEffect(() => {
    onSelect(initiallySelected);
  }, [initiallySelected]);

  const onSelect = (type) => {
    var newSelection;
    if (selected === type)
      newSelection = null;
    else
      newSelection = type;

    setSelected(newSelection);
    onSelectItemHandler(newSelection);
  }

  return (
    <div id="toolbox" className='toolbox'>
      <QuaterNoteUpToolboxIcon isSelected={"quaterNote" === selected} onPress={type => onSelect(type)}></QuaterNoteUpToolboxIcon>
      <HalfNoteUpToolboxIcon isSelected={"halfNote" === selected} onPress={type => onSelect(type)}></HalfNoteUpToolboxIcon>
    </div>
  );


}

export default Toolbox;