import Notes from '../common/Notes';
import './Bar.css';
import React from 'react';
import { useDrag } from 'react-dnd';

class Bar extends React.Component {

    /*
        <img src={this.props.clef} className="clef"></img>
    */

    noteBelongsHere(note1, note2) {
        var n1 = note1.replace('#', '');
        var n2 = note2.replace('#', '');
        return n1 == n2;
    }

    render() {
        return (
            <div id="bar" className="bar">

                {
                    this.props.notes.map(note =>

                        <div className='beat-parent'>
                            <div className="beat-line">{this.noteBelongsHere(Notes.f1, note) ? <span className='note'>o</span>: <span></span>}</div>
                            <div className="beat-noline">{this.noteBelongsHere(Notes.e1, note) ? <span className='note'>o</span>: <span></span>}</div>
                            <div className="beat-line">{this.noteBelongsHere(Notes.d, note) ? <span className='note'>o</span>: <span></span>}<span></span></div>
                            <div className="beat-noline">{this.noteBelongsHere(Notes.c, note) ? <span className='note'>o</span>: <span></span>}</div>
                            <div className="beat-line">{this.noteBelongsHere(Notes.b, note) ? <span className='note'>o</span>: <span></span>}</div>
                            <div className="beat-noline">{this.noteBelongsHere(Notes.a, note) ? <span className='note'>o</span>: <span></span>}</div>
                            <div className="beat-line">{this.noteBelongsHere(Notes.g, note) ? <span className='note'>o</span>: <span></span>}</div>
                            <div className="beat-noline">{this.noteBelongsHere(Notes.f, note) ? <span className='note'>o</span>: <span></span>}</div>
                            <div className="beat-line">{this.noteBelongsHere(Notes.e, note) ? <span className='note'>o</span>: <span></span>}</div>
                        </div>

                    )

                }

            </div>
        )
    }

}

export default Bar;