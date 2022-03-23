const results = JSON.parse(localStorage.getItem("cart"))
for(i = 0; i < results.length; i++){
  const result = results[i];
  const cartContainer = document.getElementById("display")

  const orderLineElm = document.createElement("div")
  const orderLineAmountElm = document.createElement("h3")
  const orderLineTitleElm = document.createElement("h3")
  const orderLinePriceElm = document.createElement("h3")
  const sumOrderLine = document.createElement("h3");
  const removeLine = document.createElement("button")
  const addLine = document.createElement("button")

  removeLine.innerHTML = "-"
  addLine.innerHTML = "+"
  removeLine.style.background = "transparent";
  addLine.style.background = "transparent";
  
  orderLineAmountElm.innerHTML = result.amount
  orderLinePriceElm.innerHTML = result.price + ",-"
  orderLineTitleElm.innerHTML = result.title
  sumOrderLine.innerHTML = result.amount * result.price + ",-";


  addLine.classList.add("cartItemBtn");
  removeLine.classList.add("cartItemBtn");
  orderLineElm.classList.add("cartItem");
  
  cartContainer.appendChild(orderLineElm)
  orderLineElm.appendChild(orderLineTitleElm)
  orderLineElm.appendChild(orderLineAmountElm)
  orderLineElm.appendChild(orderLinePriceElm)
  orderLineElm.appendChild(sumOrderLine)
  orderLineElm.appendChild(removeLine)
  orderLineElm.appendChild(addLine)

}
removeItem(){
    
}