import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/4Kghnzc/download-37.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Police</h1>
            <p className="mb-5 text-xl font-bold">"Crime" or "crime" generally refers to any illegal act or behavior in society. Criminology or jurisprudence may vary in its type, scale and approach, and may take place at the local or international level.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;