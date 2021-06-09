import React from 'react'
import { Route, Switch, Redirect } from 'react-router'
import { DashboardScreen } from '../components/dashboard/DashboardScreen'
import { HomeScreen } from '../components/home/HomeScreen'

// For Switch Theming
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { deepOrange, deepPurple, lightBlue, orange } from '@material-ui/core/colors';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Navbar } from '../components/ui/Navbar';
import { Sidebar } from '../components/ui/Sidebar';
import { Container } from '@material-ui/core';
import { Footer } from '../components/ui/Footer';
import { useSelector } from 'react-redux';
import { useStyles } from '../helpers/theme';

export const PagesRouter = () => {

    const { dark } = useSelector(state => state.theme);
    const palletType = dark ? 'dark' : 'light';
    const mainPrimaryColor = dark ? orange[500] : lightBlue[500];
    const mainSecondaryColor = dark ? deepOrange[900] : deepPurple[500];

    const darkTheme = createMuiTheme({
        palette: {
            type: palletType,
            primary: {
                main: mainPrimaryColor
            },
            secondary: {
                main: mainSecondaryColor
            }
        }
    });

    const classes = useStyles();
    return (
        <ThemeProvider theme={ darkTheme }>
            <div className={classes.root}>
                <CssBaseline />
                <Navbar useStyles = { useStyles } />
                <Sidebar useStyles = { useStyles } />
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.container}>
                        <Switch>
                            <Route
                                exact
                                path="/admin/dashboard"
                                component={DashboardScreen}
                            />
                            <Route
                                exact
                                path="/admin/home"
                                component={HomeScreen}
                            />
                            <Redirect
                                to="/admin/dashboard"
                            />
                        </Switch>
                        <Footer/>
                    </Container>
                </main>
                  
            </div>
        </ThemeProvider>
    )
}
