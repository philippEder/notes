import { BarItem }  from '../common/BarItem';
import './Bar.css';
import React from 'react';

class Bar extends React.Component {

    isMine(pos, beat) {
        var itemPosition = beat.item.position
        return pos == itemPosition;
    }

    getContent(item) {

        if (item.type === "quaterNote")
            if(item.position < 3) {
                return (<img src={BarItem.quaterNoteDown} className='note'></img>)
            } else {
                return (<img src={BarItem.quaterNoteDown} className='note'></img>)
            }
            

        return <span className='note'>o</span>
    }


    render() {
        console.log(this.props.data.beats);
        return (
            <div id="bar" className="bar">

                {

                    this.props.data.beats.map((beat, idx) => (
            
                        

                        <div className='beat-parent'>
                            <div className="beat-line">{this.isMine(8, beat) ? this.getContent(beat.item) : <span className='note'></span>}</div>
                            <div className="beat-noline">{this.isMine(7, beat) ? this.getContent(beat.item) : <span className='note'></span>}</div>
                            <div className="beat-line">{this.isMine(6, beat) ? this.getContent(beat.item) : <span className='note'></span>}</div>
                            <div className="beat-noline">{this.isMine(5, beat) ? this.getContent(beat.item) : <span className='note'></span>}</div>
                            <div className="beat-line">{this.isMine(4, beat) ? this.getContent(beat.item) : <span className='note'></span>}</div>
                            <div className="beat-noline">{this.isMine(3, beat) ? this.getContent(beat.item) : <span className='note'></span>}</div>
                            <div className="beat-line">{this.isMine(2, beat) ? this.getContent(beat.item) : <span className='note'></span>}</div>
                            <div className="beat-noline">{this.isMine(1, beat) ? this.getContent(beat.item) : <span className='note'></span>}</div>
                            <div className="beat-line">{this.isMine(0, beat) ? this.getContent(beat.item) : <span className='note'></span>}</div>

                        </div>
                    ))

                }

            </div>
        )
    }

}

export default Bar;