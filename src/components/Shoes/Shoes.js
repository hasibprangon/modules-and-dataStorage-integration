import React from 'react'; 
import { multiply } from '../../utilities/calculate';

const Shoes = () => {
    const first =5;
    const second = 10;
    const total = multiply(first, second);
    return (
        <div>
            <h1>This is shoes compo</h1>
            <p>Total: {total}</p>
        </div>
    );
};

export default Shoes;