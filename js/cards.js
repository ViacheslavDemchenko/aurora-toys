let url = document.location.href;
$.each($('.menu__link'), function() {
    if (this.href == url) { 
        $(this).addClass('menu__link--active');
    } else {
        $('.menu__link').removeClass('menu__link--active');
    }
});

const cardDetails = document.querySelectorAll('.details-btn');
const overlay = document.querySelector('.overlay');
const card = document.querySelector('.card');
const cardClose = document.querySelector('.card-close');
const body = document.getElementsByTagName('body')[0];
const toCatalogBtn = document.querySelector('.to-catalog-btn');
const toyColor = document.querySelector('.toy-color');
const corgiColors = document.querySelectorAll('.corgi-color');
const corgiColor_1 = document.querySelector('.corgi-color_1');
const corgiColor_2 = document.querySelector('.corgi-color_2');
const corgiColor_3 = document.querySelector('.corgi-color_3');

const catColors = document.querySelectorAll('.cat-color');
const catColor_1 = document.querySelector('.cat-color_1');
const catColor_2 = document.querySelector('.cat-color_2');


cardDetails.forEach(btn => {
    btn.addEventListener('click', () => {
        overlay.classList.add('overlay--active');
        body.classList.add('no-scroll');
    });
});


if ($('.card-close').length > 0) {
    cardClose.addEventListener('click', () => {
        overlay.classList.remove('overlay--active');
        body.classList.remove('no-scroll');
        toyColor.style.display = 'none';
        corgiColor_1.style.display = 'none';
        corgiColor_2.style.display = 'none';
        corgiColor_3.style.display = 'none';
        catColor_1.style.display = 'none';
        catColor_2.style.display = 'none';
        corgiColors.forEach(color => {
            color.classList.remove('corgi-color--active');
        });
        catColors.forEach(color => {
            color.classList.remove('cat-color--active');
        });
    });
}

if ($('.to-catalog-btn').length > 0) {
    toCatalogBtn.addEventListener('click', () => {
        overlay.classList.remove('overlay--active');
        body.classList.remove('no-scroll');
    });
}

function backToTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
    }
}

cardDetails.forEach((btn) => {
    btn.addEventListener('click', backToTop);
});



