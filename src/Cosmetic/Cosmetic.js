import React from 'react';
import './Cosmetic.css'
import { addToDB, removeFromDB } from '../utilities/fakedb';


const Cosmetic = (props) => {
    const {name, balance, id} = props.cosmetic;
    const addToCart = (id) =>{
        // console.log('Item added', id);
        // localStorage.setItem(id, 1);
        addToDB(id)
    }

    const addCartWithParam = () => addToCart(id);

    const removeFromCart = id =>{
       removeFromDB(id);
    }

    return (
        <div className='product'>
            
            <h2>Buy this:{name}</h2>
            <p>Only for:{balance}</p>
            <p><small>id:{id}</small></p>
            <div className='add-remove'>
            <button onClick={() => removeFromCart(id)}>Remove Form Cart</button>
            <button onClick={addCartWithParam}>Add to cart</button>
            <button onClick={() => addToCart(id)}>Add to cart:Shortcut</button>
            </div>
        </div>
    );
};

export default Cosmetic;