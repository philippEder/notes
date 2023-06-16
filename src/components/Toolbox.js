import { useDrag } from 'react-dnd';
import { ToolboxItem } from '../common/TooboxItems';
import quaterNote from '../icons/quater-note.svg';
import halfNote from '../icons/half-note.svg';
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
        <img src={quaterNote} ref={drag} id="quaterNote" style={{ opacity: isDragging ? 0.5 : 1}} className="toolboxItem"></img>
        <img src={halfNote} ref={drag} id="halfNote" style={{ opacity: isDragging ? 0.5 : 1}} className="toolboxItem"></img>
    </div>
  );


}

export default Toolbox;