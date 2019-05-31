const productData = [
    {
        id: 1,
        name: 'T-Shirt With Ink',
        thumb: {
            srcFirst: './img/image1-2.jpg',
            srcLast: './img/image1.jpg',
        },
        color: 'white',
        price: '16',
        cat: {
            id: 1,
            name: 'accessories'
        }
    },
    {
        id: 2,
        name: 'Royal RepubliQ Backpack',
        thumb: {
            srcFirst: './img/image2-1.jpg',
            srcLast: './img/image2.jpg',
        },
        color: 'red',
        cat: {
            id: 2,
            name: 'blazered'
        },
        price: '20',
    },
    {
        id: 3,
        name: 'T-Shirt With Ink',
        thumb: {
            srcFirst: './img/image3-1.jpg',
            srcLast: './img/image3.jpg',
        },
        color: 'blue',
        price: '16',
        cat: {
            id: 1,
            name: 'accessories'
        }
    },
    {
        id: 4,
        name: 'Royal RepubliQ Backpack',
        thumb: {
            srcFirst: './img/image4-1.jpg',
            srcLast: './img/image4.jpg',
        },
        color: 'yellow',
        cat: {
            id: 2,
            name: 'blazered'
        },
        price: '20',
    }
];
function loadListColor() {
    let list = document.getElementById("list-color");
    let child;
    let linkColor;
    let dataColor;
    for (let item in productData) {
        child = document.createElement("li");
        linkColor = document.createElement("a");
        dataColor = productData[item].color;
        linkColor.setAttribute("onclick", "getProductByColor('" + dataColor + "');");
        linkColor.setAttribute("href", "#");
        linkColor.innerText = dataColor;
        child.appendChild(linkColor);
        list.appendChild(child);
    }
}
function loadListProduct(color) {
    let list = document.getElementById("product-wrap");
    let child;
    let child_img;
    let child_info;
    let info__title;
    let info__bottom;
    let info__title_h4;
    let info__title_span;
    let info__bottom_span;
    let info__bottom_a;
    if (color === "all") {
        document.querySelector(".flex>li>a").classList.add("active");
        for (let item in productData) {
            renderData(list, child, child_img, child_info, info__title, info__title_h4, info__title_span, info__bottom, info__bottom_span, info__bottom_a, item);
        }
    } else {
        document.querySelector(".flex>li>a[onclick=\"getProductByColor('" + color + "');\"]").classList.add("active");
        for (let item in productData) {
            if (productData[item].color == color) {
                renderData(list, child, child_img, child_info, info__title, info__title_h4, info__title_span, info__bottom, info__bottom_span, info__bottom_a, item);
            }
        }
    }

}
function renderData(list, child, child_img, child_info, info__title, info__title_h4, info__title_span, info__bottom, info__bottom_span, info__bottom_a, item) {
    child = document.createElement("div");
    child.classList.add("container__row__item");
    //child_img//
    child_img = document.createElement("img");
    child_img.setAttribute("src", productData[item].thumb.srcFirst);
    child_img.setAttribute("alt", productData[item].name);
    //end child_img//
    child_info = document.createElement("div");
    child_info.classList.add("info");
    //info__title//
    info__title = document.createElement("div");
    info__title.classList.add("info__title");

    info__title_h4 = document.createElement("h4");
    info__title_h4.innerText = productData[item].name;

    info__title_span = document.createElement("span");
    info__title_span.innerText = productData[item].cat.name;

    info__title.appendChild(info__title_h4);
    info__title.appendChild(info__title_span);
    //end info__title//
    //info__bottom//
    info__bottom = document.createElement("div");
    info__bottom.classList.add("info__bottom");

    info__bottom_span = document.createElement("span");
    info__bottom_span.innerText = productData[item].price + "$";

    info__bottom_a = document.createElement("a");
    info__bottom_a.setAttribute("onclick", "addToCart(" + productData[item].id + ");");
    info__bottom_a.innerText = "Add to cart";

    info__bottom.appendChild(info__bottom_span);
    info__bottom.appendChild(info__bottom_a);
    //end info__bottom//
    child_info.appendChild(info__title);
    child_info.appendChild(info__bottom);
    child.appendChild(child_img);
    child.appendChild(child_info);
    list.appendChild(child);
}
function loadDocument() {
    document.getElementById("total-cart").innerText = "0";
    loadListColor();
    loadListProduct("all");
}
