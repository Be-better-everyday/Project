// decode detail link
let urlParams2 = new URLSearchParams(window.location.search);
let mainProductName2 = decodeURIComponent(urlParams2.get('main__product'));
let type = "";
function linkToKinhPage(url, type, brand) {
    const param = type && brand ? `?type=${type}&brand=${brand}` : type ? `?type=${type}` : brand ? `?brand=${brand}` : '';
    location.href = `./${url}.html${param}`;
}

if(mainProductName2 == 'null'){
    console.log('main__product is null then main__product dafault is \'Rayban 3\'')
}else{
    let mainProductNameTag = document.querySelector('.main__product.name');
    mainProductNameTag.innerText = mainProductName2;
}

// Retrieve "hotSale" Data from JSON
function getHotSaleAndNewProduct () {
    fetch("../Data/tsconfig.json")
        .then(res => res.json())
        .then(data => {
            let Data = Array.from(Object.values(data))[0];
            // console.log(Data);

            //Hot Sale Slide Data
            let HotSaleTag = document.querySelector(".swiper-hotsale .swiper-wrapper");
            for (let i = 0; i < Data.length; i++) {
                // console.log(type);
                // take link test error
                if(i >= 0 && i < 10){
                    console.log(i + ' Detail.html' + '?main__product=' + encodeURIComponent(Data[i].name));
                }
                if (Data[i].status === "hotSale"  && Data[i].type === type) {
                    let thumb1 = "../img/" + Data[i].thumbnail_1;
                    let salePrice = 0;
                    let oldPrice = 0;
                    if(Data[i].sale ===undefined){
                        salePrice = Data[i].price;
                    }else {
                        salePrice = Data[i].sale;
                        oldPrice = Data[i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " ₫";
                    }
                    HotSaleTag.innerHTML = HotSaleTag.innerHTML +
                        `
                    <div class="swiper-slide">
                        <a class="linkToOtherDetail" href="${'Detail.html' + '?main__product=' + encodeURIComponent(Data[i].name)}">
                            <div class="sp_product">
                                
                                    <div class="sp_img">
                                        <img src="${thumb1}" alt="">
                                    </div>
                                <div class="sp_name compare__product name">${Data[i].name}</div>
                                <div class="sp_price no_sale">${salePrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " ₫"}</div>
                                <div class="sp_price underline-text">${oldPrice}</div>
                            </div>
                        </a>
                        <div class="compare_container">
                            <a
                                    href="compare_product.html?sp_name=GK%20%E2%80%93%20380CK070&main__product=GK%20%E2%80%93%20380CK051" class="sp_compare">Detailed comparison</a>
                        </div>
                    </div>
                    `;
                }
            }

// New Product
            let newProductTag = document.querySelector(".hp_container .swiper-new-product .swiper-wrapper");
            console.log(newProductTag.innerHTML);
            for (let i = 0; i < Data.length; i++) {
                if (Data[i].status === "new" && Data[i].type === type) {
                    let thumb1 = "../img/" + Data[i].thumbnail_1;
                    let salePrice = 0;
                    let oldPrice = "";
                    if(Data[i].sale ===undefined){
                        salePrice = Data[i].price;
                    }else {
                        salePrice = Data[i].sale;
                        oldPrice = Data[i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " ₫";
                    }
                    newProductTag.innerHTML = newProductTag.innerHTML +
                        `
                    <div class="swiper-slide">
                        <a class="linkToOtherDetail" href="${'Detail.html' + '?main__product=' + encodeURIComponent(Data[i].name)}">
                            <div class="sp_product">
                                <div class="sp_img">
                                    <img src="${thumb1}" alt="">
                                </div>
                                <div class="sp_name compare__product name">${Data[i].name}</div>
                                <div class="sp_price no_sale">${salePrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " ₫"}</div>
                                <div class="sp_price underline-text">${oldPrice}</div>
                            </div>
                        </a>
                        <div class="compare_container">
                            <a
                                    href="compare_product.html?sp_name=GK%20%E2%80%93%20380CK070&main__product=GK%20%E2%80%93%20380CK051" class="sp_compare">Detailed comparison</a>
                        </div>
                    </div>
                `;
                }
            }
        })
        .then(() => {
            const mainProduct = document.querySelector('.main__product.name');
            const mainProductName = mainProduct.textContent;
            // const mainProductName = "Burberry 11";
            let link = "compare_product.html";
            let compareLink = "1";

            let compareLinkArr = document.querySelectorAll('.sp_compare');

            for (let i = 0; i < compareLinkArr.length; i++) {
                // create a compareLink
                let spProduct = compareLinkArr[i].closest('.swiper-slide');
                let compareProduct = spProduct.querySelector('.compare__product.name');
                let compareProductName = compareProduct.textContent;
                compareLink = `${link}?sp_name=${encodeURIComponent(compareProductName)}&main__product=${encodeURIComponent(mainProductName)}`;
                // add link to href
                compareLinkArr[i].href = compareLink;
            }
            swiperAllSlide()
        })
    }
function swiperAllSlide(){
    // Main Product

    let swiper3 = new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 3.5,
        freeMode: true,
        watchSlidesProgress: true,
    });
    let swiper4 = new Swiper(".mySwiper2", {
        // loop: true,
        spaceBetween: 10,
        navigation: {
            nextEl: ".slider__main-product .swiper-button-next",
            prevEl: ".slider__main-product .swiper-button-prev",
        },
        on: {
            init: function(){
                let slides = swiper3.slides;
                for(let i = 0; i < slides.length; i++){
                    let img = slides[i].querySelector('img');
                    if(i === 0){
                        img.style.opacity = "1";
                    }else {
                        img.style.opacity = "0.5";
                    }
                }
            }
        },
        thumbs: {
            swiper: swiper3,
        },
    });

    swiper4.on("slideChange", function() {
        let activeIndex = swiper4.activeIndex;
        let slides = swiper3.slides;
        for(let i = 0; i < slides.length; i++){
            let img = slides[i].querySelector('img');
            if(i === activeIndex){
                img.style.opacity = "1";
            }else {
                img.style.opacity = "0.5";
            }
        }
    })
// New Product
    const swiper2 = new Swiper('.swiper-new-product', {
        slidesPerView: 3,
        // slidesPerGroup: 1,
        autoplay: { delay: 4000 },
        spaceBetween: 15,
        loopAdditionalSlides: 1,
        loop: true,
        navigation: {
            nextEl: '.swiper-new-product .swiper-button-next',
            prevEl: '.swiper-new-product .swiper-button-prev',
        },
    });
// Hot Sale
    const swiperHS = new Swiper('.swiper-hotsale', {
        slidesPerView: 5,
        // slidesPerGroup: 1,
        autoplay: { delay: 4000 },
        spaceBetween: 30,
        loopAdditionalSlides: 1,
        loop: true,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

//retrieve data for Detail.html
function capitalizeFirstLetter(str) {
    if(str === undefined || str.length === 0) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

let mainProductSlider = document.querySelector('.main__productZ');
function loadDataMainItem(element, item){
    return new Promise((resolve, reject) => {
        let typeTag = element.querySelector('.type');
        let materialTag = element.querySelector('.material');
        let colorTag = element.querySelector('.color');
        let shapeTag = element.querySelector('.shape');
        let brandTag = element.querySelector('.brand');

        let priceTag = element.querySelector('.price');
        let newPriceTag = element.querySelector('.p_info .new_price');
        let oldPriceTag = element.querySelector('.p_info .old_price');

        let Thumbnail1 = element.querySelector('.thumbnail1');
        let Thumbnail2 = element.querySelector('.thumbnail2');
        let Thumbnail3 = element.querySelector('.thumbnail3');

        let Thumb1 = element.querySelector('.Thumbnail1');
        let Thumb2 = element.querySelector('.Thumbnail2');
        let Thumb3 = element.querySelector('.Thumbnail3');

        typeTag.innerText = "Type: " + capitalizeFirstLetter(item.type);
        materialTag.innerText = "Material: " + capitalizeFirstLetter(item.material);
        colorTag.innerText = "Color: " + capitalizeFirstLetter(item.color);
        shapeTag.innerText = "Shape: " + capitalizeFirstLetter(item.shape);
        brandTag.innerText = "Brand: " + capitalizeFirstLetter(item.brand);
        priceTag.innerText = "Price: " + item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " ₫";

        Thumbnail1.src = "../img/" + item.thumbnail_1;
        Thumbnail2.src = "../img/" + item.thumbnail_2;
        Thumbnail3.src = "../img/" + item.thumbnail_3;

        Thumb1.src = "../img/" + item.thumbnail_1;
        Thumb2.src = "../img/" + item.thumbnail_2;
        Thumb3.src = "../img/" + item.thumbnail_3;
        type = item.type;
        console.log("type1: " + type);
        if(item.sale === undefined){
            console.log("check")
            newPriceTag.innerText = item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " ₫";
        }else {
            newPriceTag.innerText = item.sale.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " ₫";
            oldPriceTag.innerText = item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " ₫";
        }
        resolve();
        getHotSaleAndNewProduct();
        $(window).scroll(fixedMenu);
    })
}

let itemData = [];
let item;
fetch("../Data/tsconfig.json")
    .then(res => res.json())
    .then(data => {
        itemData = Array.from(Object.values(data))[0];
        let mainItemNameTag = document.querySelector(".main__product.name");
        let mainItemName = mainItemNameTag.innerText;

        for(let i = 0; i < itemData.length; i++){
            if(itemData[i].name === mainItemName){
                item = itemData[i];
                break;
            }
        }
        if(mainProductSlider != null)loadDataMainItem(mainProductSlider, item);
        else {console.log("mainProductSlider does not exist");}
    })
    .catch(error => {
        console.log("Error: ",error);
    });

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM Loaded success!")
});

function plusItem() {
    let quantity = document.querySelector('.quantity input').value;
    quantity++;
    document.querySelector('.quantity input').value = quantity;
}
function minusItem() {
    let quantity = document.querySelector('.quantity input').value;
    if (quantity > 1) quantity--;
    document.querySelector('.quantity input').value = quantity;
}

// Policy-Description--------------------------
let policyDesc = document.querySelectorAll('.pd_container .pd_text span');
console.log(policyDesc.length);
function add_onclick(element){
    element.classList.add('onclick');
}
function remove_onclick(element){
    element.classList.remove('onclick');
}

for(let i = 0; i < policyDesc.length; i++){
    policyDesc[i].addEventListener('click',()=>{
        for(let j = 0; j < policyDesc.length; j++){
            remove_onclick(policyDesc[j]);
        }
        add_onclick(policyDesc[i]);
    })
}

// Add content to "pd_content"
let pdContent = document.querySelector('.pd_content').innerHTML;
document.querySelector('.pd_content').innerHTML =
    `<p>Responsible for the product: Eyeonic Trading and Service Co., Ltd</p>
                <p>Warning: Store in a glass case</p>
                <p>User manual:</p>
                <p>+ Remove glasses with 2 hands</p>
                <p>+ Do not put the glasses in the trunk of the car or places with high temperatures that deform the glass.</p>
                <p>+ Do not put the glasses in the book bag if there is no glasses case, sharp objects such as keys will scratch the glasses.</p>
                <p>+ Do not wash the glass cleaner with strong detergents that will peel off the coating</p>`;

policyDesc[0].addEventListener('click', ()=> {
    pdContent =
        `<p>Responsible for the product: Eyeonic Trading and Service Co., Ltd</p>
                <p>Warning: Store in a glass case</p>
                <p>User manual:</p>
                <p>+ Remove glasses with 2 hands</p>
                <p>+ Do not put the glasses in the trunk of the car or places with high temperatures that deform the glass.</p>
                <p>+ Do not put the glasses in the book bag if there is no glasses case, sharp objects such as keys will scratch the glasses.</p>
                <p>+ Do not wash the glass cleaner with strong detergents that will peel off the coating</p>`;
    document.querySelector('.pd_content').innerHTML = pdContent;
})

policyDesc[1].addEventListener('click', ()=> {
    pdContent =
        `<p>We promise to deliver within 3 days from the date of order.</p>`;
    document.querySelector('.pd_content').innerHTML = pdContent;
})

policyDesc[2].addEventListener('click', ()=> {
    pdContent =
        `<p>You can exchange and return the goods for free within 7 days of receiving the goods if the defect is caused by the manufacturer.</p>`;
    document.querySelector('.pd_content').innerHTML = pdContent;
})

//heart icon
// -------------heartIcon---------------
let heartIcon = document.querySelector('.fa-heart');
let check = false;
function offHover(){
    if(!check){
        this.classList.add('fa-sharp');
        this.classList.add('fa-regular');
        this.classList.remove('fa-solid');
    }
}

function hover(){
    if(!check){
        this.classList.remove('fa-sharp');
        this.classList.remove('fa-regular');
        this.classList.add('fa-solid');
    }
}

heartIcon.addEventListener('mouseover',hover);
heartIcon.addEventListener('mouseout',offHover);

heartIcon.addEventListener('click', ()=>{
    if(check === false){
        hover.call(heartIcon);
        check = true;
    }else{
        offHover.call(heartIcon);
        check = false;
    }
})

// ----------------indexedDB------------------

//----------------create objectStore--------------------
if(!window.indexedDB) {
    console.log('Your browser doesn\'t not support IndexedDB')
}else {
    console.log('Your browser support IndexedDB')
}

let db;
const request = indexedDB.open('productsInCart',1);

request.onupgradeneeded =  function(e) {
    db = e.target.result;
    let objectStore = db.createObjectStore("shoppingCart",{keyPath:"name"});
    objectStore.createIndex("quantity","quantity",{unique:false});
    console.log("Create objectStore success");
}

request.onerror = function(e){
    console.log("Error when create DB: " + e.target.errorCode);
}

request.onsuccess = function(e) {
    db = e.target.result;
    console.log("Create indexedDB success");
    db.close();
}

// -------------------Add item-----------------
// let db;

let addCartTag = document.querySelector('.add_cart .ac_text');

function addItem(name, quantity) {
    let requestOpen = indexedDB.open("productsInCart", 1);

    requestOpen.onupgradeneeded =  function(e) {
        db = e.target.result;
        let objectStore = db.createObjectStore("shoppingCart",{keyPath:"name"});
        objectStore.createIndex("quantity","quantity",{unique:false});
        console.log("Create objectStore success");
    }
    requestOpen.onerror = function() {
        console.log("Add item fail");
    }
    requestOpen.onsuccess = function (e) {
        db = e.target.result;
        let trans = db.transaction("shoppingCart", "readwrite");
        let objectStore = trans.objectStore("shoppingCart");

        let findName = objectStore.get(name);
        findName.onsuccess = function (e) {
            const result = e.target.result;
            if(result === undefined){

                // Cần đảm bảo keyPath của newObject phải trùng với thuộc tính của object "Product" trong tình huống này là "name:
                let newItem = {name: name, quantity: parseInt(quantity)};
                let addItem = objectStore.add(newItem);
                addItem.onsuccess = function (){
                    console.log("Add new item " + newItem.name + " success, quantity is " + newItem.quantity);
                }
                addItem.onerror = function () {
                    console.log("Add new item " + name + " fail");
                }
            }else{
                result.quantity = parseInt(result.quantity) + parseInt(quantity);
                let plusItem = objectStore.put(result);
                plusItem.onsuccess = function () {
                    console.log("Quantity of " + result.name + " is increased by " + quantity + ".New quantity is " + result.quantity);
                    alert("Quantity of " + result.name + " is increased by " + quantity + ".New quantity is " + result.quantity);
                }
                plusItem.onerror = function() {
                    console.log("Add more item failed")
                    alert("Add more item failed")
                }
            }
        }
        trans.oncomplete = function() {
            db.close();
        };
    }
}
addCartTag.addEventListener('click', function(){
    let name = document.querySelector('.main__product.name').innerText;
    let quantity = document.querySelector('.p_info .quantity input').value;
    console.log("Add Item:" + name + " ,quantity: " + quantity);
    alert("Add New Item:" + name + " ,quantity: " + quantity);
    addItem(name, quantity);
    loadCart();
})

// ---------------------------load Data to Model Cart-----------------------------

// --------------Test Get Item from IndexedDB------------
// (Check tagName ac_icon again when update Detail.html)

let heartIconTag = document.querySelector('.p_info .add_cart .ac_icon1');

function getAllItem (){
    let requestOpen = indexedDB.open("productsInCart",1);

    requestOpen.onupgradeneeded =  function(e) {
        db = e.target.result;
        let objectStore = db.createObjectStore("shoppingCart",{keyPath:"name"});
        objectStore.createIndex("quantity","quantity",{unique:false});
        console.log("Create objectStore success");
    }

    requestOpen.onerror = function () {
        console.log("Open indexedDB fail");
    }
    requestOpen.onsuccess = function (e) {
        db = e.target.result;
        let trans = db.transaction("shoppingCart","readonly");
        let objectStore = trans.objectStore("shoppingCart");
        let getAll = objectStore.getAll();

        getAll.onerror = function(){
            console.log("Can\'t get data from database");
        }
        getAll.onsuccess = function (){
            console.log("All item in the cart are: ");
            console.table(getAll.result);
        }
        db.close();
    }
}

heartIconTag.addEventListener('click', function (){
    getAllItem();
})

function fixedMenu() {
    const tempScrollTop = $(window).scrollTop();
    if (tempScrollTop > 10) {
        document.getElementById("header").style.position = 'fixed';
    } else {
        document.getElementById("header").style.position = 'relative';
    }
};