import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

const ForgotPasswordForm = () => {
    return (
        <>
            <h3 className='text-left mb-3'>Forgot Password</h3>
            <TextField id="outline-basic" variant="outlined" className="w-100 my-3" label="Username"/>
            <TextField id="outline-basic" variant="outlined" className="w-100 my-3" label="password" type="password"/>
            <Button variant="contained w-100 bg-primary text-white py-3 fw-bold rounded-3 my-3">Proceed</Button>
            <div className='d-flex justify-content-between my-3'>
                <Link to={'../login'} className="text-decoration-none">Back to Login</Link>
                <Link to={'../register'} className="text-decoration-none">Sign Up</Link>
            </div>
        </>
    );
}
export default ForgotPasswordForm