import { Link } from 'react-router-dom';
import background from '../assets/Image/background.png'

const Error = () => {
    return (
        <div className='h-[57rem]' style={{backgroundImage:`url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        }}>
            <div className='text-center pt-52 space-y-5'>
                <h1 className=' text-9xl text-orange-600 font-bold'>404</h1>
                <h3 className='text-4xl font-medium'>Sorry,we could not find this page</h3>
                <p className='text-xl'>But dont worry ,you cab find plenty of other things on our homepage</p>
                <Link to={'/'}>
                <button className='bg-orange-600 text-white px-5 py-3 rounded-lg text-lg mt-4'>Back to homepage</button>
                </Link>
            </div>
        </div>
    );
};

export default Error;