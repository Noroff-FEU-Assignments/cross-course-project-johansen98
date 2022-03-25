const results = JSON.parse(localStorage.getItem("cart"))
for(i = 0; i < results.length; i++){
  const result = results[i];
  const cartContainer = document.getElementById("display")

  const orderLineElm = document.createElement("div")
  const orderLineAmountElm = document.createElement("h3")
  const orderLineTitleElm = document.createElement("h3")
  const orderLinePriceElm = document.createElement("h3")
  const totalSum = document.createElement("h3");
  const sumOrderLine = document.createElement("h3");
  const removeLine = document.createElement("button")
  const addLine = document.createElement("button")
  const deleteAllBtn = document.getElementById("deleteAllBtn")
  let total = 0;

  results.forEach(result => {
    total += result.price * result.amount
  });
  console.log("Sum:", total)

  removeLine.innerHTML = "-"
  addLine.innerHTML = "+"
  removeLine.style.background = "transparent";
  addLine.style.background = "transparent";
  orderLineAmountElm.innerHTML = result.amount
  orderLinePriceElm.innerHTML = result.price + ",-"
  orderLineTitleElm.innerHTML = result.title;
  totalSum.innerHTML = "Sum: " + total;

  
  sumOrderLine.innerHTML = result.amount * result.price + ",-";




  addLine.classList.add("cartItemBtn");
  removeLine.classList.add("cartItemBtn");
  orderLineElm.classList.add("cartItem");
  totalSum.classList.add("total")
  cartContainer.appendChild(orderLineElm)
  orderLineElm.appendChild(orderLineTitleElm)
  
  orderLineElm.appendChild(orderLineAmountElm)
  orderLineElm.appendChild(orderLinePriceElm)
  orderLineElm.appendChild(sumOrderLine)
  orderLineElm.appendChild(removeLine)
  orderLineElm.appendChild(addLine)
  orderLineElm.appendChild(totalSum)


  function deliteAll(){
  localStorage.clear('cart');         
  
  }

  if(results.length < 0){
    deleteAllBtn.style.display = "none";
  }else{
    deleteAllBtn.style.display = "block";
  }
  

}
