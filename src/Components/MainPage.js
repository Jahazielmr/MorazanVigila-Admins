import React, { Component } from 'react';
import fire from "../Constants/Firebase";
import { Link } from "react-router-dom";
import { Button, Layout } from 'antd';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as routes from '../Constants/Routes';
import LoginPage from "./LoginPage";
import NavBar from "./NavBar";
import TableD from "./TableD";
import Mapa from "./Mapa";


class MainPage extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        const { Header, Sider, Content } = Layout;
        return (

            <div>

                <Router>
                    <div>

                        <Layout>
                            <NavBar />
                            <Layout>
                                <Content>
                                    <Switch>
                                        <Route
                                            exact path={routes.TABLED}
                                            component={() => <TableD />}
                                        />
                                        <Route
                                            exact path={routes.MAPA}
                                            component={() => <Mapa />}
                                        />
                                    </Switch>
                                </Content>
                            </Layout>
                        </Layout>

                    </div>

                </Router>


            </div>


        )


    }

}


export default MainPage;
