import React from 'react';

const CriminalsCard = ({ criminal }) => {

    const { criminalName, criminalId, image, location } = criminal;

    const style = {
        width: "300px",
        height: "400px"
    }

    
    return (
        <div className='mx-auto'>
            <div style={style} className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img   src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name: {criminalName}</h2>
                    <p>ID: {criminalId}</p>
                    <p>Location: {location}</p>
                    <div className="card-actions">
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CriminalsCard;