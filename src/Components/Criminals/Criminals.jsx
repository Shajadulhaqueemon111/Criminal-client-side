import React, { useEffect, useState } from 'react';
import CriminalsCard from './CriminalsCard';

const Criminals = () => {
    const [criminals, setCriminals] = useState([]);

    useEffect(() => {
        fetch('https://personal123-blond.vercel.app/member')
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => setCriminals(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h2 className='text-3xl text-center font-bold'>Criminal <span className='text-purple-600'>List</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {criminals.map(criminal => (
                    <CriminalsCard key={criminal._id} criminal={criminal} />
                ))}
            </div>
        </div>
    );
};

export default Criminals;
