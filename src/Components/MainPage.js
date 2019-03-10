import React, { Component } from 'react';
import * as routes from '../Constants/Routes';
import LoginPage from "../Components/LoginPage";
import fire from "../Constants/Firebase";
import { Link } from "react-router-dom";

import {Button} from 'antd';


class MainPage extends Component {

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


        <Link to={routes.LOGINPAGE}>
            <Button onClick={this.handleLogout} type="primary" htmlType="submit" className="login-form-button">
                Log out
            </Button>

        </Link>

        )


    }

}


export default MainPage;
