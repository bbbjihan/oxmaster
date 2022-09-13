import React from "react";
import {HashRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import AddQ from "../routes/AddQ";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import SolveQ from "../routes/SolveQ";
import Navigation from "./Navigation";

const AppRouter = ({ isLoggedIn }) => {
    return (
        <Router>
            {isLoggedIn && <Navigation />}
            <Switch>
                {isLoggedIn ? 
                    <>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route exact path="/addq">
                            <AddQ/>
                        </Route>
                        <Route exact path="/solveq">
                            <SolveQ/>
                        </Route>
                        <Route exact path="/profile">
                            <Profile/>
                        </Route>
                        <Redirect from="*" to="/"/>
                    </>
                :
                    <>
                        <Route exact path="/">
                            <Auth/>
                        </Route>
                        <Redirect from="*" to="/"/>
                    </>
                }
            </Switch>
        </Router>
    )
}

export default AppRouter;