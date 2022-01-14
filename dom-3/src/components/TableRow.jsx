import React from 'react';
import TableCell from "./TableCell"

class TableRow extends React.Component {

    render(){

        console.log(this.props.column)
        const display = []
        for (let i=0; i<this.props.column; i++){
            display.push(<TableCell key={i} color={this.props.color} clear ={this.props.clear}/>)
        }

        return  <div className='row'>
                    {display}
                </div>
    }

}

export default TableRow