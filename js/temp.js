const formBack = document.querySelector('.form__back');
const form = document.querySelector('.form');
const cartBtn = document.querySelector('.cart-btn');


function backToTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
    }
}

// if ($('.cart-btn').length > 0) {

//     cartBtn.addEventListener('click',backToTop);

//     cartBtn.addEventListener('click', () => {
//         overlay.classList.add('overlay--active');
//         form.classList.add('overlay--active');
//         body.classList.add('no-scroll');
//     });
// }

if ($('.form__back').length > 0) {

    formBack.addEventListener('click', () => {
        overlay.classList.remove('overlay--active');
        form.classList.remove('overlay--active');
        body.classList.remove('no-scroll');
    });
}


toys = {
	shark: {
        name: 'Акула',
        nameEn: 'shark',
		size: '80 см',
        material: 'плюш',
        wadding: 'холлофайбер',
        descr: 'Мягкая игрушка акула, не смотря на грозный вид, станет отличным другом для вашей семьи',
        alt: 'Игрушка акула',
        price: '1200 ₽',
        img_1_sm: 'img/card-shark-sm@2x.jpg',
        img_2_sm: 'img/card-shark-sm-2@2x.jpg',
        img_3_sm: 'img/card-shark-sm-3@2x.jpg',
        img_1_big: 'img/card-shark-big@2x.jpg',
        img_2_big: 'img/card-shark-big-2@2x.jpg',
        img_3_big: 'img/card-shark-big-3@2x.jpg',
        img_1_full: 'img/card-shark-full@2x.jpg',
        img_2_full: 'img/card-shark-full-2@2x.jpg',
        img_3_full: 'img/card-shark-full-3@2x.jpg',
        img_1_full_mobile: 'img/card-shark-full-mobile@2x.jpg',
        img_2_full_mobile: 'img/card-shark-full-mobile-2@2x.jpg',
        img_3_full_mobile: 'img/card-shark-full-mobile-3@2x.jpg',
        img_cart_1x_jpg: 'img/cart-shark@1x.jpg',
        img_cart_2x_jpg: 'img/cart-shark@2x.jpg',
        img_cart_1x_webp: 'img/cart-shark@1x.webp',
        img_cart_2x_webp: 'img/cart-shark@2x.webp',
	},
	avocado: {
        name: 'Авокадо',
        nameEn: 'avocado',
		size: '35 см',
        material: 'плюш',
        wadding: 'холлофайбер',
        descr: 'Милый и добрый авокадо, станет отличным подаком для ваших детей, второй половинки и всех всех всех',
        alt: 'Игрушка авокадо',
        price: '850 ₽',
        img_1_sm: 'img/card-avocado-sm@2x.jpg',
        img_2_sm: 'img/card-avocado-sm-2@2x.jpg',
        img_3_sm: 'img/card-avocado-sm-3@2x.jpg',
        img_1_big: 'img/card-avocado-big@2x.jpg',
        img_2_big: 'img/card-avocado-big-2@2x.jpg',
        img_3_big: 'img/card-avocado-big-3@2x.jpg',
        img_1_full: 'img/card-avocado-full@2x.jpg',
        img_2_full: 'img/card-avocado-full-2@2x.jpg',
        img_3_full: 'img/card-avocado-full-3@2x.jpg',
        img_1_full_mobile: 'img/card-avocado-full-mobile@2x.jpg',
        img_2_full_mobile: 'img/card-avocado-full-mobile-2@2x.jpg',
        img_3_full_mobile: 'img/card-avocado-full-mobile-3@2x.jpg',
        img_cart_1x_jpg: 'img/cart-avocado@1x.jpg',
        img_cart_2x_jpg: 'img/cart-avocado@2x.jpg',
        img_cart_1x_webp: 'img/cart-avocado@1x.webp',
        img_cart_2x_webp: 'img/cart-avocado@2x.webp',
	},
	corgi: {
        name: 'Корги',
        nameEn: 'corgi',
		size: '35 см',
        material: 'плюш',
        wadding: 'холлофайбер',
        descr: 'Настоящие королевские корги, особая порода собак, требующая особого внимания и большой любви',
        alt: 'Игрушка корги',
        price: '850 ₽',
        img_1_sm: 'img/card-corgi-sm@2x.jpg',
        img_2_sm: 'img/card-corgi-sm-2@2x.jpg',
        img_3_sm: 'img/card-corgi-sm-3@2x.jpg',
        img_1_big: 'img/card-corgi-big@2x.jpg',
        img_2_big: 'img/card-corgi-big-2@2x.jpg',
        img_3_big: 'img/card-corgi-big-3@2x.jpg',
        img_1_full: 'img/card-corgi-full@2x.jpg',
        img_2_full: 'img/card-corgi-full-2@2x.jpg',
        img_3_full: 'img/card-corgi-full-3@2x.jpg',
        img_1_full_mobile: 'img/card-corgi-full-mobile@2x.jpg',
        img_2_full_mobile: 'img/card-corgi-full-mobile-2@2x.jpg',
        img_3_full_mobile: 'img/card-corgi-full-mobile-3@2x.jpg',
        img_cart_1x_jpg: 'img/cart-corgi@1x.jpg',
        img_cart_2x_jpg: 'img/cart-corgi@2x.jpg',
        img_cart_1x_webp: 'img/cart-corgi@1x.webp',
        img_cart_2x_webp: 'img/cart-corgi@2x.webp',
    },
    cat: {
        name: 'Плюшевый кот',
        nameEn: 'cat',
		size: '120 см',
        material: 'плюш',
        wadding: 'холлофайбер',
        descr: 'Мягкая игрушка кот, как настоящий, только больше, мягче и дешевле',
        alt: 'Игрушка плюшевый кот',
        price: '1900 ₽',
        img_1_sm: 'img/card-cat-sm@2x.jpg',
        img_2_sm: 'img/card-cat-sm-2@2x.jpg',
        img_3_sm: 'img/card-cat-sm-3@2x.jpg',
        img_1_big: 'img/card-cat-big@2x.jpg',
        img_2_big: 'img/card-cat-big-2@2x.jpg',
        img_3_big: 'img/card-cat-big-3@2x.jpg',
        img_1_full: 'img/card-cat-full@2x.jpg',
        img_2_full: 'img/card-cat-full-2@2x.jpg',
        img_3_full: 'img/card-cat-full-3@2x.jpg',
        img_1_full_mobile: 'img/card-cat-full-mobile@2x.jpg',
        img_2_full_mobile: 'img/card-cat-full-mobile-2@2x.jpg',
        img_3_full_mobile: 'img/card-cat-full-mobile-3@2x.jpg',
        img_cart_1x_jpg: 'img/cart-cat@1x.jpg',
        img_cart_2x_jpg: 'img/cart-cat@2x.jpg',
        img_cart_1x_webp: 'img/cart-cat@1x.webp',
        img_cart_2x_webp: 'img/cart-cat@2x.webp',
    },
    lama: {
        name: 'Радужная лама',
        nameEn: 'lama',
		size: '35 см',
        material: 'плюш',
        wadding: 'холлофайбер',
        descr: 'Единственная в своем роде радужная лама, большая удача встретить ее в наше время, но у вас есть шанс ее приручить и стать ее хозяином',
        alt: 'Игрушка радужная лама',
        price: '1000 ₽',
        img_1_sm: 'img/card-lama-sm@2x.jpg',
        img_2_sm: 'img/card-lama-sm-2@2x.jpg',
        img_3_sm: 'img/card-lama-sm-3@2x.jpg',
        img_1_big: 'img/card-lama-big@2x.jpg',
        img_2_big: 'img/card-lama-big-2@2x.jpg',
        img_3_big: 'img/card-lama-big-3@2x.jpg',
        img_1_full: 'img/card-lama-full@2x.jpg',
        img_2_full: 'img/card-lama-full-2@2x.jpg',
        img_3_full: 'img/card-lama-full-3@2x.jpg',
        img_1_full_mobile: 'img/card-lama-full-mobile@2x.jpg',
        img_2_full_mobile: 'img/card-lama-full-mobile-2@2x.jpg',
        img_3_full_mobile: 'img/card-lama-full-mobile-3@2x.jpg',
        img_cart_1x_jpg: 'img/cart-lama@1x.jpg',
        img_cart_2x_jpg: 'img/cart-lama@2x.jpg',
        img_cart_1x_webp: 'img/cart-lama@1x.webp',
        img_cart_2x_webp: 'img/cart-lama@2x.webp',
    },
    seal: {
        name: 'Белый тюлень',
        nameEn: 'seal',
		size: '60 см',
        material: 'плюш',
        wadding: 'холлофайбер',
        descr: 'Белый плюшевый тюлень, редкость для нашей местности, встречается только в нашем магазине',
        alt: 'Игрушка белый тюлень',
        price: '1200 ₽',
        img_1_sm: 'img/card-seal-sm@2x.jpg',
        img_2_sm: 'img/card-seal-sm-2@2x.jpg',
        img_3_sm: 'img/card-seal-sm-3@2x.jpg',
        img_1_big: 'img/card-seal-big@2x.jpg',
        img_2_big: 'img/card-seal-big-2@2x.jpg',
        img_3_big: 'img/card-seal-big-3@2x.jpg',
        img_1_full: 'img/card-seal-full@2x.jpg',
        img_2_full: 'img/card-seal-full-2@2x.jpg',
        img_3_full: 'img/card-seal-full-3@2x.jpg',
        img_1_full_mobile: 'img/card-seal-full-mobile@2x.jpg',
        img_2_full_mobile: 'img/card-seal-full-mobile-2@2x.jpg',
        img_3_full_mobile: 'img/card-seal-full-mobile-3@2x.jpg',
        img_cart_1x_jpg: 'img/cart-seal@1x.jpg',
        img_cart_2x_jpg: 'img/cart-seal@2x.jpg',
        img_cart_1x_webp: 'img/cart-seal@1x.webp',
        img_cart_2x_webp: 'img/cart-seal@2x.webp',
	},
}

