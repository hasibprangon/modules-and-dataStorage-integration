// use local storage to manage cart data
const addToDB = id =>{
    let shoppingCart = {};

    //get the shopping cart
     const storedCart = localStorage.getItem('shopping-acrt');
     if(storedCart){
        shoppingCart = JSON.parse(storedCart);
     }
     else{
        shoppingCart ={};
     }

    //add quantity
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = parseInt(quantity) + 1;
        shoppingCart[id] = newQuantity;
    }
    else{

        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-acrt', JSON.stringify(shoppingCart));
};

const removeFromDB = id =>{
const storedCart = localStorage.getItem('shopping-acrt');
if(storedCart){
    const shoppingCart = JSON.parse(storedCart)
    if(id in shoppingCart){
       delete shoppingCart[id];
       localStorage.setItem('shopping-acrt', JSON.stringify(shoppingCart));
    }
}
}
export{addToDB, removeFromDB}; 