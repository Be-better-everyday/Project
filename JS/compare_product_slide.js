function linkToKinhPage(url, type, brand) {
    const param = type && brand ? `?type=${type}&brand=${brand}` : type ? `?type=${type}` : brand ? `?brand=${brand}` : '';
    location.href = `./${url}.html${param}`;
}


let swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3.5,
    freeMode: true,
    watchSlidesProgress: true,
});
let swiper2 = new Swiper(".mySwiper2", {
    // loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".mySwiper .swiper-button-next",
        prevEl: ".mySwiper .swiper-button-prev",
    },
    on: {
        init: function () {
            let slides2 = swiper.slides;

            for (let i = 0; i < slides2.length; i++) {
                let img = slides2[i].querySelector('img');
                if (i === 0) {
                    img.style.opacity = "1";
                } else {
                    img.style.opacity = "0.5";
                }
            }
        }
    },

    thumbs: {
        swiper: swiper,
    },
});

let swiper3 = new Swiper(".mySwiperA", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3.5,
    freeMode: true,
    watchSlidesProgress: true,
});
let swiper4 = new Swiper(".mySwiper2A", {
    // when "loop: true" is used with "activeIndex", a error will occur
    // loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".second.swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    on: {
        init: function () {
            let slides = swiper3.slides;

            for (let i = 0; i < slides.length; i++) {
                let slide = slides[i];
                let img = slide.querySelector("img");
                if (i === 0) {
                    img.style.opacity = '1';
                } else {
                    img.style.opacity = "0.5";
                }
            }
        },
    },
    thumbs: {
        swiper: swiper3,
    },
});

// let activeSwiper4 = 0;
swiper4.on("slideChange", function () {
    let activeIndex = swiper4.activeIndex;

    console.log(activeIndex);
    let slides = swiper3.slides;

    for (let i = 0; i < slides.length; i++) {
        let slide = slides[i];
        let img = slide.querySelector("img");
        if (i === activeIndex) {
            img.style.opacity = '1';
        } else {
            img.style.opacity = "0.5";
        }
    }
});

// Init event slideChange out of Init Swiper,
// if two events is declared in the Swiper Initialization, an error will occur
swiper2.on("slideChange", function () {
    let activeIndex = swiper2.activeIndex;
    let slides = swiper.slides;
    for (let i = 0; i < slides.length; i++) {
        let img = slides[i].querySelector('img');
        if (i === activeIndex) {
            img.style.opacity = "1";
        } else {
            img.style.opacity = "0.5";
        }
    }
})


// ------------------decode_compare_link**--------------------------------
let urlParams = new URLSearchParams(window.location.search);
let compareProductName = decodeURIComponent(urlParams.get('sp_name'));

let compareNameArr = document.querySelectorAll('.compare__product.name');
let mainProductName = decodeURIComponent(urlParams.get('main__product'));
// console.log(compareProductName + " " + mainProductName);

for (let i = 0; i < compareNameArr.length; i++) {
    if (compareProductName == 'null') {
        compareNameArr[i].textContent = 'compare__product';
    } else {
        compareNameArr[i].textContent = compareProductName;
    }
}


let mainNameArr = document.querySelectorAll('.main__product.name');
for (let i = 0; i < mainNameArr.length; i++) {
    if (mainProductName == 'null') {
        mainNameArr[i].textContent = 'main__product';
    } else {
        mainNameArr[i].textContent = mainProductName;
    }
}

// ----------Link to Detail Web------------
let linkDetail = 'Detail.html';
let linkDetailMain = linkDetail + '?main__product=' + encodeURIComponent(mainProductName);
let linkDetailCompare = linkDetail + '?main__product=' + encodeURIComponent(compareProductName);

let compareTag = document.querySelector('.cp_price .cp_link.compare__product');
let mainTag = document.querySelector('.cp_price .cp_link.main__product');


if (encodeURIComponent(mainProductName) == 'null') {
    compareTag.href = linkDetail;
    mainTag.href = linkDetail;
} else {
    compareTag.href = linkDetailCompare;
    mainTag.href = linkDetailMain;
}

function capitalizeFirstLetter(str) {
    if (str === undefined) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}



