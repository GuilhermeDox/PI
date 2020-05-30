import React from 'react'

import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { history } from '../../history'

import '../login/Login.css'

const Register = () => {
    const handleSubmit = values => {
        axios.post('http://localhost:8080/v1/api/user', values)
            .then(resp => {
                const { data } = resp
                if (data) {
                    history.push('/login')
                }
            })
    }

    const validations = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).required()
    })
    return (
        <>
            <h1>Cadastro</h1>
            <p>Preencha os campos para efetuar o cadastro</p>
            <Formik
                initialValues={{}}
                onSubmit={handleSubmit}
                validationSchema={validations}
            >
                <Form className="Login">
                    <h3>Nome:</h3>
                    <div className="Login-Group">
                        <Field
                            name="firstName"
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="firstName"
                            className="Login-Error"
                        />
                    </div>
                    <div className="Login-Group">
                        <h3>Email:</h3>
                        <Field
                            name="email"
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="email"
                            className="Login-Error"
                        />
                    </div>
                    <div className="Login-Group">
                        <h3>Senha:</h3>
                        <Field
                            name="password"
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="password"
                            className="Login-Error"
                        />
                    </div>
                    <button className="Login-Btn" type="submit">Cadastrar</button>
                </Form>
            </Formik>
        </>
    )
}

export default Register
