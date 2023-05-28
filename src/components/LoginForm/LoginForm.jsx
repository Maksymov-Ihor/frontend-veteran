import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';

import { login } from '../../redux/auth/authOperation';

import { Conteiner, FieldForm, Label, InputField, BtnSub } from './LoginFormStyled';

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
})

const LoginForm = () => {

    const dispatch = useDispatch();

    const handleSubmit = (value, { resetForm }) => {
        dispatch(
            login(value)
        );
        resetForm();
    }

    return (
        <Conteiner>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={handleSubmit}
                validationSchema={schema}
            >
                <FieldForm autoComplete='off'>
                    <Label>
                        Email
                        <InputField
                            type='text'
                            name='email'
                            required
                        />
                    </Label>
                    <Label>
                        Password
                        <InputField
                            type='text'
                            name='password'
                            required
                        />
                    </Label>
                    <BtnSub type='submit'>Log In</BtnSub>
                </FieldForm>
            </Formik>
        </Conteiner>
    )
}

export default LoginForm;