function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i),i("h7uVr");var a=i("1o7ne"),l=i("eWCmQ");const o=document.querySelector('.library__btns-btn[data-add="watched"]'),s=document.querySelector('.library__btns-btn[data-add="queue"]');function c(e){const{poster_path:t,title:n,id:r,release_date:i,genres:a}=e,l=`<li class="movies__card" id="${r}">\n      <img\n        class="movies__card-photo"\n        src="https://image.tmdb.org/t/p/w500${t}"\n        alt="${n}"\n        loading="lazy"\n        width="395px"\n        height="354px"\n      />\n      <h2 class="movies__card-title">${n}</h2>\n      <p class="movies__card-genres">${a.reduce(((e,t)=>e+=`${t.name}, `),"")} | ${i}</p>\n    </li>`;return document.querySelector(".library-list").insertAdjacentHTML("beforeend",l)}o.addEventListener("click",(function(){s.classList.remove("library__btns-btn--active"),o.classList.add("library__btns-btn--active"),document.querySelector(".library-list").innerHTML="";const t=JSON.parse(localStorage.getItem("WatchedFilms"));if(null===t)return void e(l).Notify.failure("Ты еще ничего не добавил!",{position:"center-center"});t.map((e=>(0,a.fetchById)(e).then((e=>{c(e)}))))})),s.addEventListener("click",(function(){o.classList.remove("library__btns-btn--active"),s.classList.add("library__btns-btn--active"),document.querySelector(".library-list").innerHTML="";const t=JSON.parse(localStorage.getItem("QueueFilms"));if(null===t)return void e(l).Notify.failure("Ты еще ничего не добавил!",{position:"center-center"});t.map((e=>(0,a.fetchById)(e).then((e=>{c(e)}))))})),i("gjiCh"),i("epHO8"),i("dgRLQ"),i("8StUf"),i("37v9V");
//# sourceMappingURL=library.dc60b2e1.js.map
