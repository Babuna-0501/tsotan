(window.webpackJsonp=window.webpackJsonp||[]).push([[74,17,27,53],{344:function(t,e,l){t.exports=l.p+"img/logo.b060b72.jpg"},346:function(t,e,l){"use strict";l.r(e);l(13),l(32),l(33);var n={components:{Navigation:function(){return Promise.resolve().then(l.bind(null,236))},MiniCart:function(){return Promise.resolve().then(l.bind(null,234))}},props:["containerClass"],computed:{cartItemCount:function(){return this.$store.getters.cartItemCount},wishlistItemCount:function(){return this.$store.getters.wishlistItemCount},compareItemCount:function(){return this.$store.getters.compareItemCount}},data:function(){return{isSticky:!1,isOpenSearch:!1,isOpenAccountSettings:!1,openCart:!1,navOpen:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))}},c=l(16),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("header",{staticClass:"header-area"},[e("div",{staticClass:"header-top-area header-padding-2 d-none d-lg-block"},[e("div",{class:t.containerClass},[e("div",{staticClass:"header-top-inner"},[e("div",{staticClass:"col-lg-2 col-md-6 col-4"},[e("div",{staticClass:"logo"},[e("n-link",{attrs:{to:"/"}},[e("img",{attrs:{src:l(344),alt:"tsotan logo"}})])],1)]),t._v(" "),t._m(0)])])]),t._v(" "),e("div",{staticClass:"header-padding-1 sticky-bar header-res-padding clearfix",class:{"is-sticky":t.isSticky},staticStyle:{"background-color":"#60445D"}},[e("div",{class:t.containerClass},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-8 d-none d-lg-block"},[e("div",{staticClass:"main-menu"},[e("nav",[e("Navigation")],1)])]),t._v(" "),e("div",{staticClass:"col-lg-2 col-md-6 col-8"},[e("div",{staticClass:"header-right-wrap"},[e("div",{staticClass:"same-style header-search d-none d-lg-block"},[e("button",{staticClass:"search-active",on:{click:function(e){t.isOpenSearch=!t.isOpenSearch}}},[e("i",{staticClass:"pe-7s-search"})]),t._v(" "),e("div",{staticClass:"search-content",class:{active:t.isOpenSearch}},[t._m(1)])]),t._v(" "),e("div",{staticClass:"same-style cart-wrap"},[e("button",{staticClass:"icon-cart",on:{click:function(e){t.openCart=!t.openCart}}},[e("i",{staticClass:"pe-7s-shopbag"}),t._v(" "),e("span",{staticClass:"count-style"},[t._v(t._s(t.cartItemCount))])]),t._v(" "),e("MiniCart",{attrs:{miniCart:{visible:t.openCart}},on:{minicartClose:function(e){t.openCart=!t.openCart}}})],1),t._v(" "),e("div",{staticClass:"same-style mobile-menu-toggler d-block d-lg-none"},[e("button",{staticClass:"mobile-aside-button",on:{click:function(e){t.navOpen=!t.navOpen}}},[e("i",{staticClass:"pe-7s-menu"})])])])])])])])]),t._v(" "),e("OffCanvasMobileMenu",{class:{"show-mobile-menu":t.navOpen},on:{toggleAsideMenu:function(e){t.navOpen=!t.navOpen}}})],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"language-currency-wrap"},[e("div",{staticClass:"same-language-currency"},[e("p",[t._v("Call: "),e("a",{staticStyle:{color:"#000"},attrs:{href:"callto:3965410"}},[t._v("+976-9330 0991")])])])])},function(){var t=this._self._c;return t("form",[t("input",{attrs:{type:"text",placeholder:"Search"}}),this._v(" "),t("button",{staticClass:"button-search"},[t("i",{staticClass:"pe-7s-search"})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:l(236).default,MiniCart:l(234).default,OffCanvasMobileMenu:l(235).default})},347:function(t,e,l){"use strict";l.r(e);var n={},c=l(16),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer-area pt-100 pb-70",staticStyle:{"background-color":"#2f333a",color:"#fff"},attrs:{id:"social"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row",staticStyle:{"justify-content":"space-around"}},[e("div",{staticClass:"col-lg-2 col-sm-4"},[e("div",{staticClass:"copyright mb-30"},[e("div",{staticClass:"footer-logo"},[e("n-link",{attrs:{to:"/"}},[e("img",{attrs:{src:l(344),alt:"logo"}})])],1),t._v(" "),t._m(0)])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)])])])}),[function(){var t=this,e=t._self._c;return e("p",[t._v("© 2023 "),e("a",{attrs:{href:"#",target:"_blank"}},[t._v("Tsotan")]),t._v("."),e("br"),t._v(" All Rights Reserved")])},function(){var t=this._self._c;return t("div",{staticClass:"col-lg-2 col-sm-4"},[t("div",{staticClass:"footer-widget mb-30 ml-50"},[t("div",{staticClass:"footer-title"}),this._v(" "),t("div",{staticClass:"footer-list"},[t("ul")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-2 col-sm-6"},[e("div",{staticClass:"footer-widget mb-30 ml-75"},[e("div",{staticClass:"footer-title"},[e("h3",[t._v("Follow us")])]),t._v(" "),e("div",{staticClass:"footer-list"},[e("ul",[e("li",[e("a",{attrs:{href:"https://www.facebook.com/tsotantextile",target:"_blank"}},[t._v("Facebook")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://twitter.com/@Tsotan_textile",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.instagram.com/tsotan_mongolia/",target:"_blank"}},[t._v("Instagram")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.youtube.com/",target:"_blank"}},[t._v("Youtube")])])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-2 col-sm-4"},[e("div",{staticClass:"footer-widget mb-30 ml-30"},[e("div",{staticClass:"footer-title"},[e("h3",[t._v("Хаяг")])]),t._v(" "),e("div",{staticClass:"footer-list"},[e("ul",[t._v("\n                            Tsotan Textile Цотан Текстил\n                            Төмөр замын 222-р байр,\n                            Замчид гудамж, Ulaanbaatar 16051,\n                            Mongolia +976 9330 0991\n                        ")])])])])}],!1,null,null,null);e.default=component.exports},349:function(t,e,l){"use strict";l.r(e);var n={props:["pageTitle"]},c=l(16),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"breadcrumb-area pt-35 pb-35 bg-gray-3"},[e("div",{staticClass:"container"},[e("div",{staticClass:"breadcrumb-content text-center"},[e("ul",[e("li",[e("n-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),e("li",{staticClass:"active"},[t._v(t._s(t.pageTitle))])])])])])}),[],!1,null,null,null);e.default=component.exports},451:function(t,e,l){"use strict";l.r(e);l(13),l(32),l(33);var n={components:{HeaderWithTopbar:function(){return Promise.resolve().then(l.bind(null,346))},Breadcrumb:function(){return Promise.resolve().then(l.bind(null,349))},TheFooter:function(){return Promise.resolve().then(l.bind(null,347))}},head:function(){return{title:"My Account"}}},c=l(16),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"shop-page-wrapper"},[e("HeaderWithTopbar",{attrs:{containerClass:"container"}}),t._v(" "),e("Breadcrumb",{attrs:{pageTitle:"my-account"}}),t._v(" "),t._m(0),t._v(" "),e("TheFooter")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"my-account-area pb-80 pt-100"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"ms-auto me-auto col-lg-9"},[e("div",{staticClass:"my-account-wrapper"},[e("div",{staticClass:"panel-group",attrs:{id:"faq"}},[e("div",{staticClass:"panel panel-default single-my-account"},[e("div",{staticClass:"panel-heading my-account-title"},[e("h3",{staticClass:"panel-title"},[e("span",[t._v("1 .")]),t._v(" "),e("a",{attrs:{"data-bs-toggle":"collapse",href:"#my-account-1"}},[t._v("Edit your account information ")])])]),t._v(" "),e("div",{staticClass:"panel-collapse collapse show",attrs:{id:"my-account-1","data-bs-parent":"#faq"}},[e("div",{staticClass:"panel-body"},[e("div",{staticClass:"myaccount-info-wrapper"},[e("div",{staticClass:"account-info-wrapper"},[e("h4",[t._v("My Account Information")]),t._v(" "),e("h5",[t._v("Your Personal Details")])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6 col-md-6"},[e("div",{staticClass:"billing-info"},[e("label",[t._v("First Name")]),t._v(" "),e("input",{attrs:{type:"text"}})])]),t._v(" "),e("div",{staticClass:"col-lg-6 col-md-6"},[e("div",{staticClass:"billing-info"},[e("label",[t._v("Last Name")]),t._v(" "),e("input",{attrs:{type:"text"}})])]),t._v(" "),e("div",{staticClass:"col-lg-12 col-md-12"},[e("div",{staticClass:"billing-info"},[e("label",[t._v("Email Address")]),t._v(" "),e("input",{attrs:{type:"email"}})])]),t._v(" "),e("div",{staticClass:"col-lg-6 col-md-6"},[e("div",{staticClass:"billing-info"},[e("label",[t._v("Telephone")]),t._v(" "),e("input",{attrs:{type:"text"}})])]),t._v(" "),e("div",{staticClass:"col-lg-6 col-md-6"},[e("div",{staticClass:"billing-info"},[e("label",[t._v("Fax")]),t._v(" "),e("input",{attrs:{type:"text"}})])])]),t._v(" "),e("div",{staticClass:"billing-back-btn"},[e("div",{staticClass:"billing-back"},[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-arrow-up"}),t._v(" back")])]),t._v(" "),e("div",{staticClass:"billing-btn"},[e("button",{attrs:{type:"submit"}},[t._v("Continue")])])])])])])]),t._v(" "),e("div",{staticClass:"panel panel-default single-my-account"},[e("div",{staticClass:"panel-heading my-account-title"},[e("h3",{staticClass:"panel-title"},[e("span",[t._v("2 .")]),t._v(" "),e("a",{attrs:{"data-bs-toggle":"collapse",href:"#my-account-2"}},[t._v("Change your password ")])])]),t._v(" "),e("div",{staticClass:"panel-collapse collapse",attrs:{id:"my-account-2","data-bs-parent":"#faq"}},[e("div",{staticClass:"panel-body"},[e("div",{staticClass:"myaccount-info-wrapper"},[e("div",{staticClass:"account-info-wrapper"},[e("h4",[t._v("Change Password")]),t._v(" "),e("h5",[t._v("Your Password")])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12 col-md-12"},[e("div",{staticClass:"billing-info"},[e("label",[t._v("Password")]),t._v(" "),e("input",{attrs:{type:"password"}})])]),t._v(" "),e("div",{staticClass:"col-lg-12 col-md-12"},[e("div",{staticClass:"billing-info"},[e("label",[t._v("Password Confirm")]),t._v(" "),e("input",{attrs:{type:"password"}})])])]),t._v(" "),e("div",{staticClass:"billing-back-btn"},[e("div",{staticClass:"billing-back"},[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-arrow-up"}),t._v(" back")])]),t._v(" "),e("div",{staticClass:"billing-btn"},[e("button",{attrs:{type:"submit"}},[t._v("Continue")])])])])])])]),t._v(" "),e("div",{staticClass:"panel panel-default single-my-account"},[e("div",{staticClass:"panel-heading my-account-title"},[e("h3",{staticClass:"panel-title"},[e("span",[t._v("3 .")]),t._v(" "),e("a",{attrs:{"data-bs-toggle":"collapse",href:"#my-account-3"}},[t._v("Modify your address book entries   ")])])]),t._v(" "),e("div",{staticClass:"panel-collapse collapse",attrs:{id:"my-account-3","data-bs-parent":"#faq"}},[e("div",{staticClass:"panel-body"},[e("div",{staticClass:"myaccount-info-wrapper"},[e("div",{staticClass:"account-info-wrapper"},[e("h4",[t._v("Address Book Entries")])]),t._v(" "),e("div",{staticClass:"entries-wrapper"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 d-flex align-items-center justify-content-center"},[e("div",{staticClass:"entries-info text-center"},[e("p",[t._v("Keith L. Castro ")]),t._v(" "),e("p",[t._v("  559 Pratt Avenue ")]),t._v(" "),e("p",[t._v(" Orchards, WA 98662 ")])])]),t._v(" "),e("div",{staticClass:"col-md-6 d-flex align-items-center justify-content-center"},[e("div",{staticClass:"entries-edit-delete text-center"},[e("button",{staticClass:"edit"},[t._v("Edit")]),t._v(" "),e("button",[t._v("Delete")])])])])]),t._v(" "),e("div",{staticClass:"billing-back-btn"},[e("div",{staticClass:"billing-back"},[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-arrow-up"}),t._v(" back")])]),t._v(" "),e("div",{staticClass:"billing-btn"},[e("button",{attrs:{type:"submit"}},[t._v("Continue")])])])])])])])])])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderWithTopbar:l(346).default,Breadcrumb:l(349).default,TheFooter:l(347).default})}}]);