// plausible.io, modified slightly to send hostname
!function(){"use strict";var r=window.location,o=window.document,l=o.currentScript,s=l.getAttribute("data-api")||new URL(l.src).origin+"/api/event",u=l.getAttribute("data-domain");function c(t,e){t&&console.warn("Ignoring Event: "+t),e&&e.callback&&e.callback()}function t(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(r.hostname)||"file:"===r.protocol)return c("localhost",e);if((window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)&&!window.__plausible)return c(null,e);try{if("true"===window.localStorage.plausible_ignore)return c("localStorage flag",e)}catch(t){}var n={},t=(n.n=t,n.u=r.href,n.d=u,n.r=o.referrer||null,e&&e.meta&&(n.m=JSON.stringify(e.meta)),e&&e.props&&(n.p=e.props),l.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)})),i=n.p||{},a=(t.forEach(function(t){var e=t.replace("event-",""),t=l.getAttribute(t);t=e==='hostname'&&t==='hostname'?t=r.hostname:t;i[e]=i[e]||t}),n.p=i,new XMLHttpRequest);a.open("POST",s,!0),a.setRequestHeader("Content-Type","text/plain"),a.send(JSON.stringify(n)),a.onreadystatechange=function(){4===a.readyState&&e&&e.callback&&e.callback({status:a.status})}}var e=window.plausible&&window.plausible.q||[];window.plausible=t;for(var n,i=0;i<e.length;i++)t.apply(this,e[i]);function a(){n!==r.pathname&&(n=r.pathname,t("pageview"))}function p(){a()}var w,d=window.history;d.pushState&&(w=d.pushState,d.pushState=function(){w.apply(this,arguments),p()},window.addEventListener("popstate",p)),"prerender"===o.visibilityState?o.addEventListener("visibilitychange",function(){n||"visible"!==o.visibilityState||a()}):a()}();