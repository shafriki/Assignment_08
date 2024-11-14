import React, { useEffect } from 'react';
import Banner from "../components/Banner";
import Products from "../components/Products";

const Home = () => {
    useEffect(() => {
        document.title = "Home | Gadget Heaven";
    }, []);

    return (
        <div>
            <Banner></Banner>
            <Products></Products>
        </div>
    );
};

export default Home;
