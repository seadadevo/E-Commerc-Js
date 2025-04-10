const productContainer = document.getElementById("swiper_items_sale");
const productContainerElectronics =
  document.getElementById("swiper_electronics");
const productContainerAppliances = document.getElementById("swiper_appliances");
const productContainerMobiles = document.getElementById("swiper_mobiles");
const apiUrl = "./products.json";
const productCon = document.querySelector(".products");

const getData = async (Api) => {
  try {
    const res = await fetch(Api);
    const data = await res.json();
    all_json_data = data;
    renderUi(data);
  } catch (error) {
    console.error("Cannot fetching cards", error);
  }
};

getData(apiUrl);

const renderUi = (data) => {
  const discountedProducts = data.filter((product) => {
    const percent_price = Math.floor(
      ((product.old_price - product.price) / product.old_price) * 100
    );
    return !isNaN(percent_price) && percent_price > 0;
  });

  const electronics = data.filter(
    (product) => product.category === "electronics"
  );
  const appliances = data.filter(
    (product) => product.category === "appliances"
  );
  const mobiles = data.filter((product) => product.category === "mobiles");

  discountedProducts.forEach((product) =>
    renderCardContent(productContainer, product)
  );
  electronics.forEach((product) =>
    renderCardContent(productContainerElectronics, product)
  );
  appliances.forEach((product) =>
    renderCardContent(productContainerAppliances, product)
  );
  mobiles.forEach((product) =>
    renderCardContent(productContainerMobiles, product)
  );
};

const renderCardContent = (container, product) => {
  const percent_price = Math.floor(
    ((product.old_price - product.price) / product.old_price) * 100
  );
  const priceCon = percent_price
    ? ` <span class="sale_present">${percent_price}%</span>`
    : "";
  container.innerHTML += `
    <div class="swiper-slide product">
                      ${priceCon}
                     
                      <div class="img_product">
                          <a href="#" onclick="saveProductDetails(${
                            product.id
                          })"><img src="${product.img}" alt=""></a>
                      </div>

                      <div class="stars">
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                      </div>

                      <p class="name_product">
                          <a href="product.html" target = "_blank" onclick="saveProductDetails(${
                            product.id
                          })">
                          ${product.name}
                          </a>
                      </p>

                      <div class="price">
                          <p><span>$${product.price}</span></p>
                          <p class="old_price">${product.old_price || ""}</p>
                      </div>

                      <div class="icons">
                          <span onclick="addToCart( ${
                            product.id
                          }, this)" class="btns_add_cart" data-id = ${
    product.id
  }>
                              <i class="fa-solid fa-cart-shopping"></i>
                              Add To Cart
                          </span>
                          <span class="icon_product">
                              <i class="fa-regular fa-heart"></i>
                          </span>
                      </div>
                  </div>
`;
};

function saveProductDetails(productId) {
  const product = all_json_data.find((p) => p.id === productId);
  localStorage.setItem("selectedProduct", JSON.stringify(product));
}
getData(apiUrl)