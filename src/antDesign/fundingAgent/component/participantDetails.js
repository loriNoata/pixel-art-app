import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { Switch, InputNumber, Input, Form, Divider, Icon, Button} from 'antd';
import { saveInputValues } from '../action'; 
import { changeStep } from '../../Steps/action'; 
const FormItem = Form.Item; 

class ParticipantDetails extends Component {
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

    onChange = (checked) => {
        console.log(`switch to ${checked}`);
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
            <div key={item.id}>
                <FormItem> 
                    {getFieldDecorator(item.field, {
                        rules: [{ required: item.required, message: item.message }],
                        })(
                        <Input prefix={<Icon type={item.iconImg} style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder={item.message} />
                        )}
                </FormItem> 
            </div>
        )
    }

    render() { 
        return(
            <div>
                <h1> Participant Details </h1>
                <Divider />
                <span>Using a founding agent: </span>  
                
                <Switch  onChange={this.onChange} />    {/* defaultChecked */}
                <Divider />
                <Form  className="login-form">
                    {this.state.formItems.map(this.displayFormItem)}
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