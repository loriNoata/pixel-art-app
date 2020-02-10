import React, { Component } from 'react';
import {connect} from 'react-redux'; 
import {changeCanvasSize} from '../actions';  

  
 class HeaderSelector extends Component {
	constructor(props) {
        super(props); 
    }

    handleChange = (e) => {
        this.props.onChangeCanvasSize(e.target.value)
    }

    render() {
        
         return(
			<header className="headerContainer">
                <label>
                Pick your size canvas:
                    <select value={this.props.value} onChange={this.handleChange}>
                        <option value="8">8x8</option>
                        <option value="12">12x12</option>
                        <option value="16">16x16</option>
                        <option value="32">32x32</option>
                    </select>
                </label>
 			</header>

        )
    }
   
}


function mapStateToProps(state) {
   // console.log(state);
    return {
        size : state.ChangeCanvasSize.size
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeCanvasSize: (size) => dispatch(changeCanvasSize(size)), 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSelector)