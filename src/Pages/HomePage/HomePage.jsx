import Banner from '../../components/Banner/Banner';
import OurServices from '../../components/OurServices/OurServices';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import Brans from '../../components/Brands/Brans';
import Reviews from '../../components/Reviews/Reviews';
import { Suspense } from 'react';
const HomePage = () => {
    return (
        <div>
            <div className='w-11/12 mx-auto'>
                <Banner />
                <HowItWorks />
                <OurServices/>
                <Brans />
                <Reviews />
            </div>
        </div>
    );
};

export default HomePage;