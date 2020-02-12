import React, { Component } from 'react';
import {connect} from 'react-redux'; 
import { Cascader } from 'antd';
import { changeStep } from '../action'
 

import 'antd/dist/antd.css';


            
class StepsCount extends Component {
    state = {
        current: 0,
        
    };

    onChange = (value) => {
        console.log(value);
    }

    
 

    render() {

        const options = [
            {
              value: 'zhejiang',
              label: 'Zhejiang',
              children: [
                {
                  value: 'hangzhou',
                  label: 'Hangzhou',
                  children: [
                    {
                      value: 'xihu',
                      label: 'West Lake',
                    },
                  ],
                },
              ],
            },
            {
              value: 'jiangsu',
              label: 'Jiangsu',
              disabled: true,
              children: [
                {
                  value: 'nanjing',
                  label: 'Nanjing',
                  children: [
                    {
                      value: 'zhonghuamen',
                      label: 'Zhong Hua Men',
                    },
                  ],
                },
              ],
            },
          ];

    const { currentStep } = this.props;

        return (
            <div className="custom-verticalContainerSteps">
               <Cascader options={options} onChange={onChange} />
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