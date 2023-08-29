(function ($) {
    "use strict";
    $(document).ready(function () {
        const queryString = window.location.search;
        const href = window.location.href;
        const urlParams = new URLSearchParams(queryString)
        if (href.includes("/kinh-gong.html") && urlParams.get('type')?.includes('kinh-ap-trong')) {
            document.getElementById("shape-filter-nav").textContent = '';
            document.getElementById("material-filter-nav").textContent = '';
        }
        setBrandAndType(urlParams);
        getHeader();
        let products = localStorage.getItem('products');
        products = filterProductsByBrandAndType(JSON.parse(products));
        products = getPaginationProductList(products);
        document.getElementById('product-list').innerHTML += appendProductList(products);
        document.getElementById('paginator').innerHTML += renderPagination();
        var input = document.getElementById("search-product-input");
        input.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                document.getElementById("search-by-name-btn").click();
            }
        });
        $(window).scroll(fixedMenu);
    });
})(jQuery);

let brand;
let type;
let currentPage = 1;
let sizeOfPage = 9;
let productListByBrandAndType = [];

function setBrandAndType(urlParams) {
    if (!!urlParams.get('brand'))
        brand = urlParams.get('brand');
    if (!!urlParams.get('type'))
        type = urlParams.get('type');
}

function setProductListByNameAndType(products) {

}

function setCurrentPage(page) {
    currentPage = page;
}

function handleChangePage(page) {
    setCurrentPage(page);
    removePagination();
    filterProducts();
}

function appendProductList(listProduct) {
    let listAppend = '';
    if (listProduct.length > 0) {
        listProduct.forEach(element => {
            listAppend += `
                <div class="col-lg-4 col-md-6 col-sm-12 pb-1">
                    <div class="card product-item border-0 mb-4">
                        <div
                            class="card-header product-img position-relative overflow-hidden bg-transparent border p-15"
                        >
                            <img class="img-fluid w-100" src="../img/${element.thumbnail}" alt="" />
                        </div>
                        <div
                            class="card-body border-left border-right text-center p-0 pt-4 pb-3"
                        >
                            <h6 class="text-truncate mb-3">${element.name}</h6>
                            <div class="d-flex justify-content-center">
                            ${element.sale
                    ? `<h6>${element.sale} ₫</h6>
                            <h6 class="text-muted ml-2"><del>${element.price} ₫</del></h6>`
                    : `<h6>${element.price} ₫</h6>`
                }
                            </div>
                        </div>
                        <div
                            class="card-footer d-flex justify-content-between bg-light border"
                        >
                            <a href="${'Detail.html' + '?main__product=' + encodeURIComponent(element.name)}" class="btn btn-sm text-dark p-0"
                            ><i class="fas fa-eye text-primary mr-1"></i>View detail</a
                            >
                            <a class="btn btn-sm text-dark p-0 ac_text" onclick="addItemToCart('${element.name}')"
                            ><i class="fas fa-shopping-cart text-primary mr-1"></i>Add to cart</a
                            >
                        </div>
                    </div>
                </div>
                `;
        });
    } else {
        listAppend += '<p>Không có sản phẩm tương ứng</p>';
    }
    return listAppend;
}

const priceFilterCriteria = [
    {
        key: 1,
        min: 0,
        max: 2000000
    },
    {
        key: 2,
        min: 2000001,
        max: 4000000
    },
    {
        key: 3,
        min: 4000001,
        max: 6000000
    },
    {
        key: 4,
        min: 6000001,
        max: 8000000
    },
    {
        key: 5,
        min: 4000001,
        max: 5000000
    }
]

function filterProductByName(value) {
    return productListByBrandAndType.filter(e => e.name.toLowerCase().includes(value));
}

function filterByNavigation(listProduct) {
    let listCheckboxPrice = [];
    let listCheckboxShape = [];
    let listCheckboxMaterial = [];

    document.getElementsByName("price-filter").forEach(element => {
        if (element.checked) {
            listCheckboxPrice.push(priceFilterCriteria.find(e => e.key == element.value));
        }
    });
    document.getElementsByName("shape-filter").forEach(element => {
        if (element.checked) {
            listCheckboxShape.push(element.value);
        }
    });
    document.getElementsByName("material-filter").forEach(element => {
        if (element.checked) {
            listCheckboxMaterial.push(element.value);
        }
    });
    if (listCheckboxPrice.length > 0) {
        let listFilterProduct = [];
        listCheckboxPrice.forEach(element => {
            listProduct.forEach(e => {
                const price = e.sale ? Number(e.sale.replaceAll(",", "")) : Number(e.price.replaceAll(",", ""));
                price > element.min && price < element.max && listFilterProduct.push(e);
            });
        });
        listProduct = listFilterProduct;
    }
    if (listCheckboxShape.length > 0) {
        let listFilterProduct = [];
        listCheckboxShape.forEach(element => {
            listProduct.forEach(e => {
                element == e.shape && listFilterProduct.push(e);
            });
        });
        listProduct = listFilterProduct;
    }
    if (listCheckboxMaterial.length > 0) {
        let listFilterProduct = [];
        listCheckboxMaterial.forEach(element => {
            listProduct.forEach(e => {
                element == e.material && listFilterProduct.push(e);
            });
        });
        listProduct = listFilterProduct;
    }
    return listProduct;
}

