


const category_btn_menu = document.querySelector(".category_btn");
const category_nav_list = document.querySelector(".category_nav_list");
const cart = document.querySelector(".cart");
const nav_menu = document.querySelector(".nav_links");
const open_menu = document.querySelector(".open_menu");
const close_menu = document.querySelector(".close_menu");
const checkCart = document.querySelector(".items_in_cart1");

category_btn_menu.addEventListener("click", () => {
  category_nav_list.classList.toggle("active");
});
open_menu.addEventListener("click", () => {
  nav_menu.classList.add("active");
});
close_menu.addEventListener("click", () => {
  nav_menu.classList.remove("active");
});

function openMenu() {
  cart.classList.add("active");
}
function closeCart() {
  cart.classList.remove("active");
}

var all_json_data;
const cart_items = document.getElementById("cart_items");
let products_cart = JSON.parse(localStorage.getItem("cart")) || [];

window.addEventListener("load", () => {
  displatItem();
  getTotalPrice();
  getCount();
  updateAddButtons()
});

function updateAddButtons() {
    const addButtons = document.querySelectorAll(".btns_add_cart");
    
    addButtons.forEach((btn) => {
      const productId = btn.dataset.id;
      const productInCart = products_cart.find(product => product.id == productId);
      if (productInCart) {
        btn.classList.add("active"); 
         btn.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>
                              Item In Cart`
      } else {
        btn.classList.remove("active");
        btn.innerHTML = ` <i class="fa-solid fa-cart-shopping"></i>
                              Add To Cart`

    }
    });
  }

// ! Add To cart
function addToCart(id, btn) {
  products_cart.push({ ...all_json_data[id], quantity: 1 });
  console.log(products_cart);
  localStorage.setItem("cart", JSON.stringify(products_cart));
  btn.classList.add("active");
  btn.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>
                              Item In Cart`
  displatItem();
  getTotalPrice();
  getCount();
}

// ! Display cards
function displatItem() {
  var item_c = "";
  if (products_cart.length === 0) {
    item_c = `<p class="empty-cart">Your cart is empty</p>`;
  }
  for (let i = 0; i < products_cart.length; i++) {
    item_c += `
        <div class="item_cart">
                <img src="${products_cart[i].img}" alt="">
                <div class="content">
                    <h4>L${products_cart[i].name}</h4>
                    <p class="price_cart">$${products_cart[i].price}</p>
                    <div class="quantity_control" data-id = "${products_cart[i].id}">
                        <button onclick ="decreaseItem(${products_cart[i].id}, -1)" class="decrease_quantity">-</button>
                        <span class="quantity">${products_cart[i].quantity}</span>
                        <button onclick ="increaseItem(${products_cart[i].id}, 1)" class="increase_quantity">+</button>
                    </div>
                </div>

                <button  onclick="removeFromCart(${i})" class="delete_item"><i class = "fa-solid fa-trash-can"></i></button>

            </div>
    `;
  }

  if (cart_items) {
    cart_items.innerHTML = item_c;
  }
  if (checkCart) {
    checkCart.innerHTML = item_c;
  }
}

function increaseItem(id, delta) {
  const item = products_cart.find((p) => p.id === id);
  if (item) {
    item.quantity += delta;
    localStorage.setItem("cart", JSON.stringify(products_cart));
    displatItem();
    getTotalPrice();
    getCount();
  }
}
function decreaseItem(id, delta) {
  const item = products_cart.find((p) => p.id === id);
  const index = products_cart.findIndex((p) => p.id === id);
  if (item && item.quantity > 1) {
    item.quantity += delta;
    localStorage.setItem("cart", JSON.stringify(products_cart));
    displatItem();
    getTotalPrice();
    getCount();
  } else if (item.quantity === 1) {
    removeFromCart(index);
  }
}
// ! delete card
function removeFromCart(index) {
  const removedProduct = products_cart[index];
  products_cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(products_cart));
  const addButtons = document.querySelectorAll(".btns_add_cart");
  addButtons.forEach((btn) => {
    if (btn.dataset.id == removedProduct.id) {
      btn.classList.remove("active");
      btn.innerHTML = ` <i class="fa-solid fa-cart-shopping"></i>
                              Add To Cart`
    }
  });

  displatItem();
  getTotalPrice();
  getCount();
}

// ! Get Total Price
const price_cart_total = document.querySelector(".price_cart_total");
function getTotalPrice() {
  let total = 0;
  for (let i = 0; i < products_cart.length; i++) {
    total += products_cart[i].price * products_cart[i].quantity;
  }
  price_cart_total.textContent = `$${total}`;
}

  // ! Get Count
  const count_item_header = document.querySelector(".count_item_header");
  const Count_item_cart = document.querySelector(".Count_item_cart");
  function getCount() {
    count_item_header.textContent = products_cart.length;
    Count_item_cart.textContent = products_cart.length; 
  }





let lastScrollTop = 0;
const bottomHeader = document.querySelector(".bottom-header");
const header = document.querySelector("header");

function handleScroll() {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > lastScrollTop) {
    bottomHeader.classList.add("hide");
    header.classList.add("hide");
  } else {
    bottomHeader.classList.remove("hide");
    header.classList.remove("hide");
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}


const mediaQuery = window.matchMedia("(min-width: 1025px)");

window.addEventListener("scroll", handleScroll);
// if (mediaQuery.matches) {
//   window.addEventListener("scroll", handleScroll);
// }


// mediaQuery.addEventListener("change", (e) => {
//   if (e.matches) {

//     window.addEventListener("scroll", handleScroll);
//   } else {

//     window.removeEventListener("scroll", handleScroll);
//   }
// });

