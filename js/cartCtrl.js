const results = JSON.parse(localStorage.getItem("cart"))
let totalOrderSum = 0;

const removeItem = () =>{

}
const generateShoppingcart = () =>{
  
  for(i = 0; i < results.length; i++){
    const result = results[i];
    const cartContainer = document.getElementById("display")
    const orderLineElm = document.createElement("div")
    const orderLineAmountElm = document.createElement("h3")
    const orderLineTitleElm = document.createElement("h3")
    const orderLinePriceElm = document.createElement("h3")
    const sumOrderLinElm = document.createElement("h3");
    const removeLine = document.createElement("button")
    const addLine = document.createElement("button")
    const deleteAllBtn = document.getElementById("deleteAllBtn")
  
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
  
    removeLine.addEventListener('click',(e) => {
      const updatedResults = JSON.parse(localStorage.getItem("cart"))
      const result = updatedResults[e.srcElement.id];
  if(result.amount === 1){
    updatedResults.splice(parseInt(e.srcElement.id), 1)
  
  }else{
    result.amount --
  }
      localStorage.setItem('cart', JSON.stringify(updatedResults))
    })
  
    function deliteAll(){
      localStorage.clear('cart');         
      
    }
    
    if(results.length < 0){
      deleteAllBtn.style.display = "none";
    }else{
      deleteAllBtn.style.display = "block";
    }
  
    totalOrderSum += result.price * result.amount
    
  }
}
  const totalDiv = document.getElementById('total')
  const totalOrderSumElm = document.createElement("h3");

  totalOrderSumElm.innerHTML = "Sum: " + totalOrderSum
  totalDiv.appendChild(totalOrderSumElm)