let getStorageCart = localStorage.getItem('cart');
let cartObject = JSON.parse(getStorageCart);

function cartTitle(obj) {
    const cartTitle = document.querySelector('.cart__title');

    if (Object.keys(obj).length === 0) {
        cartTitle.textContent = 'Ваша корзина пуста';
        cartBtn.textContent = 'Каталог';
        cartBtn.addEventListener('click', () => {
            window.location.href = 'catalog.html';
            overlay.classList.remove('overlay--active');
            form.classList.remove('overlay--active');
            body.classList.remove('no-scroll');
        });
    } else {
        cartTitle.textContent = 'Ваша корзина';
        cartBtn.textContent = 'Оформить товар';
        cartBtn.setAttribute('href', '#');
        cartBtn.addEventListener('click',backToTop);
        cartBtn.addEventListener('click', () => {
            overlay.classList.add('overlay--active');
            form.classList.add('overlay--active');
            body.classList.add('no-scroll');
        });
    }
}
cartTitle(cartObject);

let total = +localStorage.getItem('totalPrice');
const totalSum = document.querySelector('.total__num');
totalSum.disabled = true;
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
                    <div class="toy__price">${toyTotalPrice} ₽</div>
                    <img src="img/icons/cart-delete.svg" width="37" height="37" class="delete__toy" alt="Удалить товар из корзины">
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

            if (localStorage.getItem('toyNumber') !== null) {
                let toySum = parseInt(localStorage.getItem('toyNumber'));
                toySum += 1;
                localStorage.setItem('toyNumber', toySum);
                toySum = parseInt(localStorage.getItem('toyNumber'));
                const cartToyNumber = document.querySelector('.cart__num');
                cartToyNumber.textContent = +toySum;
            } 

            if (localStorage.getItem('cart') !== null) {
                let getCurrentCart = localStorage.getItem('cart');
                let currentCart = JSON.parse(getCurrentCart);
                let attr = toy.getAttribute('data-name');
                console.log(attr);

                if (currentCart[attr]) {
                    currentCart[attr] += 1;
                    localStorage.setItem('cart', JSON.stringify(currentCart));
                    total = +localStorage.getItem('totalPrice');
                    let addPrice = parseInt(toys[attr].price.slice(0, -2));
                    total += addPrice;
                    console.log(total);
                    localStorage.setItem('totalPrice', total);
                }
            }

            let toyPrice = toy.querySelector('.toy__price');
            let toyPriceNum = toyPrice.textContent;
            let toyName = toy.getAttribute('data-name');
            toyPriceNum = toys[toyName].price.slice(0, -2);
            toyPrice.textContent = toyPriceNum * count + ' ₽';
            newTotalPrice();
    });
});

