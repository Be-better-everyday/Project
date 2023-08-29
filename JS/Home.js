fetch("../Data/tsconfig.json")
    .then(res => res.json())
    .then(data => {
        let Data = Array.from(Object.values(data))[0];
        console.log(Data);

        //Hot Sale Slide Data
        let HotSaleTag = document.querySelector(".swiper2-container .swiper-custom2 .swiper-wrapper");
        for (let i = 0; i < Data.length; i++) {
            if (Data[i].status === "hotSale") {
                let thumb1 = "../img/" + Data[i].thumbnail_1;
                HotSaleTag.innerHTML = HotSaleTag.innerHTML +
                    `
                    <div class="swiper-slide">
                        <div class="item-box">
                           <div class="img-box">
                              <a class="linkToOtherDetail" href="${'Detail.html' + '?main__product=' + encodeURIComponent(Data[i].name)}">
                                <img src="${thumb1}" alt="" />
                                <img class="icon-hotdeal" src="../img/discount.png" alt="" /> 
                              </a>
                           </div>
                           <div class="boxText">
                              <a class="linkToOtherDetail" href="${'Detail.html' + '?main__product=' + encodeURIComponent(Data[i].name)}">
                                <p>${Data[i].name}</p>
                              </a>
                              <p class="sale-text">${Data[i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " ₫"}</p>
                              <p class="price-sale">${Data[i].sale.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " ₫"}</p>
                           </div>
                        </div>
                    </div>
                    `;
            }
        }

        //New Product
        let newProductTag = document.querySelector(".hot-trend .hot-trend-container .hot-trend-grid .column4");
        let old_price = ''
        let new_price = ''
        console.log(newProductTag.innerHTML);
        for (let i = 0; i < Data.length; i++) {
            if (Data[i].status === "new" && Data[i].type === 'EyesGlasses') {
                if (Data[i].sale === undefined) {
                    old_price = ''
                    new_price = Data[i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " ₫"
                } else {
                    new_price = Data[i].sale.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " ₫"
                    old_price = Data[i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " ₫"
                }
                let thumb1 = "../img/" + Data[i].thumbnail_1;
                newProductTag.innerHTML = newProductTag.innerHTML +
                    `
                        <li class="item-container">
                            <div class="item-box-grid">
                                <div class="img-box-grid">
                                    <a class="linkToOtherDetail" href="${'Detail.html' + '?main__product=' + encodeURIComponent(Data[i].name)}">
                                       <img
                                          src="${thumb1}"
                                          alt=""
                                       />
                                    </a>
                                </div>
                                <div class="boxText-grid">
                                    <a class="linkToOtherDetail" href="${'Detail.html' + '?main__product=' + encodeURIComponent(Data[i].name)}">
                                       <p>${Data[i].name}</p>
                                    </a>
                                    <p class="sale-text">${old_price}</p>
                                    <p>${new_price}</p>
                                </div>
                            </div>
                        </li>
                    `;
            }
        }
        let EyeGlasses = document.getElementById("eyeglass")
        let Sunglasses = document.getElementById("sunglass")
        let Lenses = document.getElementById("lens")

        EyeGlasses.addEventListener("click", function () { ChangeProduct('EyesGlasses') })
        Sunglasses.addEventListener("click", function () { ChangeProduct('SunGlasses') })

        Lenses.addEventListener("click", function () { ChangeProduct('Lenses') })

        function ChangeProduct(x) {
            $('#grid-item').empty()
            for (let i = 0; i < Data.length; i++) {
                if (Data[i].sale === undefined) {
                    old_price = ''
                    new_price = Data[i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " ₫"
                } else {
                    new_price = Data[i].sale.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " ₫"
                    old_price = Data[i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " ₫"
                }
                if (Data[i].status === 'new' && Data[i].type === x) {
                    let thumb1 = "../img/" + Data[i].thumbnail_1;
                    newProductTag.innerHTML = newProductTag.innerHTML +
                        `
                                <li class="item-container">
                                    <div class="item-box-grid">
                                        <div class="img-box-grid">
                                            <a class="linkToOtherDetail" href="${'Detail.html' + '?main__product=' + encodeURIComponent(Data[i].name)}">
                                               <img
                                                src="${thumb1}"
                                                alt=""
                                               />
                                            </a>   
                                        </div>
                                        <div class="boxText-grid">
                                           <a class="linkToOtherDetail" href="${'Detail.html' + '?main__product=' + encodeURIComponent(Data[i].name)}">
                                              <p>${Data[i].name}</p>
                                           </a>
                                           <p class="sale-text">${old_price}</p>
                                           <p>${new_price}</p>
                                       </div>
                                   </div>
                                </li>
                            `;
                }
            }
        }
    })
// let data;
// $http.get('../Data/Product.json').
// then(function (response){
//     data = response.data;
//     $scope.Product = data.EyeGlasses
// })
// $scope.changeProduct = function (Product){
//     if(Product === "EyeGlasses"){
//         $scope.Product = data.EyeGlasses
//     }
//     if(Product === "SunGlasses"){
//         $scope.Product = data.SunGlasses
//     }
//     if(Product === "Lense"){
//         $scope.Product = data.Lense
//     }
// }
const swiperText = new Swiper('.swiperText', {
    slidesPerView: 1,
    spaceBetween: 30,
    allowTouchMove: false,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    loop: true,
});
const swiperCustom = new Swiper('.swiper-custom', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
});
const swiperCustom2 = new Swiper(".swiper-custom2", {
    slidesPerView: "auto",
    spaceBetween: 32,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
// let init = false;
// let swiper;
// function swiperCard() {
//     if (window.innerWidth <= 480) {
//         if (!init) {
//             init = true;
//             swiper = new Swiper(".swiper-custom2", {
//                 slidesPerView: "auto",
//                 centeredSlides: true,
//                 spaceBetween: 32,
//                 autoplay: {
//                     delay:3000,
//                     disableOnInteraction: false,
//                     pauseOnMouseEnter: false,
//                     stopOnLastSlide: false,
//                     waitForTransition: true
//                 },
//                 navigation: {
//                     nextEl: '.swiper-button-next',
//                     prevEl: '.swiper-button-prev',
//                 },
//             });
//         }
//     } else if (init) {
//         swiper.destroy();
//         init = false;
//     }
// }
// swiperCard();
// window.addEventListener("resize", swiperCard);

const swiperCustom3 = new Swiper('.swiper-custom3', {
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
buttonStyle = Array.from(document.querySelectorAll('.button-new'))

buttonStyle.forEach(function (mov) {
    mov.addEventListener("click", handleClick, false)
})
function handleClick() {
    buttonStyle.forEach(btn => btn.classList.remove('button-style'));
    this.classList.add('button-style');
}
function linkToKinhPage(url, type, brand) {
    const param = type && brand ? `?type=${type}&brand=${brand}` : type ? `?type=${type}` : brand ? `?brand=${brand}` : '';
    location.href = `./${url}.html${param}`;
}

$(window).scroll(fixedMenu);
function fixedMenu() {
    const tempScrollTop = $(window).scrollTop();
    if (tempScrollTop > 10) {
        document.getElementById("header").style.position = 'fixed';
    } else {
        document.getElementById("header").style.position = 'relative';
    }
}