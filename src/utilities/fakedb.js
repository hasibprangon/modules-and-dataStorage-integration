// use local storage to manage cart data
const addToDB = id =>{
    let shoppingCart = {};

    //get the shopping cart
     const storedCart = localStorage.getItem('shopping-acrt');
     if(storedCart){
        // console.log(typeof storedCart);

        shoppingCart = JSON.parse(storedCart);
     }
     else{
        shoppingCart ={};
     }

    //add quantity
    const quantity = shoppingCart[id];
    if(quantity){
        // console.log('already exist');

        const newQuantity = parseInt(quantity) + 1;
        shoppingCart[id] = newQuantity;

        // localStorage.setItem(id, newQuantity);
    }
    else{

        shoppingCart[id] = 1;


        // console.log('New Item');
        // localStorage.setItem(id, 1);
    }

    localStorage.setItem('shopping-acrt', JSON.stringify(shoppingCart));
};
export{addToDB}; 