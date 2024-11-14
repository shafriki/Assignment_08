import React, { useEffect } from 'react';
import BarChart from '../components/BarChart';

const Statistics = () => {
    useEffect(() => {
        document.title = "Statistics | Gadget Heaven";
    }, []);

    return (
        <div className=' mt-10'>
            <div className='bg-[#9538E2] flex flex-col items-center py-5 relative'>
            <h2 className="text-base md:text-2xl font-semibold text-center mb-1 text-white">Statistics</h2>

            <p className="text-xs md:text-base text-center text-gray-200 w-4/6 md:w-3/6 mb-6">This Rechart visualizes Price vs. Product, with the Y-axis representing prices and the X-axis displaying product names for comparison.</p>
            </div>

            <BarChart></BarChart>
            
        </div>
    );
};

export default Statistics;
