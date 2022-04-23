

  /* WP REST API = https://codecafe.one/GameHub/wp-json */




//Global variable
let product;
window.addEventListener("load", async function () {
  const urlQuery = window.location.search;
  const urlParams = new URLSearchParams(urlQuery);
  const productId = urlParams.get("productNo");

  await fetch('https://codecafe.one/GameHub/wp-json/wc/store/products/' + productId)
  .then(response => response.json())
  .then(data => product = data);
 
  document.getElementById("prodImg").style.backgroundImage = "url(" + product.images[0].src + ")";
  document.getElementById("prodPrice").innerHTML = "NOK " + product.prices.price + ",-";
  document.getElementById("prodTitle").innerHTML = product.name;
  document.getElementById("gameDescription").innerHTML = product.description;
  document.getElementById("smalImg").src = product.imgUrl = product.images[0].src;
  document.getElementById("smalImg").alt = product.imgUrl = product.images[0].name;
});

function addToCart(){
  let shoppingCart = JSON.parse(localStorage.getItem("cart"))
  //Check if shoppingCart allready exists
  if(shoppingCart){
    //Check if shoppingCart allready contains the product
    for(let i = 0; i < shoppingCart.length; i++){
      const cartItem = shoppingCart[i];
      //If exists, update the amount instead of pushing new object. then return.
      if(cartItem.productId === product.id){
        cartItem.amount++;
        localStorage.setItem("cart", JSON.stringify(shoppingCart));
        return;
      }
    }
    //If the compiler reach here, it means the product does not exists, push new shoppingCart object
    shoppingCart.push({
      productId: product.id,
      title: product.name,
      price: product.prices.price,
      amount: 1
    });
    localStorage.setItem("cart", JSON.stringify(shoppingCart));
  
  } else { // shoppingCart does not exists
    shoppingCart = [
      {
        productId: product.id,
        title: product.name,
        price: product.prices.price,
        amount: 1
      }
    ];
    localStorage.setItem("cart", JSON.stringify(shoppingCart));
  }

}
