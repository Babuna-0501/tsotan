(window.webpackJsonp=window.webpackJsonp||[]).push([[65,17,27,53],{335:function(t,e,o){t.exports=o.p+"img/logo.b060b72.jpg"},337:function(t,e,o){"use strict";o.r(e);o(13),o(32),o(33);var n={components:{Navigation:function(){return Promise.resolve().then(o.bind(null,227))},MiniCart:function(){return Promise.resolve().then(o.bind(null,225))}},props:["containerClass"],computed:{cartItemCount:function(){return this.$store.getters.cartItemCount},wishlistItemCount:function(){return this.$store.getters.wishlistItemCount},compareItemCount:function(){return this.$store.getters.compareItemCount}},data:function(){return{isSticky:!1,isOpenSearch:!1,isOpenAccountSettings:!1,openCart:!1,navOpen:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))}},l=o(16),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("header",{staticClass:"header-area"},[e("div",{staticClass:"header-top-area header-padding-2 d-none d-lg-block"},[e("div",{class:t.containerClass},[e("div",{staticClass:"header-top-inner"},[e("div",{staticClass:"col-lg-2 col-md-6 col-4"},[e("div",{staticClass:"logo"},[e("n-link",{attrs:{to:"/"}},[e("img",{attrs:{src:o(335),alt:"tsotan logo"}})])],1)]),t._v(" "),t._m(0)])])]),t._v(" "),e("div",{staticClass:"header-padding-1 sticky-bar header-res-padding clearfix",class:{"is-sticky":t.isSticky},staticStyle:{"background-color":"#60445D"}},[e("div",{class:t.containerClass},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-8 d-none d-lg-block"},[e("div",{staticClass:"main-menu"},[e("nav",[e("Navigation")],1)])]),t._v(" "),e("div",{staticClass:"col-lg-2 col-md-6 col-8"},[e("div",{staticClass:"header-right-wrap"},[e("div",{staticClass:"same-style header-search d-none d-lg-block"},[e("button",{staticClass:"search-active",on:{click:function(e){t.isOpenSearch=!t.isOpenSearch}}},[e("i",{staticClass:"pe-7s-search"})]),t._v(" "),e("div",{staticClass:"search-content",class:{active:t.isOpenSearch}},[t._m(1)])]),t._v(" "),e("div",{staticClass:"same-style cart-wrap"},[e("button",{staticClass:"icon-cart",on:{click:function(e){t.openCart=!t.openCart}}},[e("i",{staticClass:"pe-7s-shopbag"}),t._v(" "),e("span",{staticClass:"count-style"},[t._v(t._s(t.cartItemCount))])]),t._v(" "),e("MiniCart",{attrs:{miniCart:{visible:t.openCart}},on:{minicartClose:function(e){t.openCart=!t.openCart}}})],1),t._v(" "),e("div",{staticClass:"same-style mobile-menu-toggler d-block d-lg-none"},[e("button",{staticClass:"mobile-aside-button",on:{click:function(e){t.navOpen=!t.navOpen}}},[e("i",{staticClass:"pe-7s-menu"})])])])])])])])]),t._v(" "),e("OffCanvasMobileMenu",{class:{"show-mobile-menu":t.navOpen},on:{toggleAsideMenu:function(e){t.navOpen=!t.navOpen}}})],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"language-currency-wrap"},[e("div",{staticClass:"same-language-currency"},[e("p",[t._v("Call: "),e("a",{staticStyle:{color:"#000"},attrs:{href:"callto:3965410"}},[t._v("+976-9330 0991")])])])])},function(){var t=this._self._c;return t("form",[t("input",{attrs:{type:"text",placeholder:"Search"}}),this._v(" "),t("button",{staticClass:"button-search"},[t("i",{staticClass:"pe-7s-search"})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:o(227).default,MiniCart:o(225).default,OffCanvasMobileMenu:o(226).default})},338:function(t,e,o){"use strict";o.r(e);var n={},l=o(16),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer-area pt-100 pb-70",staticStyle:{"background-color":"#2f333a",color:"#fff"},attrs:{id:"social"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row",staticStyle:{"justify-content":"space-around"}},[e("div",{staticClass:"col-lg-2 col-sm-4"},[e("div",{staticClass:"copyright mb-30"},[e("div",{staticClass:"footer-logo"},[e("n-link",{attrs:{to:"/"}},[e("img",{attrs:{src:o(335),alt:"logo"}})])],1),t._v(" "),t._m(0)])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)])])])}),[function(){var t=this,e=t._self._c;return e("p",[t._v("© 2023 "),e("a",{attrs:{href:"#",target:"_blank"}},[t._v("Tsotan")]),t._v("."),e("br"),t._v(" All Rights Reserved")])},function(){var t=this._self._c;return t("div",{staticClass:"col-lg-2 col-sm-4"},[t("div",{staticClass:"footer-widget mb-30 ml-50"},[t("div",{staticClass:"footer-title"}),this._v(" "),t("div",{staticClass:"footer-list"},[t("ul")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-2 col-sm-6"},[e("div",{staticClass:"footer-widget mb-30 ml-75"},[e("div",{staticClass:"footer-title"},[e("h3",[t._v("Follow us")])]),t._v(" "),e("div",{staticClass:"footer-list"},[e("ul",[e("li",[e("a",{attrs:{href:"https://www.facebook.com/tsotantextile",target:"_blank"}},[t._v("Facebook")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://twitter.com/@Tsotan_textile",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.instagram.com/tsotan_mongolia/",target:"_blank"}},[t._v("Instagram")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.youtube.com/",target:"_blank"}},[t._v("Youtube")])])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-2 col-sm-4"},[e("div",{staticClass:"footer-widget mb-30 ml-30"},[e("div",{staticClass:"footer-title"},[e("h3",[t._v("Хаяг")])]),t._v(" "),e("div",{staticClass:"footer-list"},[e("ul",[t._v("\n                            Tsotan Textile Цотан Текстил\n                            Төмөр замын 222-р байр,\n                            Замчид гудамж, Ulaanbaatar 16051,\n                            Mongolia +976 9330 0991\n                        ")])])])])}],!1,null,null,null);e.default=component.exports},340:function(t,e,o){"use strict";o.r(e);var n={props:["pageTitle"]},l=o(16),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"breadcrumb-area pt-35 pb-35 bg-gray-3"},[e("div",{staticClass:"container"},[e("div",{staticClass:"breadcrumb-content text-center"},[e("ul",[e("li",[e("n-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),e("li",{staticClass:"active"},[t._v(t._s(t.pageTitle))])])])])])}),[],!1,null,null,null);e.default=component.exports},347:function(t){t.exports=JSON.parse('[{"id":1,"title":"A guide to latest trends product","desc":"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus","videoSource ":"/img/blog/blog-3.jpg","category":["women","lifestyle"],"author":"Admin","date":"15 April, 2021","comment":12},{"id":2,"title":"Five ways to lead a happy life","desc":"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus","videoSource":"/img/tsotan/video/ts2.mp4","category":["lifestyle","men"],"author":"admin","date":"22 March, 2021","comment":45},{"id":3,"title":"Tips on having a happy life forever","desc":"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus","imgSrc":"/img/blog/blog-3.jpg","category":["women","men"],"author":"admin","date":"10 May, 2021","comment":30},{"id":4,"title":"New winter collection with discount","desc":"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus","imgSrc":"/img/blog/blog-4.jpg","category":["women","lifestyle"],"author":"Admin","date":"15 June, 2021","comment":52},{"id":5,"title":"New collection for this winter","desc":"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus","imgSrc":"/img/blog/blog-5.jpg","category":["lifestyle","men"],"author":"admin","date":"10 July, 2021","comment":35},{"id":6,"title":"Our best collection this winter","desc":"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus","imgSrc":"/img/blog/blog-6.jpg","category":["women","men"],"author":"admin","date":"18 January, 2021","comment":40},{"id":7,"title":"Tempor incididunt labo dolor magna","desc":"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus","imgSrc":"/img/blog/blog-7.jpg","category":["women","lifestyle"],"author":"Admin","date":"15 April, 2021","comment":12},{"id":8,"title":"Lorem ipsum dolor sit amet consectetur","desc":"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus","imgSrc":"/img/blog/blog-8.jpg","category":["lifestyle","men"],"author":"admin","date":"22 March, 2021","comment":45},{"id":9,"title":"Reprehendrit in voluptate velit cillum","desc":"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus","imgSrc":"/img/blog/blog-9.jpg","category":["women","men"],"author":"admin","date":"10 May, 2021","comment":30}]')},448:function(t,e,o){"use strict";o.r(e);o(224),o(13),o(28),o(58),o(44);var n=o(347),l={data:function(){return{blog:n,slug:this.$route.params.slug}},mounted:function(){var t=this;this.blog=n.find((function(e){return t.slugify(e.title)===t.slug}))},methods:{slugify:function(text){return text.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}},head:function(){return{title:this.blog.title}}},r=o(16),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"product-details-page-wrapper"},[e("HeaderWithTopbar",{attrs:{containerClass:"container"}}),t._v(" "),e("Breadcrumb",{attrs:{pageTitle:t.blog.title}}),t._v(" "),e("div",{staticClass:"Blog-details-inner pt-100 pb-100"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row flex-row-reverse"},[e("div",{staticClass:"col-lg-9"},[e("div",{staticClass:"blog-details-wrapper ml-20"},[e("div",{staticClass:"blog-details-top"},[e("div",{staticClass:"blog-details-img"},[e("img",{attrs:{src:t.blog.imgSrc,alt:t.blog.title}})]),t._v(" "),e("div",{staticClass:"blog-details-content"},[e("div",{staticClass:"blog-meta-2"},[e("ul",[e("li",[t._v(t._s(t.blog.date))]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-comments-o"}),t._v(" "+t._s(t.blog.comment))])])])]),t._v(" "),e("h3",[t._v(t._s(t.blog.title))]),t._v(" "),e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprhendit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qei officia deser mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. ")]),t._v(" "),e("blockquote",[t._v("Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt labo dolor magna aliqua. Ut enim ad minim veniam quis nostrud.")]),t._v(" "),e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehendrit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.")])])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)])]),t._v(" "),e("div",{staticClass:"col-lg-3"},[e("BlogSidebar")],1)])])]),t._v(" "),e("TheFooter")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"tag-share"},[e("div",{staticClass:"dec-tag"},[e("ul",[e("li",[e("a",{attrs:{href:"#"}},[t._v("lifestyle ,")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("interior ,")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("outdoor")])])])]),t._v(" "),e("div",{staticClass:"blog-share"},[e("span",[t._v("share:")]),t._v(" "),e("div",{staticClass:"share-social"},[e("ul",[e("li",[e("a",{staticClass:"facebook",attrs:{href:"#"}},[e("i",{staticClass:"fa fa-facebook"})])]),t._v(" "),e("li",[e("a",{staticClass:"twitter",attrs:{href:"#"}},[e("i",{staticClass:"fa fa-twitter"})])]),t._v(" "),e("li",[e("a",{staticClass:"instagram",attrs:{href:"#"}},[e("i",{staticClass:"fa fa-instagram"})])])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"next-previous-post"},[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-angle-left"}),t._v(" prev post")]),t._v(" "),e("a",{attrs:{href:"#"}},[t._v("next post "),e("i",{staticClass:"fa fa-angle-right"})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"blog-comment-wrapper mt-55"},[e("h4",{staticClass:"blog-dec-title"},[t._v("comments : 02")]),t._v(" "),e("div",{staticClass:"single-comment-wrapper mt-35"},[e("div",{staticClass:"blog-comment-img"},[e("img",{attrs:{src:"/img/blog/comment-1.jpg",alt:""}})]),t._v(" "),e("div",{staticClass:"blog-comment-content"},[e("h4",[t._v("Anthony Stephens")]),t._v(" "),e("span",[t._v("October 14, 2018 ")]),t._v(" "),e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolor magna aliqua. Ut enim ad minim veniam")]),t._v(" "),e("button",{staticClass:"reply-btn"},[t._v("Reply")])])]),t._v(" "),e("div",{staticClass:"single-comment-wrapper mt-50 ml-60"},[e("div",{staticClass:"blog-comment-img"},[e("img",{attrs:{src:"/img/blog/comment-2.jpg",alt:""}})]),t._v(" "),e("div",{staticClass:"blog-comment-content"},[e("h4",[t._v("DX Joxova")]),t._v(" "),e("span",[t._v("October 14, 2018 ")]),t._v(" "),e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolor magna aliqua. Ut enim ad minim veniam")]),t._v(" "),e("button",{staticClass:"reply-btn"},[t._v("Reply")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"blog-reply-wrapper mt-55"},[e("h4",{staticClass:"blog-dec-title"},[t._v("post a comment")]),t._v(" "),e("form",{staticClass:"blog-form"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"leave-form"},[e("input",{attrs:{type:"text",placeholder:"Full Name"}})])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"leave-form"},[e("input",{attrs:{type:"email",placeholder:"Email Address "}})])]),t._v(" "),e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"text-leave"},[e("textarea",{attrs:{placeholder:"Message"}}),t._v(" "),e("button",{attrs:{type:"submit"}},[t._v("SEND MESSAGE")])])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderWithTopbar:o(337).default,Breadcrumb:o(340).default,TheFooter:o(338).default})}}]);