function loadData(status, item) {
    // status is "main__product" or "compare__product"
    let thumbnailTag1a = document.querySelector(status + ".thumbnail1");
    let thumbnailTag2a = document.querySelector(status + ".thumbnail2");
    let thumbnailTag3a = document.querySelector(status + ".thumbnail3");
    let Thumb1a = document.querySelector(status + ".Thumbnail1");
    let Thumb2a = document.querySelector(status + ".Thumbnail2");
    let Thumb3a = document.querySelector(status + ".Thumbnail3");

    let materialTag1 = document.querySelector(status + ".material");
    let colorTag1 = document.querySelector(status + ".color");
    let brandTag1 = document.querySelector(status + ".brand");
    let shapeTag1 = document.querySelector(status + ".shape");
    let priceTag1 = document.querySelector(status + ".price");
    let oldPriceTag1 = document.querySelector(status + ".oldPrice")
    console.log(Thumb2a);
    let descriptionTag1 = document.querySelector(status + ".description");
    console.log(descriptionTag1);
    if (item.material === "plastic") {
        descriptionTag1.innerText =
            "Advantage:\n" +
            "1.\tLight and comfortable: Plastic glasses are usually lighter than metal glasses, which reduces discomfort when worn for a long time.\n" +
            "2.\tGood impact resistance: Plastic has better flexibility and impact resistance than metal, helping to protect the eyes from external impacts.\n" +
            "3.\tWide choice of colors and designs: Plastic is easily molded into different shapes and colors, allowing users to have a variety of choices to suit their personal style and preferences.";
    } else if (item.material === "metal") {
        descriptionTag1.innerText =
            "Advantage:\n" +
            "1.\tHigh durability: Metal has strong properties and good bearing capacity, making metal glass have a longer life than plastic glass.\n" +
            "2.\tLuxurious look: Metal is often used to create glass designs that have a classy and professional look, suitable for formal occasions or office work.\n" +
            "3.\tVariety of colors and finishes: Metallic glass can be plated with gold, silver or other finishes, creating a wide range of color and surface options for the user.\n";
    }
    if (item.material === undefined) {
        let materialRow = document.querySelector('.cp_material');
        materialRow.style.display = "none";
    } else {
        materialTag1.innerText = capitalizeFirstLetter(item.material);
    }
    colorTag1.innerText = capitalizeFirstLetter(item.color);
    brandTag1.innerText = capitalizeFirstLetter(item.brand);
    if (item.shape === undefined) {
        let shapeRow = document.querySelector('.cp_shape')
        shapeRow.style.display = "none";
    } else {
        shapeTag1.innerText = capitalizeFirstLetter(item.shape);
    }
    let salePrice = 0;
    let oldPrice = "";
    if (item.sale === undefined) {
        salePrice = item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " ₫";
        oldPriceTag1.style.display = "none";
    } else {
        salePrice = item.sale.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " ₫";
        oldPrice = item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " ₫";
    }

    priceTag1.innerText = salePrice;
    oldPriceTag1.innerText = oldPrice;
    thumbnailTag1a.src = "../img/" + item.thumbnail_1;
    thumbnailTag2a.src = "../img/" + item.thumbnail_2;
    thumbnailTag3a.src = "../img/" + item.thumbnail_3;
    Thumb1a.src = "../img/" + item.thumbnail_1;
    Thumb2a.src = "../img/" + item.thumbnail_2;
    Thumb3a.src = "../img/" + item.thumbnail_3;
}

fetch("../Data/tsconfig.json")
    .then(res => res.json())
    .then(data => {
        let itemData = Array.from(Object.values(data))[0];
        console.log(itemData.length);
        let mainItemTag = document.querySelector('.main__product.name');
        let mainItemName = mainItemTag.innerText;
        let compareItemTag = document.querySelector('.compare__product.name');
        let compareItemName = compareItemTag.innerText;
        function getItemObject(name) {
            for (let i = 0; i < itemData.length; i++) {
                if (itemData[i].name === name) {
                    return itemData[i];
                }
            }
            return null;
        }
        console.log(getItemObject(mainItemName));
        console.log(getItemObject(compareItemName));
        loadData(".main__product", getItemObject(mainItemName));
        loadData(".compare__product", getItemObject(compareItemName));
    })
    .catch(error => {
        console.log("Error: ", error);
    });
