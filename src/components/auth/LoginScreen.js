import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { TextField } from 'formik-material-ui';
import { Button } from '@material-ui/core';

export const LoginScreen = () => {
    const initialValues = {
        email: "",
        password: ""
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("Email no es valido")
            .required("Campo obligatorio"),
        password: Yup.string().required("Campo obligatorio")
    });

    const onSubmit = async (values) => {
        console.log(values);
    };
    
    return (
        <div style={{ margin: "150px" }}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                render={() => (
                    <Form noValidate>
                        <Field
                            type="email"
                            label="Usuario"
                            name="email"
                            variant="outlined"

                            fullWidth
                            component={TextField}
                        />

                        <br />
                        <br />

                        <Field
                            type="password"
                            label="Password"
                            name="password"
                            variant="outlined"
                            fullWidth
                            component={TextField}
                        />

                        <br />
                        <br />

                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            fullWidth
                            // disabled={isSubmitting}
                        >
                            Entrar
                        </Button>

                        <br />
                        <br />

                        {/* {isSubmitting && <LinearProgress />} */}
                    </Form>
                )}
            />


        </div>
    )
}
