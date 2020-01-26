import React from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'
import {connect} from 'react-redux'; 
import {handleChangeColor} from '../actions'

class SketchColorPicker extends React.Component {
  state = {
    displayColorPicker: false,
    color: {
      r: '241',
      g: '112',
      b: '19',
      a: '1',
    },
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb })
    this.props.onHandleChangeColor(color.rgb)
  };

  render() {
    const {color} = this.props; 

    const styles = reactCSS({
      'default': {
        color: {
          width: '36px',
          height: '20px',
          borderRadius: '2px',
          background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
         
        },
      },
    });
    //console.log("!!!", color.r, color.g, color.b, color.a);
    return (
        

      <div>
        <div style={ styles.swatch } onClick={ this.handleClick }>
          <div style={ styles.color }>  </div>
        </div>
        <div> culoarea este::: {`rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`} </div>

        { this.state.displayColorPicker ? 
            <div style={ styles.popover }>
                 <div style={ styles.cover } onClick={ this.handleClose }/>
          <SketchPicker color={ this.state.color } onChange={ this.handleChange } />
        </div> 
        : null }

      </div>
    )
  }
}

 


function mapStateToProps(state) {
   // console.log("MMM", state.ChangeColor.color);
    return {
        color : state.ChangeColor.color, 
        //selectedCell: state.
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onHandleChangeColor: (colorRGB) => dispatch(handleChangeColor(colorRGB)), 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SketchColorPicker)