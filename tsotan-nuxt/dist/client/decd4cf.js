(window.webpackJsonp=window.webpackJsonp||[]).push([[11,8],{336:function(n,t,r){"use strict";r.r(t);r(216);var e={props:["banner"]},l=r(14),component=Object(l.a)(e,(function(){var n=this,t=n._self._c;return t("div",{staticClass:"single-banner"},[t("n-link",{attrs:{to:"/shop"}},[t("img",{attrs:{src:n.banner.imgSrc,alt:n.banner.title}})]),n._v(" "),t("div",{staticClass:"banner-content"},[t("h3",[n._v(n._s(n.banner.title))]),n._v(" "),t("h4",[n._v("Starting at "),t("span",[n._v("$"+n._s(n.banner.price.toFixed(2)))])]),n._v(" "),t("n-link",{attrs:{to:"/shop"}},[t("i",{staticClass:"fa fa-long-arrow-right"})])],1)],1)}),[],!1,null,null,null);t.default=component.exports},410:function(n,t,r){"use strict";r.r(t);var e={data:function(){return{banners:[{id:1,title:"Watches",price:99,imgSrc:"/img/banner/banner-1.jpg"},{id:2,title:"Plo Bag",price:80,imgSrc:"/img/banner/banner-2.jpg"},{id:3,title:"Sunglass",price:79,imgSrc:"/img/banner/banner-3.jpg"}]}}},l=r(14),component=Object(l.a)(e,(function(){var n=this,t=n._self._c;return t("div",{staticClass:"banner-area"},[t("div",{staticClass:"container"},[t("div",{staticClass:"row mtn-30"},n._l(n.banners,(function(n,r){return t("div",{key:r,staticClass:"col-md-4 mt-30"},[t("BannerItem",{attrs:{banner:n}})],1)})),0)])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BannerItem:r(336).default})}}]);