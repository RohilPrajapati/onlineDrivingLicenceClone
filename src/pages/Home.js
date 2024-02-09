import Team from '../assets/team.png'
import Address from '../assets/address.png'
import Verification from '../assets/verification.png'
import Passport from '../assets/passport.png'
import NewLicense from '../assets/newlicense.png'
import ForgotPassword from '../assets/forgotpassword.png'
import Question from '../assets/question.png'
import CheckStatus from '../assets/check-status.png'

import Card from '../components/Card'
const Home = () => {
    const images_names = [
        {
            name: Team,
            alt_text: 'Personal Detail',
            text: 'Personal Detail'
        },
        {
            name: Address,
            alt_text: 'Address',
            text: 'Address'
        },
        {
            name: Verification,
            alt_text: 'Citizenship Details',
            text: 'Citizenship Details'
        },
        {
            name: Passport,
            alt_text: 'Passport Detail',
            text: 'Passport Detail'
        },
        {
            name: NewLicense,
            alt_text: 'Apply for Driving License',
            text: 'Apply for Driving License'
        },
        {
            name: ForgotPassword,
            alt_text: 'Change Password',
            text: 'Change Password'
        },
        {
            name: Question,
            alt_text: 'Change Security Question',
            text: 'Change Security Question'
        },
        {
            name: CheckStatus,
            alt_text: 'Report the Problem',
            text: 'Report the Problem'
        }
    ]
    const cardList = images_names.map((item, index) => (
        // console.log(item);
        <Card key={index} props={item} />
    ));

    return (
        <div className=''>
            <div className='w-100 row align-item-center'>
                {cardList}
            </div>
        </div>
    )
}

export default Home