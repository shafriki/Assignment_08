import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const Branch = () => {
    useEffect(() => {
        document.title = "Branch | Gadget Heaven";
    }, []);

    const branchData = useLoaderData();

    return (
        <div>
            <div className='bg-[#9538E2] flex flex-col items-center py-5 relative'>
            <h2 className="text-base md:text-2xl font-semibold text-center mb-1 text-white">Get In Touch</h2>

            <p className="text-xs md:text-base text-center text-gray-200 w-4/6 md:w-3/6 mb-6">Discover Gadget Heaven everywhere! Access all branch locations and contact numbers here for seamless support and assistance anytime, anywhere.</p>
            </div>

            <div className="grid grid-cols-1 px-3 md:px-0 md:grid-cols-3 gap-5 max-w-screen-xl mx-auto mt-10">
            {branchData.map((branch) => (
                <div key={branch.contact} className="p-4 bg-[#D6F1F9] border-2 border-[#3B6978] rounded-lg shadow-md flex items-center gap-5">

                    {/* img */}
                    <div><img src="GadgetHeaven.png" alt="" className='w-24 border-2 border-[#3B6978] rounded-lg' /></div>
                    
                    {/* text */}
                    <div>
                    <h2 className="font-semibold text-lg">{branch.branchName}</h2>
                    <p className='text-gray-500 text-sm'>
                        <i className="fa-solid fa-location-dot mr-1 text-blue-500"></i>
                        Location: {branch.location}
                    </p>
                    <p>
                        <i className="fa-solid fa-address-book mr-1 text-green-500"></i>
                        Contact: {branch.contact}
                    </p>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
};

export default Branch;
