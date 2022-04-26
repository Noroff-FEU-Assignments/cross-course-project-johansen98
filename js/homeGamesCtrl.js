 fetch('https://codecafe.one/GameHub/wp-json/wc/store/products')
  .then(response => response.json())
  .then(data =>{
    const products = data;
    let selectedProducts = new Array();

    for( i = 0; i < 5; i++){
      let randomProduct = products[getRandomInt(products.length)];
      
   
      while(selectedProducts.find(product => product.id === randomProduct.id)){
        randomProduct = products[getRandomInt(products.length)];
      }
      selectedProducts.push(randomProduct);
    }

    const rightSImg = document.getElementById('rightSmal')
    const rightMImg = document.getElementById('rightMedium')
    const frontImg = document.getElementById('headImg')
    const leftMImg = document.getElementById('leftMedium')
    const leftSImg = document.getElementById('leftSmal')

    const rightSImgElm = document.createElement('img')
    const rightMImgElm = document.createElement('img')
    const frontImgElm = document.createElement('img')
    const leftMImgElm = document.createElement('img')
    const leftSImgElm = document.createElement('img')



    rightSImgElm.src = selectedProducts[0].images[0].src
    rightSImgElm.alt = selectedProducts[0].images[0].name
    rightSImgElm.addEventListener('click', () => {
    window.location.href = '/html/product-page.html?productNo='+ selectedProducts[0].id
    })
    rightSImg.appendChild(rightSImgElm)

    rightMImgElm.src = selectedProducts[1].images[0].src
    rightMImgElm.alt = selectedProducts[1].images[0].name
    rightMImgElm.addEventListener('click', () => {
    window.location.href = '/html/product-page.html?productNo='+ selectedProducts[1].id
    })
    rightMImg.appendChild(rightMImgElm)

    frontImgElm.src = selectedProducts[2].images[0].src
    frontImgElm.alt = selectedProducts[2].images[0].name
    frontImgElm.addEventListener('click', () => {
    window.location.href = '/html/product-page.html?productNo='+ selectedProducts[2].id
    })
    frontImg.appendChild(frontImgElm)

    leftMImgElm.src = selectedProducts[3].images[0].src
    leftMImgElm.alt = selectedProducts[3].images[0].name
    leftMImgElm.addEventListener('click', () => {
    window.location.href = '/html/product-page.html?productNo='+ selectedProducts[3].id
    })
    leftMImg.appendChild(leftMImgElm)

    leftSImgElm.src = selectedProducts[4].images[0].src
    leftSImgElm.alt = selectedProducts[4].images[0].name
    leftSImgElm.addEventListener('click', () => {
    window.location.href = '/html/product-page.html?productNo='+ selectedProducts[4].id
    })
    leftSImg.appendChild(leftSImgElm)


    let salesProducts = products.filter(product => product.prices.price !== product.prices.regular_price);

    console.log(salesProducts);
   

    var salesContainer = document.getElementById('salesContainer');
    var mobileSalesContainer = document.getElementById('MobileSaleContainer');
    for(i = 0; i < 4; i++){
        const saleProduct = salesProducts[i];

        const saleProductDiv = document.createElement('div');
        const saleProductImg = document.createElement('img');
        const saleProductPrie = document.createElement('h3');

        saleProductImg.src = saleProduct.images[0].src
        saleProductPrie.innerHTML = saleProduct.prices.price +' '+ saleProduct.prices.currency_prefix

        saleProductImg.src = saleProduct.images[0].src
        saleProductImg.alt = saleProduct.images[0].name
        saleProductImg.addEventListener('click', () => {
          window.location.href = '/html/product-page.html?productNo='+ saleProduct.id
        })

        saleProductDiv.appendChild(saleProductImg)
        saleProductDiv.appendChild(saleProductPrie)
        salesContainer.appendChild(saleProductDiv)
        mobileSalesContainer.appendChild(saleProductDiv.cloneNode(true))
        
    }
  });


  function getRandomInt(max){
    return Math.floor(Math.random() * max);
  }

