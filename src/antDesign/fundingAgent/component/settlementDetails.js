import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { Switch, InputNumber, Input, Form, Divider, Icon, Button} from 'antd';
import { saveInputValues } from '../action'; 
import { changeStep } from '../../Steps/action'; 
const FormItem = Form.Item; 

class SettlementDetails extends Component {
    state = {
        current: 0,
        formItems: [{
            field: "age", 
            id: 3,
            required: true, 
            message: 'Please input your age!', 
            iconImg: 'hourglass', 
            placeholder: 'age'
        }, 
        {
            field: "address", 
            id: 4, 
            required: true, 
            message: 'Please input your id!', 
            iconImg: 'idcard', 
            placeholder: 'address'
        }], 

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
                <h1> Settlement details </h1>
 
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
 
const SettlementDetailsForm = Form.create()(SettlementDetails)
export default connect(mapStateToProps, mapDispatchToProps)(SettlementDetailsForm)