(function ($) {
    "use strict";

    const products = [
        {
            "id": 1,
            "name": "Rayban 3",
            "code": "KT230",
            "type": "kinh-can",
            "material": "plastic",
            "color": "Trắng",
            "shape": "oval",
            "brand": "Rayban",
            "price": "4,740,000",
            "sale": "3,792,000",
            "thumbnail": "anh_san_pham/id1-1.webp",
            "description": ""
        },
        {
            "id": 2,
            "name": "Burberry 6",
            "code": "KT231",
            "type": "kinh-can",
            "material": "plastic",
            "color": "Vàng",
            "shape": "circle",
            "brand": "Burberry",
            "price": "5,400,000",
            "sale": "4,320,000",
            "thumbnail": "anh_san_pham/id2-1.webp",
            "description": ""
        },
        {
            "id": 3,
            "name": "Burberry 11",
            "code": "KT232",
            "type": "kinh-can",
            "material": "metal",
            "color": "Vàng",
            "shape": "cateye",
            "brand": "Burberry",
            "price": "4,050,000",
            "sale": "3,240,000",
            "thumbnail": "anh_san_pham/id3-1.webp",
            "description": ""
        },
        {
            "id": 4,
            "name": "Rayban 18",
            "code": "KT233",
            "type": "kinh-can",
            "material": "plastic",
            "color": "Đỏ",
            "shape": "cateye",
            "brand": "Rayban",
            "price": "5,800,000",
            "sale": "4,640,000",
            "thumbnail": "anh_san_pham/id4-1.webp",
            "description": ""
        },
        {
            "id": 5,
            "name": "Rayban 27",
            "code": "KT234",
            "type": "kinh-can",
            "material": "plastic",
            "color": "Nâu",
            "shape": "circle",
            "brand": "Rayban",
            "price": "3,060,000",
            "sale": "2,448,000",
            "thumbnail": "anh_san_pham/id5-1.webp",
            "description": ""
        },
        {
            "id": 6,
            "name": "Rayban 38",
            "code": "KT235",
            "type": "kinh-can",
            "material": "metal",
            "color": "Nâu",
            "shape": "oval",
            "brand": "Rayban",
            "price": "5,350,000",
            "sale": "4,280,000",
            "thumbnail": "anh_san_pham/id6-1.webp",
            "description": ""
        },
        {
            "id": 7,
            "name": "Rayban 51",
            "code": "KT236",
            "type": "kinh-can",
            "material": "plastic",
            "color": "Đen",
            "shape": "circle",
            "brand": "Rayban",
            "price": "5,350,000",
            "sale": "",
            "thumbnail": "anh_san_pham/id7-1.webp",
            "description": ""
        },
        {
            "id": 8,
            "name": "Burberry 66",
            "code": "KT237",
            "type": "kinh-can",
            "material": "plastic",
            "color": "Nâu",
            "shape": "oval",
            "brand": "Burberry",
            "price": "3,600,000",
            "sale": "",
            "thumbnail": "anh_san_pham/id8-1.webp",
            "description": ""
        },
        {
            "id": 9,
            "name": "Rayban 83",
            "code": "KT238",
            "type": "kinh-can",
            "material": "metal",
            "color": "Đen",
            "shape": "oval",
            "brand": "Rayban",
            "price": "3,550,000",
            "sale": "",
            "thumbnail": "anh_san_pham/id9-1.webp",
            "description": ""
        },
        {
            "id": 10,
            "name": "Burberry 102",
            "code": "KT239",
            "type": "kinh-can",
            "material": "plastic",
            "color": "Nâu",
            "shape": "cateye",
            "brand": "Burberry",
            "price": "7,520,000",
            "sale": "",
            "thumbnail": "anh_san_pham/id10-1.webp",
            "description": ""
        },
        {
            "id": 11,
            "name": "Rayban 123",
            "code": "KT2310",
            "type": "kinh-can",
            "material": "plastic",
            "color": "Đen",
            "shape": "oval",
            "brand": "Rayban",
            "price": "5,160,000",
            "sale": "",
            "thumbnail": "anh_san_pham/id11-1.webp",
            "description": ""
        },
        {
            "id": 12,
            "name": "Rayban 146",
            "code": "KT2311",
            "type": "kinh-can",
            "material": "metal",
            "color": "Vàng",
            "shape": "cateye",
            "brand": "Rayban",
            "price": "5,690,000",
            "sale": "",
            "thumbnail": "anh_san_pham/id12-1.webp",
            "description": ""
        },
        {
            "id": 13,
            "name": "Burberry 171",
            "code": "KT2312",
            "type": "kinh-can",
            "material": "plastic",
            "color": "Đen",
            "shape": "circle",
            "brand": "Burberry",
            "price": "4,370,000",
            "sale": "",
            "thumbnail": "anh_san_pham/id13-1.webp",
            "description": ""
        },
        {
            "id": 14,
            "name": "Rayban 198",
            "code": "KT2313",
            "type": "kinh-can",
            "material": "plastic",
            "color": "Đen",
            "shape": "oval",
            "brand": "Rayban",
            "price": "3,290,000",
            "sale": "",
            "thumbnail": "anh_san_pham/id14-1.webp",
            "description": ""
        },
        {
            "id": 15,
            "name": "Burberry 227",
            "code": "KT2314",
            "type": "kinh-can",
            "material": "plastic",
            "color": "Nâu",
            "shape": "oval",
            "brand": "Burberry",
            "price": "5,600,000",
            "sale": "",
            "thumbnail": "anh_san_pham/id15-1.webp",
            "description": ""
        },
        {
            "id": 16,
            "name": "Burberry 258",
            "code": "KT2315",
            "type": "kinh-can",
            "material": "plastic",
            "color": "Nâu",
            "shape": "cateye",
            "brand": "Burberry",
            "price": "4,450,000",
            "sale": "",
            "thumbnail": "anh_san_pham/id16-1.webp",
            "description": ""
        },
        {
            "id": 17,
            "name": "Burberry 291",
            "code": "KT2316",
            "type": "kinh-can",
            "material": "metal",
            "color": "Hồng",
            "shape": "circle",
            "brand": "Burberry",
            "price": "4,910,000",
            "sale": "",
            "thumbnail": "anh_san_pham/id17-1.webp",
            "description": ""
        },
        {
            "id": 18,
            "name": "Burberry 326",
            "code": "KT2317",
            "type": "kinh-can",
            "material": "plastic",
            "color": "Nâu",
            "shape": "square",
            "brand": "Burberry",
            "price": "6,090,000",
            "sale": "",
            "thumbnail": "anh_san_pham/id18-1.webp",
            "description": ""
        },
        {
            "id": 19,
            "name": "Burberry 363",
            "code": "KT2318",
            "type": "kinh-can",
            "material": "metal",
            "color": "Nâu",
            "shape": "oval",
            "brand": "Burberry",
            "price": "3,460,000",
            "sale": "",
            "thumbnail": "anh_san_pham/id19-1.webp",
            "description": ""
        },
        {
            "id": 20,
            "name": "Burberry 402",
            "code": "KT2319",
            "type": "kinh-can",
            "material": "metal",
            "color": "Trắng",
            "shape": "square",
            "brand": "Burberry",
            "price": "5,350,000",
            "sale": "",
            "thumbnail": "anh_san_pham/id20-1.webp",
            "description": ""
        },
        {
            "id": 21,
            "name": "Rayban 2",
            "code": "KR2320",
            "type": "kinh-ram",
            "material": "metal",
            "color": "Trắng",
            "shape": "oval",
            "brand": "Rayban",
            "price": "4,280,000",
            "sale": "3,424,000",
            "thumbnail": "anh_san_pham/id21-1.webp",
            "description": ""
        },
        {
            "id": 22,
            "name": "Gucci 7",
            "code": "KR2321",
            "type": "kinh-ram",
            "material": "metal",
            "color": "Đỏ",
            "shape": "square",
            "brand": "Gucci",
            "price": "7,530,000",
            "sale": "6,824,000",
            "thumbnail": "anh_san_pham/id22-1.webp",
            "description": ""
        },
        {
            "id": 23,
            "name": "Rayban 14",
            "code": "KR2322",
            "type": "kinh-ram",
            "material": "metal",
            "color": "Đỏ",
            "shape": "square",
            "brand": "Rayban",
            "price": "7,220,000",
            "sale": "6,770,000",
            "thumbnail": "anh_san_pham/id23-1.webp",
            "description": ""
        },
        {
            "id": 24,
            "name": "Rayban 23",
            "code": "KR2323",
            "type": "kinh-ram",
            "material": "plastic",
            "color": "Đỏ",
            "shape": "circle",
            "brand": "Rayban",
            "price": "2,010,000",
            "sale": "1,608,000",
            "thumbnail": "anh_san_pham/id24-1.webp",
            "description": ""
        },
        {
            "id": 25,
            "name": "Versace 34",
            "code": "KR2324",
            "type": "kinh-ram",
            "material": "metal",
            "color": "Nâu",
            "shape": "square",
            "brand": "Versace",
            "price": "4,740,000",
            "sale": "",
            "thumbnail": "anh_san_pham/id25-1.webp",
            "description": ""
        },
        {
            "id": 26,
            "name": "Versace 47",
            "code": "KR2325",
            "type": "kinh-ram",
            "material": "metal",
            "color": "Nâu",
            "shape": "cateye",
            "brand": "Versace",
            "price": "6,340,000",
            "sale": "",
            "thumbnail": "anh_san_pham/id26-1.webp",
            "description": ""
        },
        {
            "id": 27,
            "name": "Gucci 62",
            "code": "KR2326",
            "type": "kinh-ram",
            "material": "metal",
            "color": "Đen",
            "shape": "oval",
            "brand": "Gucci",
            "price": "6,830,000",
            "sale": "",
            "thumbnail": "anh_san_pham/id27-1.webp",
            "description": ""
        },
        {
            "id": 28,
            "name": "Gucci 79",
            "code": "KR2327",
            "type": "kinh-ram",
            "material": "metal",
            "color": "Vàng",
            "shape": "cateye",
            "brand": "Gucci",
            "price": "4,540,000",
            "sale": "",
            "thumbnail": "anh_san_pham/id28-1.webp",
            "description": ""
        },
        {
            "id": 29,
            "name": "Rayban 98",
            "code": "KR2328",
            "type": "kinh-ram",
            "material": "metal",
            "color": "Vàng",
            "shape": "circle",
            "brand": "Rayban",
            "price": "5,600,000",
            "sale": "",
            "thumbnail": "anh_san_pham/id29-1.webp",
            "description": ""
        },
        {
            "id": 30,
            "name": "Rayban 119",
            "code": "KR2329",
            "type": "kinh-ram",
            "material": "metal",
            "color": "Nâu",
            "shape": "circle",
            "brand": "Rayban",
            "price": "4,430,000",
            "sale": "",
            "thumbnail": "anh_san_pham/id30-1.webp",
            "description": ""
        },
        {
            "id": 31,
            "name": "Versace 142",
            "code": "KR2330",
            "type": "kinh-ram",
            "material": "plastic",
            "color": "Trắng",
            "shape": "square",
            "brand": "Versace",
            "price": "4,380,000",
            "sale": "",
            "thumbnail": "anh_san_pham/id31-1.webp",
            "description": ""
        },
        {
            "id": 32,
            "name": "Versace 167",
            "code": "KR2331",
            "type": "kinh-ram",
            "material": "plastic",
            "color": "Trắng",
            "shape": "circle",
            "brand": "Versace",
            "price": "2,920,000",
            "sale": "",
            "thumbnail": "anh_san_pham/id32-1.webp",
            "description": ""
        },
        {
            "id": 33,
            "name": "Gucci 194",
            "code": "KR2332",
            "type": "kinh-ram",
            "material": "plastic",
            "color": "Vàng",
            "shape": "square",
            "brand": "Gucci",
            "price": "6,830,000",
            "sale": "",
            "thumbnail": "anh_san_pham/id33-1.webp",
            "description": ""
        },
        {
            "id": 34,
            "name": "Rayban 223",
            "code": "KR2333",
            "type": "kinh-ram",
            "material": "plastic",
            "color": "Nâu",
            "shape": "square",
            "brand": "Rayban",
            "price": "3,200,000",
            "sale": "",
            "thumbnail": "anh_san_pham/id34-1.webp",
            "description": ""
        },
        {
            "id": 35,
            "name": "Rayban 254",
            "code": "KR2334",
            "type": "kinh-ram",
            "material": "plastic",
            "color": "Hồng",
            "shape": "circle",
            "brand": "Rayban",
            "price": "7,900,000",
            "sale": "",
            "thumbnail": "anh_san_pham/id35-1.webp",
            "description": ""
        },
        {
            "id": 36,
            "name": "Doll Eyes 3",
            "code": "KAT2335",
            "type": "kinh-ap-trong",
            "material": "",
            "color": "Hồng",
            "shape": "",
            "brand": "Doll Eyes",
            "price": "1,160,000",
            "sale": "928,000",
            "thumbnail": "anh_san_pham/id36-1.webp",
            "description": ""
        },
        {
            "id": 37,
            "name": "Doll Eyes 8",
            "code": "KAT2336",
            "type": "kinh-ap-trong",
            "material": "",
            "color": "Nâu",
            "shape": "",
            "brand": "Doll Eyes",
            "price": "2,180,000",
            "sale": "1,744,000",
            "thumbnail": "anh_san_pham/id37-1.webp",
            "description": ""
        },
        {
            "id": 38,
            "name": "Caras 15",
            "code": "KAT2337",
            "type": "kinh-ap-trong",
            "material": "",
            "color": "Đỏ",
            "shape": "",
            "brand": "Caras",
            "price": "1,740,000",
            "sale": "1,392,000",
            "thumbnail": "anh_san_pham/id38-1.webp",
            "description": ""
        },
        {
            "id": 39,
            "name": "Doll Eyes 24",
            "code": "KAT2338",
            "type": "kinh-ap-trong",
            "material": "",
            "color": "Đen",
            "shape": "",
            "brand": "Doll Eyes",
            "price": "1,330,000",
            "sale": "1,064,000",
            "thumbnail": "anh_san_pham/id39-1.webp",
            "description": ""
        },
        {
            "id": 40,
            "name": "Doll Eyes 35",
            "code": "KAT2339",
            "type": "kinh-ap-trong",
            "material": "",
            "color": "Nâu",
            "shape": "",
            "brand": "Doll Eyes",
            "price": "1,300,000",
            "sale": "",
            "thumbnail": "anh_san_pham/id40-1.webp",
            "description": ""
        },
        {
            "id": 41,
            "name": "Doll Eyes 48",
            "code": "KAT2340",
            "type": "kinh-ap-trong",
            "material": "",
            "color": "Đen",
            "shape": "",
            "brand": "Doll Eyes",
            "price": "1,700,000",
            "sale": "",
            "thumbnail": "anh_san_pham/id41-1.webp",
            "description": ""
        },
        {
            "id": 42,
            "name": "Caras 63",
            "code": "KAT2341",
            "type": "kinh-ap-trong",
            "material": "",
            "color": "Nâu",
            "shape": "",
            "brand": "Caras",
            "price": "3,450,000",
            "sale": "",
            "thumbnail": "anh_san_pham/id42-1.webp",
            "description": ""
        },
        {
            "id": 43,
            "name": "Doll Eyes 80",
            "code": "KAT2342",
            "type": "kinh-ap-trong",
            "material": "",
            "color": "Xanh",
            "shape": "",
            "brand": "Doll Eyes",
            "price": "1,800,000",
            "sale": "",
            "thumbnail": "anh_san_pham/id43-1.webp",
            "description": ""
        },
        {
            "id": 44,
            "name": "Caras 99",
            "code": "KAT2343",
            "type": "kinh-ap-trong",
            "material": "",
            "color": "Đen",
            "shape": "",
            "brand": "Caras",
            "price": "5,100,00",
            "sale": "",
            "thumbnail": "anh_san_pham/id44-1.webp",
            "description": ""
        },
        {
            "id": 45,
            "name": "Doll Eyes 120",
            "code": "KAT2344",
            "type": "kinh-ap-trong",
            "material": "",
            "color": "Nâu",
            "shape": "",
            "brand": "Doll Eyes",
            "price": "2,670,000",
            "sale": "",
            "thumbnail": "anh_san_pham/id45-1.webp",
            "description": ""
        },
        {
            "id": 46,
            "name": "Doll Eyes 143",
            "code": "KAT2345",
            "type": "kinh-ap-trong",
            "material": "",
            "color": "Nâu",
            "shape": "",
            "brand": "Doll Eyes",
            "price": "3,360,000",
            "sale": "",
            "thumbnail": "anh_san_pham/id46-1.webp",
            "description": ""
        },
        {
            "id": 47,
            "name": "Doll Eyes 168",
            "code": "KAT2346",
            "type": "kinh-ap-trong",
            "material": "",
            "color": "Đen",
            "shape": "",
            "brand": "Doll Eyes",
            "price": "1,690,000",
            "sale": "",
            "thumbnail": "anh_san_pham/id47-1.webp",
            "description": ""
        },
        {
            "id": 48,
            "name": "Doll Eyes 195",
            "code": "KAT2347",
            "type": "kinh-ap-trong",
            "material": "",
            "color": "Hồng",
            "shape": "",
            "brand": "Doll Eyes",
            "price": "3,640,000",
            "sale": "",
            "thumbnail": "anh_san_pham/id48-1.webp",
            "description": ""
        },
        {
            "id": 49,
            "name": "Caras 224",
            "code": "KAT2348",
            "type": "kinh-ap-trong",
            "material": "",
            "color": "Nâu",
            "shape": "",
            "brand": "Caras",
            "price": "1,900,000",
            "sale": "",
            "thumbnail": "anh_san_pham/id49-1.webp",
            "description": ""
        },
        {
            "id": 50,
            "name": "Caras 255",
            "code": "KAT2349",
            "type": "kinh-ap-trong",
            "material": "",
            "color": "Đỏ",
            "shape": "",
            "brand": "Caras",
            "price": "1,390,000",
            "sale": "",
            "thumbnail": "anh_san_pham/id50-1.webp",
            "description": ""
        }
    ]

    // Dropdown on mouse hover
    $(document).ready(function () {
        const jsonProduct = localStorage.getItem("products");
        if (!jsonProduct) {
            localStorage.setItem("products", JSON.stringify(products));
        }

        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 5
            },
            1200: {
                items: 6
            }
        }
    });


    // Related carousel
    $('.related-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });

    // Product Quantity
    $('.quantity button').on('click', function () {
        var button = $(this);
        var oldValue = button.parent().parent().find('input').val();
        if (button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        button.parent().parent().find('input').val(newVal);
    });

})(jQuery);

