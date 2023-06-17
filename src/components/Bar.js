import { BarItem } from '../common/BarItem';
import './Bar.css';
import React from 'react';

class Bar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bar: props.data
        }
    }

    test = () => {
        var newBar = this.state.bar;



        this.setState({bar: newBar})
           
    
    }
        
    isMine(pos, beat) {
        return beat.items.some(item => pos == item.position)
    }

    getContent(pos, items) {
        var ret = <span className='note'>o</span>;
        items.forEach(item => {
            if (item.position == pos) {
                switch (item.type) {
                    case 'quaterNote':
                        ret =  BarItem.quaterNoteDown; break;
                    case 'halfNote':
                        ret =  BarItem.halfNoteDown; break;
                    default:
                        ret =  BarItem.halfNoteDown;
                }
            }
        });

        return ret;
    }

    render() {
        return (
            <div id="bar" className="bar" onClick={this.test}>

                {

                    this.state.bar.beats.map(beat => (

                        <div className='beat-parent'>


                            <div className="beat-line">{this.isMine(8, beat) ? this.getContent(8, beat.items) : <span className='note'></span>}</div>
                            <div className="beat-noline">{this.isMine(7, beat) ? this.getContent(7, beat.items) : <span className='note'></span>}</div>
                            <div className="beat-line">{this.isMine(6, beat) ? this.getContent(6, beat.items) : <span className='note'></span>}</div>
                            <div className="beat-noline">{this.isMine(5, beat) ? this.getContent(5, beat.items) : <span className='note'></span>}</div>
                            <div className="beat-line">{this.isMine(4, beat) ? this.getContent(4, beat.items) : <span className='note'></span>}</div>
                            <div className="beat-noline">{this.isMine(3, beat) ? this.getContent(3, beat.items) : <span className='note'></span>}</div>
                            <div className="beat-line">{this.isMine(2, beat) ? this.getContent(2, beat.items) : <span className='note'></span>}</div>
                            <div className="beat-noline">{this.isMine(1, beat) ? this.getContent(1, beat.items) : <span className='note'></span>}</div>
                            <div className="beat-line">{this.isMine(0, beat) ? this.getContent(0, beat.items) : <span className='note'></span>}</div>


                            
                            <div className="beat-noline">{this.isMine(-1, beat) ? this.getContent(-1, beat.items) : <span className='note'></span>}</div>
                            <div className={this.isMine(-2, beat) ? "beat-singleline beat-noline" : "beat-noline"}>{this.isMine(-2, beat) ? this.getContent(-2, beat.items) : <span className='note'></span>}</div>
                        </div>
                    ))

                }

            </div>
        )
    }

}

export default Bar;