let toys = {
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

let attr;
let currentToy;
let images = document.querySelectorAll('.img__item img');

cardDetails.forEach(btn => {
    btn.addEventListener('click', () => {
        let attr = btn.getAttribute('data-card');
        findToy(attr);
    });
});

function findToy(attr) {
    currentToy = toys[attr];
    dataFill();
}

function dataFill() {
    document.querySelector('.toy-title').textContent = currentToy.name;

    document.querySelector('.size__num').textContent = currentToy.size;
    document.querySelector('.material__type').textContent = currentToy.material;
    document.querySelector('.wadding__type').textContent = currentToy.wadding;
    document.querySelector('.toy-description').textContent = currentToy.descr;
    document.querySelector('.price').textContent = currentToy.price;

    document.querySelector('.img__item-first img').setAttribute('src', currentToy.img_1_sm);
    document.querySelector('.img__item-second img').setAttribute('src', currentToy.img_2_sm);
    document.querySelector('.img__item-third img').setAttribute('src', currentToy.img_3_sm);
    document.querySelector('.img__item-big img').setAttribute('src', currentToy.img_1_big);
    
    document.querySelector('.img__item-first img').setAttribute('alt', currentToy.alt);
    document.querySelector('.img__item-second img').setAttribute('alt', currentToy.alt);
    document.querySelector('.img__item-third img').setAttribute('alt', currentToy.alt);
    document.querySelector('.img__item-big img').setAttribute('alt', currentToy.alt);

    document.querySelector('.card').setAttribute('data-card', currentToy.nameEn);

    if (currentToy.nameEn == 'corgi') {
        console.log('Корги');
        toyColor.style.display = 'flex';
        corgiColor_1.style.display = 'flex';
        corgiColor_2.style.display = 'flex';
        corgiColor_3.style.display = 'flex';

        corgiColors.forEach(color => {
            color.addEventListener('click', () => {
                corgiColors.forEach(color => {
                    color.classList.remove('corgi-color--active');
                });
                color.classList.add('corgi-color--active');
                let colorCorgi = color.getAttribute('data-color');
                localStorage.setItem('color-corgi', colorCorgi);
                console.log(localStorage.getItem('color-corgi'));
            });
        });
    }

    if (currentToy.nameEn == 'cat') {
        console.log('Кот');
        toyColor.style.display = 'flex';
        catColor_1.style.display = 'flex';
        catColor_2.style.display = 'flex';
        // catColor_3.style.display = 'none';

        catColors.forEach(color => {
            color.addEventListener('click', () => {
                catColors.forEach(color => {
                    color.classList.remove('cat-color--active');
                });
                color.classList.add('cat-color--active');
                let colorCat = color.getAttribute('data-color');
                localStorage.setItem('color-cat', colorCat);
                console.log(localStorage.getItem('color-cat'));
            });
        });
    } 

    images.forEach( img => {
        img.addEventListener('mouseenter', () => {
            let link = img.getAttribute('src');
            let newnewLink = link.replace(/sm/i, 'big');
            console.log(link);
            console.log(newnewLink);
            document.querySelector('.img__item-big img').setAttribute('src', newnewLink);
        });
    });
}

if ($('.full-img-close').length > 0) {
    const fullImgClose = document.querySelector('.full-img-close');
    const fullImg = document.querySelector('.full-img');

    fullImgClose.addEventListener('click', () => {
        fullImg.classList.remove('full-img--active');
    });

    const imgBig = document.querySelector('.img__item-big img');

    imgBig.addEventListener('click', () => {
        let link = imgBig.getAttribute('src');
        let newnewLink;

        if (window.screen.width <= 1024 ) {
            newnewLink = link.replace(/big/i, 'full-mobile');
        } else {
            newnewLink = link.replace(/big/i, 'full');
        }

        console.log(link);
        console.log(newnewLink);
        document.querySelector('.full-img img').setAttribute('src', newnewLink);
        fullImg.classList.add('full-img--active');
    });

}

let cart = {};

const toCartBtn = document.querySelectorAll('.to-cart-btn');
const countMinus = document.querySelectorAll('.count__arrow-left');
const countPlus = document.querySelectorAll('.count__arrow-right');
const countNumber = document.querySelectorAll('.count__number');

let count = 0;
let totalPrice = 0;

countPlus.forEach( plus => {
    plus.addEventListener('click', () => {
        let card = plus.closest('.catalog-slide');
        let number = card.querySelector('.count__number');
        count = number.textContent;
        count++;
        number.textContent = count;
    });
});

countMinus.forEach( minus => {
    minus.addEventListener('click', () => {
        let card = minus.closest('.catalog-slide');
        let number = card.querySelector('.count__number');
        count = number.textContent;
        count--;

        if (count <= 0) {
            count = 1
        }
        number.textContent = count;
    });
});

toCartBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        let card = btn.closest('.catalog-slide');
        let number = card.querySelector('.count__number');
        let toy = btn.getAttribute('data-card');
        let price = card.querySelector('.catalog-slide__price').textContent;
        price = +price.slice(0, -2);

        if (localStorage.getItem('cart') !== null) {
            console.log('Да');
            let getCurrentCart = localStorage.getItem('cart');
            let currentCart = JSON.parse(getCurrentCart);

            if (currentCart[toy]) {
                console.log('Да');
                currentCart[toy] += +number.textContent;
                localStorage.setItem('cart', JSON.stringify(currentCart));
                let totalPrice = +localStorage.getItem('totalPrice');
                console.log(totalPrice);
                totalPrice += price * card.querySelector('.count__number').textContent;
                localStorage.setItem('totalPrice', totalPrice);
                console.log(totalPrice);
            } else {
                console.log('Нет');
                currentCart[toy] = +number.textContent;
                localStorage.setItem('cart', JSON.stringify(currentCart));
                let totalPrice = +localStorage.getItem('totalPrice');
                console.log(totalPrice);
                totalPrice += price * card.querySelector('.count__number').textContent;
                localStorage.setItem('totalPrice', totalPrice);
                console.log(currentCart);
            }

        } else {
            console.log('Нет');
            cart[toy] = +number.textContent;
            totalPrice += price * card.querySelector('.count__number').textContent;
            localStorage.setItem('cart', JSON.stringify(cart));
            localStorage.setItem('totalPrice', totalPrice);
            console.log(cart[toy]);
        }
        toyNum();
    });
});

