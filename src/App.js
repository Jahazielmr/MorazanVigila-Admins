import React, { Component } from 'react';
import './App.css';
import fire from './Constants/Firebase';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as routes from './Constants/Routes';
import LoginPage from "./Components/LoginPage";
import MainPage from "./Components/MainPage";
import NavBar from "./Components/NavBar";
import TableD from "./Components/TableD";
import Mapa from "./Components/Mapa";


class App extends Component {
 
 
  render() {
    return (
      <div className="App">
          <Router>
            <div>
              
              <Switch>

                <Route
                  exact path={routes.LOGINPAGE}
                  component={() => <LoginPage />}
                />

                <Route
                  exact path={routes.MAINPAGE}
                  component={() => <MainPage />}
                />

                <Route
                  exact path={routes.TABLED}
                  component={() => <TableD />}
                />

                <Route
                  exact path={routes.NAVBAR}
                  component={() => <NavBar />}
                />

                <Route
                  exact path={routes.MAPA}
                  component={() => <Mapa />}
                />

              
              </Switch>

            </div>

          </Router>
      </div>
    );
  }
}

export default App;
