import React from 'react';

const Loader = () => {
    return (
        <div className="flex justify-center">
            <div className="spinner-border text-blue-500" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default Loader;