toyMinus.forEach( plus => {
    plus.addEventListener('click', () => {
        let toy = plus.closest('.cart__item');

            let number = toy.querySelector('.count__number');
            let count = number.textContent;
            count--;

            if (count < 0) {
                count = 0;
            }

            number.textContent = count;

            if (localStorage.getItem('toyNumber') !== null) {
                let toySum = parseInt(localStorage.getItem('toyNumber'));
                toySum -= 1;
                localStorage.setItem('toyNumber', toySum);
                toySum = parseInt(localStorage.getItem('toyNumber'));
                const cartToyNumber = document.querySelector('.cart__num');
                cartToyNumber.textContent = +toySum;
            } 

            if (localStorage.getItem('cart') !== null) {
                let getCurrentCart = localStorage.getItem('cart');
                let currentCart = JSON.parse(getCurrentCart);
                let attr = toy.getAttribute('data-name');
                console.log(attr);

                if (currentCart[attr]) {
                    currentCart[attr] -= 1;
                    localStorage.setItem('cart', JSON.stringify(currentCart));
                    total = +localStorage.getItem('totalPrice');
                    let addPrice = parseInt(toys[attr].price.slice(0, -2));
                    total -= addPrice;
                    console.log(total);
                    localStorage.setItem('totalPrice', total);
                }
            } 

            let toyPrice = toy.querySelector('.toy__price');
            let toyPriceNum = toyPrice.textContent;
            let toyName = toy.getAttribute('data-name');
            toyPriceNum = toys[toyName].price.slice(0, -2);
            toyPrice.textContent = toyPriceNum * count + ' ₽';
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

const deleteToy = document.querySelectorAll('.delete__toy');

deleteToy.forEach( del => {
    del.addEventListener('click', () => {
        let item = del.closest('.cart__item');
        let itemPrice = +item.querySelector('.toy__price').textContent.replace(/ ₽/i, '');
        let attr = item.getAttribute('data-name');
        let getCurrentCart = localStorage.getItem('cart');
        let currentCart = JSON.parse(getCurrentCart);
        delete currentCart[attr];
        total = +localStorage.getItem('totalPrice');
        total = total - itemPrice;
        localStorage.setItem('totalPrice', total);
        totalSum.value = `${total} ₽`;
        localStorage.setItem('cart', JSON.stringify(currentCart));
        let toySum = parseInt(localStorage.getItem('toyNumber'));
        let toyNum = +item.querySelector('.count__number').textContent;
        toySum = toySum - toyNum;
        localStorage.setItem('toyNumber', toySum);
        const cartToyNumber = document.querySelector('.cart__num');
        cartToyNumber.textContent = toySum;
        let toyList = document.querySelector('.cart-list');
        toyList.removeChild(item);
        cartTitle(currentCart);
    });
});

function toyNumChange() {
    const cartToyNumber = document.querySelector('.cart__num');
    if (localStorage.getItem('toyNumber') !== null) {
        let toySum = localStorage.getItem('toyNumber');
        cartToyNumber.textContent = toySum;
    } else {
        cartToyNumber.textContent = 0;
    }
}
toyNumChange();


// Отправка данных на сервер

const sendData = async (url, data) => {
    const response = await fetch(url, {
        method: 'POST',
        body: data
    });

    if (!response.ok) {
        throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response}`);
    }

    return await response.json();
};

const sendCart = () => {

    const form = document.querySelector('.form');
    
    const data = localStorage.getItem('cart');

    form.addEventListener('submit', e => {
        e.preventDefault();

        const formData = new FormData(form);
        
        formData.set('order', JSON.stringify(data));

        sendData(`https://jsonplaceholder.typicode.com/posts`, formData)
            .then(() => {
                form.reset();
            })
            .catch((err) => {
                console.log(err);
            });
    });
}
sendCart();