let subtotal;
let discount = 0;
let applyCouponTag = document.querySelector('.invoice .apply__coupon');
applyCouponTag.addEventListener('click', function(){
    let couponTag = document.querySelector('.invoice .coupon');
    let coupon = couponTag.value;
    console.log(coupon);
    if(coupon === "JULY10") discount = 0.1;
    let discountedAmountTag = document.querySelector('.inv__detail .discounted__amount .total__discounted-amount');
    console.log(subtotal);
    console.log(discount);
    discountedAmountTag.innerText = (Math.floor(subtotal * (1 - discount) / 1000) * 1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " ₫";
})

addProduct()
    .then(() => {
        getQuantity();
    })
    .catch((error) => {
        console.log(error);
    });

function addProduct() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('productsInCart', 1);

        request.onupgradeneeded =  function(e) {
            db = e.target.result;
            let objectStore = db.createObjectStore("shoppingCart",{keyPath:"name"});
            objectStore.createIndex("quantity","quantity",{unique:false});
            console.log("Create objectStore success");
        }

        request.onerror = function (){
            console.log("Open indexedDB fail");
            reject();
        }
        request.onsuccess = function (e) {
            let db = e.target.result;
            let trans = db.transaction('shoppingCart','readonly');
            let objectStore = trans.objectStore('shoppingCart');
            let getAll = objectStore.getAll();

            getAll.onerror = function() {
                console.log("Can\'t get data from objectStore");
                reject();
            }
            getAll.onsuccess = function (e) {
                let data = e.target.result;
                let subtotalTag = document.querySelector('.subtotal');
                for(let i = 0; i < data.length; i++){
                    let newProductRow = document.createElement("tr");
                    newProductRow.className = "product__container";
                    newProductRow.innerHTML = `
                          <td>
                            <div class="inv__img-container"><img class="img_item" src="https://kinhmatanna.com/wp-content/uploads/2023/03/6029..jpg" alt=""></div>
                            <span class="product__name">${data[i].name}</span><span>&nbsp;&nbsp;x&nbsp;&nbsp;</span><span class="quantity">${data[i].quantity}</span>
                          </td>
                          <td class="individual__amount">123</td>
                        `;
                    subtotalTag.parentNode.insertBefore(newProductRow, subtotalTag);
                }
                resolve();
            }
            // resolve();
        }
    });
}

function getQuantity(){
    let productContainerTags = document.querySelectorAll('.product__container');
    console.log(productContainerTags.length);

    fetch("../Data/tsconfig.json")
        .then(res => res.json())
        .then(data => {
            let Data = Array.from(Object.values(data))[0];
            console.log(Data);
            let amount = [];
            subtotal = 0;
            for(let i = 0; i < productContainerTags.length; i++){
                let productNameTag = productContainerTags[i].querySelector('.product__name');
                let productQuantityTag = productContainerTags[i].querySelector('.quantity');
                let productName = productNameTag.innerText;
                let individualAmountTag = productContainerTags[i].querySelector(".individual__amount");
                let imgIndividualTag = productContainerTags[i].querySelector('.img_item');
                let quantity = parseInt(productQuantityTag.innerText);
                console.log(productName);
                for(let j = 0; j < Data.length; j++){
                    if(Data[j].name === productName){
                        let price;
                        if(Data[j].sale !== undefined){
                            price = Data[j].sale;
                        }else{
                            price = Data[j].price;
                        }
                        let individualAmount = price * quantity;
                        console.log(individualAmount);
                        amount.push(individualAmount);
                        imgIndividualTag.src = "../img/" + Data[j].thumbnail_1;
                        individualAmountTag.innerText = individualAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " ₫";
                        break;
                    }
                }
            }
            console.log(amount);
            for(let i = 0; i < amount.length; i++){
                subtotal += amount[i];
            }
            let subtotalTag = document.querySelector('.inv__detail .subtotal .total__amount');
            subtotalTag.innerText = subtotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " ₫";

            let discountedAmountTag = document.querySelector('.inv__detail .discounted__amount .total__discounted-amount');
            discountedAmountTag.innerText = subtotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " ₫";
        })
}

// ------------------Payment Method------------------
let codTag = document.querySelector('.payment__method #COD');
let advancePaymentTag = document.querySelector('.payment__method #advance__payment');

codTag.addEventListener('click', function(){
    advancePaymentTag.checked = false;
})

advancePaymentTag.addEventListener('change', function(){
    codTag.checked = false;
})

codTag.checked = true;
function paymentMethod(){
    if(advancePaymentTag.checked === false && codTag.checked === false){
        alert("Please choose Payment Method");
        return false;
    }
    return true;
}

let myForm  = document.getElementById('myForm');
myForm.addEventListener('submit', function (event){
    event.preventDefault();

    let isPaymentMethodValid = paymentMethod();
    let isNameValid = validName();
    let isEmailValid = validEmail();
    let isPhoneNumberValid = validPhoneNumber();

    if (isPaymentMethodValid && isNameValid && isEmailValid && isPhoneNumberValid) {
        myForm.submit();
        alert("Submit form success. Your order has been recorded");
        window.location.href = "Home.html";
    }
})
// Validate information
let alertNameTag = document.querySelector('.alertName');
let alertPhoneTag = document.querySelector('.alertPhone');
let alertEmailTag = document.querySelector('.alertEmail');
function validName(){
    let cusName = document.getElementById('name').value;
    alertNameTag.style.display = "none";
    if(cusName.length <= 8){
        if(cusName.length === 0){
            alertNameTag.innerText = "This field is required";
        }else{
            alertNameTag.innerText = "Name must have more 8 characters";
        }
        alertNameTag.style.display = "block";
        return false;
    }
    return true;
}

function validPhoneNumber() {
    let phoneNumber = document.getElementById('phoneNumber').value;
    let regexPhone = new RegExp('^(1\\s?)?(\\d{3}|\\(\\d{3}\\))[\\s\\-]?\\d{3}[\\s\\-]?\\d{4}$');
    if(regexPhone.test(phoneNumber)){
        console.log("PhoneNumber pattern is correct");
        alertPhoneTag.style.display = "none";
        return true;
    }else{
        if(phoneNumber.length === 0){
            alertPhoneTag.innerText = "This field is required";
        }else{
            alertPhoneTag.innerText = "PhoneNumber pattern is incorrect";
        }
        alertPhoneTag.style.display = "block";
    }
    return false;
}

function validEmail() {
    let email = document.getElementById('email').value;
    let regexEmail = new RegExp('^[a-z0-9!#$%&\'*+/=?^_\`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_\`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$');
    if(regexEmail.test(email)){
        console.log("Email pattern is correct");
        alertEmailTag.style.display = "none";
        return true;
    }else{
        console.log(email + "1");
        if(email.length === 0){
            alertEmailTag.innerText = "This field is required";
        }else{
            alertEmailTag.innerText = "Email pattern is incorrect";
        }
        alertEmailTag.style.display = "block";
    }
    return false;
}

function linkToKinhPage(url, type, brand) {
    const param = type && brand ? `?type=${type}&brand=${brand}` : type ? `?type=${type}` : brand ? `?brand=${brand}` : '';
    location.href = `./${url}.html${param}`;
}