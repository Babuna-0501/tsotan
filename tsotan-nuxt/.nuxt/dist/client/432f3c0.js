(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{353:function(t,e,r){t.exports={}},360:function(t,e,r){var o=r(3),n=r(230).values;o({target:"Object",stat:!0},{values:function(t){return n(t)}})},361:function(t,e,r){"use strict";var o=r(3),n=r(233).trim;o({target:"String",proto:!0,forced:r(362)("trim")},{trim:function(){return n(this)}})},362:function(t,e,r){var o=r(93).PROPER,n=r(6),m=r(234);t.exports=function(t){return n((function(){return!!m[t]()||"​᠎"!=="​᠎"[t]()||o&&m[t].name!==t}))}},363:function(t,e,r){"use strict";r(353)},381:function(t,e,r){"use strict";r.r(e);r(43),r(38),r(42),r(56),r(35),r(57);var o=r(26),n=r(4),m=(r(45),r(13),r(360),r(44),r(61),r(91),r(34),r(228),r(361),r(143));function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){Object(o.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var d={data:function(){return{orderId:null,formData:{fb:"",email:"",phoneNumber:"",address:"",comment:"",orderedProducts:"",price:""},validationErrors:{fb:"",email:"",phoneNumber:"",address:"",comment:"",orderedProducts:"",price:""}}},methods:{submitForm:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t.validateForm(),Object.values(t.validationErrors).every((function(t){return!t}))?(t.formData.orderedProducts=t.products.map((function(t){return"".concat(t.name,":").concat(t.cartQuantity)})).toString(),t.formData.price=t.total.toFixed(2),t.$emit("formSubmitted",l({},t.formData))):console.log("Form validation failed. Please check the fields.")}catch(t){console.log(t)}case 1:case"end":return e.stop()}}),e)})))()},createOrder:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=t.products.map((function(t){return'"'.concat(t.name,'":"').concat(t.cartQuantity,'"')})),e.next=4,m.a.createOrder(l(l({},t.formData),{},{orderedProducts:r.toString(),price:t.total.toFixed(2)}));case 4:o=e.sent,t.orderId=o.data.id,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},validateForm:function(){this.validationErrors.fb=""===this.formData.fb.trim()?"FB нэрээ оруулна уу":"",this.validationErrors.email=""===this.formData.email.trim()?"email оруулна уу":"",this.validationErrors.phoneNumber=""===this.formData.phoneNumber.trim()?"Утасны дугаараа оруулна уу":""}},computed:{products:function(){return this.$store.getters.getCart},total:function(){return this.$store.getters.getTotal}}},f=(r(363),r(16)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"formpage"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"fb"}},[t._v("Facebook Name")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.fb,expression:"formData.fb"}],staticClass:"form-control",attrs:{type:"text",id:"fb",required:""},domProps:{value:t.formData.fb},on:{input:function(e){e.target.composing||t.$set(t.formData,"fb",e.target.value)}}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.validationErrors.fb,expression:"validationErrors.fb"}],staticClass:"text-danger"},[t._v(t._s(t.validationErrors.fb))])]),t._v(" "),e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"email"}},[t._v("Email")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.email,expression:"formData.email"}],staticClass:"form-control",attrs:{type:"email",id:"email",required:""},domProps:{value:t.formData.email},on:{input:function(e){e.target.composing||t.$set(t.formData,"email",e.target.value)}}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.validationErrors.email,expression:"validationErrors.email"}],staticClass:"text-danger"},[t._v(t._s(t.validationErrors.email))])]),t._v(" "),e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"phoneNumber"}},[t._v("Утас")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.phoneNumber,expression:"formData.phoneNumber"}],staticClass:"form-control",attrs:{type:"text",id:"phoneNumber",required:""},domProps:{value:t.formData.phoneNumber},on:{input:function(e){e.target.composing||t.$set(t.formData,"phoneNumber",e.target.value)}}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.validationErrors.phoneNumber,expression:"validationErrors.phoneNumber"}],staticClass:"text-danger"},[t._v(t._s(t.validationErrors.phoneNumber))])]),t._v(" "),e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"address"}},[t._v("Хаяг")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.address,expression:"formData.address"}],staticClass:"form-control",attrs:{id:"address"},domProps:{value:t.formData.address},on:{input:function(e){e.target.composing||t.$set(t.formData,"address",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"comment"}},[t._v("Хүргэлтийн нөхцөл (Та бараа хүлээн авах өдөр, байршил, нөхцөл зэргийг\n        дэлгэрэнгүй тусгана уу)")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.comment,expression:"formData.comment"}],staticClass:"form-control",attrs:{id:"comment"},domProps:{value:t.formData.comment},on:{input:function(e){e.target.composing||t.$set(t.formData,"comment",e.target.value)}}})]),t._v(" "),e("button",{staticClass:"btn border-0 formbtn btn-primary",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.submitForm()}}},[t._v("\n      Баталгаажуулах\n    ")])])])}),[],!1,null,"43180fae",null);e.default=component.exports}}]);