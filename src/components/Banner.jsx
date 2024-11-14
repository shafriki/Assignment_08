import React from 'react';
import { useNavigate } from 'react-router-dom';
import bannerImage from '../assets/banner.jpg';

const Banner = () => {
    const navigate = useNavigate();

    const handleShopNowClick = () => {
        navigate('/dashboard');
    };

    return (
        <div className='mb-40 md:mb-96'>
            <div className='px-3 bg-[#9538E2] h-[30rem] flex flex-col items-center justify-center mx-2 md:mx-5 rounded-2xl border-[7px] border-[#F6F6F6]'>
                <h1 className='text-xl md:w-4/6 md:text-5xl text-center text-white font-bold mb-4'>
                    Upgrade Your Tech Accessorize with Gadget Heaven Accessories
                </h1>
                <p className='text-xs md:text-base text-white md:w-3/6 text-center'>
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
                <button onClick={handleShopNowClick} className='btn rounded-full text-[#9538E2] font-bold mt-5 md:px-10'>Shop Now</button>
                </div>

            <div className='absolute bottom-28 md:-bottom-16 left-1/2 transform -translate-x-1/2 border-2 rounded-2xl'>
                <img src={bannerImage} alt="" className='md:w-[60rem] md:h-[26rem] border-[12px] rounded-2xl border-[#F6F6F6] border-opacity-30'/>
            </div>
        </div>
    );
};

export default Banner;
