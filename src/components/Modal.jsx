import React from 'react';
import doneGif from '../assets/done.gif';

const Modal = ({ isOpen, onClose, totalCost }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center md:px-20 md:py-8">
                <img src={doneGif} alt="payment done bro" className='w-24' />
                <h2 className="md:text-4xl font-bold mb-5 mt-3">Payment Successfully</h2>
                <hr className='border-[1px] w-80 mb-2'/>
                <p className='md:text-lg  text-gray-500'>Thanks for purchassing</p>
                <p className='md:text-lg  text-gray-500'>Total: ${totalCost}</p>
                <button onClick={onClose} className="mt-4 btn bg-[#9538E2] text-white rounded-xl md:px-20 md:text-lg">Close</button>
            </div>
        </div>
    );
};

export default Modal;
