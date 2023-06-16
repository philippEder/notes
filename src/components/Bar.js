import Notes from '../common/Notes';
import './Bar.css';
import React from 'react';

class Bar extends React.Component {

    notes = this.props.notes


    /*<div class="beatline"> </div>
    <div  class="beat"> </div>
    <div  class="beatline"> </div>
    <div  class="beat">o</div>
    <div  class="beatline"> </div>
    <div  class="beat"> </div>
    <div  class="beatline"> </div>
    <div  class="beat"> </div>
    <div  class="beatline"> </div>

    
                <img src={this.props.clef} className="clef"></img>


                this.props.notes.map(note =>
                        <div className='beat-parent'>
                            <div className="beat-line">{this.isNoteEqual(Notes.f1, note) ? 'o' : ' '}</div>
                            <div className="beat-noline">{this.isNoteEqual(Notes.e1, note) ? 'o' : ' '}</div>
                            <div className="beat-line">{this.isNoteEqual(Notes.d, note) ? 'o' : ' '}</div>
                            <div className="beat-noline">{this.isNoteEqual(Notes.c, note) ? 'o' : ' '}</div>
                            <div className="beat-line">{this.isNoteEqual(Notes.b, note) ? 'o' : ' '}</div>
                            <div className="beat-noline">{this.isNoteEqual(Notes.a, note) ? 'o' : ' '}</div>
                            <div className="beat-line">{this.isNoteEqual(Notes.g, note) ? 'o' : ' '}</div>
                            <div className="beat-noline">{this.isNoteEqual(Notes.f, note) ? 'o' : ' '}</div>
                            <div className="beat-line">{this.isNoteEqual(Notes.e, note) ? 'o' : ' '}</div>
                        </div>
    
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