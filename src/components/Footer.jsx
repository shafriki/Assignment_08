import React from 'react';

const Footer = () => {
    return (
        <footer className="flex flex-col items-center bg-gray-200 p-10 mt-[16rem]">
            <div className="text-center mb-5">
                <h2 className="text-2xl font-bold">Gadget Heaven</h2>
                <p className="text-xs text-gray-600 md:text-base">Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <hr className='border-[1px] hidden md:block mb-4 md:w-[70rem] border-gray-500'/>

            <div className='flex flex-col text-sm md:flex-row items-center gap-5 md:gap-[17rem]'>
            <nav className='flex flex-col'>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Product Support</a>
                <a className="link link-hover">Order Tracking</a>
                <a className="link link-hover">Shipping & Delivery</a>
                <a className="link link-hover">Returns</a>
            </nav>
            <nav className='flex flex-col'>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Careers</a>
                <a className="link link-hover">Contact</a>
            </nav>
            <nav className='flex flex-col '>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover ">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            </div>
        </footer>
    );
};

export default Footer;