function filterProducts() {
    removeProductList();
    const filterNameVal = document.getElementById("search-product-input").value;
    let productListFilter = filterProductByName(filterNameVal);
    productListFilter = filterByNavigation(productListFilter);
    document.getElementById('product-list').innerHTML += appendProductList(getPaginationProductList(productListFilter));
    removePagination();
    if (productListFilter.length > 0) {
        document.getElementById('paginator').innerHTML += renderPagination(productListFilter.length);
    }
}

function filterProductsByBrandAndType(products) {
    let result = products;
    if (brand) {
        result = result.filter(product => brand.includes(product.brand));
    }
    if (type) {
        result = result.filter(product => type.includes(product.type));
    }
    productListByBrandAndType = result;
    return result;
}

function getPaginationProductList(products) {
    let productList = [];
    const min = (currentPage - 1) * sizeOfPage;
    const max = min + sizeOfPage > products.length ? products.length : min + sizeOfPage;
    for (let i = min; i < max; i++) {
        productList.push(products[i]);
    }
    return productList;
}

function removePagination() {
    document.getElementById("paginator").textContent = '';
}

function removeProductList() {
    document.getElementById("product-list").textContent = '';
}

function getHeader() {
    if (typeof addEventOpenCart === 'function') addEventOpenCart();
    const menuItems = document.querySelectorAll('.menu li a');
    for (var i = 0; i < menuItems.length; i++) {
        if (brand) {
            document.getElementById('menu-kinh-brands').classList.add("menu-item-active");
        } else if (i == 1) {
            document.getElementById('menu-kinh-can').classList.add(`${type == 'kinh-can' ? 'menu-item-active' : 'menu-item'}`);
        } else if (i == 2) {
            document.getElementById('menu-kinh-ram').classList.add(`${type == 'kinh-ram' ? 'menu-item-active' : 'menu-item'}`);
        } else if (i == 3) {
            document.getElementById('menu-kinh-ap-trong').classList.add(`${type == 'kinh-ap-trong' ? 'menu-item-active' : 'menu-item'}`);
        } else {
            menuItems[i].classList.add("menu-item");
        }
    }
}



function renderPagination(sizeOfList) {
    let renderPage = '';
    let size = sizeOfList || productListByBrandAndType.length;
    let totalPage = Math.floor(size / sizeOfPage);
    if (size % sizeOfPage > 0) {
        totalPage += 1;
    }

    for (let i = 0; i < totalPage; i++) {
        renderPage += `<li class="page-item ${currentPage == i + 1 ? 'active' : ''}">
                            <a class="page-link" onclick="handleChangePage(${i + 1})">${i + 1}</a>
                        </li>`;
    }

    return size > 0 ? `<li class="page-item ${currentPage == 1 ? 'disabled' : ''}">
                <a class="page-link" onclick="handleChangePage(${currentPage - 1})" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
                </a>
            </li>`+ renderPage + `
            <li class="page-item ${currentPage == totalPage ? 'disabled' : ''}">
                <a class="page-link" onclick="handleChangePage(${currentPage + 1})" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Next</span>
                </a>
            </li>` : '';
}

function linkToKinhPage(url, type, brand) {
    const param = type && brand ? `?type=${type}&brand=${brand}` : type ? `?type=${type}` : brand ? `?brand=${brand}` : '';
    location.href = `./${url}.html${param}`;
}

function fixedMenu() {
    const tempScrollTop = $(window).scrollTop();
    if (tempScrollTop > 10) {
        document.getElementById("header").style.position = 'fixed';
    } else {
        document.getElementById("header").style.position = 'relative';
    }
};

function addItemToCart(name) {
    alert("Add New Item:" + name + " ,quantity: " + 1);
    addItem(name, 1);
    loadCart();
}

function addItem(name, quantity) {
    let requestOpen = indexedDB.open("productsInCart", 1);

    requestOpen.onupgradeneeded = function (e) {
        db = e.target.result;
        let objectStore = db.createObjectStore("shoppingCart", { keyPath: "name" });
        objectStore.createIndex("quantity", "quantity", { unique: false });
        console.log("Create objectStore success");
    }
    requestOpen.onerror = function () {
        console.log("Add item fail");
    }
    requestOpen.onsuccess = function (e) {
        db = e.target.result;
        let trans = db.transaction("shoppingCart", "readwrite");
        let objectStore = trans.objectStore("shoppingCart");

        let findName = objectStore.get(name);
        findName.onsuccess = function (e) {
            const result = e.target.result;
            if (result === undefined) {

                // Cần đảm bảo keyPath của newObject phải trùng với thuộc tính của object "Product" trong tình huống này là "name:
                let newItem = { name: name, quantity: parseInt(quantity) };
                let addItem = objectStore.add(newItem);
                addItem.onsuccess = function () {
                    console.log("Add new item " + newItem.name + " success, quantity is " + newItem.quantity);
                }
                addItem.onerror = function () {
                    console.log("Add new item " + name + " fail");
                }
            } else {
                result.quantity = parseInt(result.quantity) + parseInt(quantity);
                let plusItem = objectStore.put(result);
                plusItem.onsuccess = function () {
                    console.log("Quantity of " + result.name + " is increased by " + quantity + ".New quantity is " + result.quantity);
                    alert("Quantity of " + result.name + " is increased by " + quantity + ".New quantity is " + result.quantity);
                }
                plusItem.onerror = function () {
                    console.log("Add more item failed")
                    alert("Add more item failed")
                }
            }
        }
        trans.oncomplete = function () {
            db.close();
        };
    }
}