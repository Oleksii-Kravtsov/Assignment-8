import React from 'react';
import TableRow from "./TableRow"

class Table extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          column:0,
          row:0,
          color:"white",
          colorFunction:"",
        };
        this.changeRow = this.changeRow.bind(this)
        this.changeColumn = this.changeColumn.bind(this)
        this.changeColor = this.changeColor.bind(this)
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

    //to change color function (e.g., clearall, fillall, ...) that will then get passed to the cell
    colorFunctionChange(change){
        this.setState({...this.state, colorFunction: change})
    }

    render(){

        const row = []
        for (let i=0; i<this.state.row;i++){
            row.push(<TableRow key={i} column={this.state.column} color={this.state.color} colorFunction={this.state.colorFunction}  clear ={this.state.clear}/>)
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
                                <div className="option white" onClick={()=>this.changeColor("white")}></div>
                                <div className="option red" onClick={()=>this.changeColor( "red")}></div>
                                <div className="option green" onClick={()=>this.changeColor("green")}></div>
                                <div className="option yellow" onClick={()=>this.changeColor( "yellow")}></div>
                                <div className="option blue" onClick={()=>this.changeColor("blue")}></div>
                            </div>
                        </div>
                        <button className="control" onClick={()=>this.colorFunctionChange("fillempties")} onMouseLeave={()=>this.colorFunctionChange("")}>Fill Empties</button>
                        <button className="control" onClick={()=>this.colorFunctionChange("fillall")} onMouseLeave={()=>this.colorFunctionChange("")}>Fill All</button>
                        <button className="control" onClick={()=>this.colorFunctionChange("clearall")} onMouseLeave={()=>this.colorFunctionChange("")}>Clear All</button>
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