import "react-responsive-carousel/lib/styles/carousel.min.css";
import ban1 from '../../assets/banner/banner1.png';
import ban2 from '../../assets/banner/banner2.png';
import ban3 from '../../assets/banner/banner3.png';
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            interval={5000}
            showArrows={true}
            showThumbs={false}
            showStatus={false}
            showIndicators={true}
            className='my-5'
        >
            {/* Slide 1 with button */}
            <div className="relative">
                <img src={ban1} alt="Promotional Banner 1" />
                <button
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-blue-600 text-black px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                    onClick={() => window.location.href = '/send-parcel'}
                >
                    Send Parcel
                </button>
            </div>

            {/* Slide 2 with button */}
            <div className="relative">
                <img src={ban2} alt="Promotional Banner 2" />
                <button
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-cyan-400 text-black px-10 py-4 rounded-full hover:bg-red-700 transition duration-300 text-lg font-bold"
                    onClick={() => window.location.href = '/be-rider'}
                >
                    Be A Rider
                </button>
            </div>

            {/* Slide 3 with button */}
            <div className="relative">
                <img src={ban3} alt="Promotional Banner 3" />
                <div className="absolute bottom-10 left-20 text-left">
                    <h2 className="text-4xl font-bold text-black mb-4">New Feature</h2>
                    <button
                        className="bg-green-600 text-black px-8 py-3 rounded hover:bg-green-700 transition duration-300"
                        onClick={() => window.location.href = '/new-arrivals'}
                    >
                        Explore Now
                    </button>
                </div>
            </div>
        </Carousel>
    );
};
export default Banner;