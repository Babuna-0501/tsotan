(window.webpackJsonp=window.webpackJsonp||[]).push([[47,38,51],{345:function(t,e,r){t.exports={}},348:function(t,e,r){"use strict";r(345)},350:function(t,e,r){"use strict";r.r(e);r(34),r(38),r(60),r(43),r(42),r(57),r(35),r(58);var n=r(26);r(233),r(13);function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l={data:function(){return{item:"",singleQuantity:1,swiperOptionTop:{loop:!0,slidesPerView:1,spaceBetween:10,effect:"fade",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},computed:{product:function(){return console.log("quick view"),this.item}},methods:{beforeOpen:function(t){var e=t.params;this.item=e},addToCart:function(t){var e=o(o({},t),{},{cartQuantity:this.singleQuantity});this.$store.state.cart.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to cart update with one"}):this.$notify({title:"Add to cart successfully!"}),this.$store.dispatch("addToCartItem",e)},discountedPrice:function(t){return t.price-t.price*t.discount/100},increaseQuantity:function(){this.singleQuantity++},decreaseQuantity:function(){this.singleQuantity>1&&this.singleQuantity--},addToWishlist:function(t){this.$store.state.wishlist.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to wishlist!"}):this.$notify({title:"Add to wishlist successfully!"}),this.$store.dispatch("addToWishlist",t)},addToCompare:function(t){this.$store.state.compare.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to compare!"}):this.$notify({title:"Add to compare successfully!"}),this.$store.dispatch("addToCompare",t)}}},d=(r(348),r(16)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("client-only",[e("modal",{attrs:{name:"quickview",width:"50%",scrollable:!0,height:"auto"},on:{"before-open":t.beforeOpen}},[e("div",{staticClass:"quickview-wrapper row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"product-details-slider"},[e("div",{staticClass:"product-details-img"},[e("div",{staticClass:"product-badges"},[t.product.isSpecial?e("span",{staticClass:"product-label purple"},[t._v("Special")]):t._e(),t._v(" "),t.product.isNew?e("span",{staticClass:"product-label pink"},[t._v("New")]):t._e()]),t._v(" "),e("swiper",{attrs:{options:t.swiperOptionTop}},[t._l(t.product.image,(function(image,r){return e("div",{key:r,staticClass:"large-img swiper-slide"},[e("img",{staticClass:"img-fluid",attrs:{src:image,alt:t.product.name}})])})),t._v(" "),e("div",{staticClass:"quickview-nav swiper-button-prev"},[e("i",{staticClass:"pe-7s-angle-left"})]),t._v(" "),e("div",{staticClass:"quickview-nav swiper-button-next"},[e("i",{staticClass:"pe-7s-angle-right"})])],2)],1)])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"product-details-content"},[e("div",{attrs:{slot:"top-right"},slot:"top-right"},[e("button",{staticClass:"modal-close",on:{click:function(e){return t.$modal.hide("quickview")}}},[e("i",{staticClass:"fa fa-times"})])]),t._v(" "),e("h2",[t._v(t._s(t.product.name))]),t._v(" "),e("div",{staticClass:"product-details-price"},[e("span",[t._v(t._s(t.product.price)+"₮")])]),t._v(" "),e("div",{staticClass:"product-details-price text-sm"},[e("span",{staticStyle:{color:"rgb(36, 147, 180) !important"}},[t._v("Price : "+t._s(t.product.usdPrice)+"$")])]),t._v(" "),e("p",[t._v(t._s(t.product.description))]),t._v(" "),e("div",{staticClass:"pro-details-quality"},[e("div",{staticClass:"cart-plus-minus"},[e("button",{staticClass:"dec qtybutton",on:{click:function(e){return t.decreaseQuantity()}}},[t._v("-")]),t._v(" "),e("input",{staticClass:"cart-plus-minus-box",attrs:{type:"text",readonly:""},domProps:{value:t.singleQuantity}}),t._v(" "),e("button",{staticClass:"inc qtybutton",on:{click:function(e){return t.increaseQuantity()}}},[t._v("+")])]),t._v(" "),e("div",{staticClass:"pro-details-cart btn-hover"},[e("button",{on:{click:function(e){return t.addToCart(t.product)}}},[t._v("Сагс руу нэмэх")])])]),t._v(" "),e("div",{staticClass:"pro-details-social"},[e("ul",[e("li",[e("a",{attrs:{href:"https://www.facebook.com/",target:"_blank"}},[e("i",{staticClass:"fa fa-facebook"})])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://dribbble.com/",target:"_blank"}},[e("i",{staticClass:"fa fa-dribbble"})])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.pinterest.com/",target:"_blank"}},[e("i",{staticClass:"fa fa-pinterest-p"})])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://twitter.com/",target:"_blank"}},[e("i",{staticClass:"fa fa-twitter"})])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.linkedin.com/",target:"_blank"}},[e("i",{staticClass:"fa fa-linkedin"})])])])])])])])])],1)}),[],!1,null,null,null);e.default=component.exports},352:function(t,e,r){"use strict";r.r(e);r(34),r(43),r(38),r(42),r(57),r(35),r(58);var n=r(26);r(233),r(13),r(28),r(59);function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l={props:["product"],methods:{addToCart:function(t){var e=o(o({},t),{},{cartQuantity:1});this.$store.state.cart.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to cart update with one"}):this.$notify({title:"Add to cart successfully!"}),this.$store.dispatch("addToCartItem",e)},discountedPrice:function(t){return t.price-t.price*t.discount/100},addToWishlist:function(t){this.$store.state.wishlist.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to wishlist!"}):this.$notify({title:"Add to wishlist successfully!"}),this.$store.dispatch("addToWishlist",t)},addToCompare:function(t){this.$store.state.compare.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to compare!"}):this.$notify({title:"Add to compare successfully!"}),this.$store.dispatch("addToCompare",t)},onClick:function(t){this.$modal.show("quickview",t)},slugify:function(text){return text.toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}},d=r(16),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"product-wrap-2 mb-25"},[e("div",{staticClass:"product-img"},[e("n-link",{attrs:{to:"/product/".concat(t.slugify(t.product.name))}},[e("img",{staticClass:"default-img",attrs:{src:t.product.img,alt:t.product.name}}),t._v(" "),e("img",{staticClass:"hover-img",attrs:{src:t.product.img,alt:t.product.name}})]),t._v(" "),e("div",{staticClass:"product-badges"},[t.product.isSpecial?e("span",{staticClass:"product-label green"},[t._v("Special")]):t._e(),t._v(" "),t.product.isNew?e("span",{staticClass:"product-label pink"},[t._v("New")]):t._e()]),t._v(" "),e("div",{staticClass:"product-action-2"},[e("button",{staticClass:"btn",attrs:{title:"Add To Cart"},on:{click:function(e){return t.addToCart(t.product)}}},[e("i",{staticClass:"pe-7s-cart"})]),t._v(" "),e("button",{staticClass:"btn",attrs:{title:"Quick View"},on:{click:function(e){return t.onClick(t.product)}}},[e("i",{staticClass:"pe-7s-look"})])])],1),t._v(" "),e("div",{staticClass:"product-content-2"},[e("div",{staticClass:"title-price-wrap-2"},[e("h3",[e("n-link",{attrs:{to:"/product/".concat(t.slugify(t.product.name))}},[t._v(t._s(t.product.name))])],1),t._v(" "),e("div",{staticClass:"price-2"})])])])}),[],!1,null,null,null);e.default=component.exports},367:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var n=r(122);var c=r(156),o=r(97);function l(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||Object(c.a)(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},497:function(t,e,r){"use strict";r.r(e);r(61);var n=r(367),c=(r(13),r(32),r(33),r(92),r(412),r(419),r(420),r(421),r(424),r(425),r(426),r(427),r(429),r(431),r(433),r(435),r(436),r(437),r(438),r(439),r(441),r(443),r(445),r(62),r(42),r(77),r(78),{data:function(){return{filterData:[],selectedCategory:""}},components:{ProductGridItemTwo:function(){return Promise.resolve().then(r.bind(null,352))},QuickView:function(){return Promise.resolve().then(r.bind(null,350))}},computed:{products:function(){return this.$store.getters.getProducts},filterCategory:function(){return["all"].concat(Object(n.a)(new Set(this.products.map((function(t){return t.category})).flat())))}},methods:{filterHandler:function(t){if(this.selectedCategory=t,"all"===this.selectedCategory)this.filterData=this.products;else{var e,r=this.products.filter((function(e){return e.category.includes(t)}));this.filterData=[],(e=this.filterData).push.apply(e,Object(n.a)(r))}}},mounted:function(){var t;(t=this.filterData).push.apply(t,Object(n.a)(this.products))}}),o=r(16),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"product-area product-mb-xs pt-100 pb-100"},[e("client-only",[e("div",{staticClass:"container"},[e("SectionTitleWithSubTitle",{attrs:{classes:"section-title-6",title:"New Arrivals"}}),t._v(" "),e("ul",{staticClass:"product-tab-list nav justify-content-center pt-25 pb-60"},t._l(t.filterCategory,(function(r,n){return e("li",{key:n,staticClass:"nav-item",on:{click:function(e){return t.filterHandler(r)}}},[e("button",{class:{active:r===t.selectedCategory}},[t._v(t._s(r))])])})),0),t._v(" "),e("div",{staticClass:"row"},t._l(t.filterData.slice(0,8),(function(t,r){return e("div",{key:r,staticClass:"col-xl-3 col-lg-4 col-sm-6"},[e("ProductGridItemTwo",{attrs:{product:t}})],1)})),0),t._v(" "),e("div",{staticClass:"discover-more-btn btn-hover text-center mt-20 col-12"},[e("n-link",{attrs:{to:"/shop"}},[t._v("Discover More")])],1)],1)]),t._v(" "),e("QuickView")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductGridItemTwo:r(352).default,QuickView:r(350).default})}}]);