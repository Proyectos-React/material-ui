import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar } from '@material-ui/core'
import clsx from 'clsx';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';

import { uiOpenSidebar } from '../../actions/ui';
import { deepOrange } from '@material-ui/core/colors';

import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { themDark } from '../../actions/theme';


export const Navbar = ({useStyles}) => {

    const { open } = useSelector(state => state.ui);
    const { dark } = useSelector(state => state.theme);

    const dispatch = useDispatch();
    const handleDrawerOpen = () => {
        dispatch(uiOpenSidebar());
    };
    const classes = useStyles();

    const icon = !dark ? <Brightness4Icon />: <Brightness7Icon style={{ color: deepOrange[900] }}/>;

    const handleThemeChange = () => {
        dispatch(themDark(!dark));
    };

    return (
        <AppBar
            position="absolute"
            className={clsx(classes.appBar, open && classes.appBarShift)}
        >
            <Toolbar className={classes.toolbar}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    className={clsx(
                        classes.menuButton,
                        open && classes.menuButtonHidden
                    )}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    className={classes.title}
                >
                    Dashboard
                        </Typography>
                <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="mode"
                    onClick={handleThemeChange}
                >
                    {icon}
                </IconButton>
                {/* <Switch checked={darkState} onChange={handleThemeChange} /> */}
                <IconButton color="inherit">
                    <Badge badgeContent={10} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}
