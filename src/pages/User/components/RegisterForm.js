import { TextField, Button } from "@mui/material"
import { Link } from "react-router-dom"
import { useFormik } from "formik"
import * as Yup from 'yup'
import moment from "moment"

const RegisterForm = () => {
    const formik = useFormik({
        initialValues: {
            first_name: '',
            middle_name: '',
            last_name: '',
            date_of_birth: '',
            mobile_no: '',
            password: '',
            confirm_password: ''
        },
        validationSchema: Yup.object({
            first_name: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            middle_name: Yup.string()
                .max(20, 'Must be 20 characters or less'),
            last_name: Yup.string()
                .max(20, 'Must be 20 characters or less').required('Required'),
            date_of_birth: Yup.date().required('Required')
                .test(
                    "DOB",
                    "Age is below 18",
                    value => {
                        return moment().diff(moment(value), 'years') >= 18;
                    }),
            mobile_no: Yup.string().required('Required')
                .test(
                    'len',
                    'Must be exactly 10 characters',
                    value => {
                        console.log(typeof value)
                        return value.length === 10
                    }),
            password: Yup.string().min(8, 'Must be more 8 Character')
                .required('Required'),
            confirm_password: Yup.string().min(8, 'Must be more 8 Character')
                .required('Required'),

        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    })
    return (
        <>
            <h3 className='text-left mb-3'>Sign Up</h3>
            <div className="row justify-content-around">
                <div className="col-12">
                    <TextField
                        className="col-12 px-1 my-3"
                        id="my-input"
                        label="First Name"
                        name="first_name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.first_name}
                    />
                    {formik.touched.first_name && formik.errors.first_name ? (
                        <div className='text-danger'>{formik.errors.first_name}</div>
                    ) : null}
                </div>
                <div className="col-6">
                    <TextField
                        className="col-12 px-1 my-3"
                        id="my-input"
                        label="Middle Name"
                        name="middle_name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.middle_name}
                    />
                    {formik.touched.middle_name && formik.errors.middle_name ? (
                        <div className='text-danger'>{formik.errors.middle_name}</div>
                    ) : null}
                </div>
                <div className="col-6">
                    <TextField
                        className="col-12 px-1 my-3"
                        id="my-input"
                        label="Last Name"
                        name="last_name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.last_name}
                    />
                    {formik.touched.last_name && formik.errors.last_name ? (
                        <div className='text-danger col-6'>{formik.errors.last_name}</div>
                    ) : null}
                </div>
                <div className="col-6">
                    <TextField
                        className="col-12 px-1 my-3"
                        InputLabelProps={{ shrink: true }}
                        id="my-input"
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
                </div>
                <div className="col-6">
                    <TextField
                        className="col-12 px-1 my-3"
                        id="my-input"
                        label="Mobile Number"
                        name="mobile_no"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.mobile_no}
                    />
                    {formik.touched.mobile_no && formik.errors.mobile_no ? (
                        <div className='text-danger'>{formik.errors.mobile_no}</div>
                    ) : null}
                </div>
                <div className="col-6">
                    <TextField
                        className="col-12 px-1 my-3"
                        id="my-input"
                        label="Password"
                        type="password"
                        name="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <div className='text-danger'>{formik.errors.password}</div>
                    ) : null}
                </div>
                <div className="col-6">
                    <TextField
                        className="col-12 px-1 my-3"
                        id="my-input"
                        label="Confirm Password"
                        type="password"
                        name="confirm_password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.confirm_password}
                    />
                    {formik.touched.confirm_password && formik.errors.confirm_password ? (
                        <div className='text-danger'>{formik.errors.confirm_password}</div>
                    ) : null}
                </div>
                <div className="text-primary my-2">*requires minimum 8 characters, uppercase, lowercase, number and symbol </div>
                <Button variant="contained w-100 bg-primary text-white py-3 fw-bold rounded-3" onClick={formik.handleSubmit}>Sign Up</Button>
            </div >
            <div className='my-3 text-center'>
                <span>Already have Account ?  <Link to={'../login'} className='text-decoration-none'>Login</Link></span>
            </div>
        </>
    )
}

export default RegisterForm