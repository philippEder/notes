import { ToolboxItem } from '../common/TooboxItems';
import QuaterNoteUpToolboxIcon from '../icons/QuaterNoteUpToolboxIcon';
import HalfNoteUpIcon from '../icons/HalfNoteUpIcon.js';
import './Toolbox.css';

function Toolbox() {

  return (
    <div id="toolbox" className='toolbox'>
        <QuaterNoteUpToolboxIcon></QuaterNoteUpToolboxIcon>
        <HalfNoteUpIcon></HalfNoteUpIcon>
    </div>
  );


}

export default Toolbox;