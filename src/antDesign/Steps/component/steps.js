import React, { Component } from 'react';
import {connect} from 'react-redux'; 
import { Steps } from 'antd';
import { changeStep } from '../action'
import '@ant-design/colors'; 

import 'antd/dist/antd.css';

const { Step } = Steps;
            
class StepsCount extends Component {
    state = {
        current: 0,
        items: [
            { id: 1, disabled: false, title: "Participant Submission" },
            { id: 2, disabled: false, title : "Participant details" },
            { id: 3, disabled: true, title: "Connections" }
          ]
    };

    onChange = current => {
        console.log('onChange:', current);
        this.setState({ current });
       // this.props.onChangeStep(current)
    };
 

    render() {

    const { currentStep } = this.props;

        return (
            <div className="custom-verticalContainerSteps">
                <Steps current={currentStep} onChange={this.onChange} direction="vertical">
                     {this.state.items.map(item => (
                         <Step title={item.title} key={item.id} disabled={item.disabled}/>
                     ))}
                </Steps>
          </div>
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

export default connect(mapStateToProps, null)(StepsCount)
//export default StepsCount