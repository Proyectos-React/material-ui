import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';

import { uiCloseSidebar } from '../../actions/ui';
import { useHistory } from 'react-router';

import HomeIcon from "@material-ui/icons/Home";
import DashboardIcon from '@material-ui/icons/Dashboard';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';



export const Sidebar = ({useStyles}) => {

    const history = useHistory();
    const { open } = useSelector(state => state.ui);
    const classes = useStyles();
    const dispatch = useDispatch();
    const handleDrawerClose = () => {
        dispatch(uiCloseSidebar())
    }

    const itemList = [
        { text: 'Home', icon: <HomeIcon />, onclick: () => history.push('/admin/home') },
        { text: 'Dashboard', icon: <DashboardIcon />, onclick: () => history.push('/admin/dashboard') },
    ]
    
    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
            }}
            open={open}
        >
            <div className={classes.toolbarIcon}>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
               
            {/* <List>{mainListItems}</List> */}
            <List>
                {
                    itemList.map((item, index) => {
                        const { text, icon, onclick } = item;
                        return (
                            <ListItem button key={text} onClick={onclick}>
                            <ListItemIcon>{icon}</ListItemIcon>
                            <ListItemText primary={text} />
                            </ListItem>
                        );
                    })
                }
            </List>
            <Divider />
            {/* <List>{secondaryListItems}</List> */}
        </Drawer>
    )
}
