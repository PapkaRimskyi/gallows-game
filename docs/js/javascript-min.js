"use strict";!function(){var s=document.querySelector(".game-header"),r=document.querySelector(".play-area__letter-list-container"),a=document.querySelector(".game-header__start-game"),o=document.querySelectorAll(".play-area__attempts-left-health"),l=document.querySelector(".play-area__human-figure"),n="абвгдеёжзийклмнопрстуфхцчшщъыьэюя",i=["дружба","пляж","солнце","луна","спутник","механизм","человек"],d={};function c(e){var t=!0,r=!1,a=void 0;try{for(var l,n=o[Symbol.iterator]();!(t=(l=n.next()).done);t=!0){l.value.style=e}}catch(e){r=!0,a=e}finally{try{t||null==n.return||n.return()}finally{if(r)throw a}}}c("fill: #000000");var u={timerID:null,timer:null,setTimer:function(){var e=this;this.timer=document.createElement("span"),this.timer.textContent=0,this.timer.style="position: absolute; left: -10%; top: 0;",document.querySelector(".game-main").prepend(this.timer),this.timerID=setInterval(function(){return e.timer.textContent++},1e3)},stopTimer:function(){clearInterval(this.timerID),this.timer.textContent=this.timer.textContent+"s"}};function m(e){var t=document.querySelectorAll(".play-area__letter-list-button"),r=document.createElement("a");r.classList.add("game-header__result-link-reload"),r.setAttribute("href","#"),r.textContent=e+" Нажмите сюда, чтобы поиграть еще.",r.style="position: absolute; bottom: -28%; right: 33%; font-size: 24px; color: rgb(163, 21, 12);",s.append(r);var a=!0,l=!1,n=void 0;try{for(var o,i=t[Symbol.iterator]();!(a=(o=i.next()).done);a=!0){o.value.disabled=!0}}catch(e){l=!0,n=e}finally{try{a||null==i.return||i.return()}finally{if(l)throw n}}document.querySelector(".game-header__result-link-reload").addEventListener("click",function(e){e.preventDefault(),document.location.reload(!0)})}function p(){for(var e=0;e<o.length;e++)if(!o[e].classList.contains("play-area__attempts-left-health--lost-life")){o[e].classList.add("play-area__attempts-left-health--lost-life"),o[e].style="fill: #000000",l.children[e].style="display: block",e===o.length-1&&(m("Вы проиграли."),u.stopTimer());break}}a.addEventListener("click",function(e){if(!document.querySelector(".play-area__letter-list")){e.preventDefault();var t=document.createElement("ul");t.classList.add("play-area__letter-list"),t.style="display: flex; flex-wrap: wrap;",function(e){for(var t=n.toUpperCase().split(""),r=0;r<n.length;r++){var a=document.createElement("li"),l=document.createElement("button");a.classList.add("play-area__letter-list-item"),l.classList.add("play-area__letter-list-button"),l.textContent=t[r],a.append(l),e.append(a)}}(t),r.append(t),function(){if(!document.querySelector(".play-area__hidden-word-list")){var e=i[Math.floor(Math.random()*i.length)].toUpperCase();d.word=e;var t=document.createElement("ul");t.classList.add("play-area__hidden-word-list");for(var r=0;r<e.length;r++){var a=document.createElement("li");a.classList.add("play-area__hidden-word-list-item"),t.append(a)}document.querySelector(".play-area__hidden-word").append(t),c("fill: #d75a4a"),function(){for(var e=0;e<l.children.length;e++)l.children[e].style="display: none"}(),u.setTimer()}}(),a.disabled=!0}console.log(d.word)}),r.addEventListener("click",function(e){var t=e.target,r=document.querySelectorAll(".play-area__hidden-word-list-item");if("BUTTON"===t.tagName){for(var a=!1,l=0;l<d.word.length;l++)t.textContent===d.word[l]?(a=!0,r[l].textContent=t.textContent):!1===a&&l===d.word.length-1&&p();t.disabled=!0}!function(e){var t=!0,r=!1,a=void 0;try{for(var l,n=e[Symbol.iterator]();!(t=(l=n.next()).done);t=!0){if(!l.value.textContent)return!1}}catch(e){r=!0,a=e}finally{try{t||null==n.return||n.return()}finally{if(r)throw a}}return!0}(r)||m("Вы выиграли.")})}(),function(){var e=document.querySelector(".game-header__game-rules-link"),t=document.querySelector(".game-header__game-rules-popup");e.addEventListener("click",function(e){e.preventDefault(),t.classList.contains("game-header__game-rules-popup--active")?(t.style="opacity: 0",setTimeout(function(){t.classList.remove("game-header__game-rules-popup--active")},500)):(t.classList.add("game-header__game-rules-popup--active"),setTimeout(function(){t.style="opacity: 1"},300))})}();