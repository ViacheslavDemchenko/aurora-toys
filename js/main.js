"use strict";

var cardDetails = document.querySelectorAll('.details-btn');
var overlay = document.querySelector('.overlay');
var card = document.querySelector('.card');
var cardClose = document.querySelector('.card-close');
var body = document.getElementsByTagName('body')[0];
var toCatalogBtn = document.querySelector('.to-catalog-btn');
cardDetails.forEach(function (btn) {
  btn.addEventListener('click', function () {
    overlay.classList.add('overlay--active');
    body.classList.add('no-scroll');
  });
});

if ($('.card-close').length > 0) {
  cardClose.addEventListener('click', function () {
    overlay.classList.remove('overlay--active');
    body.classList.remove('no-scroll');
  });
}

if ($('.to-catalog-btn').length > 0) {
  toCatalogBtn.addEventListener('click', function () {
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

cardDetails.forEach(function (btn) {
  btn.addEventListener('click', backToTop);
});
var toys = {
  shark: {
    name: 'Акула',
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
    img_3_full: 'img/card-shark-full-3@2x.jpg'
  },
  avocado: {
    name: 'Авокадо',
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
    img_3_full: 'img/card-avocado-full-3@2x.jpg'
  },
  corgi: {
    name: 'Корги',
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
    img_3_full: 'img/card-corgi-full-3@2x.jpg'
  },
  cat: {
    name: 'Плюшевый кот',
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
    img_3_full: 'img/card-cat-full-3@2x.jpg'
  },
  lama: {
    name: 'Радужная лама',
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
    img_3_full: 'img/card-lama-full-3@2x.jpg'
  },
  seal: {
    name: 'Белый тюлень',
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
    img_3_full: 'img/card-seal-full-3@2x.jpg'
  }
};
var attr;
var currentToy;
var images = document.querySelectorAll('.img__item img');
cardDetails.forEach(function (btn) {
  btn.addEventListener('click', function () {
    var attr = btn.getAttribute('data-card'); // console.log(attr);

    findToy(attr);
  });
});

function findToy(attr) {
  currentToy = toys[attr]; // console.log(currentToy);
  // console.log(currentToy.img_1_sm);

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
  images.forEach(function (img, index) {
    img.addEventListener('mouseenter', function () {
      var link = img.getAttribute('src'); // console.log(img);

      var newnewLink = link.replace(/sm/i, 'big');
      console.log(link);
      console.log(newnewLink);
      document.querySelector('.img__item-big img').setAttribute('src', newnewLink);
    });
  });
}

if ($('.full-img-close').length > 0) {
  var fullImgClose = document.querySelector('.full-img-close');
  var fullImg = document.querySelector('.full-img');
  fullImgClose.addEventListener('click', function () {
    fullImg.classList.remove('full-img--active');
  });
  var imgBig = document.querySelector('.img__item-big img');
  imgBig.addEventListener('click', function () {
    var link = imgBig.getAttribute('src');
    var newnewLink = link.replace(/big/i, 'full');
    console.log(link);
    console.log(newnewLink);
    document.querySelector('.full-img img').setAttribute('src', newnewLink);
    fullImg.classList.add('full-img--active');
  });
}
"use strict";

var formBack = document.querySelector('.form__back');
var form = document.querySelector('.form');
var overlay = document.querySelector('.overlay');
var cartBtn = document.querySelector('.cart-btn');
cartBtn.addEventListener('click', function () {
  overlay.classList.add('overlay--active');
  form.classList.add('overlay--active');
});
formBack.addEventListener('click', function () {
  overlay.classList.remove('overlay--active');
  form.classList.remove('overlay--active');
});
"use strict";

var url = document.location.href;
$.each($('.menu__link'), function () {
  if (this.href == url) {
    $(this).addClass('menu__link--active');
  } else {
    $('.menu__link').removeClass('menu__link--active');
  }
});
// if (currentToy == 'lama' || currentToy == 'seal') {
//     document.querySelector('.toy-title').textContent = currentToy.name;
//     document.querySelector('.size__num').textContent = currentToy.size;
//     document.querySelector('.material__type').textContent = currentToy.material;
//     document.querySelector('.wadding__type').textContent = currentToy.wadding;
//     document.querySelector('.toy-description').textContent = currentToy.descr;
//     document.querySelector('.price').textContent = currentToy.price;
//     document.querySelector('.img__item-first img').setAttribute('src', currentToy.img_1_sm);
//     document.querySelector('.img__item-second img').setAttribute('src', currentToy.img_2_sm);
//     document.querySelector('.img__item-big img').setAttribute('src', currentToy.img_1_big);
//     document.querySelector('.img__item-first img').setAttribute('alt', currentToy.alt);
//     document.querySelector('.img__item-second img').setAttribute('alt', currentToy.alt);
//     document.querySelector('.img__item-big img').setAttribute('alt', currentToy.alt);
// } else {
//     document.querySelector('.toy-title').textContent = currentToy.name;
//     document.querySelector('.size__num').textContent = currentToy.size;
//     document.querySelector('.material__type').textContent = currentToy.material;
//     document.querySelector('.wadding__type').textContent = currentToy.wadding;
//     document.querySelector('.toy-description').textContent = currentToy.descr;
//     document.querySelector('.price').textContent = currentToy.price;
//     document.querySelector('.img__item-first img').setAttribute('src', currentToy.img_1_sm);
//     document.querySelector('.img__item-second img').setAttribute('src', currentToy.img_2_sm);
//     document.querySelector('.img__item-third img').setAttribute('src', currentToy.img_3_sm);
//     document.querySelector('.img__item-big img').setAttribute('src', currentToy.img_1_big);
//     document.querySelector('.img__item-first img').setAttribute('alt', currentToy.alt);
//     document.querySelector('.img__item-second img').setAttribute('alt', currentToy.alt);
//     document.querySelector('.img__item-third img').setAttribute('alt', currentToy.alt);
//     document.querySelector('.img__item-big img').setAttribute('alt', currentToy.alt);
// }
"use strict";
"use strict";

/*!
 * @copyright Copyright (c) 2017 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.2.6
 */
(function () {
  if ("undefined" !== typeof window && window.addEventListener) {
    var e = Object.create(null),
        l,
        d = function d() {
      clearTimeout(l);
      l = setTimeout(n, 100);
    },
        m = function m() {},
        t = function t() {
      window.addEventListener("resize", d, !1);
      window.addEventListener("orientationchange", d, !1);

      if (window.MutationObserver) {
        var k = new MutationObserver(d);
        k.observe(document.documentElement, {
          childList: !0,
          subtree: !0,
          attributes: !0
        });

        m = function m() {
          try {
            k.disconnect(), window.removeEventListener("resize", d, !1), window.removeEventListener("orientationchange", d, !1);
          } catch (v) {}
        };
      } else document.documentElement.addEventListener("DOMSubtreeModified", d, !1), m = function m() {
        document.documentElement.removeEventListener("DOMSubtreeModified", d, !1);
        window.removeEventListener("resize", d, !1);
        window.removeEventListener("orientationchange", d, !1);
      };
    },
        u = function u(k) {
      function e(a) {
        if (void 0 !== a.protocol) var c = a;else c = document.createElement("a"), c.href = a;
        return c.protocol.replace(/:/g, "") + c.host;
      }

      if (window.XMLHttpRequest) {
        var d = new XMLHttpRequest();
        var m = e(location);
        k = e(k);
        d = void 0 === d.withCredentials && "" !== k && k !== m ? XDomainRequest || void 0 : XMLHttpRequest;
      }

      return d;
    };

    var n = function n() {
      function d() {
        --q;
        0 === q && (m(), t());
      }

      function l(a) {
        return function () {
          !0 !== e[a.base] && (a.useEl.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + a.hash), a.useEl.hasAttribute("href") && a.useEl.setAttribute("href", "#" + a.hash));
        };
      }

      function p(a) {
        return function () {
          var c = document.body,
              b = document.createElement("x");
          a.onload = null;
          b.innerHTML = a.responseText;
          if (b = b.getElementsByTagName("svg")[0]) b.setAttribute("aria-hidden", "true"), b.style.position = "absolute", b.style.width = 0, b.style.height = 0, b.style.overflow = "hidden", c.insertBefore(b, c.firstChild);
          d();
        };
      }

      function n(a) {
        return function () {
          a.onerror = null;
          a.ontimeout = null;
          d();
        };
      }

      var a,
          c,
          q = 0;
      m();
      var f = document.getElementsByTagName("use");

      for (c = 0; c < f.length; c += 1) {
        try {
          var g = f[c].getBoundingClientRect();
        } catch (w) {
          g = !1;
        }

        var h = (a = f[c].getAttribute("href") || f[c].getAttributeNS("http://www.w3.org/1999/xlink", "href") || f[c].getAttribute("xlink:href")) && a.split ? a.split("#") : ["", ""];
        var b = h[0];
        h = h[1];
        var r = g && 0 === g.left && 0 === g.right && 0 === g.top && 0 === g.bottom;
        g && 0 === g.width && 0 === g.height && !r ? (f[c].hasAttribute("href") && f[c].setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a), b.length && (a = e[b], !0 !== a && setTimeout(l({
          useEl: f[c],
          base: b,
          hash: h
        }), 0), void 0 === a && (h = u(b), void 0 !== h && (a = new h(), e[b] = a, a.onload = p(a), a.onerror = n(a), a.ontimeout = n(a), a.open("GET", b), a.send(), q += 1)))) : r ? b.length && e[b] && setTimeout(l({
          useEl: f[c],
          base: b,
          hash: h
        }), 0) : void 0 === e[b] ? e[b] = !0 : e[b].onload && (e[b].abort(), delete e[b].onload, e[b] = !0);
      }

      f = "";
      q += 1;
      d();
    };

    var p = function p() {
      window.removeEventListener("load", p, !1);
      l = setTimeout(n, 0);
    };

    "complete" !== document.readyState ? window.addEventListener("load", p, !1) : p();
  }
})();