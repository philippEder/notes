import './Bar.css';
import Beat from './Beat.js';

function Bar(props) {

    return (
        <div id="bar" className="bar">

            {
                props.data.beats.map(beat =>
                    <Beat selectedToolboxItem={props.selectedToolboxItem} items={beat.items}></Beat>
                )
            }

        </div>
    )

}

export default Bar;