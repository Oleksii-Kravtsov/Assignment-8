import React from 'react';
import TableRow from "./TableRow"

class Table extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          column:0,
          row:0,
          color:""
        };
        this.changeRow = this.changeRow.bind(this)
        this.changeColumn = this.changeColumn.bind(this)
        this.changeColor = this.changeColor.bind(this)
        this.clearAll = this.clearAll.bind(this)
        this.FillAll = this.FillAll.bind(this)
        this.FillEmpty = this.FillEmpty.bind(this)
      }
    
      changeColor(color){
        this.setState({...this.state, color:color})
      }
    
      changeRow(count){
          if (this.state.row===0 && this.state.column===0 && count>0){
            this.setState({column:1, row:1})
          }else if (this.state.row+count>0){
            this.setState({...this.state, row:this.state.row+count})
          } else{
            this.setState({column:0, row:0})
          }
      }
    
      changeColumn(count){
          if (this.state.row===0 && this.state.column===0 && count>0){
            this.setState({column:1, row:1})
          }else if (this.state.column+count>0){
            this.setState({...this.state, column:this.state.column+count})
          } else{
            this.setState({column:0, row:0})
          }
      }

    clearAll() {
        const boxes = document.getElementsByClassName("box")   
        for (let box of boxes){
            box.style.backgroundColor = ""
        }
    }
    
    FillAll(){
        const boxes = document.getElementsByClassName("box")   
        for (let box of boxes){
            if (!box.style.backgroundColor || box.style.backgroundColor.value!=this.state.color){
                box.style.backgroundColor = this.state.color
            }
        }
    }

    FillEmpty(){
        const boxes = document.getElementsByClassName("box")   
        for (let box of boxes){
            if (!box.style.backgroundColor){
                box.style.backgroundColor = this.state.color
            }
        }
    }

    render(){

        const row = []
        for (let i=0; i<this.state.row;i++){
            row.push(<TableRow key={i} column={this.state.column} color={this.state.color}  clear ={this.state.clear}/>)
        }

        return  <main>
                    <div className="controls">
                        <button className="control" onClick={()=>this.changeRow(+1)} >Add Row</button>
                        <button className="control"onClick={()=>this.changeRow(+10)} >+10</button>
                        <button className="control" onClick={()=>this.changeRow(-1)}>Remove Row</button>
                        <button className="control" onClick={()=>this.changeRow(-10)}>-10</button>
                        <button className="control" onClick={()=>this.changeColumn(+1)} >Add Column</button>
                        <button className="control" onClick={()=>this.changeColumn(+10)}>+10</button>
                        <button className="control" onClick={()=>this.changeColumn(-1)}>Remove Column</button>
                        <button className="control" onClick={()=>this.changeColumn(-10)}>-10</button>
                 
                        <div className="empty">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</div>
                        <div className="dropdown">
                        <button className="dropbtn">Colors</button>
                            <div className="dropdown-content">
                                <div className="option" id="white" onClick={()=>this.changeColor("white")}></div>
                                <div className="option" id="red" onClick={()=>this.changeColor( "lightcoral")}></div>
                                <div className="option" id="green" onClick={()=>this.changeColor("lightgreen")}></div>
                                <div className="option" id="yellow" onClick={()=>this.changeColor( "lemonchiffon")}></div>
                                <div className="option" id="blue" onClick={()=>this.changeColor("cornflowerblue")}></div>
                            </div>
                        </div>
                        <button className="control" onClick={this.FillEmpty}>Fill Empties</button>
                        <button className="control" onClick={this.FillAll}>Fill All</button>
                        <button className="control" onClick={this.clearAll}>Clear All</button>
                    </div>

                    <div className='main'>
                        <div className="grids">
                            {row}
                        </div>
                    </div>
                </main>
    }

}


export default Table