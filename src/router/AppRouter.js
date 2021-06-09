import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
} from 'react-router-dom';
import { AuthRouter } from './AuthRouter';
import { PagesRouter } from './PagesRouter';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route
                        path="/auth"
                        component={AuthRouter}
                    />
                    <Route
                        path="/admin"
                        component={ PagesRouter }
                    />
                    <Redirect 
                        to="/auth/login"
                    />
                </Switch>
            </div>
        </Router>
    )
}
