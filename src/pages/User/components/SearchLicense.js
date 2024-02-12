import { TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const SearchLicense = () => {
    return (
        <>
            <h3 className='text-left mb-3'>Smart-Card License Search</h3>
            <div className='row'>
                <TextField className="col-6 px-1 my-3" id="my-input" InputLabelProps={{shrink:true}} label="Date of Birth" variant='outlined' type='date' />
                <TextField className="col-6 px-1 my-3" id="my-input" label="password" variant='outlined' type='License Number' />
            </div>
            <Button variant="contained w-100 bg-primary py-3 fw-bold rounded-3"><Link className='text-white text-decoration-none' to={'/home'}>Search</Link></Button>
        </>
    );
}
export default SearchLicense    