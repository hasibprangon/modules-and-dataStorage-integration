import React from 'react';
import './Cosmetic.css'


const Cosmetic = (props) => {
    const {name, balance, id} = props.cosmetic;
    const addToCart = (id) =>{
        // console.log('Item added', id);
        localStorage.setItem(id, 1);
    }

    const addCartWithParam = () => addToCart(id);

    return (
        <div className='product'>
            
            <h2>Buy this:{name}</h2>
            <p>Only for:{balance}</p>
            <p><small>id:{id}</small></p>
            <button onClick={addCartWithParam}>Add to cart</button>
            <button onClick={() => addToCart(id)}>Add to cart:Shortcut</button>
        </div>
    );
};

export default Cosmetic;