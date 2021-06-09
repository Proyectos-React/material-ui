import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import clsx from 'clsx';
import { useStyles } from '../../helpers/theme';


export const DashboardScreen = () => {


    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
                <Paper className={fixedHeightPaper}>
                    <h1>Hola mundo</h1>
                </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
                <Paper className={fixedHeightPaper}>
                    <h1>Hola mundo</h1>
                </Paper>
            </Grid>
            <Grid item xs={12} >
                <Paper className={fixedHeightPaper}>
                    <h1>Hola mundo</h1>
                </Paper>
            </Grid>
        </Grid>
    )
}
