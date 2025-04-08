const category_btn_menu = document.querySelector('.category_btn');
const category_nav_list = document.querySelector('.category_nav_list');
const cart = document.querySelector('.cart');

category_btn_menu.addEventListener('click', () =>{ 
    category_nav_list.classList.toggle('active');
})

function openMenu() {
    cart.classList.add('active')
}
function closeCart() {
    cart.classList.remove('active')
}


var all_json_data;
const  cart_items = document.getElementById('cart_items');
let products_cart = [];

// ! Add To cart
function addToCart(id, btn) {
    products_cart.push(all_json_data[id])
    btn.classList.add('active')
    displatItem()
    getTotalPrice()
    getCount()
}

// ! Display cards
function displatItem() {
    var item_c;
    
    for (let i = 0; i < products_cart.length; i++) {
    item_c += 
    `
        <div class="item_cart">
                <img src="${products_cart[i].img}" alt="">
                <div class="content">
                    <h4>L${products_cart[i].name}</h4>
                    <p class="price_cart">${products_cart[i].price}</p>
                    <div class="quantity_control">
                        <button class="decrease_quantity">-</button>
                        <span class="quantity">1</span>
                        <button class="increase_quantity">+</button>
                    </div>
                </div>

                <button  onclick="removeFromCart(${i})" class="delete_item"><i class = "fa-solid fa-trash-can"></i></button>

            </div>
    `
    }
    
    
    if(cart_items) {
        cart_items.innerHTML = item_c;
    }
    
}

// ! delete card
function removeFromCart(index) {
    products_cart.splice(index, 1);
    displatItem()
    getTotalPrice()
    getCount()
}

// ! Get Total Price
const price_cart_total = document.querySelector('.price_cart_total')
function getTotalPrice() {
    let total = 0;
     for (let i = 0; i < products_cart.length; i++) {
       total += products_cart[i].price;
     }
    price_cart_total.textContent = `$${total}`;
}

// ! Get Count
const count_item_header = document.querySelector('.count_item_header')
const Count_item_cart = document.querySelector('.Count_item_cart')
function getCount() {
    count_item_header.textContent = products_cart.length;
    Count_item_cart.textContent = products_cart.length;
}


