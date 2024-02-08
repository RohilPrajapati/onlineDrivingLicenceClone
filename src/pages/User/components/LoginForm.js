import { TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    return (
        <>
            <h3 className='text-left mb-3'>Applicant Login</h3>
            <TextField className="w-100 my-3" id="my-input" label="Username" variant='outlined' />
            <TextField className="w-100 my-3" id="my-input" label="password" variant='outlined' type='password'/>
            <div className='d-flex justify-content-between my-3'>
                <span>Remember Me</span>
                <Link to={'../forgot-password'} className="text-decoration-none">Forgot Password ?</Link>
            </div>
            <Button variant="contained w-100 bg-primary text-white py-3 fw-bold rounded-3">Login</Button>
            <div className='my-3 text-center'>
                <span>Don't have Account ?  <Link to={'../register'} className='text-decoration-none'>Sign Up</Link></span>
            </div>
        </>
    );
}
export default LoginForm