import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from 'yup'
import { Link } from "react-router-dom";
import moment from "moment";

const ForgotPasswordForm = () => {
    const formik = useFormik({
        initialValues: {
            username: "",
            mobile_no: '',
            date_of_birth: ''
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            mobile_no: Yup.string().required('Required')
                .test(
                    'len',
                    'Must be exactly 10 characters',
                    value => {
                        console.log(typeof value)
                        return value.length === 10
                    }),
            date_of_birth: Yup.date().required('Required')
                .test(
                    "DOB",
                    "Age is below 18",
                    value => {
                        return moment().diff(moment(value), 'years') >= 18;
                    }),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        }

    })
    return (
        <>
            <h3 className='text-left mb-3'>Forgot Password</h3>
            <TextField
                id="outline-basic"
                variant="outlined"
                className="w-100 my-3"
                name="username"
                label="Username"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? (
                <div className='text-danger'>{formik.errors.username}</div>
            ) : null}
            <TextField
                id="outline-basic"
                variant="outlined"
                className="w-100 my-3"
                name="mobile_no"
                label="Mobile Number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.mobile_no}
            />
            {formik.touched.mobile_no && formik.errors.mobile_no ? (
                        <div className='text-danger'>{formik.errors.mobile_no}</div>
                    ) : null}
            <TextField
                id="outline-basic"
                variant="outlined"
                className="w-100 my-3"
                InputLabelProps={{ shrink: true }}
                label="Date of Birth"
                type="date"
                name="date_of_birth"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.date_of_birth}
            />
            {formik.touched.date_of_birth && formik.errors.date_of_birth ? (
                        <div className='text-danger'>{formik.errors.date_of_birth}</div>
                    ) : null}
            <Button variant="contained w-100 bg-primary text-white py-3 fw-bold rounded-3 my-3" onClick={formik.handleSubmit}>Proceed</Button>
            <div className='d-flex justify-content-between my-3'>
                <Link to={'../login'} className="text-decoration-none">Back to Login</Link>
                <Link to={'../register'} className="text-decoration-none">Sign Up</Link>
            </div>
        </>
    );
}
export default ForgotPasswordForm