import './error.scss';
import React from 'react';

const Error = () => {
    return (
        <div className='main'>
                <section className="error-text">
                <p className="subtitle">404</p>
                <p className="subtitle">Page Not Found</p>
                <p className="text">Sorry, the page you are looking for does not exist.</p>
                </section>
        </div> 
        
    );
}

export default Error;