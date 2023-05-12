// ==UserScript==
// @name         对分易复制
// @version      1.0
// @description  对分易直接复制
// @author       sinjan
// @match        https://www.duifene.com/*
// @icon         https://www.duifene.com/favicon.ico
// ==/UserScript==

(function () {
  'use strict';

  let debounceHandler = throttle(function() {

    let codes = document.querySelectorAll("span")
    let divs = document.querySelectorAll("div")

    codes.forEach(v => exe(v))
    divs.forEach(v => exe(v))

  }, 1000);

  let sub = document.querySelector("#subjectMain")
  sub.addEventListener("mouseover", debounceHandler)
  console.log("复制已开启");

  function throttle(fn, delay) {
    let lastTime = 0;
    return function () {
      let nowTime = new Date().getTime();
      if (nowTime - lastTime > delay) {
        fn.apply(this, arguments);
        lastTime = nowTime;
      }
    };
  }

  function exe(v) {
    v.style.webkitTouchCallout = 'text';
    v.style.webkitUserSelect = 'text';
    v.style.khtmlUserSelect = 'text';
    v.style.mozUserSelect = 'text';
    v.style.msUserSelect = 'text';
    v.style.userSelect = 'text';
    v.style.cursor = 'text'
  }
})();


