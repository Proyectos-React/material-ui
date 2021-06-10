import { Box, Button, Card, CardContent, TextField } from '@material-ui/core';
// import { Box, Button, Card, CardContent, FormControl, InputAdornment, InputLabel, OutlinedInput, TextField } from '@material-ui/core';
// import { Visibility, VisibilityOff } from '@material-ui/icons';
import React from 'react';
// import React, { useState } from 'react';
import { useStyles } from '../../helpers/theme';
import { useForm } from '../../hooks/useForm';
// import IconButton from '@material-ui/core/IconButton';


export const LoginScreen = ({history}) => {
    const classes = useStyles();

    // const [values, setsValues] = useState({
    //     showPassword: false,
    // });

    // const { showPassword } = values;
    // const handleClickShowPassword = () => {
    //     setsValues({...values, showPassword: !showPassword});
    // }

    // const handleMouseDownPassword = (e) => {
    //     e.preventDefault();
    // };

    const [formLoginValues, handleLoginInputChange] = useForm({
        email: 'merling.ramirez@upeu.edu.pe',
        password: 'ramirez'
    });

    const { email, password } = formLoginValues;

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(email, password);
        history.replace('/admin')
    }
    
    return (

        <main className={classes.content}>
            <Box display='flex' justifyContent='center' alignItems='center' height="100%">
                <Card className={classes.authCard}>
                    <CardContent>
                        <form onSubmit={ handleLogin } style={{padding: '0.7em'}}>
                                <TextField 
                                    id="standard-full-width" 
                                    label="Email" 
                                    variant="outlined"
                                    defaultValue={email}
                                    name="email"
                                    onChange={handleLoginInputChange}
                                    fullWidth
                                    style={{marginBottom: '1.5em'}}
                                />
                                <TextField 
                                    id="standard-full-width" 
                                    label="Password" 
                                    variant="outlined"
                                    type="password"
                                    defaultValue={password}
                                    onChange={handleLoginInputChange}
                                    fullWidth
                                    style={{marginBottom: '1.5em'}}
                                />


                                {/* <FormControl
                                    variant="outlined"
                                    style={{marginBottom: '1.5em'}}
                                    fullWidth
                                >
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput 
                                        id="outlined-adornment-password"
                                        type={ showPassword ? 'text': 'password' }
                                        value={ password }
                                        onChange={handleLoginInputChange}
                                        name="password"
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl> */}
                                <Button size="large" fullWidth variant="contained" color="primary" type="submit">
                                    Ingresar
                                </Button>

                        </form>
                    </CardContent>
                </Card>
            </Box>
        </main>
    )
}
