"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/poa-dapps-keys-generation/index.html","ada7ec58eb066e38904966a6e199bcad"],["/poa-dapps-keys-generation/static/css/main.cfaa12b6.css","65a2a8cc58cf17877cba6ab82aa7bd21"],["/poa-dapps-keys-generation/static/js/main.6f38a90e.js","f1002e46ebac50d5794f0bc1c52a4207"],["/poa-dapps-keys-generation/static/media/bg_footer.c0181fba.png","c0181fbaa582e7c44f4c77fb50e1781b"],["/poa-dapps-keys-generation/static/media/bg_header.55fb6ae4.png","55fb6ae4101fe4617b5e6a3463c1e701"],["/poa-dapps-keys-generation/static/media/copy.3cdc75f3.png","3cdc75f3003bc76ad29517b20055004c"],["/poa-dapps-keys-generation/static/media/copy@2x.d47cd69c.png","d47cd69c027f0f324b81272274164dac"],["/poa-dapps-keys-generation/static/media/loading.26ca894e.png","26ca894ecd4a23884b43df2a9531c30a"],["/poa-dapps-keys-generation/static/media/logo_ceremony_dapp.5d8763d3.png","5d8763d3c9ab9941ed753dc8158d3247"],["/poa-dapps-keys-generation/static/media/logo_ceremony_dapp@2x.26e7092b.png","26e7092beec8f19bedfce9c43f8feec3"],["/poa-dapps-keys-generation/static/media/logo_ceremony_dapp_footer.29cfa700.png","29cfa700bcd7fec3113ad5913922d558"],["/poa-dapps-keys-generation/static/media/logo_ceremony_dapp_footer@2x.2bceccf6.png","2bceccf60dbfb7861437bab7ce3cb69e"],["/poa-dapps-keys-generation/static/media/warning.4ba81241.svg","4ba81241140fa3db785eacddb80abdca"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=a),n.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,n,t){var r=new URL(e);return t&&r.pathname.match(t)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var n=new URL(a).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,a){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],n=e[1],t=new URL(a,self.location),r=createCacheKey(t,hashParamName,n,/\.\w{8}\./);return[t.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!a.has(n)){var t=new Request(n,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+n+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(n,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!a.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),t="index.html";(a=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,t),a=urlsToCacheKeys.has(n));var r="/poa-dapps-keys-generation/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL(r,self.location).toString(),a=urlsToCacheKeys.has(n)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});