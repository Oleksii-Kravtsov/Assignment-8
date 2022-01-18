import React from 'react';

class TableCell extends React.Component {

    constructor(props){
        super(props)
        this.state=
            {
                backgroundColor:"",
                prevBackgroundColor:"",
                colorFunction:"",
                opacity:"",
            }
        this.handleClick = this.handleClick.bind(this)
        this.handleMouseDown = this.handleMouseDown.bind(this)
        // this.handleMouseUp = this.handleMouseUp.bind(this)
        this.onMouseOver = this.onMouseOver.bind(this)
    }

    //when the tablecell is at all changed
    componentDidUpdate(preProps){
        //if the table cell's colorFunction state is not equal to the colorFunction 
        if(preProps.colorFunction != this.props.colorFunction){
            switch(this.props.colorFunction){
                case "fillall":
                    this.FillAll()
                    break
                case "fillempties":
                    this.FillEmpties()
                    break
                case "clearall":
                    this.ClearAll()
                    break
            }
        }
    }

    FillAll(){
        // console.log("fillall")
        this.setBackgroundColor(this.props.color)
    }
    
    FillEmpties(){
        // console.log("fillempties")
        if(!this.state.backgroundColor){
            this.setBackgroundColor(this.props.color)
        }
    }

    ClearAll(){
        // console.log("clearall")
        this.setBackgroundColor("")
    }


    handleClick() {
        console.log("clicked")
        this.setBackgroundColor(this.props.color)
    }

    handleMouseDown(){
        console.log("onmousedown")
        this.setBackgroundColor(this.props.color)
    }

    onMouseOver(event){
        if(this.state.backgroundColor)
            this.changeOpacityEffect(true)
        
        if (event.buttons === 1){
            //change color of the cell
            console.log("nomouseover and clicked")
            this.setBackgroundColor(this.props.color)
        }else{
            //if there isn't a background color, create hover effect
            if(!this.state.backgroundColor){
                this.changeHoverEffect(true)
            }
        }
    }

    onMouseLeave(event){
        this.changeOpacityEffect(false)
        //if leaving a cell and not pressing left click
        if(event.buttons !== 1){
            this.changeHoverEffect(false)
        }
    }

    setBackgroundColor(color){
        this.setState({backgroundColor:color, prevBackgroundColor: color})
    }


    changeHoverEffect(state){
        //if true, create hover effect
        if(state){
            this.setState({prevBackgroundColor: this.state.backgroundColor, backgroundColor: "hover-color"})
        }
        //if false, remove the hover effect
        else{
            this.setState({backgroundColor: this.state.prevBackgroundColor})
        }
    }
    //opacity effect refers to the cell becoming more transperent when the user hovers over it.
    changeOpacityEffect(state){
        //if true, create an opacity effect
        if(state){
            this.setState({opacity:"opacity03"})
        }
        //if false, remove the opacity effect
        else{
            this.setState({opacity:""})
        }
    }


    render(){
        return  <div
                    className={`box ${this.state.backgroundColor} ${this.state.opacity}`} 
                    onMouseDown={this.handleMouseDown}
                    onMouseOver={(event)=>this.onMouseOver(event)}
                    onMouseLeave={(event)=>this.onMouseLeave(event)}
                    >
                </div>
    }

}

export default TableCell