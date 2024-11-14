import React, { useEffect, useState } from 'react';
import { ComposedChart, Bar, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const BarChart = () => {
    
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
    fetch('Products.json')
    .then(response => response.json())
    .then(data => {
            const transformedData = data.map(product => ({ name: product.product_title, price: product.price}));
            
            setChartData(transformedData);
            })
            .catch(error => console.error('Fetching error:', error));
    }, []);

    return (
        <div className='max-w-screen-lg mx-auto'>
            <p className='font-bold text-xl mb-4 mt-4'>Statistics</p>
            <ResponsiveContainer width="100%" height={400}>
                <ComposedChart data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                    <CartesianGrid stroke="#DAB6F2" />

                    <XAxis dataKey="name" tick={{ fontSize: 9 }} interval={0} angle={-90} textAnchor="end"></XAxis>

                    <YAxis dataKey="price" label={{ value: 'Price ($)', angle: -90, position: 'insideLeft' }}></YAxis>

                    <Area type="monotone" dataKey="price" fill="#DAB6F2" stroke="#9538E2"></Area>

                    <Bar dataKey="price" barSize={20} fill="#9538E2"></Bar>

                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarChart;
