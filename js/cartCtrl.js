
let totalOrderSum = 0;
function deliteAll(){
  localStorage.clear('cart');         
}

const generateShoppingcart = () =>{
  
  const cartItemElm = document.querySelectorAll('.cartItem')
  for(i=1; i < cartItemElm.length; i++){
    cartItemElm[i].parentNode.removeChild(cartItemElm[i])
  }
  const results = JSON.parse(localStorage.getItem("cart"))

  
  totalOrderSum = 0
  for(i = 0; i < results?.length; i++){
    const result = results[i];
    const cartContainer = document.getElementById("display")
    const orderLineElm = document.createElement("div")
    const orderLineAmountElm = document.createElement("h3")
    const orderLineTitleElm = document.createElement("h3")
    const orderLinePriceElm = document.createElement("h3")
    const sumOrderLinElm = document.createElement("h3");
    const removeLine = document.createElement("button")
    const addLine = document.createElement("button")
  
    removeLine.innerHTML = "-"
    addLine.innerHTML = "+"
    removeLine.style.background = "transparent";
    addLine.style.background = "transparent";
    orderLineAmountElm.innerHTML = result.amount
    orderLinePriceElm.innerHTML = result.price + ",-"
    orderLineTitleElm.innerHTML = result.title;
    
    sumOrderLinElm.innerHTML = result.amount * result.price + ",-";
  
    addLine.classList.add("cartItemBtn");
    removeLine.classList.add("cartItemBtn");
    orderLineElm.classList.add("cartItem");
    cartContainer.appendChild(orderLineElm)
    orderLineElm.appendChild(orderLineTitleElm)
    orderLineElm.appendChild(orderLineAmountElm)
    orderLineElm.appendChild(orderLinePriceElm)
    orderLineElm.appendChild(sumOrderLinElm)
    orderLineElm.appendChild(removeLine)
    orderLineElm.appendChild(addLine)
  
    removeLine.id=i
    addLine.id=i

    addLine.addEventListener('click', (e) => {
      const updatedResults = JSON.parse(localStorage.getItem("cart"))
      const result = updatedResults[e.srcElement.id];

      result.amount ++;

      localStorage.setItem('cart', JSON.stringify(updatedResults))
      generateShoppingcart()
    })
    totalOrderSum = totalOrderSum + result.price * result.amount
  
    removeLine.addEventListener('click',(e) => {
      const updatedResults = JSON.parse(localStorage.getItem("cart"))
      const result = updatedResults[e.srcElement.id];
  if(result.amount === 1){
    updatedResults.splice(parseInt(e.srcElement.id), 1)
  
  }else{
    result.amount --
  }
      localStorage.setItem('cart', JSON.stringify(updatedResults))
      generateShoppingcart()
    })
  }
  const displaySumElm =  document.getElementById('total')

  if(!results || results.length === 0){
    displaySumElm.style.display = "none"
    deleteAllBtn.style.display = "none";
  }else{
    deleteAllBtn.style.display = "block";
    displaySumElm.style.display = "block"
  }
  
  updateSum()
}

const updateSum = () =>{
  const  displaySumElm =  document.getElementById('displaySum')
  if(displaySumElm){

    displaySumElm.parentNode.removeChild(displaySumElm)
  }
  const totalDiv = document.getElementById('total')
  const totalOrderSumElm = document.createElement("h3");

  totalOrderSumElm.id='displaySum'

  totalOrderSumElm.innerHTML = "Sum: " + totalOrderSum
  totalDiv.appendChild(totalOrderSumElm)
}
generateShoppingcart()



