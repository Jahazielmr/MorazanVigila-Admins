import React, { Component } from 'react';
import fire from "../Constants/Firebase";
import { Form, Icon, Input, Button, Checkbox, } from 'antd';
import * as routes from '../Constants/Routes';
import MainPage from "../Components/MainPage";
import './LoginPage.css';
import { Redirect } from 'react-router';

class LoginPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            LogoutRedirect: false

        };

        this.handleAuth = this.handleAuth.bind(this);

    }


    handleAuth() {

        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((result) => console.log(result)(


            this.setState(() => ({

                LogoutRedirect: true

            })))




        ).catch(function (error) {
            console.log(error);
        });





    }

    /*class NormalLoginForm extends React.Component {
        handleSubmit = (e) => {
          e.preventDefault();
          this.props.form.validateFields((err, values) => {
            if (!err) {
              console.log('Received values of form: ', values);
            }
          });
        }
    */


    render() {
        //const { getFieldDecorator } = this.props.form;

        if (this.state.LogoutRedirect === true) {
            return <Redirect to='./MainPage' />
        }


        return (

            <div>

                <div id="main-title">Morazan Vigila</div>
    
            <Form /*onSubmit={this.handleSubmit}*/ className="login-form">

                    <Form.Item>
                        {/*   
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        
                    )}
                */}

                        <Input className="input-M" onChange={(evt) => { this.setState({ email: evt.target.value }) }} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />

                    </Form.Item>


                    <Form.Item>

                        {/*
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        
                    )}
                    */}

                        <Input className="input-M" onChange={(evt) => { this.setState({ password: evt.target.value }) }} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />

                    </Form.Item>

                    <Form.Item>


                        {/*{getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(

                    )}*/}

                        {/*<Checkbox>Remember me</Checkbox>
                    <a className="login-form-forgot" href="">Forgot password</a>*/}
                        <div className="flexbox">

                            <Button id="Login-button" onClick={this.handleAuth} type="primary" htmlType="submit" className="login-form-button">
                                Log in
                    </Button>
                            {/* Or <a className="flex-item" href="">register now!</a>
                        */}
                        </div>
                    </Form.Item>
                </Form >
            </div>
        );
    }

}

export default LoginPage;