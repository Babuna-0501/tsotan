(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{346:function(t,n,r){t.exports={}},355:function(t,n,r){"use strict";r(346)},359:function(t,n,r){"use strict";r.r(n);r(91),r(75);var e={data:function(){return{duration:600,timer:null}},computed:{formattedTime:function(){var t=Math.floor(this.duration/60),n=this.duration%60;return"".concat(t," мин ").concat(n," сек")}},methods:{startTimer:function(){var t=this;this.timer=setInterval((function(){t.duration>0?t.duration--:clearInterval(t.timer)}),1e3)}},mounted:function(){this.startTimer()},beforeDestroy:function(){clearInterval(this.timer)}},o=(r(355),r(16)),component=Object(o.a)(e,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"timer"},[n("p",[t._v("Захиалга цуцлагдах хугацаа:")]),t._v(" "),n("p",[t._v("Та захиалгаа тухайн хугацаанд багтаан хийнэ үү")]),t._v(" "),n("div",[t._v(t._s(t.formattedTime))])])}),[],!1,null,null,null);n.default=component.exports}}]);