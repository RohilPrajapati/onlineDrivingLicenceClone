import EmbleOfNepal  from '../assets/emblem_of_Nepal.png'
import FlagOfNepal  from '../assets/flag_of_Nepal.png'
const InsideHeader = () => {
    return (
        <div className="w-100 d-flex justify-content-center align-items-center my-3 vh-20">
            <img src={EmbleOfNepal} className='inside_logo' alt='Logo' />
            <div className="w-50 text-center m-2 fw-bold">
                Government of Nepal <br />
                <span className='text-primary'>Ministry of Physical Infrastructure and Transport</span> <br />
                Department of Transport Management <br />
                <span className='text-danger'>Online Driving License System</span> <br />
            </div>
            <img src={FlagOfNepal} className='inside_logo' alt='Flag' />
        </div>
    )
}
export default InsideHeader