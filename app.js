let storeContainer = document.querySelector("#store-inventory")
let cartContainer = document.querySelector("#cart-inventory")
let cartTotal = document.querySelector("#cart-total")
let total = 0

let storeInventory = [
  { name: 'banana', price: 3, quanity: 0, inStock: true, img: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80' },
  { name: 'apple', price: 2, quanity: 0, inStock: true, img: 'https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' },
  { name: 'pear', price: 70, quanity: 0, inStock: true, img: 'https://images.unsplash.com/photo-1619506147154-01717498fc26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' },
  { name: 'orange', price: 9, quanity: 0, inStock: true, img: 'https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' },
  { name: 'strawberries', price: 35, quanity: 0, inStock: true, img: 'https://images.unsplash.com/photo-1554118879-e459bb1fe1ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=712&q=80' },
  { name: 'dragon fruit', price: 1008, quanity: 0, inStock: true, img: 'https://images.unsplash.com/photo-1617848491003-6c7b600a02b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' },
  { name: 'kiwi', price: 5, quanity: 0, inStock: true, img: 'https://images.unsplash.com/photo-1584209742773-f7b461564449?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8a2l3aXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60' },
  { name: 'lime', price: 5, quanity: 0, inStock: true, img: 'https://images.unsplash.com/photo-1622957461168-202e611c8077?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bGltZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60' },
  { name: 'papaya', price: 50, quanity: 0, inStock: true, img: 'https://images.unsplash.com/photo-1604778234463-762cf933e155?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGFwYXlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60' },
  { name: 'mango', price: 42, quanity: 0, inStock: true, img: 'https://images.unsplash.com/photo-1591073113125-e46713c829ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80' },
]

let cartInventory = []

function drawStoreInventory() {
  let template = ''
  storeInventory.forEach(e => {
    template += `
    <div class="col-12 col-md-4 py-2">
      <div class="bg-secondary text-light text-center card">
        <img src="${e.img}" class="img-fluid img-height">
        <span class="d-flex justify-content-center align-items-center">
        <p class="px-2 fs-5">$${e.price}</p>
          <p class="fs-3">|</p>
          <p class="px-2 fs-5">${e.name}</p>
        </span>
        <button class="btn btn-primary btn-md my-2" onclick="addToCart('${e.name}')">Add to Cart</button>
      </div>
    </div>
    `
  })
  storeContainer.innerHTML = template
}

function addToCart(name) {

  let cartProduct = cartInventory.find(e => e.name == name)
  if (cartProduct != undefined) {
    cartProduct.quanity++
    let template = ``
    cartInventory.forEach(e => {
      template += `
      <div class="py-1">
        <span class="d-flex border-bottom border-top border-2 p-2 align-items-center justify-content-between">
          <p class="border border-2 border-dark border-opacity rounded-5 px-2 py-1 bg-secondary text-warning">X${e.quanity}</p>
          <p class="fs-4">${e.name}</p>
          <p class="fs-4 fw-bold p-1 text-end bg-success">$${e.price * e.quanity}</p>
        </span>
      </div>
      `
    })
    cartContainer.innerHTML = template
  } else {
    let product = storeInventory.find(e => e.name == name)
    product.quanity++
    cartInventory.push(product)
    let template = `
    <div class="py-1">
      <span class="d-flex border-bottom border-top border-2 p-2 align-items-center justify-content-between">
        <p class="border border-2 border-dark border-opacity rounded-5 px-2 py-1 bg-secondary text-warning">X${product.quanity}</p>
        <p class="fs-4">${product.name}</p>
        <p class="fs-4 fw-bold p-1 text-end bg-success">$${product.price}</p>
      </span>
    </div>
    `
    cartContainer.innerHTML += template
  }

  total = 0
  cartInventory.forEach(e => {
    total += e.price * e.quanity
  })
  cartTotal.innerText = `Total: $${total}`

}

function resetCart(){
  cartContainer.innerHTML = ''
  cartInventory = []
  total = 0
  cartTotal.innerText = total
}

drawStoreInventory()