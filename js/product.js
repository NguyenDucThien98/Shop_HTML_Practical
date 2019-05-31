//can update lai ham filter de khong can render lai data
let cart = [];
let quantity = 1;
function addToCart(xid) {
    if (cart.length === 0) {
        cart.push({ id: xid, quantity: quantity });
        document.getElementById("total-cart").innerText = cart.length;
    }
    else {
        let check = false;
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id == xid) {
                check = true;
                cart[i].quantity++;
                break;
            }
        }
        if (check === false) {
            cart.push({ id: xid, quantity: 1 });
        }
        quantity++;
        document.getElementById("total-cart").innerText = quantity;

    }
    console.log(cart);
}

function getProductByColor(color) {
    let active = document.querySelector(".flex>li>.active");
    active.classList.remove("active");
    let parent = document.getElementById("product-wrap");
    while (parent.firstChild) {
        parent.firstChild.remove();
    }
    if (color === "all") {
        loadListProduct("all");
    }
    else {
        loadListProduct(color);
    }
}