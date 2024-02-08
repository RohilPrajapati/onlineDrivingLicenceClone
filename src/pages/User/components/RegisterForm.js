import { TextField, Button } from "@mui/material"
import { Link } from "react-router-dom"

const RegisterForm = () => {
    return (
        <>
            <h3 className='text-left mb-3'>Sign Up</h3>
            <div className="row justify-content-around">
                <TextField className="col-12 px-1 my-3" id="my-input" label="First Name" />
                <TextField className="col-6 px-1 my-3" id="my-input" label="Middle Name" />
                <TextField className="col-6 px-1 my-3" id="my-input" label="Last Name" />
                <TextField className="col-6 px-1 my-3" InputLabelProps={{shrink:true}} id="my-input" label="Date of Birth" type="date">
                </TextField>
                <TextField className="col-6 px-1 my-3" id="my-input" label="Mobile Number" type="number" />
                <TextField className="col-6 px-1 my-3" id="my-input" label="Password" type="password" />
                <TextField className="col-6 px-1 my-3" id="my-input" label="Confirm Password" type="password" />
                <div className="text-primary my-2">*requires minimum 8 characters, uppercase, lowercase, number and symbol </div>
                <Button variant="contained w-100 bg-primary text-white py-3 fw-bold rounded-3">Sign Up</Button>
            </div>
            <div className='my-3 text-center'>
                <span>Already have Account ?  <Link to={'../login'} className='text-decoration-none'>Login</Link></span>
            </div>
        </>
    )
}

export default RegisterForm