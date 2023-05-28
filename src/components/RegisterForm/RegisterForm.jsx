import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';

import { signup } from '../../redux/auth/authOperation';

import { Conteiner, FieldForm, Label, InputField, BtnSub } from './RegisterFormStyled';

const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
});

const RegisterForm = () => {

    const dispatch = useDispatch();

    const handleSubmit = (value, { resetForm }) => {
        dispatch(
            signup(value)
        );
        resetForm();
    }

    return (
        <Conteiner>
            <Formik
                initialValues={{ name: '', email: '', password: '' }}
                onSubmit={handleSubmit}
                validationSchema={schema}
            >
                <FieldForm autoComplete='off'>
                    <Label>
                        Name
                        <InputField
                            type='text'
                            name='name'
                            required
                        />
                    </Label>
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
                    <BtnSub type='submit'>Register</BtnSub>
                </FieldForm>
            </Formik>
        </Conteiner>
    )
}

export default RegisterForm;