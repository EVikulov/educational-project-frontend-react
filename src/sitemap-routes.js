import React from 'react';
import { Route } from 'react-router';
import {history, Role} from "@/_helpers";
import {Link, Router} from "react-router-dom";
import {PrivateRoute} from "@/_components";
import {HomePage} from "@/HomePage";
import {StudentPage} from "@/StudentPage";
import {AdminPage} from "@/AdminPage";
import {LoginPage} from "@/LoginPage";

export default (
    <Router history={history}>
        <div>
            {currentUser &&
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-item nav-link">Home</Link>
                        {currentUser && <Link to="/students" className="nav-item nav-link">Student</Link>}
                        {isAdmin && <Link to="/admin" className="nav-item nav-link">Admin</Link>}
                        <a onClick={this.logout} className="nav-item nav-link">Logout</a>
                    </div>
                </nav>
            }
            <div className="jumbotron">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <PrivateRoute exact path="/" component={HomePage} />
                            <PrivateRoute exact path="/students" component={StudentPage} />
                            <PrivateRoute path="/admin" roles={[Role.Admin]} component={AdminPage} />
                            <Route path="/login" component={LoginPage} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Router>
);
