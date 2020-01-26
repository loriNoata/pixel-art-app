import React, { Component } from 'react';
import {connect} from 'react-redux'; 
import { SketchPicker } from 'react-color';
import {changeCanvasSize} from '../actions';  
import {setCells} from '../actions'; 

// color picker : https://casesandberg.github.io/react-color/
  
 class Canvas extends Component {
	constructor(props) {
        super(props); 
        this.state = {
            selectedCell: null, 
            selectedCells: []
        };
    }

    onSetColor = (cellNo, color) => {
        
        this.setState({
            selectedCell: cellNo, 
            selectedCells: [...this.state.selectedCells, cellNo]
        })
       

        
    }
  
    displayCanvas = (elemsNo, colorRGBA) => {
        const size = parseInt(elemsNo) * parseInt(elemsNo); 
        const canvasSize = [...Array(size)]; 
        const classCanvasSize = `canvas-${elemsNo}`; 


        return(
            <ul className={classCanvasSize}>
                {canvasSize.map((elem, i) => {
                   
                const divStyle = {
                        backgroundColor : (this.state.selectedCells.includes(i)) ? colorRGBA : 'white'
                    }

                console.log("++++",this.state.selectedCell, this.state.selectedCells);

                this.props.onSetCells(this.state.selectedCell, this.state.selectedCells);
                return(
                    <li key={i+1} 
                        onClick={() =>this.onSetColor(i, colorRGBA)}
                        style={divStyle}>    
                    </li>)}
                )
                }
            </ul>
        )
    }

    // handleChangeComplete = (color) => {
    //     this.setState({ newColor: color.hex });
    // };
   
    render() {
        const size = this.props.size || 8;
        const {color} = this.props; 
        const colorRGBA = `rgba(${color.r},${color.g}, ${color.b},${color.a})`
        //console.log("color is --",colorRGBA); 
        return(
        <div>
            <article className="canvasContainer">
                <div> valoarea selectata:   - {size}</div>
                {this.displayCanvas(size, colorRGBA)}  
            </article>
        </div>
        
        )
    }
   
}


function mapStateToProps(state) {
    //console.log("map to props:::", state);
    return {
        size : state.ChangeCanvasSize.size, 
        color : state.ChangeColor.color
    }
}

const mapDispatchToProps = dispatch => {
    //console.log()
    return {
        onSetCells: (cellNo, cells) => dispatch(setCells(cellNo, cells)), 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Canvas)