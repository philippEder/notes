import { useDrag } from 'react-dnd';
import { ToolboxItem } from '../common/TooboxItems';
import quaterNote from '../icons/quater-note-up.svg';
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
        <img src={quaterNote} ref={drag} id="quaterNote" style={{ opacity: isDragging ? 0.5 : 1}}></img>
    </div>
  );


}

export default Toolbox;