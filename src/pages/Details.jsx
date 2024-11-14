import React, { useEffect, useContext, useState } from 'react'; 
import { useLocation } from 'react-router-dom'; 
import { ProductsContext } from '../ProductsContext';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

const Details = () => {
    useEffect(() => {
        document.title = "Details | Gadget Heaven"; 
    }, []); 

    const location = useLocation(); 
    const product = location.state; 
    const { addToCart, addToWishlist } = useContext(ProductsContext); 

    const [isAddedToCart, setIsAddedToCart] = useState(false); 

    const [isInWishlist, setIsInWishlist] = useState(false); 

    if (!product) {
        return <div>No product details available.</div>; 
    }

    const handleAddToCart = () => {
        if (isAddedToCart) {
            toast.warn(`${product.product_title} is already in your cart!`); 
        } else {
            addToCart(product);
            toast.success(`${product.product_title} added to cart!`); 
            setIsAddedToCart(true); 
        }
    };

    const handleAddToWishlist = () => {
        if (isInWishlist) {
            toast.warn(`${product.product_title} already in wishlist!`); 

        } else {
            addToWishlist(product);
            toast.success(`${product.product_title} added to wishlist!`); 
            setIsInWishlist(true); 
        }
    };

    return (
        <div className='bg-[#9538E2] h-[10rem] px-3 md:px-0'>

            <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover draggable pauseOnFocusLoss theme="light"/>

            <div className='flex flex-col items-center text-white relative'>

                <h1 className='font-bold md:text-xl py-2'>Product Details</h1>

                <p className='md:w-2/5 text-center text-sm'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                <div className="bg-white text-black max-w-screen-lg mx-auto absolute top-28 p-4 rounded-xl shadow-lg">
                    <div className="hero-content flex flex-col lg:flex-row">

                        <img src={product.product_image} className="max-w-full lg:max-w-sm rounded-lg mb-4 lg:mb-0 lg:mr-6 border-2 py-2"/>

                        <div className="flex flex-col items-start justify-between">

                            <div>
                                <h2 className="text-base md:text-2xl font-bold mb-2">{product.product_title}</h2>

                                <p className="text-xs md:text-lg text-gray-500 font-semibold">Price: ${product.price.toFixed(2)}</p>

                                <p className="text-xs border-2 border-green-300 bg-lime-100 w-24 text-lime-900 text-center rounded-full py-1">{product.availability ? 'In Stock' : 'Out of Stock'}</p>

                                <p className="my-2 text-sm text-gray-500">{product.description}</p>

                                <h3 className="font-semibold mt-4">Specifications:</h3>

                                <ul className="list-decimal list-inside mb-4 text-xs text-gray-500">
                                    {product.specifications.map((spec, index) => (
                                        <li key={index}>{spec}</li>
                                    ))}</ul>
                                <p className='text-sm font-semibold'>Rating</p>
                            </div>

                            <div className="flex items-center mb-4">

                                <div className="flex text-yellow-500">

                                    {[...Array(5)].map((star, index) => (
                                      
                                        <svg key={index} className="w-4 h-4" fill={index < product.rating ? "currentColor" : "none"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 .587l3.668 7.568 8.292 1.206-6 5.828 1.414 8.29L12 18.896l-7.374 3.865L6.342 16l-6-5.828 8.292-1.206L12 .587z" />
                                        </svg>
                                    ))}                        
                                </div>
                                <span className="ml-2 text-xs bg-gray-200 py-1 px-2 rounded-full">{product.rating}</span>
                            </div>

                            <div className='flex items-center gap-6'>

                                <button className="btn btn-primary rounded-full mt-4 w-full" onClick={handleAddToCart} disabled={isAddedToCart}> Add to Cart <i class="fa-solid fa-cart-shopping"></i> </button>

                                <i className="fa-regular fa-heart mt-5 bg-gray-200 p-1 rounded-full border-2 cursor-pointer" onClick={handleAddToWishlist}></i>

                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    );
};

export default Details;
