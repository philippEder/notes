import { useDrag } from 'react-dnd';
import { ToolboxItem } from '../common/TooboxItems';
import QuaterNoteUpIcon from '../icons/QuaterNoteUpIcon';
import HalfNoteUpIcon from '../icons/HalfNoteUpIcon.js';
import './Toolbox.css';

function Toolbox() {



  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'ToolboxItem',
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }))

  return (
    <div id="toolbox" className='toolbox'>
        <QuaterNoteUpIcon></QuaterNoteUpIcon>
        <HalfNoteUpIcon></HalfNoteUpIcon>
    </div>
  );


}

export default Toolbox;