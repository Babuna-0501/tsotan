(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{463:function(t,n,e){"use strict";e.r(n);e(13),e(32),e(33);var c={components:{Navigation:function(){return Promise.resolve().then(e.bind(null,236))},MiniCart:function(){return Promise.resolve().then(e.bind(null,234))}},computed:{cartItemCount:function(){return this.$store.getters.cartItemCount},wishlistItemCount:function(){return this.$store.getters.wishlistItemCount},compareItemCount:function(){return this.$store.getters.compareItemCount}},data:function(){return{isSticky:!1,isOpenSearch:!1,isOpenAccountSettings:!1,openCart:!1,navOpen:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var n=window.scrollY;t.isSticky=n>=200}))}},o=e(16),component=Object(o.a)(c,(function(){var t=this,n=t._self._c;return n("div",[n("header",{staticClass:"header-area sticky-bar header-padding-3 header-res-padding header-ptb-hm5 transparent-bar header-hm-6",class:{"is-sticky":t.isSticky}},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-4 col-3"},[n("div",{staticClass:"clickable-menu"},[n("button",{on:{click:function(n){t.navOpen=!t.navOpen}}},[n("i",{staticClass:"pe-7s-menu"})])])]),t._v(" "),n("div",{staticClass:"col-md-4 d-none d-md-block"},[n("div",{staticClass:"logo text-center logo-hm5"},[n("n-link",{staticClass:"sticky-none",attrs:{to:"/"}},[n("img",{attrs:{src:"/img/logo/logo-2.png",alt:"brand logo"}})]),t._v(" "),n("n-link",{staticClass:"sticky-block",attrs:{to:"/"}},[n("img",{attrs:{src:"/img/logo/logo.png",alt:"brand logo"}})])],1)]),t._v(" "),n("div",{staticClass:"col-md-4 col-9"},[n("div",{staticClass:"header-right-wrap header-right-wrap-white"},[n("div",{staticClass:"same-style header-search d-none d-lg-block"},[n("button",{staticClass:"search-active",on:{click:function(n){t.isOpenSearch=!t.isOpenSearch}}},[n("i",{staticClass:"pe-7s-search"})]),t._v(" "),n("div",{staticClass:"search-content",class:{active:t.isOpenSearch}},[t._m(0)])]),t._v(" "),n("div",{staticClass:"same-style account-setting d-none d-lg-block"},[n("button",{staticClass:"account-setting-active",on:{click:function(n){t.isOpenAccountSettings=!t.isOpenAccountSettings}}},[n("i",{staticClass:"pe-7s-user-female"})]),t._v(" "),n("div",{staticClass:"account-dropdown",class:{active:t.isOpenAccountSettings}},[n("ul",[n("li",[n("n-link",{attrs:{to:"/login-register"}},[t._v("Login")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/login-register"}},[t._v("Register")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/my-account"}},[t._v("my account")])],1)])])]),t._v(" "),n("div",{staticClass:"same-style header-compare"},[n("n-link",{attrs:{to:"/compare"}},[n("i",{staticClass:"pe-7s-shuffle"})]),t._v(" "),n("span",{staticClass:"count-style"},[t._v(t._s(t.compareItemCount))])],1),t._v(" "),n("div",{staticClass:"same-style header-wishlist"},[n("n-link",{attrs:{to:"/wishlist"}},[n("i",{staticClass:"pe-7s-like"})]),t._v(" "),n("span",{staticClass:"count-style"},[t._v(t._s(t.wishlistItemCount))])],1),t._v(" "),n("div",{staticClass:"same-style cart-wrap"},[n("button",{staticClass:"icon-cart",on:{click:function(n){t.openCart=!t.openCart}}},[n("i",{staticClass:"pe-7s-shopbag"}),t._v(" "),n("span",{staticClass:"count-style"},[t._v(t._s(t.cartItemCount))])]),t._v(" "),n("MiniCart",{attrs:{miniCart:{visible:t.openCart}},on:{minicartClose:function(n){t.openCart=!t.openCart}}})],1)])])])])]),t._v(" "),n("OffCanvasMobileMenu",{class:{"show-mobile-menu":t.navOpen},on:{toggleAsideMenu:function(n){t.navOpen=!t.navOpen}}})],1)}),[function(){var t=this._self._c;return t("form",[t("input",{attrs:{type:"text",placeholder:"Search"}}),this._v(" "),t("button",{staticClass:"button-search"},[t("i",{staticClass:"pe-7s-search"})])])}],!1,null,null,null);n.default=component.exports;installComponents(component,{MiniCart:e(234).default,OffCanvasMobileMenu:e(235).default})}}]);