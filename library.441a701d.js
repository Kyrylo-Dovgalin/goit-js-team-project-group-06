!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a),a("kKhkO");var i=a("bt2La"),c=a("7xmR0"),o=a("iU1Pc"),l=document.querySelector('.library__btns-btn[data-add="watched"]'),s=document.querySelector('.library__btns-btn[data-add="queue"]');function d(e){var t=e.poster_path,n=e.title,r=e.id,a=e.release_date,i=e.genres,o='<li class="movies__card" id="'.concat(r,'">\n      <img\n        class="movies__card-photo"\n        src="https://image.tmdb.org/t/p/w500').concat(t,'"\n        alt="').concat(n,'"\n        loading="lazy"\n        width="395px"\n        height="354px"\n      />\n      <h2 class="movies__card-title">').concat(n,'</h2>\n      <p class="movies__card-genres">').concat(i.reduce((function(e,t){return e+="".concat(t.name,", ")}),"")," | ").concat((0,c.dotaReleaseCheck)(a),"</p>\n    </li>");return document.querySelector(".library-list").insertAdjacentHTML("beforeend",o)}l.addEventListener("click",(function(){s.classList.remove("library__btns-btn--active"),l.classList.add("library__btns-btn--active"),document.querySelector(".library-list").innerHTML="";var t=JSON.parse(localStorage.getItem("WatchedFilms"));if(null===t)return void e(o).Report.failure("","You have to create a list first");t.map((function(e){return(0,i.fetchById)(e).then((function(e){d(e)}))}))})),s.addEventListener("click",(function(){l.classList.remove("library__btns-btn--active"),s.classList.add("library__btns-btn--active"),document.querySelector(".library-list").innerHTML="";var t=JSON.parse(localStorage.getItem("QueueFilms"));if(null===t)return void e(o).Report.failure("","You have to create a list first");t.map((function(e){return(0,i.fetchById)(e).then((function(e){d(e)}))}))})),a("kvC6y"),a("20kJP"),a("jjS2G"),a("cDXQO")}();
//# sourceMappingURL=library.441a701d.js.map
