(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{39:function(e,a,t){e.exports=t(70)},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},68:function(e,a,t){},70:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(34),i=t.n(c),l=(t(44),t(7)),o=(t(45),t(14)),s=t(3),m=(t(46),t(35)),u=t.n(m),d=t(36),g=t.n(d),p=Object(n.createContext)(),E=function(e){var a=e.reducer,t=e.initialState,c=e.children;return r.a.createElement(p.Provider,{value:Object(n.useReducer)(a,t)},c)},_=function(){return Object(n.useContext)(p)},h=t(26),v=t.n(h),b=(v.a.initializeApp({apiKey:"AIzaSyAROW5_8uBxVhTZB7Y3ke-3zVfcx9oyTnE",authDomain:"turnixs.firebaseapp.com",databaseURL:"https://turnixs.firebaseio.com",projectId:"turnixs",storageBucket:"turnixs.appspot.com",messagingSenderId:"529736742530",appId:"1:529736742530:web:2a1742fac430a4f136e69b",measurementId:"G-7Z490EGH68"}),v.a.auth());var f=function(){var e=_(),a=Object(l.a)(e,1)[0],t=a.basket,n=a.user;return r.a.createElement("nav",{className:"header"},r.a.createElement(o.b,{to:"/"},r.a.createElement("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:""})),r.a.createElement("div",{className:"header__search"},r.a.createElement("input",{type:"text",className:"header__searchInput"}),r.a.createElement(u.a,{className:"header__searchIcon"})),r.a.createElement("div",{className:"header__nav"},r.a.createElement(o.b,{to:!n&&"/login",className:"header__link"},r.a.createElement("div",{onClick:function(){n&&b.signOut()},className:"header__option"},r.a.createElement("span",{className:"header__optionLineOne"},"Hello ",null===n||void 0===n?void 0:n.email),r.a.createElement("span",{className:"header__optionLineTwo"},n?"Sign Out":"Sign In"))),r.a.createElement(o.b,{to:"/login",className:"header__link"},r.a.createElement("div",{className:"header__option"},r.a.createElement("span",{className:"header__optionLineOne"},"Returns"),r.a.createElement("span",{className:"header__optionLineTwo"},"& Orders"))),r.a.createElement(o.b,{to:"/login",className:"header__link"},r.a.createElement("div",{className:"header__option"},r.a.createElement("span",{className:"header__optionLineOne"},"Your"),r.a.createElement("span",{className:"header__optionLineTwo"},"Prime"))),r.a.createElement(o.b,{to:"/checkout",className:"header__link"},r.a.createElement("div",{className:"header__optionBasket"},r.a.createElement(g.a,null),r.a.createElement("span",{className:"header__optionLineTwo header__basketCount"},null===t||void 0===t?void 0:t.length)))))},k=t(18);t(62);var S=function(e){var a=e.id,t=e.title,n=e.image,c=e.price,i=e.rating,o=_(),s=Object(l.a)(o,2),m=(s[0].basket,s[1]);return r.a.createElement("div",{className:"product"},r.a.createElement("div",{className:"product__info"},r.a.createElement("p",null,t),r.a.createElement("p",{className:"product__price"},r.a.createElement("small",null,"\xa3"),r.a.createElement("strong",null,c)),r.a.createElement("div",{className:"product__rating"},Array(i).fill().map((function(e){return r.a.createElement("p",null,"\u2b50")})))),r.a.createElement("img",{className:"product__image",src:n,alt:""}),r.a.createElement("button",{onClick:function(){var e;m({type:"ADD_TO_BASKET",item:(e={id:a,title:t},Object(k.a)(e,"title",t),Object(k.a)(e,"image",n),Object(k.a)(e,"price",c),Object(k.a)(e,"rating",i),e)})}},"Add to basket"))};t(63);var N=function(){return r.a.createElement("div",{className:"home"},r.a.createElement("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:""}),r.a.createElement("div",{className:"home__row"},r.a.createElement(S,{id:"12321341",title:"Logitech G935 Wireless Gaming RGB Headset, 7.1 Surround Sound, DTS Headphone:X 2.0, 50 mm Pro-G Drivers, 2.4 GHz Wireless , Flip-to-Mute Mic, PC/Mac/Xbox One/PS4/Nintendo Switch - Black",price:104.4,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/71FkbQzfOYL._AC_SL1500_.jpg"}),r.a.createElement(S,{id:"23423562342",title:"MSI GF75 9SC 252UK Thin 17.3 - Core i5 9300H - 8 GB RAM - 256 GB SSD",price:913.5,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/71YGqMW6rBL._AC_SL1500_.jpg"})),r.a.createElement("div",{className:"home__row"},r.a.createElement(S,{id:"23423423",title:"LED Strip Lights with Remote, 6M USB LED Lights 2x3M SHINELINE RGB SMD 5050 Color Changing with 24 Key Remote Control Dimmer TV Backlight Mood Light for Home Kitchen Christmas Party Decoration [Energy Class A+]",price:11.89,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/71fbKx8YLwL._AC_SL1500_.jpg"}),r.a.createElement(S,{id:"2342352342",title:"Suplong Expandable Garden Hose 3 Times Expandable Flexible Hose Pipe With Hose Gun Spray/Brass Hose Connector Fittings/Hose Storage Bag (Black-50)",price:14.41,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/81BUDX2nq5L._AC_SL1500_.jpg"}),r.a.createElement(S,{id:"2342352342",title:"WowWee Pinkfong Baby Shark Official Song Cube - Baby Shark",price:7.47,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/71fw5Z2CBHL._AC_SL1500_.jpg"})),r.a.createElement("div",{className:"home__row"},r.a.createElement(S,{id:"2342352342",title:"Samsung 50 TU7110 Crystal UHD 4K HDR Smart TV - 2020 model [Amazon Exclusive] [Energy Class A]",price:399,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/81pizRn9ieL._AC_SL1500_.jpg"})))};t(64),t(65);var O=function(e){var a=e.id,t=e.title,n=e.image,c=e.price,i=e.rating,o=_(),s=Object(l.a)(o,2),m=(s[0].basket,s[1]);return console.log(a,t,n,c,i),r.a.createElement("div",{className:"checkoutProduct"},r.a.createElement("img",{className:"checkoutProduct__image",src:n,alt:""}),r.a.createElement("div",{className:"checkoutProduct__info"},r.a.createElement("p",{className:"checkoutProduct__title"},t),r.a.createElement("p",{className:"checkoutProduct__price"},r.a.createElement("small",null,"\xa3"),r.a.createElement("strong",null,c)),r.a.createElement("div",{className:"checkoutProduct__rating"},Array(i).fill().map((function(e){return r.a.createElement("p",null,"\u2b50")}))),r.a.createElement("button",{onClick:function(){m({type:"REMOVE_FROM_BASKET",id:a})}},"Remove from basket")))},C=(t(66),t(37)),j=t.n(C),y=t(29),A=t(19),B=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,a){return a.price+e}),0)},w=function(e,a){switch(console.log(a),a.type){case"SET_USER":return Object(A.a)(Object(A.a)({},e),{},{user:a.user});case"ADD_TO_BASKET":return Object(A.a)(Object(A.a)({},e),{},{basket:[].concat(Object(y.a)(e.basket),[a.item])});case"REMOVE_FROM_BASKET":var t=Object(y.a)(e.basket),n=e.basket.findIndex((function(e){return e.id===a.id}));return n>=0?t.splice(n,1):console.warn("Cant remove product (id: ${action.id}) as its not in your basket."),Object(A.a)(Object(A.a)({},e),{},{basket:t});default:return e}};var L=function(){var e=_(),a=Object(l.a)(e,1)[0].basket;return r.a.createElement("div",{className:"subtotal"},r.a.createElement(j.a,{value:B(a),displayType:"text",thousandSeparator:!0,prefix:"\xa3",renderText:function(e){return r.a.createElement("div",null,r.a.createElement("p",null,"Subtotal (",a.length," items): ",r.a.createElement("strong",null,e)),r.a.createElement("small",{className:"subtotal__gift"},r.a.createElement("input",{type:"checkbox"}),"This order contains a gift"))}}),r.a.createElement("button",null,"Proceed to checkout"))};var T=function(){var e=_(),a=Object(l.a)(e,1)[0].basket;return r.a.createElement("div",{className:"checkout"},r.a.createElement("div",{className:"checkout__left"},r.a.createElement("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),0===(null===a||void 0===a?void 0:a.length)?r.a.createElement("div",null,r.a.createElement("h2",null,"Your Shopping Basket is empty"),r.a.createElement("p",null,'You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.')):r.a.createElement("div",null,r.a.createElement("h2",null,"Your Shopping basket"),null===a||void 0===a?void 0:a.map((function(e){return r.a.createElement(O,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})})))),(null===a||void 0===a?void 0:a.length)>0&&r.a.createElement("div",{className:"checkout__right"},r.a.createElement("h1",null,"Subtotal"),r.a.createElement(L,null)))};t(68);var I=function(){var e=Object(s.f)(),a=Object(n.useState)(""),t=Object(l.a)(a,2),c=t[0],i=t[1],m=Object(n.useState)(""),u=Object(l.a)(m,2),d=u[0],g=u[1];return r.a.createElement("div",null,r.a.createElement("div",{className:"login"},r.a.createElement(o.b,{to:"/"},r.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Amazon.com-Logo.svg/800px-Amazon.com-Logo.svg.png",alt:"",className:"login__logo"})),r.a.createElement("div",{className:"login__container"},r.a.createElement("h1",null,"Sign In"),r.a.createElement("form",{action:"",type:"submit"},r.a.createElement("h5",null,"Email"),r.a.createElement("input",{value:c,onChange:function(e){return i(e.target.value)},type:"email",name:"",id:""}),r.a.createElement("h5",null,"Password"),r.a.createElement("input",{value:d,onChange:function(e){return g(e.target.value)},type:"password",name:"",id:""}),r.a.createElement("button",{onClick:function(a){a.preventDefault(),b.signInWithEmailAndPassword(c,d).then((function(a){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__signInButton"},"Sign In")),r.a.createElement("p",null,"By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."),r.a.createElement("button",{onClick:function(a){a.preventDefault(),b.createUserWithEmailAndPassword(c,d).then((function(a){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton"},"Create your Amazon Account"))))};var x=function(){var e=_(),a=Object(l.a)(e,2),t=a[0].user,c=a[1];return Object(n.useEffect)((function(){var e=b.onAuthStateChanged((function(e){c(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}));return function(){e()}}),[]),console.log("USER IS >>> ",t),r.a.createElement(o.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/checkout"},r.a.createElement(f,null),r.a.createElement(T,null)),r.a.createElement(s.a,{path:"/login"},r.a.createElement(I,null)),r.a.createElement(s.a,{path:"/"},r.a.createElement(f,null),r.a.createElement(N,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,{initialState:{basket:[],user:null},reducer:w},r.a.createElement(x,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.a36ea806.chunk.js.map