let boxModelCartTag = document.querySelector('.boxModelCart');
boxModelCartTag.innerHTML = boxModelCartTag.innerHTML +
    `
        <div class="cart__container">
        <div class="close__btn"><i class="close__btn__icon fa-solid fa-xmark"></i></div>
        <div class="noItemAlert">No products in the cart</div>
        <!--            All added Items-->
        <div class="added__items">
            <div class="allItems__container">

                <!--     itemInCart tag will be added here-->

            </div>
        </div>

        <div class="subtotal">Subtotal: 1,110,00</div>

        <div class="payment__btn__container">
            <a href="cart.html">
                <button class="payment__btn">Payment</button>
            </a>
        </div>
    </div>
    `;

// afterCartIcon.dataset.content = '0';

let subtotal1 = 0;
loadCart();
function loadCart(){
    addProduct()
        .then(() => {
            getQuantity();
            addDeleteEvent()
        })
        .catch((error) => {
            console.log(error);
        });
}

function addProduct() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('productsInCart', 1);

        request.onerror = function (){
            reject();
        }
        request.onsuccess = function (e) {
            let db = e.target.result;
            let trans = db.transaction('shoppingCart','readonly');
            let objectStore = trans.objectStore('shoppingCart');
            let getAll = objectStore.getAll();

            getAll.onerror = function() {
                reject();
            }
            getAll.onsuccess = function (e) {
                let data = e.target.result;
                let allItemsContainerTag = document.querySelector('.allItems__container');
                allItemsContainerTag.innerHTML = "";
                let totalQuantity = 0;
                for(let i = 0; i < data.length; i++){
                    // check = true;
                    totalQuantity += data[i].quantity;
                    let newProductRow = document.createElement("div");
                    newProductRow.className = "itemInCart";
                    newProductRow.innerHTML = `
                        <div class="item1">
                        <a class="item1" href="${'Detail.html' + '?main__product=' + encodeURIComponent(data[i].name)}">
                            <img class="img_item" src="../img/t-1.jpg" alt="">
                        </a>
                        </div>
                        <div class="product__name">${data[i].name}</div>
                        <div class="item3">
                            <span class="quantity">${data[i].quantity}</span>
                            <span>&nbsp;&nbsp;×&nbsp;&nbsp;</span>
                            <span class="price">190,000₫</span>
                        </div>
                        <div class="icon__container">
                            <button class="delete-btn"><i class="fa-solid fa-xmark"></i></button>
                        </div>
                        `;
                    allItemsContainerTag.appendChild(newProductRow);
                }
                let CartIconTag = document.querySelector('.fa-solid.fa-cart-shopping');
                let aCartContainer = CartIconTag.closest('a');
                aCartContainer.classList.add('cartIcon');
                let afterCartIcon = document.querySelector('.cartIcon');
                afterCartIcon.setAttribute('data-content', totalQuantity.toString());
                resolve();
            }
        }
    });
}
// get Quantity to Cart
function getQuantity(){
    let itemInCartTags = document.querySelectorAll('.itemInCart');

    fetch("../Data/tsconfig.json")
        .then(res => res.json())
        .then(data => {
            let Data = Array.from(Object.values(data))[0];
            subtotal1 = 0;
            let subtotalTag = document.querySelector('.boxModelCart .subtotal');
            if(itemInCartTags.length > 0){
                for(let i = 0; i < itemInCartTags.length; i++){
                    let productNameTag = itemInCartTags[i].querySelector('.product__name');
                    let priceTag = itemInCartTags[i].querySelector('.item3 .price');
                    let quantityTag = itemInCartTags[i].querySelector('.item3 .quantity');
                    let imgTag = itemInCartTags[i].querySelector('.img_item');
                    let productName = productNameTag.innerText;
                    let quantity = parseInt(quantityTag.innerText);
                    let price = 0;
                    for(let j = 0; j < Data.length; j++){
                        if(Data[j].name === productName){
                            let additionLink = "../img/";
                            imgTag.src = additionLink + Data[j].thumbnail_1;
                            if(Data[j].sale !== undefined){
                                price = Data[j].sale;
                            }else {
                                price = Data[j].price;
                            }
                        }
                    }
                    priceTag.innerText = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " ₫";
                    subtotal1 += price * quantity;
                }
                subtotalTag.innerText = "Subtotal: " + subtotal1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " ₫";

                // Display subtotal and payment button
                let noItemAlertTag = document.querySelector('.boxModelCart .noItemAlert');
                let paymentBtn = document.querySelector('.payment__btn__container');
                subtotalTag.style.display = "block";
                paymentBtn.style.display = "block";
                noItemAlertTag.style.display = "none";
            }else {
                let noItemAlertTag = document.querySelector('.boxModelCart .noItemAlert');
                let paymentBtn = document.querySelector('.payment__btn__container');
                noItemAlertTag.style.display = "block";
                paymentBtn.style.display = "none";
                subtotalTag.style.display = "none";
            }
        })
}


//Delete item--------------------------------------------------
// Use Xmark as button to delete having deleteItemName;
function addDeleteEvent() {
    let deleteButton = document.querySelectorAll('.allItems__container .delete-btn');

    for(let i = 0; i < deleteButton.length; i++){
        deleteButton[i].addEventListener('click', function (){
            let itemInCartParent = deleteButton[i].closest('.itemInCart');
            let productNameTag = itemInCartParent.querySelector('.product__name');
            let deletedProductName = productNameTag.innerText;
            deleteItem(deletedProductName);
            loadCart();
        });
    }
}

function deleteItem(deleteItemName){
    let requestOpen = indexedDB.open("productsInCart",1);
    requestOpen.onerror = function () {
        console.log("Open indexedDB fail");
    }
    requestOpen.onsuccess = function (e) {
        db = e.target.result;
        let trans = db.transaction("shoppingCart","readwrite");
        let objectStore = trans.objectStore("shoppingCart");
        let deleteItem = objectStore.delete(deleteItemName);
        deleteItem.onsuccess = () => {
            console.log(`Delete ${deleteItemName} successful`);
        }
        deleteItem.onerror = (err) => {
            console.log(`Error to delete item: ${err}`);
        }
        trans.oncomplete = function() {
            console.log("Transaction completed");
            db.close();
        };
    }
}

// --------------Close Cart Model -------------
let closeModel = document.querySelector('.close__btn__icon');
// let boxModelCartTag = document.querySelector('.boxModelCart');

closeModel.addEventListener('click', function(){
    const cartContainer = document.querySelector('.cart__container');
    cartContainer.classList.add('hide-cart');
    boxModelCartTag.classList.add('hideBox');
    setTimeout(()=>{
        boxModelCartTag.style.display = "none";
    }, 500);
})

// ---------------Open Cart Model-------------
function addEventOpenCart(){
    let openModel = document.querySelector('.fa-solid.fa-cart-shopping');
    // debugger;
    if(openModel !== null){
        openModel.addEventListener('click', function() {
            boxModelCartTag.style.display = "block";
            const cartContainer = document.querySelector('.cart__container');
            cartContainer.classList.remove('hide-cart');
            boxModelCartTag.classList.remove('hideBox');
        })
    }
}
addEventOpenCart();
