import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <div>
            <button className="btn bg-gradient-to-r from-cyan-400 to-sky-600 text-white uppercase border-none">{children}</button>
        </div>
    );
};

export default PrimaryButton;