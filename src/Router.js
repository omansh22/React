import React, { Component } from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";

import StudentList from './Modules/Student/StudentList';
import EditStudent from './Modules/Student/EditStudent';
// import AddStudent from './Modules/Student/AddStudent';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/edit/:id" component={EditStudent} exact />
                    <Route path="/list"  component={StudentList} exact />
                    {/* <Route path="/add/:id" component={AddStudent} exact /> */}
                    <Route path="/" component={StudentList} exact />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;
