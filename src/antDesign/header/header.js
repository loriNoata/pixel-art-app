import React, { Component } from 'react';
import {connect} from 'react-redux'; 
import { Steps, Icon } from 'antd';
 
 

import 'antd/dist/antd.css';

const { Step } = Steps;
            
class HeaderView extends Component {

    render() {

    const { currentStep } = this.props;

        return (
            <header className="App-header">
                <div className="iconWrraper">
                  <Icon type="user" style={{ color: '#ffffff'}}/> 
                  <span> | </span> 
                  <span>  Welcome User </span>
                </div>
            </header>
        );
    }
}          

function mapStateToProps(state) {
   console.log(state);
    return {
        currentStep : state.ChangeStep.current
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         //onChangeStep: (current) => dispatch(changeStep(current)), 
//     }
// }

//export default connect(mapStateToProps, null)(HeaderView)
export default HeaderView