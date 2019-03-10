import React, { Component } from 'react';
import fire from "../Constants/Firebase";
import * as routes from '../Constants/Routes';
import LoginPage from "./LoginPage";
import { Link } from "react-router-dom";
import { Button } from 'antd';
import { Router, Route } from "react-router";
import { Breadcrumb, Alert } from 'antd';

class NavBar extends Component {

    constructor(props) {
        super(props);


        this.handleLogout = this.handleLogout.bind(this);

    }


    handleLogout() {

        fire.auth().signOut().then(function () {
            window.alert("bye");
        }).catch(function (error) {
            window.alert("error")
        });


    }



    render() {


        return (

            <div>
                <Link to={routes.LOGINPAGE}>
                    <Button onClick={this.handleLogout} type="primary" htmlType="submit" className="login-form-button">
                        Log out
                    </Button>

                </Link>
            </div>
        );

    }

}


export default NavBar;
