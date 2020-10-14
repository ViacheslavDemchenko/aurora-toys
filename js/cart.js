const formBack = document.querySelector('.form__back');
const form = document.querySelector('.form');
// const overlay = document.querySelector('.overlay');
const cartBtn = document.querySelector('.cart-btn');
// const body = document.getElementsByTagName('body')[0];


function backToTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
    }
}

if ($('.cart-btn').length > 0) {

    cartBtn.addEventListener('click',backToTop);

    cartBtn.addEventListener('click', () => {
        overlay.classList.add('overlay--active');
        form.classList.add('overlay--active');
        body.classList.add('no-scroll');
    });
}

if ($('.form__back').length > 0) {

    formBack.addEventListener('click', () => {
        overlay.classList.remove('overlay--active');
        form.classList.remove('overlay--active');
        body.classList.remove('no-scroll');
    });
}


let getStorageCart = localStorage.getItem('cart');
let cartObject = JSON.parse(getStorageCart);
let total = localStorage.getItem('totalPrice');
total = +total;
const totalSum = document.querySelector('.total__num');
console.log(cartObject);
totalSum.value = `${total} ₽`;

function cartShow(obj) {

    let toyList = document.querySelector('.cart-list');
    let out = ' ';
    let count = 0;

    for (let key in obj) {
        count++;
        
        let toyTotalPrice = toys[key].price.slice(0, -2) * obj[key];

        out += `
                <div class="cart__item" data-name="${key}">
                    <input type="checkbox" id="checkbox-${count}" class="checkbox-${count}" checked>
                    <label for="checkbox-${count}"></label>
                    <div class="toy__img">
                        <picture>
                            <source srcset="${toys[key].img_cart_1x_webp}, ${toys[key].img_cart_2x_webp} 2x" type="image/webp">
                            <source srcset="${toys[key].img_cart_1x_jpg}, ${toys[key].img_cart_2x_jpg} 2x" type="image/png">
                            <img src="${toys[key].img_cart_1x_jpg}" srcset="${toys[key].img_cart_2x_jpg}" width="140" height="140" alt="Игрушка ${toys[key].name.toLowerCase()}">
                        </picture>
                    </div>
                    <div class="toy__name">${toys[key].name}</div>
                    <div class="toy-count">
                        <div class="toy-count-arrows">
                            <div class="count__arrow-left cart-left">&#60;</div>
                            <div class="count__arrow-left cart-right">&#62;</div>
                        </div>
                        <div class="count__number">${obj[key]}</div>
                    </div>
                    <div class="toy__price">${toyTotalPrice}</div>
                </div>
            `;
    }

    if ($('.cart-list').length > 0) {
        toyList.innerHTML = out;
    }
}
cartShow(cartObject);

const toyMinus = document.querySelectorAll('.cart-left');
const toyPlus = document.querySelectorAll('.cart-right');

toyPlus.forEach( plus => {
    plus.addEventListener('click', () => {
        let toy = plus.closest('.cart__item');
        let number = toy.querySelector('.count__number');
        let count = number.textContent;
        count++;
        number.textContent = count;
        let toyPrice = toy.querySelector('.toy__price');
        let toyPriceNum = toyPrice.textContent;
        let toyName = toy.getAttribute('data-name');
        toyPriceNum = toys[toyName].price.slice(0, -2);
        toyPrice.textContent = toyPriceNum * count;
        newTotalPrice();
    });
});

toyMinus.forEach( plus => {
    plus.addEventListener('click', () => {
        let toy = plus.closest('.cart__item');
        let number = toy.querySelector('.count__number');
        let count = number.textContent;
        count--;
        number.textContent = count;
        let toyPrice = toy.querySelector('.toy__price');
        let toyPriceNum = toyPrice.textContent;
        let toyName = toy.getAttribute('data-name');
        toyPriceNum = toys[toyName].price.slice(0, -2);
        toyPrice.textContent = toyPriceNum * count;
        newTotalPrice();
    });
});

function newTotalPrice() {
    const toyPrices = document.querySelectorAll('.toy__price');
    total = 0;

    toyPrices.forEach( price => {
        total = total + Number.parseInt(price.textContent);
        totalSum.value = `${total} ₽`;
    });
}

function checkBox() {
    const checkBoxes = document.querySelectorAll('.cart__item input');
    checkBoxes.forEach( (input, index) => {

        input.addEventListener('change', () => {
            if (input.checked) {
                console.log('Выбран');
                let item = input.closest('.cart__item');
                let itemPrice = +item.querySelector('.toy__price').textContent;
                totalSum.value = +totalSum.value.replace(/ ₽/i, '');
                let newTotal = +totalSum.value;
                newTotal += itemPrice;
                totalSum.value = `${newTotal} ₽`;
                console.log(total);
            } else {
                console.log('Не выбран');
                let item = input.closest('.cart__item');
                let itemPrice = +item.querySelector('.toy__price').textContent;
                totalSum.value = +totalSum.value.replace(/ ₽/i, '');
                let newTotal = +totalSum.value;
                newTotal -= itemPrice;
                totalSum.value = `${newTotal} ₽`;
            }
        });


    });
}
checkBox();


