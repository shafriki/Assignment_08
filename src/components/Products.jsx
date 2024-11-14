import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductsContext } from '../ProductsContext';

const Products = () => {
    const { products } = useContext(ProductsContext); 

    const [selectedCategory, setSelectedCategory] = useState('All Products');
    const navigate = useNavigate();

    // all category here
    const categories = [
        'All Products',
        'Laptops',
        'Phones',
        'iPhones',
        'Head Phone',
        'MacBooks',
        'Smart Watches',
        'Accessories',
    ];

    const filteredProducts = selectedCategory === 'All Products' ? products : products.filter(product => product.category === selectedCategory);

    return (
        <div className='max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 mb-20'>
            <h1 className='md:col-span-5 text-center text-2xl font-bold mb-6'>
                Explore Cutting-Edge Gadgets
            </h1>

            <div className='md:col-span-1 shadow-xl flex flex-col py-3 rounded-xl items-center h-[27rem]'>
                <ul className='space-y-2'>
                    {categories.map((category, index) => (
                        <li 
                            key={index} 
                            className={`cursor-pointer text-center py-2 px-4 rounded-full 
                                ${selectedCategory === category ? 'bg-[#9538E2] text-white' : 'bg-gray-200'}`}
                            onClick={() => setSelectedCategory(category)} 
                        >
                            {category}
                        </li>
                    ))}
                </ul>
            </div>

            <div className='md:col-span-4 grid grid-cols-1 px-4 md:px-0 md:grid-cols-3 gap-4'>
                {filteredProducts.length === 0 ? (
                    <div className='md:col-span-3 text-center font-medium text-lg mt-4'>
                        <p className='md:text-5xl mt-32 text-red-500'>Sorry !! No data available.</p>
                    </div>) : 
                    ( filteredProducts.map((product) => (
                        <div key={product.product_id} className='border rounded-xl shadow-lg p-4'>
                            <img src={product.product_image} alt={product.product_title} className='w-full md:h-56 object-cover rounded-xl p-3 border-2' />
                            <h2 className='font-semibold text-lg mt-2'>{product.product_title}</h2>
                            <p className='font-medium text-xs md:text-base text-[#09080F99] mt-2'>${product.price.toFixed(2)}</p>
                            
                            <div className='flex flex-col items-start space-y-2 mt-3'>
                                <button className='btn rounded-full border-2 border-[#9538E2] text-[#9538E2]' onClick={() => navigate('/details', { state: product })} >View Details</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Products;
