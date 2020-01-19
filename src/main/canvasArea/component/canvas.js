import React, { Component } from 'react';
import {connect} from 'react-redux'; 
import { SketchPicker } from 'react-color';
import {changeCanvasSize} from '../actions';  


// color picker : https://casesandberg.github.io/react-color/
  
 class Canvas extends Component {
	constructor(props) {
        super(props); 
        this.state = {
            selectedCell: null
        };
    }

    onSetColor = (cellNo, color) => {
        console.log("++++",cellNo, color);
        this.setState({
            selectedCell: cellNo
        })
    }
  
    displayCanvas = (elemsNo, colorRGBA) => {
        const size = parseInt(elemsNo) * parseInt(elemsNo); 
        const canvasSize = [...Array(size)]; 
        const classCanvasSize = `canvas-${elemsNo}`; 
        const divStyle = {
            backgroundColor : colorRGBA
        }

        return(
            <ul className={classCanvasSize}>
                {canvasSize.map((elem, i) => <li key={i+1} 
                                                onClick={() =>this.onSetColor(i, colorRGBA)}
                                                style={divStyle}>    
                                            </li>)}
            </ul>
        )
    }

    handleChangeComplete = (color) => {
        this.setState({ newColor: color.hex });
    };
   
    render() {
        const size = this.props.size || 8;
        const {color} = this.props; 
        const colorRGBA = `rgba(${color.r},${color.g}, ${color.b},${color.a})`
        console.log("color is --",colorRGBA); 
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
    console.log("map to props:::", state);
    return {
        size : state.ChangeCanvasSize.size, 
        color : state.ChangeColor.color
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         onChangeCanvasSize: (size) => dispatch(changeCanvasSize(size)), 
//     }
// }

export default connect(mapStateToProps, null)(Canvas)