(this.webpackJsonpamazon=this.webpackJsonpamazon||[]).push([[0],{63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){},83:function(e,t,c){},85:function(e,t,c){},87:function(e,t,c){"use strict";c.r(t);var a=c(7),n=c.n(a),s=c(40),i=c.n(s),r=(c(63),c(52)),o=c(15),l=c(27),j=c(17),d=(c(64),c(65),c(54)),u=c.n(d),b=c(55),h=c.n(b),m=c(6),O=Object(a.createContext)(),p=function(e){var t=e.reducer,c=e.initialState,n=e.children;return Object(m.jsx)(O.Provider,{value:Object(a.useReducer)(t,c),children:n})},g=function(){return Object(a.useContext)(O)},x=c(47),_=(c(68),c(88),x.a.initializeApp({apiKey:"AIzaSyAR1SFTtIuyjPA8IObF_cCFmVRBb8NM7wI",authDomain:"clone-7e76f.firebaseapp.com",projectId:"clone-7e76f",storageBucket:"clone-7e76f.appspot.com",messagingSenderId:"492025301978",appId:"1:492025301978:web:e1157ecafe592ca2c88ee3",measurementId:"G-6ZVEMHNT0S"}),x.a.auth());var f=function(){var e=g(),t=Object(o.a)(e,2),c=t[0],a=c.basket,n=c.user;return t[1],Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)(l.b,{to:"/",children:Object(m.jsx)("img",{className:"header-logo",src:"https://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:"bitches"})}),Object(m.jsxs)("div",{className:"header-search",children:[Object(m.jsx)("input",{type:"text",className:"header-searchInput"}),Object(m.jsx)(u.a,{className:"header-searchIcon"})]}),Object(m.jsxs)("div",{className:"header-nav",children:[Object(m.jsx)(l.b,{to:!n&&"/login",className:"header-link",children:Object(m.jsxs)("div",{onClick:function(){n&&_.signOut()},className:"header-option",children:[Object(m.jsxs)("span",{className:"header-optionLineOne",children:["Hello ",n?n.email:"Guest"]}),Object(m.jsx)("span",{className:"header-optionLineTwo",children:n?"Sign Out":"Sign In"})]})}),Object(m.jsx)(l.b,{to:"/",className:"header-link",children:Object(m.jsxs)("div",{className:"header-option",children:[Object(m.jsx)("span",{className:"header-optionLineOne",children:"Returns"}),Object(m.jsx)("span",{className:"header-optionLineTwo",children:" Orders"})]})}),Object(m.jsx)(l.b,{to:"/",className:"header-link",children:Object(m.jsxs)("div",{className:"header-option",children:[Object(m.jsx)("span",{className:"header-optionLineOne",children:"Your"}),Object(m.jsx)("span",{className:"header-optionLineTwo",children:" Prime"})]})}),Object(m.jsxs)(l.b,{to:"/checkout",className:"header-link",children:[Object(m.jsx)("div",{className:"header-optionBasket"}),Object(m.jsx)(h.a,{}),Object(m.jsx)("span",{className:"header-optionLineTwo header-basketCount",children:a.length})]})]})]})};c(79),c(80);var v=function(e){var t=e.id,c=e.title,a=e.image,n=e.price,s=e.rating,i=g(),r=Object(o.a)(i,2),l=(r[0].basket,r[1]);return Object(m.jsxs)("div",{className:"product",children:[Object(m.jsxs)("div",{className:"product_info",children:[Object(m.jsx)("p",{children:c}),Object(m.jsxs)("p",{className:"product_price",children:[Object(m.jsx)("small",{children:"$"}),Object(m.jsx)("strong",{children:n})]}),Object(m.jsx)("div",{className:"product_rating",children:Array(s).fill().map((function(e,t){return Object(m.jsx)("p",{children:"\u2b50"})}))})]}),Object(m.jsx)("img",{src:a,alt:""}),Object(m.jsx)("button",{onClick:function(){l({type:"ADD_TO_BASKET",item:{id:t,title:c,image:a,price:n,rating:s}})},children:" Add to basket"})]})};var N=function(){return Object(m.jsxs)("div",{className:"home",children:[Object(m.jsx)("img",{className:"home_image",src:"https://m.media-amazon.com/images/I/510WtZHPg1L._SX1500_.jpg",alt:""}),Object(m.jsxs)("div",{className:"home_row",children:[Object(m.jsx)(v,{id:"12321341",title:"The Lean Startup: How Constant Innovation Creates",price:11.96,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY264_BO1,204,203,200_QL40_ML2_.jpg"}),Object(m.jsx)(v,{id:"12321342",title:"Logitech M330 Silent Plus Wireless Mouse Easy Roll",price:19.99,rating:4,image:"https://www.logitech.com/content/dam/logitech/en/products/mice/m330-wireless-silent-mouse/gallery/m330-black-gallery-1.png"})]}),Object(m.jsxs)("div",{className:"home_row",children:[Object(m.jsx)(v,{id:"12321388",title:"My Cinema Lightbox Mini Colour",price:44.96,rating:3,image:"https://m.media-amazon.com/images/I/61NE7dT6rpL._AC_SL1500_.jpg"}),Object(m.jsx)(v,{id:"12321341",title:"CeraVe SA Acid Lotion for Extremly Dry Skin",price:21.45,rating:5,image:"https://m.media-amazon.com/images/I/71T+elvbW0L._AC_SL1500_.jpg"}),Object(m.jsx)(v,{id:"12321355",title:"Womens travel bags, weekender carry on for women",price:32.59,rating:3,image:"https://m.media-amazon.com/images/I/61QhRcw-SwL._AC_SL1500_.jpg"})]}),Object(m.jsx)("div",{className:"home_row",children:Object(m.jsx)(v,{id:"12321328",title:"SAMSUNG SR35 Series 27 inch FHD 1920x1080 Flat Desktop Monitor for Working or Learning, HDMI, D-Sub, Wall mountable",price:211.66,rating:4,image:"https://m.media-amazon.com/images/I/91Vg-6MEI2L._AC_SL1500_.jpg"})})]})};c(81),c(82);var k=function(e){var t=e.id,c=e.image,a=e.title,n=e.price,s=e.rating,i=e.hideButton,r=g(),l=Object(o.a)(r,2),j=(l[0].basket,l[1]);return Object(m.jsxs)("div",{className:"checkoutProduct",children:[Object(m.jsx)("img",{className:"checkoutProduct__image",src:c}),Object(m.jsxs)("div",{className:"checkoutProduct__info",children:[Object(m.jsx)("p",{className:"checkoutProduct__title",children:a}),Object(m.jsxs)("p",{className:"checkoutProduct__price",children:[Object(m.jsx)("small",{children:"$"}),Object(m.jsx)("strong",{children:n})]}),Object(m.jsx)("div",{className:"checkoutProduct__rating",children:Array(s).fill().map((function(e,t){return Object(m.jsx)("p",{children:"\ud83c\udf1f"})}))}),!i&&Object(m.jsx)("button",{onClick:function(){j({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from Basket"})]})]})},S=(c(83),c(56)),C=c.n(S),A=c(18),y=c(32),w=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},E=function(e,t){switch(console.log(t),t.type){case"SET_USER":return Object(y.a)(Object(y.a)({},e),{},{user:t.user});case"ADD_TO_BASKET":return Object(y.a)(Object(y.a)({},e),{},{basket:[].concat(Object(A.a)(e.basket),[t.item])});case"EMPTY_BASKET":return Object(y.a)(Object(y.a)({},e),{},{basket:[]});case"REMOVE_FROM_BASKET":var c=e.basket.findIndex((function(e){return e.id===t.id})),a=Object(A.a)(e.basket);return c>=0?a.splice(c,1):console.warn("Cant remove product (id: ".concat(t.id,") as its not in basket!")),Object(y.a)(Object(y.a)({},e),{},{basket:a});default:return e}};var T=function(){Object(j.f)();var e=g(),t=Object(o.a)(e,2),c=t[0].basket;return t[1],Object(m.jsxs)("div",{className:"subtotal",children:[Object(m.jsx)(C.a,{renderText:function(e){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("p",{children:["Subtotal (",c.length," items): ",Object(m.jsx)("strong",{children:e})]}),Object(m.jsxs)("small",{className:"subtotal__gift",children:[Object(m.jsx)("input",{type:"checkbox"})," This order contains a gift"]})]})},decimalScale:2,value:w(c),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(m.jsx)("button",{children:"Proceed to Checkout"})]})};var I=function(){var e=g(),t=Object(o.a)(e,2),c=t[0],a=c.basket;return c.user,t[1],Object(m.jsxs)("div",{className:"checkout",children:[Object(m.jsxs)("div",{className:"checkout__left",children:[Object(m.jsx)("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{className:"checkout__title",children:"Your Shopping Basket"}),a.map((function(e){return Object(m.jsx)(k,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]}),Object(m.jsx)("div",{className:"checkout__right",children:Object(m.jsx)(T,{})})]})};c(85);var L=function(){var e=Object(j.f)(),t=Object(a.useState)(""),c=Object(o.a)(t,2),n=c[0],s=c[1],i=Object(a.useState)(""),r=Object(o.a)(i,2),d=r[0],u=r[1];return Object(m.jsxs)("div",{className:"login",children:[Object(m.jsx)(l.b,{to:"/",children:Object(m.jsx)("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",alt:""})}),Object(m.jsxs)("div",{className:"login__container",children:[Object(m.jsx)("h1",{children:"Sign-in"}),Object(m.jsxs)("form",{children:[Object(m.jsx)("h5",{children:"E-mail"}),Object(m.jsx)("input",{type:"text",value:n,onChange:function(e){return s(e.target.value)}}),Object(m.jsx)("h5",{children:"Password"}),Object(m.jsx)("input",{type:"password",value:d,onChange:function(e){return u(e.target.value)}}),Object(m.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),_.signInWithEmailAndPassword(n,d).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__signInButton",children:"Sign In"})]}),Object(m.jsx)("p",{children:"By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."}),Object(m.jsx)("button",{onClick:function(t){t.preventDefault(),_.createUserWithEmailAndPassword(n,d).then((function(t){t&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton",children:"Create your Amazon Account"})]})]})};var M=function(){var e=g(),t=Object(o.a)(e,2);Object(r.a)(t[0]);var c=t[1];return Object(a.useEffect)((function(){_.onAuthStateChanged((function(e){console.log("The user is-----\x3e",e),c(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(m.jsx)(l.a,{children:Object(m.jsx)("div",{className:"app",children:Object(m.jsxs)(j.c,{children:[Object(m.jsxs)(j.a,{path:"/checkout",children:[Object(m.jsx)(f,{}),Object(m.jsx)(I,{})]}),Object(m.jsx)(j.a,{path:"/login",children:Object(m.jsx)(L,{})}),Object(m.jsxs)(j.a,{path:"/",children:[Object(m.jsx)(f,{}),Object(m.jsx)(N,{})]})]})})})},P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,100)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};i.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(p,{initialState:{basket:[],user:null},reducer:E,children:Object(m.jsx)(M,{})})}),document.getElementById("root")),P()}},[[87,1,2]]]);
//# sourceMappingURL=main.4435ebeb.chunk.js.map