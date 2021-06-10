import { CssBaseline } from '@material-ui/core';
import React from 'react'
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';

export const AuthRouter = () => {
    return (
        <div>
            <CssBaseline />
            <Switch>
                <Route
                    exact
                    path="/auth/login"
                    component={LoginScreen}
                />
                <Redirect
                    to="/auth/login"
                />
            </Switch>
        </div>
    )
}
