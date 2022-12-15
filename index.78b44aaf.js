!function(){function e(e){return e&&e.__esModule?e.default:e}var t={};
/*!
 * SimpleSlider v1.9.0
 * Simple responsive slider created in pure javascript.
 * https://github.com/michu2k/SimpleSlider
 *
 * Copyright 2017-2019 Michał Strumpf
 * Published under MIT License
 */function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}!function(e){function a(t,a){var r=this,o=1<arguments.length&&void 0!==a?a:{};this.init=function(){var e,n,a,l,c,u,p;r.options=d({speed:600,delay:5e3,enableDrag:!0,autoplay:!1,loop:!0,slidesPerView:{},class:{wrapper:"slider-wrapper",slide:"slider-slide",buttons:"slider-btn",pagination:"slider-pagination",paginationItem:"pagination-bullet"},onInit:function(){},onChange:function(){}},o),e=r.options,n=e.slidesPerView,a=e.class,l=a.wrapper,c=a.slide,u=a.buttons,p=a.pagination,r.container=document.querySelector(t),r.wrapper=r.container.querySelector(".".concat(l)),r.slides=r.container.querySelectorAll(".".concat(c)),r.buttons=r.container.querySelectorAll(".".concat(u)),r.pagination=r.container.querySelector(".".concat(p)),r.disableEvents=!1,r.slidesWithClones=r.slides,r.maxSlidesPerView=Math.max.apply(Math,i(Object.keys(n).map((function(e){return n[e]}))).concat([1])),r.index=0,r.wrapperWidth=0,r.transitionDuration=s("transitionDuration"),r.transform=s("transform"),r.timer,r.drag={startX:0,endX:0,dragDiff:0,focused:!1,isLink:!1};var f=r.options.onInit;r.calculateSlidesPerView(),r.createClones(),r.setWidth(),r.moveWrapper(),r.createPagination(),r.autoplay(),r.attachEvents(),f()},this.attachEvents=function(){var t=r.options.enableDrag,n=r.container;["touchstartHandler","touchmoveHandler","touchendHandler","clickHandler","mousedownHandler","mousemoveHandler","mouseupHandler","mouseleaveHandler","resizeHandler","visibilitychangeHandler","paginationBulletsHandler","prevSlide","nextSlide"].map((function(e){r[e]=r[e].bind(r)})),t&&(n.addEventListener("touchstart",r.touchstartHandler),n.addEventListener("touchmove",r.touchmoveHandler),n.addEventListener("touchend",r.touchendHandler),n.addEventListener("click",r.clickHandler),n.addEventListener("mousedown",r.mousedownHandler),n.addEventListener("mousemove",r.mousemoveHandler),n.addEventListener("mouseup",r.mouseupHandler),n.addEventListener("mouseleave",r.mouseleaveHandler)),n.addEventListener("click",r.paginationBulletsHandler),2===r.buttons.length&&(r.buttons[0].addEventListener("click",r.prevSlide),r.buttons[1].addEventListener("click",r.nextSlide)),e.addEventListener("resize",r.resizeHandler),e.addEventListener("visibilitychange",r.visibilitychangeHandler)},this.detachEvents=function(){var t=r.container;t.removeEventListener("touchstart",r.touchstartHandler),t.removeEventListener("touchmove",r.touchmoveHandler),t.removeEventListener("touchend",r.touchendHandler),t.removeEventListener("click",r.clickHandler),t.removeEventListener("mousedown",r.mousedownHandler),t.removeEventListener("mousemove",r.mousemoveHandler),t.removeEventListener("mouseup",r.mouseupHandler),t.removeEventListener("mouseleave",r.mouseleaveHandler),t.removeEventListener("click",r.paginationBulletsHandler),r.buttons[0].removeEventListener("click",r.prevSlide),r.buttons[1].removeEventListener("click",r.nextSlide),e.removeEventListener("resize",r.resizeHandler),e.removeEventListener("visibilitychange",r.visibilitychangeHandler)},this.calculateSlidesPerView=function(){var e=r.options,t=e.loop,n=e.slidesPerView;r.slidesPerView=1,Object.keys(n).forEach((function(e){document.body.offsetWidth>=e&&(r.slidesPerView=n[e])})),r.maxIndex=t?r.slides.length:r.slides.length-r.slidesPerView+1},this.createClones=function(){if(r.options.loop){for(var e,t=r.options.class.slide,n=r.wrapper,i=r.slides.length-1,a=document.createDocumentFragment(),o=document.createDocumentFragment(),s=0;s<r.maxSlidesPerView&&!(i-s<0||i<s);s++)e=n.children[i-s].cloneNode(!0),o.insertBefore(e,o.childNodes[0]),e=n.children[s].cloneNode(!0),a.appendChild(e);n.appendChild(a),n.insertBefore(o,r.slides[0]),r.slidesWithClones=r.container.querySelectorAll(".".concat(t))}},this.setWidth=function(){var e=Math.round(r.container.offsetWidth/r.slidesPerView)+"px";r.wrapperWidth=0,Object.keys(r.slidesWithClones).map((function(t){var n=r.slidesWithClones[t];n.style.width=e,r.wrapperWidth+=n.offsetWidth})),r.wrapper.style.width=r.wrapperWidth+"px"},this.moveWrapper=function(){var e=r.options.loop,t=r.maxSlidesPerView+1-r.slidesPerView+Math.floor(r.slidesPerView/2)+r.index;r.wrapperPosition=0,e||(t=r.index>=r.maxIndex-Math.floor(r.slidesPerView/2)?r.maxIndex-1:r.index);for(var n=0;n<t;n++)r.wrapperPosition+=r.slidesWithClones[n].offsetWidth;r.wrapper.style[r.transform]="translate3d(-".concat(r.wrapperPosition,"px, 0, 0)")},this.changeSlide=function(){var e=0<arguments.length&&void 0!==arguments[0]&&arguments[0],t=r.options,n=t.speed,i=t.loop,a=t.onChange;r.disableEvents||(e||(r.resetAutoplay(),r.autoplay()),i?r.disableEvents=!0:(0<=r.index&&r.index<r.maxIndex&&(r.disableEvents=!0),r.index=r.updateIndex(r.index)),r.highlightPaginationBullet(),r.wrapper.style[r.transitionDuration]=n+"ms",r.moveWrapper(),a(),setTimeout((function(){i&&(r.index<0||r.index>=r.slides.length)&&(r.index=r.updateIndex(r.index),r.wrapper.style[r.transitionDuration]="0ms",r.moveWrapper()),r.disableEvents=!1}),n))},this.createPagination=function(){if(r.pagination){for(var e,t=r.options,n=t.loop,i=t.class.paginationItem,a=document.createDocumentFragment(),o=n?0:Math.min(r.index,r.maxIndex-1),s=0;s<r.maxIndex;s++)(e=document.createElement("span")).classList.add(i),s==o&&e.classList.add("is-active"),a.appendChild(e);r.pagination.appendChild(a),r.paginationBullets=r.pagination.querySelectorAll(".".concat(i))}},this.destroyPagination=function(){r.pagination&&(r.pagination.innerHTML="")},this.paginationBulletsHandler=function(e){var t=r.options.class.paginationItem,n=[];if(e.target.classList.contains(t)){for(var i=0;i<r.paginationBullets.length;i++)n.push(r.paginationBullets[i]);var a=n.indexOf(e.target);r.disableEvents||(r.index=a-1,r.nextSlide())}},this.highlightPaginationBullet=function(){if(r.pagination){var e=r.options.class.paginationItem;r.pagination.querySelector(".is-active").classList.remove("is-active"),r.pagination.querySelectorAll(".".concat(e))[r.updateIndex(r.index)].classList.add("is-active")}},this.prevSlide=function(){r.decreaseIndex(),r.changeSlide()},this.nextSlide=function(){r.increaseIndex(),r.changeSlide()},this.increaseIndex=function(){r.disableEvents||r.index++},this.decreaseIndex=function(){r.disableEvents||r.index--},this.updateIndex=function(e){return r.options.loop?e>=r.slides.length?0:e<0?r.slides.length-1:e:e>=r.maxIndex?r.maxIndex-1:e<=0?0:e},this.autoplay=function(){var e=r.options,t=e.autoplay,n=e.delay,i=e.speed;t&&(r.timer=setTimeout((function(){r.increaseIndex(),r.changeSlide(!0),r.autoplay()}),n+i))},this.resetAutoplay=function(){return clearTimeout(r.timer)},this.updateSliderAfterDrag=function(){var e=r.options.speed;r.drag.focused=!1,r.drag.dragDiff&&(r.autoplay(),100<Math.abs(r.drag.dragDiff)&&(r.drag.dragDiff<0?r.nextSlide():r.prevSlide()),r.wrapper.style[r.transitionDuration]=e+"ms",r.moveWrapper(),r.drag.dragDiff=0,r.drag.isLink=!1)},this.updateSliderDuringDrag=function(){r.resetAutoplay();var e=r.options.loop,t=r.slides[r.index].offsetWidth,n=r.wrapperPosition-r.drag.dragDiff,i=100+t;r.drag.dragDiff=r.drag.endX-r.drag.startX,e||(r.index<=0&&0<r.drag.dragDiff&&(i=100),r.index>=r.maxIndex-1&&r.drag.dragDiff<0&&(i=100)),r.drag.dragDiff<i&&r.drag.dragDiff>-1*i?r.wrapper.style[r.transform]="translate3d(".concat(-1*n,"px, 0, 0)"):r.updateSliderAfterDrag()},this.mousedownHandler=function(e){e.stopPropagation(),e.preventDefault(),r.wrapper.style[r.transitionDuration]="0ms",r.drag.focused=!0,r.drag.startX=e.pageX},this.mousemoveHandler=function(e){e.stopPropagation(),!r.disableEvents&&r.drag.focused&&("A"===e.target.nodeName&&(r.drag.isLink=!0),r.drag.endX=e.pageX,r.updateSliderDuringDrag())},this.mouseupHandler=function(e){e.stopPropagation(),r.updateSliderAfterDrag()},this.mouseleaveHandler=function(e){e.stopPropagation(),r.updateSliderAfterDrag()},this.clickHandler=function(e){r.drag.isLink&&e.preventDefault(),r.drag.isLink=!1},this.touchstartHandler=function(e){e.stopPropagation(),r.wrapper.style[r.transitionDuration]="0ms",r.drag.focused=!0,r.drag.startX=e.touches[0].pageX},this.touchmoveHandler=function(e){e.stopPropagation(),!r.disableEvents&&r.drag.focused&&(r.drag.endX=e.touches[0].pageX,r.updateSliderDuringDrag())},this.touchendHandler=function(e){e.stopPropagation(),r.updateSliderAfterDrag()},this.visibilitychangeHandler=function(){r.resetAutoplay(),document.hidden||r.autoplay()},this.resizeHandler=function(){var e=r.options.loop,t=r.slidesPerView;r.wrapper.style[r.transitionDuration]="0ms",r.calculateSlidesPerView(),r.setWidth(),r.moveWrapper(),e||t===r.slidesPerView||(r.destroyPagination(),r.createPagination())};var s=function(e){return"string"==typeof document.documentElement.style[e]?e:(e=e.charAt(0).toUpperCase()+e.slice(1),"webkit".concat(e))},d=function(e,t){var i,a;if(null!=t&&"undefined"!=t)for(i in t){var r=t[i];if("object"===n(r))for(a in r)e[i][a]=r[a];else e[i]=r}return e};this.init()}void 0!==t?t=a:e.SimpleSlider=a}(window);var a={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function r(){a.modal.classList.toggle("is-hidden"),a.modal.classList.contains("is-hidden")||new(e(t))(".simple-slider-first")}a.openModalBtn.addEventListener("click",r),a.closeModalBtn.addEventListener("click",r)}();
//# sourceMappingURL=index.78b44aaf.js.map
