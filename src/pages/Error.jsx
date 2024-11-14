import React from 'react';
import errorbro from '../assets/4o4.png';

const Error = () => {
    return (
        <div className='flex items-center justify-center flex-col'>
            <iframe src="https://giphy.com/embed/YTzh3zw4mj1XpjjiIb" md:width="480" md:height="432"  className="giphy-embed" allowFullScreen></iframe>
            <img src={errorbro} alt="" />
        </div>
    );
};

export default Error;
