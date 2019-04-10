import React, { Component } from 'react';
import fire from "../Constants/Firebase";
import * as routes from '../Constants/Routes';
import LoginPage from "./LoginPage";
import { Link } from "react-router-dom";
import { Button } from 'antd';
import { Router, Route } from "react-router";
import TableD from "./TableD";
import Mapa from "./Mapa";
import { Breadcrumb, Alert } from 'antd';
import { Layout, Menu, Icon } from 'antd';
import './NavBar.css';
import { Tabs } from 'antd';


class NavBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            collapsed: false,

        };


        this.handleLogout = this.handleLogout.bind(this);
        this.toggle = this.toggle.bind(this);

    }


    handleLogout() {

        fire.auth().signOut().then(function () {
            window.alert("bye");
        }).catch(function (error) {
            window.alert("error")
        });


    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {

        const { Header, Sider, Content } = Layout;
        const TabPane = Tabs.TabPane;

        return (

            <div>

                
                    <Sider id="navBarLat" trigger={null} collapsible collapsed={this.state.collapsed}>

                        <Header style={{ background: '#fff', padding: 0 }}>
                            <Icon id="boton-s"
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                        </Header>

                        <div className="logo" />
                        <Menu id="menuN" theme="dark" mode="inline" defaultSelectedKeys={['1']}>

                            <Menu.Item id="mItem" key="1">
                                <Icon type="user" />

                                <span>Denuncias</span>

                                <Link to={routes.TABLED}>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        Denuncias
                                    </Button>

                                </Link>
                                

                            </Menu.Item>
                            <Menu.Item id="mItem" key="2">
                                <Icon type="video-camera" />
                                <span>Mapa</span>
                                
                                <Link to={routes.MAPA}>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        Mapa
                                    </Button>

                                </Link>
                              
                            </Menu.Item>
                            <Menu.Item id="mItem" key="3">
                                <Icon type="upload" />
                                <span>Cerrar Sesion</span>

                                <Link to={routes.LOGINPAGE}>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        Log out
                                    </Button>

                                </Link>

                            </Menu.Item>
                        </Menu>
                    </Sider>


            </div>
        );

    }

}


export default NavBar;
