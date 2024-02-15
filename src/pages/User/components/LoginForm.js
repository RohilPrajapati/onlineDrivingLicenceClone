import { TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup'
const LoginForm = () => {

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            password: Yup.string().min(8,'Must be more 8 Character').required('Required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <>
            <h3 className='text-left mb-3'>Applicant Login</h3>
            <TextField
                className="w-100 my-3"
                id="my-input"
                name='username'
                label="Username"
                variant='outlined'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? (
                <div className='text-danger'>{formik.errors.username}</div>
            ) : null}
            <TextField
                className="w-100 my-3"
                id="my-input"
                label="password"
                name='password'
                variant='outlined'
                type='password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
                <div className='text-danger'>{formik.errors.password}</div>
            ) : null}
            <div className='d-flex justify-content-between my-3'>
                <span>Remember Me</span>
                <Link to={'/forgot-password'} className="text-decoration-none">Forgot Password ?</Link>
            </div>
            <Button variant="contained w-100 bg-primary py-3 fw-bold rounded-3 text-white   " onClick={formik.handleSubmit}>Login</Button>
            <div className='my-3 text-center'>
                <span>Don't have Account ?  <Link to={'/register'} className='text-decoration-none'>Sign Up</Link></span>
            </div>
        </>
    );
}
export default LoginForm