!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r),r("kKhkO");var a=r("bt2La"),i=document.querySelector('.library__btns-btn[data-add="watched"]'),c=document.querySelector('.library__btns-btn[data-add="queue"]');function o(e){var t=e.poster_path,n=e.title,r=e.id,a=e.release_date,i=e.genres,c='<li class="movies__card" id="'.concat(r,'">\n      <img\n        class="movies__card-photo"\n        src="https://image.tmdb.org/t/p/w500').concat(t,'"\n        alt="').concat(n,'"\n        loading="lazy"\n        width="395px"\n        height="354px"\n      />\n      <h2 class="movies__card-title">').concat(n,'</h2>\n      <p class="movies__card-genres">').concat(i.reduce((function(e,t){return e+="".concat(t.name,", ")}),"")," | ").concat(a,"</p>\n    </li>");return document.querySelector(".library-list").insertAdjacentHTML("beforeend",c)}i.addEventListener("click",(function(){c.classList.remove("library__btns-btn--active"),i.classList.add("library__btns-btn--active"),document.querySelector(".library-list").innerHTML="";JSON.parse(localStorage.getItem("WatchedFilms")).map((function(e){return(0,a.fetchById)(e).then((function(e){o(e)}))}))})),c.addEventListener("click",(function(){i.classList.remove("library__btns-btn--active"),c.classList.add("library__btns-btn--active"),document.querySelector(".library-list").innerHTML="";var e=JSON.parse(localStorage.getItem("QueueFilms"));console.log("🚀 ~ onAddQueueBtn ~ parsedQueueFilms",e);e.map((function(e){return(0,a.fetchById)(e).then((function(e){o(e)}))}))})),r("kvC6y"),r("7hKzD"),r("20kJP"),r("jjS2G"),r("cDXQO")}();
//# sourceMappingURL=library.3ad4d017.js.map
