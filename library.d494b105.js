var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in n){var i=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,i.call(r.exports,r,r.exports),r.exports}var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(e,o){n[e]=o},e.parcelRequired7c6=i);var r=i("2shzp"),t=i("1o7ne");(async()=>await r.default.get(`${t.BASE_URL}movie/76600?api_key=${t.API_KEY}`))().then((({data:{id:e,vote_average:o}})=>console.log("id фильма - ",e,"рейтинг - ",o))),i("gjiCh"),i("epHO8"),i("8StUf");
//# sourceMappingURL=library.d494b105.js.map