import { Box, Link, Typography } from '@material-ui/core';
import React from 'react'


const Copyright = () => (
    <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright ©"}
        <Link color="inherit" href="https://material-ui.com/">
            Josue Ramirez
        </Link>
        {" "}
        {new Date().getFullYear()}
        {"."}
    </Typography>
);

export const Footer = () => {
    return (
        <Box pt={4}>
            <Copyright />
        </Box>
    )
}
