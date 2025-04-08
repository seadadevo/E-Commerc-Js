// fetch("./products.json")
//   .then((res) => res.json())
//   .then((data) => {
//     all_json_data = data;
//     const productContainer = document.getElementById("swiper_items_sale");
//     const productContainerElectronics =
//       document.getElementById("swiper_electronics");
//     const productContainerAppliances =
//       document.getElementById("swiper_appliances");
//     const productContainerMobiles = document.getElementById("swiper_mobiles");
//     console.log(all_json_data);
//     data.forEach((product) => {
//       const percent_price = Math.floor(
//         ((product.old_price - product.price) / product.old_price) * 100
//       );

//       if (product.old_price) {
//         productContainer.innerHTML += `
//                     <div class="swiper-slide product">
//                             <span class="sale_present">${percent_price}%</span>

//                             <div class="img_product">
//                                 <a href="#"><img src="${product.img}" alt=""></a>
//                             </div>

//                             <div class="stars">
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                             </div>

//                             <p class="name_product">
//                                 <a href="#">
//                                 ${product.name}
//                                 </a>
//                             </p>

//                             <div class="price">
//                                 <p><span>$${product.price}</span></p>
//                                 <p class="old_price">$${product.old_price}</p>
//                             </div>

//                             <div class="icons">
//                                 <span onclick="addToCart( ${product.id}, this)" class="btns_add_cart">
//                                     <i class="fa-solid fa-cart-shopping"></i>
//                                     Add To Cart
//                                 </span>
//                                 <span class="icon_product">
//                                     <i class="fa-regular fa-heart"></i>
//                                 </span>
//                             </div>
//                         </div>
//         `;
//       }
//     });

//     displayProduct(productContainerElectronics, "electronics");
//     displayProduct(productContainerAppliances, "appliances");
//     displayProduct(productContainerMobiles, "mobiles");
//     function displayProduct(container, condition) {
//       data.forEach((product) => {
//         if (product.category === condition) {
//           const old_price_paragrapg = product.old_price
//             ? ` <p class="old_price">$${product.old_price}</p>`
//             : "";
//           const percent_price = Math.floor(
//             ((product.old_price - product.price) / product.old_price) * 100
//           );
//           const percent_price_div = product.old_price
//             ? ` <span class="sale_present">${percent_price}%</span>`
//             : "";

//           container.innerHTML += `
//                                   <div class="swiper-slide product">
//                                      ${percent_price_div}

//                                 <div class="img_product">
//                                     <a href="#"><img src="${product.img}" alt=""></a>
//                                 </div>

//                                 <div class="stars">
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                 </div>

//                                 <p class="name_product">
//                                     <a href="#">
//                                     ${product.name}
//                                     </a>
//                                 </p>

//                                 <div class="price">
//                                     <p><span>$${product.price}</span></p>
//                                     ${old_price_paragrapg}
//                                     </div>

//                                 <div class="icons">
//                                     <span onclick="addToCart( ${product.id}, this)" class="btns_add_cart">
//                                         <i class="fa-solid fa-cart-shopping"></i>
//                                         Add To Cart
//                                     </span>
//                                     <span class="icon_product">
//                                         <i class="fa-regular fa-heart"></i>
//                                     </span>
//                                 </div>
//                             </div>
//                 `;
//         }
//       });
//     }
//   });
const productContainer = document.getElementById("swiper_items_sale");
const productContainerElectronics =
  document.getElementById("swiper_electronics");
const productContainerAppliances = document.getElementById("swiper_appliances");
const productContainerMobiles = document.getElementById("swiper_mobiles");
const apiUrl = "./products.json";


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
  data.forEach((product) => {
    const percent_price = Math.floor(
      ((product.old_price - product.price) / product.old_price) * 100
    );

    if (!isNaN(percent_price) && percent_price > 0) {
      renderCardContent(productContainer, product);
    }
    if (product.category === "electronics") {
      renderCardContent(productContainerElectronics, product);
    }
    if (product.category === "appliances") {
      renderCardContent(productContainerAppliances, product);
    }
    if (product.category === "mobiles") {
      renderCardContent(productContainerMobiles, product);
    }
  });
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
                          <a href="#"><img src="${product.img}" alt=""></a>
                      </div>

                      <div class="stars">
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                      </div>

                      <p class="name_product">
                          <a href="#">
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
                          }, this)" class="btns_add_cart">
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
