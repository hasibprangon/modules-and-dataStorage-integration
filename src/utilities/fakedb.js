// use local storage to manage cart data
const addToDB = id =>{
    const quantity = localStorage.getItem(id);
    if(quantity){
        console.log('already exist');
        const newQuantity = parseInt(quantity) + 1;
        localStorage.setItem(id, newQuantity);
    }
    else{
        console.log('New Item');
        localStorage.setItem(id, 1);
    }
};
export{addToDB}; 