const cardCountMinus = document.querySelectorAll('.count__arrow-minus');
const cardCountPlus = document.querySelectorAll('.count__arrow-plus');
const cardtoCartBtn = document.querySelectorAll('.to-cart-btn--card');

cardCountPlus.forEach( plus => {
    plus.addEventListener('click', () => {
        let card = plus.closest('.card');
        let number = card.querySelector('.toy__number');
        count = number.textContent;
        count++;
        number.textContent = count;
    });
});

cardCountMinus.forEach( minus => {
    minus.addEventListener('click', () => {
        let card = minus.closest('.card');
        let number = card.querySelector('.toy__number');
        count = number.textContent;
        count--;

        if (count <= 0) {
            count = 1
        }
        number.textContent = count;
    });
});

cardtoCartBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        let card = btn.closest('.card');
        let number = card.querySelector('.toy__number');
        let toy = card.getAttribute('data-card');
        let price = card.querySelector('.price').textContent;
        price = +price.slice(0, -2);

        if (localStorage.getItem('cart') !== null) {
            console.log('Да');
            let getCurrentCart = localStorage.getItem('cart');
            let currentCart = JSON.parse(getCurrentCart);

            if (currentCart[toy]) {
                console.log('Да');
                currentCart[toy] += +number.textContent;
                localStorage.setItem('cart', JSON.stringify(currentCart));
                let totalPrice = +localStorage.getItem('totalPrice');
                console.log(totalPrice);
                totalPrice += price * card.querySelector('.toy__number').textContent;
                localStorage.setItem('totalPrice', totalPrice);
                console.log(totalPrice);
            } else {
                console.log('Нет');
                currentCart[toy] = +number.textContent;
                localStorage.setItem('cart', JSON.stringify(currentCart));
                let totalPrice = +localStorage.getItem('totalPrice');
                console.log(totalPrice);
                totalPrice += price * card.querySelector('.toy__number').textContent;
                localStorage.setItem('totalPrice', totalPrice);
                console.log(totalPrice);
            }

        } else {
            console.log('Нет');
            cart[toy] = +number.textContent;
            totalPrice += price * card.querySelector('.toy__number').textContent;
            localStorage.setItem('cart', JSON.stringify(cart));
            localStorage.setItem('totalPrice', totalPrice);
            console.log(cart);
        }
        toyNum();
    });
});


function toyNum() {
    let toysObj = localStorage.getItem('cart');
    let toysNum = JSON.parse(toysObj);
    sum(toysNum);
}

function sum(obj) {
    let sum = 0;
    for( let el in obj ) {
      if( obj.hasOwnProperty( el ) ) {
        sum += obj[el];
      }
    }
    console.log(sum);
    const cartToyNumber = document.querySelector('.cart__num');
    cartToyNumber.textContent = sum;
    localStorage.setItem('toyNumber', sum);
    return sum;
}


// var friends = new Object();

// friends.steve = new Object();
// friends.steve.firstName = "Steve";
// friends.steve.lastName = "Jobs";
// friends.steve.number = "20-456-88";
// friends.steve.address = "Apple";

// friends.bill = new Object();
// friends.bill.firstName = "Bill";
// friends.bill.lastName = "gates";
// friends.bill.number = "20-456-88";
// friends.bill.address = "Windows";

// console.log(friends);