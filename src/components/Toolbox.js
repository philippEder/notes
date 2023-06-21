import { ToolboxItem } from '../common/TooboxItems';
import QuaterNoteUpToolboxIcon from '../icons/QuaterNoteUpToolboxIcon';
import HalfNoteUpToolboxIcon from '../icons/HalfNoteUpToolboxIcon.js';
import './Toolbox.css';
import { useState } from 'react';

const Toolbox = ({onSelectItemHandler}) => {

  const [selected, setSelected] = useState("quaterNote");
  
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
        <HalfNoteUpToolboxIcon  isSelected={"halfNote" === selected} onPress={type => onSelect(type)}></HalfNoteUpToolboxIcon>
    </div>
  );


}

export default Toolbox;