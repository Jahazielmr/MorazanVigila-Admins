import React, { Component } from 'react';
import fire from "../Constants/Firebase";
import { Link } from "react-router-dom";
import { Button } from 'antd';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as routes from '../Constants/Routes';
import LoginPage from "./LoginPage";
import NavBar from "./NavBar";
import TableD from "./TableD";


class MainPage extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (

            <div>

                <Router>
                    <div>
                        <NavBar />

                        <Switch>

                            <Route
                                exact path={routes.LOGINPAGE}
                                component={() => <LoginPage />}
                            />

                            <TableD/>

                        </Switch>

                    </div>

                </Router>

            </div>


        )


    }

}


export default MainPage;
