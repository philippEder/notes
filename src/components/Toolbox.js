import './Toolbox.css';

function Toolbox() {


  return (
    <div id="toolbox">
        <div id="fullNote" draggable="true" ondragstart="dragToolboxItem(event)" class="toolboxItem">o</div>
    </div>
  );


}

export default Toolbox;