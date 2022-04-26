fetch('https://codecafe.one/GameHub/wp-json/wc/store/products')
  .then(response => response.json())
  .then(data =>{
    const products = data;

    const gamesContainer = document.getElementById('allGamesContainer');

    products.forEach(product => {
     const gameContainer = document.createElement('div')
     const gameImg = document.createElement('img')
     const gamePrie = document.createElement('h3')

     gameImg.src = product.images[0].src
     gameImg.alt = product.images[0].name
     gameImg.addEventListener('click', () => {
      window.location.href = '/html/product-page.html?productNo='+ product.id
     }) 
     gamePrie.innerHTML = product.prices.price +' '+ product.prices.currency_prefix 

     gameContainer.appendChild(gameImg)
     gameContainer.appendChild(gamePrie)
     gamesContainer.appendChild(gameContainer)
    })

    
  });

