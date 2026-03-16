function getProductdetails(productData) {

    console.log(productData);
    productData.price = '2000$';

}

let product = {
    name: 'macbook pro',
    brand: 'apple',
    stock: 'in-stock',
    price: '1000$'
}


getProductdetails(product); //call by reference


console.log(product.price);//2000$


//u1 = u2;


