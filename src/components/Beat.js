import { BarItem } from '../common/BarItem';
import './Beat.css';
import Line from './Line';
import React from 'react';

class Beat extends React.Component {

    constructor(props) {
        super(props);
        var positions = props.items.map(item => item.position);
        var min = Math.min(...positions) < 0 ? Math.min(...positions) : 0;
        var max =  Math.max(...positions) > 8 ? Math.max(...positions) : 8;
        var lines = [];

        for (var i = min; i <= max; i++) {
            lines.push({
                position: i,
                type: this.findItemByPosition(props.items, i)?.[0]?.type
            });
        }

        this.state = {
            lines: lines.reverse(),
        }
    }

    findItemByPosition = (items, position) => {
        return items.filter(item => item.position == position)
    }

    findLineByPosition = (lines, position) => {
        return lines.filter(line => line.position == position)
    }

    addItem = (position, type) => {
        var lines = this.state.lines
        var lineIndex = lines.findIndex(line => line.position == position);
        lines[lineIndex].type = type;

        this.setState({
            lines: lines
        })

    }

    render() {
        return (

        


            <div className='beat-parent'>
                {
                    this.state.lines.map(line => <Line line={line} addItemHandler={this.addItem}></Line>)
                } 


            </div>

        )

    }

}

export default Beat;