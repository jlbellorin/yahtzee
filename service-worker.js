"use strict";var precacheConfig=[["/yahtzee/index.html","5dd33b4ee7aaddc19fb5a87b89a6c999"],["/yahtzee/static/css/main.40d78456.css","3819b5a32efa9ebfbd8ac8fbfafc21c5"],["/yahtzee/static/js/main.f48dfbbb.js","125d1377b120016176a31a44fcaa0ef1"],["/yahtzee/static/media/fa-brands-400.2ef8ba34.woff","2ef8ba3410dcc71578a880e7064acd7a"],["/yahtzee/static/media/fa-brands-400.5bf14553.svg","5bf145531213545e03ff41cd27df7d2b"],["/yahtzee/static/media/fa-brands-400.5e2f9212.woff2","5e2f92123d241cabecf0b289b9b08d4a"],["/yahtzee/static/media/fa-brands-400.98b6db59.ttf","98b6db59be947f563350d2284fc9ea36"],["/yahtzee/static/media/fa-brands-400.a7b95dbd.eot","a7b95dbdd87e0c809570affaf366a434"],["/yahtzee/static/media/fa-regular-400.427d721b.woff","427d721b86fc9c68b2e85ad42b69238c"],["/yahtzee/static/media/fa-regular-400.5eb754ab.svg","5eb754ab7dbd2fee562360528db4c3c0"],["/yahtzee/static/media/fa-regular-400.65b9977a.ttf","65b9977aa23185e8964b36eddbce7a20"],["/yahtzee/static/media/fa-regular-400.dcce4b7f.eot","dcce4b7fbd5e895561e18af4668265af"],["/yahtzee/static/media/fa-regular-400.e6257a72.woff2","e6257a726a0cf6ec8c6fec22821c055f"],["/yahtzee/static/media/fa-solid-900.418dad87.woff2","418dad87601f9c8abd0e5798c0dc1feb"],["/yahtzee/static/media/fa-solid-900.46e7cec6.eot","46e7cec623d8bd790d9fdbc8de2d3ee7"],["/yahtzee/static/media/fa-solid-900.49279363.svg","49279363201ed19a840796e05a74a91b"],["/yahtzee/static/media/fa-solid-900.a7140145.woff","a7140145ebaaf5fb14e40430af5d25c4"],["/yahtzee/static/media/fa-solid-900.ff8d9f8a.ttf","ff8d9f8adb0d09f11d4816a152672f53"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var r="/yahtzee/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});