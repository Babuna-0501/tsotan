(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{464:function(t,e,n){"use strict";n.r(e);n(13),n(32),n(33);var c={components:{Navigation:function(){return Promise.resolve().then(n.bind(null,236))},MiniCart:function(){return Promise.resolve().then(n.bind(null,234))}},props:["containerClass"],computed:{cartItemCount:function(){return this.$store.getters.cartItemCount},wishlistItemCount:function(){return this.$store.getters.wishlistItemCount},compareItemCount:function(){return this.$store.getters.compareItemCount}},data:function(){return{isSticky:!1,isOpenSearch:!1,isOpenAccountSettings:!1,openCart:!1,navOpen:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))}},l=n(16),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("header",{staticClass:"header-area header-hm9"},[e("div",{staticClass:"container"},[e("div",{staticClass:"header-top-area"},[e("div",{staticClass:"row align-items-center"},[t._m(0),t._v(" "),e("div",{staticClass:"col-lg-2 col-4"},[e("div",{staticClass:"logo-hm9"},[e("n-link",{attrs:{to:"/"}},[e("img",{attrs:{src:"/img/logo/logo.jpg",alt:"Tsotan logo"}})])],1)]),t._v(" "),e("div",{staticClass:"col-lg-5 col-8"},[e("div",{staticClass:"header-right-wrap"},[e("div",{staticClass:"same-style header-search d-none d-lg-block"},[e("button",{staticClass:"search-active",on:{click:function(e){t.isOpenSearch=!t.isOpenSearch}}},[e("i",{staticClass:"pe-7s-search"})]),t._v(" "),e("div",{staticClass:"search-content",class:{active:t.isOpenSearch}},[t._m(1)])]),t._v(" "),e("div",{staticClass:"same-style account-setting d-none d-lg-block"},[e("button",{staticClass:"account-setting-active",on:{click:function(e){t.isOpenAccountSettings=!t.isOpenAccountSettings}}},[e("i",{staticClass:"pe-7s-user-female"})]),t._v(" "),e("div",{staticClass:"account-dropdown",class:{active:t.isOpenAccountSettings}},[e("ul",[e("li",[e("n-link",{attrs:{to:"/login-register"}},[t._v("Login")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/login-register"}},[t._v("Register")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/my-account"}},[t._v("my account")])],1)])])]),t._v(" "),e("div",{staticClass:"same-style header-compare"},[e("n-link",{attrs:{to:"/compare"}},[e("i",{staticClass:"pe-7s-shuffle"})]),t._v(" "),e("span",{staticClass:"count-style"},[t._v(t._s(t.compareItemCount))])],1),t._v(" "),e("div",{staticClass:"same-style header-wishlist"},[e("n-link",{attrs:{to:"/wishlist"}},[e("i",{staticClass:"pe-7s-like"})]),t._v(" "),e("span",{staticClass:"count-style"},[t._v(t._s(t.wishlistItemCount))])],1),t._v(" "),e("div",{staticClass:"same-style cart-wrap"},[e("button",{staticClass:"icon-cart",on:{click:function(e){t.openCart=!t.openCart}}},[e("i",{staticClass:"pe-7s-shopbag"}),t._v(" "),e("span",{staticClass:"count-style"},[t._v(t._s(t.cartItemCount))])]),t._v(" "),e("MiniCart",{attrs:{miniCart:{visible:t.openCart}},on:{minicartClose:function(e){t.openCart=!t.openCart}}})],1),t._v(" "),e("div",{staticClass:"same-style mobile-menu-toggler d-block d-lg-none"},[e("button",{staticClass:"mobile-aside-button",on:{click:function(e){t.navOpen=!t.navOpen}}},[e("i",{staticClass:"pe-7s-menu"})])])])])])])]),t._v(" "),e("div",{staticClass:"header-padding-1 sticky-bar header-res-padding clearfix d-none d-lg-block",class:{"is-sticky":t.isSticky}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"main-menu"},[e("nav",[e("Navigation")],1)])])])])])]),t._v(" "),e("OffCanvasMobileMenu",{class:{"show-mobile-menu":t.navOpen},on:{toggleAsideMenu:function(e){t.navOpen=!t.navOpen}}})],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-5 d-none d-lg-block"},[e("div",{staticClass:"language-currency-wrap"},[e("div",{staticClass:"same-language-currency language-style"},[e("select",{attrs:{name:"language"}},[e("option",{attrs:{value:"english"}},[t._v("English")]),t._v(" "),e("option",{attrs:{value:"hindi"}},[t._v("Hindi")]),t._v(" "),e("option",{attrs:{value:"spanish"}},[t._v("Spanish")])])]),t._v(" "),e("div",{staticClass:"same-language-currency use-style"},[e("select",{attrs:{name:"currency"}},[e("option",{attrs:{value:"usd"}},[t._v("USD")]),t._v(" "),e("option",{attrs:{value:"eur"}},[t._v("EUR")]),t._v(" "),e("option",{attrs:{value:"rup"}},[t._v("Rup")])])]),t._v(" "),e("div",{staticClass:"same-language-currency"},[e("p",[t._v("Call: "),e("a",{attrs:{href:"callto:3965410"}},[t._v("3965410")])])])])])},function(){var t=this._self._c;return t("form",[t("input",{attrs:{type:"text",placeholder:"Search"}}),this._v(" "),t("button",{staticClass:"button-search"},[t("i",{staticClass:"pe-7s-search"})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{MiniCart:n(234).default,Navigation:n(236).default,OffCanvasMobileMenu:n(235).default})}}]);