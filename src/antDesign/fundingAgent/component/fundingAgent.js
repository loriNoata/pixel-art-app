import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { Switch, InputNumber, Input, Form, Divider, Icon, Button} from 'antd';
import { saveInputValues } from '../action'; 
import { changeStep } from '../../Steps/action'; 
import ParticipantDetails  from './participantDetails';
import SettlementDetails from './settlementDetails'
const FormItem = Form.Item; 

class FundingAgent extends Component {
    state = {
        current: 0,
        formItems: [{
            field: "userName", 
            id: 1,
            required: true, 
            message: 'Please input your username!', 
            iconImg: 'user', 
            placeholder: 'Username'
        }, 
        {
            field: "id", 
            id: 2, 
            required: true, 
            message: 'Please input your id!', 
            iconImg: 'lock', 
            placeholder: 'id'
        }], 

    };

 
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            //console.log('Received values of form: ', values);
            this.props.onSaveInputValues(values, this.state.current + 1); 
          }
        });
         
    };

   

 

    render() { 
 
        return(
            <div className="participant-details-content">

                {  this.props.current === 0  &&  <ParticipantDetails />  } 
                {  this.props.current === 1  && <SettlementDetails />}
                {  this.props.current === 2  && <div> pas 2</div>}
                {  this.props.current === 3  && <div> You compleate everything</div>}
                    
                <Button  type="primary" onClick={this.handleSubmit}> Save </Button> 
            </div>
        )
    }

}


function mapStateToProps(state) {
    console.log(state);
    // current
     return {
         isSaved : state.SaveInputValues.isSaved, 
         current: state.ChangeStep.current
    }
}
 
const mapDispatchToProps = dispatch => {
     return {
        onSaveInputValues: (values, increment) => {
            dispatch(saveInputValues(values))
            dispatch(changeStep(increment))
        }, 
     }
}
 
const FundingAgentForm = Form.create()(FundingAgent)
export default connect(mapStateToProps, mapDispatchToProps)(FundingAgentForm)