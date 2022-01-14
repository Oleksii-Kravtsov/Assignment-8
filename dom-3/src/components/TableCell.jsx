import React from 'react';

class TableCell extends React.Component {

    constructor(props){
        super(props)
        this.state=
            {
                backgroundColor:"",
            }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({backgroundColor:this.props.color})
    }

    render(){
        return  <div style={{backgroundColor: this.state.backgroundColor}} className='box' onClick={this.handleClick}></div>
    }

}

export default TableCell