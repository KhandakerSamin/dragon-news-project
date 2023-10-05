import logo from '../../../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='text-center mt-10'>
            <img className='mx-auto mb-5' src={logo} alt="" />
            <p className='text-lg mb-3'>Journalism Without Fear or Favour</p>
            <p className='text-xl mb-8'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;