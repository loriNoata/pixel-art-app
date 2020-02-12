import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { Cascader , InputNumber, Input, Form, Divider, Icon, Button} from 'antd';
import { saveInputValues } from '../action'; 
import { changeStep } from '../../Steps/action'; 
const FormItem = Form.Item; 

class ParticipantDetails extends Component {
    state = {
        current: 0,
        formItems: [{
            field: "Name", 
            id: 1,
            required: true, 
            message: 'Please input your username, this field is required', 
            iconImg: 'user', 
            placeholder: 'Name', 
            inputType : 'input'
         // }, 
        // {
        //     field: "Identifier", 
        //     id: 2, 
        //     required: true, 
        //     message: 'Length should be 9 characters. Should be a number', 
        //     iconImg: 'lock', 
        //     placeholder: 'id', 
        //     inputType : 'inputNumber'
         }], 

    };

    onChange = (value) => {
        console.log(`switch to ${value}`);
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            //console.log('Received values of form: ', values);
            this.props.onSaveInputValues(values, this.state.current + 1); 
          }
        });
    };

   

    displayFormItem = item => {
        const { getFieldDecorator } = this.props.form;
        return( 
            <React.Fragment>
                <FormItem> 
                    {getFieldDecorator(item.field, {
                        rules: [{ required: item.required, message: item.message }],
                        })(
                    <Input prefix={<Icon type={item.iconImg} style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder={item.message} />
                        )}
                </FormItem> 
                </ React.Fragment>
        )
    }

    render() { 
        const options = [
            {
              value: 'FinancialInstitution',
              label: 'FinancialInstitution',
            },
            {
                value: 'TPSP',
                label: 'TPSP',
            },
            {
                value: 'FundingAgent',
                label: 'Funding Agent',
            }];


        return(
            <div>
                <h1> Participant Submission </h1>
                <Divider />
                <span>Type </span>  
                
                  

               
                <Form  layout="inline" className="login-form">
                    <Cascader  options={options} onChange={this.onChange} placeholder="Please select" />  
                  {this.state.formItems.map(this.displayFormItem)}   
                 
                    <InputNumber  min={9} max={9} defaultValue={''} onChange={this.onChangeInputNumber}  />
                </Form>
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
 
const ParticipantDetailsForm = Form.create()(ParticipantDetails)
export default connect(mapStateToProps, mapDispatchToProps)(ParticipantDetailsForm)