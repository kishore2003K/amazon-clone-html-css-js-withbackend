 import formatCurrency from "../script/utils/money.js";

export function getProduct(productId){
let matchingProduct;

products.forEach((product)=>{
  if(product.id === productId){
  matchingProduct = product ;
  }
});
return matchingProduct;
}
class Product{
  id;
  image;
  name;
  rating;
  priceCents;
  keywords;
  constructor(productDetails){
    this.id = productDetails.id;
    this.image = productDetails.image;
    this.name = productDetails.name;
    this.rating = productDetails.rating;
    this.priceCents = productDetails.priceCents;
    this.keywords=productDetails.keywords;
  }
    getStarsURL(){
      return`images/ratings/rating-${this.rating.stars* 10}.png`
    }
    getPrice(){
      return `$${formatCurrency(this.priceCents)}`
    }
    extraInfoHTML(){
      // super.extraInfoHTML(); //super keyword is used to call the parent class method(only in class based inheritance)is called method overriding or replacing  
      return "";
    }
  }
  
  class Clothing extends Product{
    sizeChartLink;
    constructor(productDetails){
      super(productDetails);
      this.sizeChartLink=productDetails.sizeChartLink;
      
    }
    extraInfoHTML(){
      return`<a href="${this.sizeChartLink}" target="_blank">Size Chart</a>`;
    }
  }
  export let products = [];
  export function loadProductfetch(){
    const Promise =fetch('https://supersimplebackend.dev/products')
    .then((response)=>{
      return response.json(); 
    
      
    }).then((productsData)=>{
      products = productsData.map((productDetails)=>{
        if(productDetails.type === "clothing"){
          return new Clothing(productDetails);
        };
        return new Product(productDetails);
      }); 
      })/*.catch(()=>{
        console.log('Error loading products try again later');
      })
    */

   

   return Promise; 
  }
  loadProductfetch();
/*   loadProductfetch().then(()=>{
    console.log('Next Step');
  }) */
    export function loadProducts(fun){
       const xhr = new XMLHttpRequest();
        xhr.addEventListener('load',()=>{   
          products = JSON.parse(xhr.response).map((productDetails)=>{
             if(productDetails.type === "clothing"){
               return new Clothing(productDetails);
              
              }; return new Product(productDetails); });
               console.log('loaded products'); 
               fun();
               });
               xhr.addEventListener('error',()=>{ console.log('Error loading products try again later'); });
                xhr.open('GET','https://supersimplebackend.dev/products');
                 xhr.send(); } 
                 loadProducts();






