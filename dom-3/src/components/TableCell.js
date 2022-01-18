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

    //method that fills all cells
    FillAll(){
        // console.log("fillall")
        this.setBackgroundColor(this.props.color)
    }
    
    //method that fills all empty cells
    FillEmpties(){
        // console.log("fillempties")
        if(!this.state.backgroundColor){
            this.setBackgroundColor(this.props.color)
        }
    }

    //method that clears all cells of color
    ClearAll(){
        // console.log("clearall")
        this.setBackgroundColor("")
    }

    //what happens when user clicks a cell
    handleClick() {
        console.log("clicked")
        this.setBackgroundColor(this.props.color)
    }

    //what happens when user holds button down on a cell
    handleMouseDown(){
        console.log("onmousedown")
        this.setBackgroundColor(this.props.color)
    }

    //what happens when user hovers over a cell
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

    //what happens when the user's mouse leaves the cell
    onMouseLeave(event){
        this.changeOpacityEffect(false)
        //if leaving a cell and not pressing left click
        if(event.buttons !== 1){
            this.changeHoverEffect(false)
        }
    }

    //internal method that changes the backgound color and sets the previous backgorund color as well
    setBackgroundColor(color){
        this.setState({backgroundColor:color, prevBackgroundColor: color})
    }

    //change hover effect to either true or false
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