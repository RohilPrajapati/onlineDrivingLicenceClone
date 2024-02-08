import EmbleOfNepal  from '../assets/emblem_of_Nepal.png'
const Header = () => {
    return (
        <div className="w-100 d-flex justify-content-center my-3 vh-20">
            <img src={EmbleOfNepal} className='w-20 logo' alt='Logo' />
            <div className="w-40 text-start m-2 fw-bold">
                Government of Nepal <br />
                <span className='text-primary'>Ministry of Physical Infrastructure and Transport</span> <br />
                Department of Transport Management <br />
                <span className='text-danger'>Online Driving License System</span> <br />
            </div>
        </div>
    )
}
export default Header