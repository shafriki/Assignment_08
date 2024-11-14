import React, { createContext, useState, useEffect } from 'react';

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {

    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);
    
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('Products.json'); 
            const data = await response.json();
            setProducts(data);
        };
        fetchData();
    }, []);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const addToWishlist = (product) => {
        setWishlist((prevWishlist) => [...prevWishlist, product]);
    };

    const removeFromWishlist = (productId) => {
        setWishlist((prevWishlist) => prevWishlist.filter(item => item.product_id !== productId));
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter(item => item.product_id !== productId));
    };

    const clearCart = () => {
        setCart([]); 
    };

    const clearWishlist = () => {
        setWishlist([]); 
    };

    return (
        <ProductsContext.Provider value={{ products, cart, wishlist, addToCart, addToWishlist, removeFromWishlist, removeFromCart, clearCart, clearWishlist }}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsProvider;
