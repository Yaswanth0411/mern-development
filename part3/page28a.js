const products=[
    {id:1, name:"Product1", price:25},
    {id:2, name:"Product2", price:50},
    {id:3, name:"Product3", price:45},
];
let cart=[];
function display(){
    products.forEach(product=>{
        console.log(product);
    }); 
}
display();


const result=products.filter(product=>product.price>40);
console.log(result);


function addToCart(productId){
    for(let i=0; i<products.length; i++){
        if(products[i].id===productId)  {
            cart={...products[i], quantity:1};
            console.log(cart);
            
        }
    }
    
}

addToCart(2);
addToCart(3);
