(window.webpackJsonp=window.webpackJsonp||[]).push([[69,17,27,53],{335:function(t,e,n){t.exports=n.p+"img/logo.b060b72.jpg"},337:function(t,e,n){"use strict";n.r(e);n(13),n(32),n(33);var r={components:{Navigation:function(){return Promise.resolve().then(n.bind(null,227))},MiniCart:function(){return Promise.resolve().then(n.bind(null,225))}},props:["containerClass"],computed:{cartItemCount:function(){return this.$store.getters.cartItemCount},wishlistItemCount:function(){return this.$store.getters.wishlistItemCount},compareItemCount:function(){return this.$store.getters.compareItemCount}},data:function(){return{isSticky:!1,isOpenSearch:!1,isOpenAccountSettings:!1,openCart:!1,navOpen:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))}},c=n(16),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("header",{staticClass:"header-area"},[e("div",{staticClass:"header-top-area header-padding-2 d-none d-lg-block"},[e("div",{class:t.containerClass},[e("div",{staticClass:"header-top-inner"},[e("div",{staticClass:"col-lg-2 col-md-6 col-4"},[e("div",{staticClass:"logo"},[e("n-link",{attrs:{to:"/"}},[e("img",{attrs:{src:n(335),alt:"tsotan logo"}})])],1)]),t._v(" "),t._m(0)])])]),t._v(" "),e("div",{staticClass:"header-padding-1 sticky-bar header-res-padding clearfix",class:{"is-sticky":t.isSticky},staticStyle:{"background-color":"#60445D"}},[e("div",{class:t.containerClass},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-8 d-none d-lg-block"},[e("div",{staticClass:"main-menu"},[e("nav",[e("Navigation")],1)])]),t._v(" "),e("div",{staticClass:"col-lg-2 col-md-6 col-8"},[e("div",{staticClass:"header-right-wrap"},[e("div",{staticClass:"same-style header-search d-none d-lg-block"},[e("button",{staticClass:"search-active",on:{click:function(e){t.isOpenSearch=!t.isOpenSearch}}},[e("i",{staticClass:"pe-7s-search"})]),t._v(" "),e("div",{staticClass:"search-content",class:{active:t.isOpenSearch}},[t._m(1)])]),t._v(" "),e("div",{staticClass:"same-style cart-wrap"},[e("button",{staticClass:"icon-cart",on:{click:function(e){t.openCart=!t.openCart}}},[e("i",{staticClass:"pe-7s-shopbag"}),t._v(" "),e("span",{staticClass:"count-style"},[t._v(t._s(t.cartItemCount))])]),t._v(" "),e("MiniCart",{attrs:{miniCart:{visible:t.openCart}},on:{minicartClose:function(e){t.openCart=!t.openCart}}})],1),t._v(" "),e("div",{staticClass:"same-style mobile-menu-toggler d-block d-lg-none"},[e("button",{staticClass:"mobile-aside-button",on:{click:function(e){t.navOpen=!t.navOpen}}},[e("i",{staticClass:"pe-7s-menu"})])])])])])])])]),t._v(" "),e("OffCanvasMobileMenu",{class:{"show-mobile-menu":t.navOpen},on:{toggleAsideMenu:function(e){t.navOpen=!t.navOpen}}})],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"language-currency-wrap"},[e("div",{staticClass:"same-language-currency"},[e("p",[t._v("Call: "),e("a",{staticStyle:{color:"#000"},attrs:{href:"callto:3965410"}},[t._v("+976-9330 0991")])])])])},function(){var t=this._self._c;return t("form",[t("input",{attrs:{type:"text",placeholder:"Search"}}),this._v(" "),t("button",{staticClass:"button-search"},[t("i",{staticClass:"pe-7s-search"})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:n(227).default,MiniCart:n(225).default,OffCanvasMobileMenu:n(226).default})},338:function(t,e,n){"use strict";n.r(e);var r={},c=n(16),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer-area pt-100 pb-70",staticStyle:{"background-color":"#2f333a",color:"#fff"},attrs:{id:"social"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row",staticStyle:{"justify-content":"space-around"}},[e("div",{staticClass:"col-lg-2 col-sm-4"},[e("div",{staticClass:"copyright mb-30"},[e("div",{staticClass:"footer-logo"},[e("n-link",{attrs:{to:"/"}},[e("img",{attrs:{src:n(335),alt:"logo"}})])],1),t._v(" "),t._m(0)])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)])])])}),[function(){var t=this,e=t._self._c;return e("p",[t._v("© 2023 "),e("a",{attrs:{href:"#",target:"_blank"}},[t._v("Tsotan")]),t._v("."),e("br"),t._v(" All Rights Reserved")])},function(){var t=this._self._c;return t("div",{staticClass:"col-lg-2 col-sm-4"},[t("div",{staticClass:"footer-widget mb-30 ml-50"},[t("div",{staticClass:"footer-title"}),this._v(" "),t("div",{staticClass:"footer-list"},[t("ul")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-2 col-sm-6"},[e("div",{staticClass:"footer-widget mb-30 ml-75"},[e("div",{staticClass:"footer-title"},[e("h3",[t._v("Follow us")])]),t._v(" "),e("div",{staticClass:"footer-list"},[e("ul",[e("li",[e("a",{attrs:{href:"https://www.facebook.com/tsotantextile",target:"_blank"}},[t._v("Facebook")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://twitter.com/@Tsotan_textile",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.instagram.com/tsotan_mongolia/",target:"_blank"}},[t._v("Instagram")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.youtube.com/",target:"_blank"}},[t._v("Youtube")])])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-2 col-sm-4"},[e("div",{staticClass:"footer-widget mb-30 ml-30"},[e("div",{staticClass:"footer-title"},[e("h3",[t._v("Хаяг")])]),t._v(" "),e("div",{staticClass:"footer-list"},[e("ul",[t._v("\n                            Tsotan Textile Цотан Текстил\n                            Төмөр замын 222-р байр,\n                            Замчид гудамж, Ulaanbaatar 16051,\n                            Mongolia +976 9330 0991\n                        ")])])])])}],!1,null,null,null);e.default=component.exports},340:function(t,e,n){"use strict";n.r(e);var r={props:["pageTitle"]},c=n(16),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"breadcrumb-area pt-35 pb-35 bg-gray-3"},[e("div",{staticClass:"container"},[e("div",{staticClass:"breadcrumb-content text-center"},[e("ul",[e("li",[e("n-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),e("li",{staticClass:"active"},[t._v(t._s(t.pageTitle))])])])])])}),[],!1,null,null,null);e.default=component.exports},439:function(t,e,n){"use strict";n.r(e);n(34),n(228),n(43),n(38),n(42),n(56),n(35),n(57);var r=n(26);n(13),n(32),n(33),n(28),n(58);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l={components:{HeaderWithTopbar:function(){return Promise.resolve().then(n.bind(null,337))},Breadcrumb:function(){return Promise.resolve().then(n.bind(null,340))},TheFooter:function(){return Promise.resolve().then(n.bind(null,338))}},data:function(){return{singleQuantity:1}},computed:{products:function(){return this.$store.getters.getCart},total:function(){return this.$store.getters.getTotal}},methods:{incrementProduct:function(t){var e=o(o({},t),{},{cartQuantity:1});this.$store.dispatch("addToCartItem",e)},decrementProduct:function(t){var e=o(o({},t),{},{cartQuantity:1});t.cartQuantity>1&&this.$store.dispatch("decreaseProduct",e)},removeProduct:function(t){this.$notify({title:"Картнаас барааг хасах!"}),this.$store.dispatch("removeProductFromCart",t)},discountedPrice:function(t){return t.price},clearCart:function(){confirm("Картан дах барааг хоослох уу?")&&(this.$notify({title:"Картнаас барааг хасах!"}),this.$store.commit("CLEAR_CART"))},slugify:function(text){return String(text).toLowerCase().replace(/\s+/g,"-").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}},head:function(){return{title:"Cart"}}},v=n(16),component=Object(v.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"cart-page-wrapper"},[e("HeaderWithTopbar",{attrs:{containerClass:"container"}}),t._v(" "),e("Breadcrumb",{attrs:{pageTitle:"Барааны Сагс"}}),t._v(" "),e("div",{staticClass:"cart-main-area pt-90 pb-100"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[t.products.length>0?e("div",{staticClass:"col-12"},[e("h3",{staticClass:"cart-page-title"},[t._v("Таны картанд байгаа бараанууд")]),t._v(" "),e("div",{staticClass:"table-content table-responsive cart-table-content"},[e("table",[t._m(0),t._v(" "),e("tbody",t._l(t.products,(function(n,r){return e("tr",{key:r},[e("td",{staticClass:"product-thumbnail"},[e("n-link",{attrs:{to:"/product/product-detail/".concat(n.id)}},[e("img",{attrs:{src:n.img,alt:n.name}})])],1),t._v(" "),e("td",{staticClass:"product-name"},[e("n-link",{attrs:{to:"/product/".concat(t.slugify(n.name))}},[t._v(t._s(n.name))])],1),t._v(" "),e("td",{staticClass:"product-price-cart"},[e("span",{staticClass:"amount"},[t._v(t._s(t.discountedPrice(n).toFixed(2))+"₮")])]),t._v(" "),e("td",{staticClass:"product-quantity"},[e("div",{staticClass:"cart-plus-minus"},[e("button",{staticClass:"dec qtybutton",on:{click:function(e){return t.decrementProduct(n)}}},[t._v("\n                        -\n                      ")]),t._v(" "),e("input",{staticClass:"cart-plus-minus-box",attrs:{type:"text",readonly:""},domProps:{value:n.cartQuantity}}),t._v(" "),e("button",{staticClass:"inc qtybutton",on:{click:function(e){return t.incrementProduct(n)}}},[t._v("\n                        +\n                      ")])])]),t._v(" "),e("td",{staticClass:"product-subtotal"},[t._v("\n                    "+t._s(n.total.toFixed(2))+"₮\n                  ")]),t._v(" "),e("td",{staticClass:"product-remove"},[e("button",{on:{click:function(e){return t.removeProduct(n)}}},[e("i",{staticClass:"fa fa-times"})])])])})),0)])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"cart-shiping-update-wrapper"},[e("div",{staticClass:"cart-clear"},[e("button",{on:{click:function(e){return t.clearCart()}}},[t._v("Картыг хоослох")])])])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-4 col-md-12"},[e("div",{staticClass:"grand-total"},[t._m(1),t._v(" "),e("h5",[t._v("\n                  Нийт бүтээгдэхүүн"),e("span",[t._v(t._s(t.total.toFixed(2))+"₮")])]),t._v(" "),e("h4",{staticClass:"grand-total-title"},[t._v("\n                  Нийт үнэ"),e("span",[t._v(t._s(t.total.toFixed(2))+"₮")])]),t._v(" "),e("n-link",{attrs:{to:"/checkout"}},[t._v("Төлбөр төлөх")])],1)])])]):e("div",{staticClass:"col-12"},[e("div",{staticClass:"empty-cart text-center"},[t._m(2),t._v(" "),e("h4",[t._v("Сагсанд бараа алга байна")]),t._v(" "),e("n-link",{staticClass:"empty-cart__button",attrs:{to:"/shop"}},[t._v("Дэлгүүр")])],1)])])])]),t._v(" "),e("TheFooter")],1)}),[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",[t._v("Зураг")]),t._v(" "),e("th",[t._v("Нэр")]),t._v(" "),e("th",[t._v("Үнэ")]),t._v(" "),e("th",[t._v("Тоо Хэмжээ")]),t._v(" "),e("th",[t._v("Нийт үнэ")]),t._v(" "),e("th",[t._v("Үйлдэл")])])])},function(){var t=this._self._c;return t("div",{staticClass:"title-wrap"},[t("h4",{staticClass:"cart-bottom-title section-bg-gary-cart"},[this._v("Сагс")])])},function(){var t=this._self._c;return t("div",{staticClass:"icon"},[t("i",{staticClass:"pe-7s-cart"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderWithTopbar:n(337).default,Breadcrumb:n(340).default,TheFooter:n(338).default})}}]);