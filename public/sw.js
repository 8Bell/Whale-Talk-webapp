if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>a(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-6316bd60"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/GsZL5TuzHX88BPKdL7kbT/_buildManifest.js",revision:"326e580da360fbcf5759ba80256035b1"},{url:"/_next/static/GsZL5TuzHX88BPKdL7kbT/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/GsZL5TuzHX88BPKdL7kbT/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/162-a4d8c5473597927f.js",revision:"a4d8c5473597927f"},{url:"/_next/static/chunks/287-bb3f7b04a6812942.js",revision:"bb3f7b04a6812942"},{url:"/_next/static/chunks/305-a4877691f860a6e1.js",revision:"a4877691f860a6e1"},{url:"/_next/static/chunks/322-8a52d8a096ec7410.js",revision:"8a52d8a096ec7410"},{url:"/_next/static/chunks/451-97a7671ee297a111.js",revision:"97a7671ee297a111"},{url:"/_next/static/chunks/548-e4f468129740ca93.js",revision:"e4f468129740ca93"},{url:"/_next/static/chunks/674-4299e33cc3125003.js",revision:"4299e33cc3125003"},{url:"/_next/static/chunks/82-e738c0720f7641d7.js",revision:"e738c0720f7641d7"},{url:"/_next/static/chunks/e16e73ba-38d8af5d6052bd62.js",revision:"38d8af5d6052bd62"},{url:"/_next/static/chunks/ff239f9d-9de7572dc3ada480.js",revision:"9de7572dc3ada480"},{url:"/_next/static/chunks/framework-e70c6273bfe3f237.js",revision:"e70c6273bfe3f237"},{url:"/_next/static/chunks/main-784e916df6ec1917.js",revision:"784e916df6ec1917"},{url:"/_next/static/chunks/pages/_app-b3e7b7f7d8a83960.js",revision:"b3e7b7f7d8a83960"},{url:"/_next/static/chunks/pages/_error-0a004b8b8498208d.js",revision:"0a004b8b8498208d"},{url:"/_next/static/chunks/pages/chatRoom-243a676510c41b56.js",revision:"243a676510c41b56"},{url:"/_next/static/chunks/pages/chats-480083db52721ae2.js",revision:"480083db52721ae2"},{url:"/_next/static/chunks/pages/friends-32785f794a5c1d85.js",revision:"32785f794a5c1d85"},{url:"/_next/static/chunks/pages/index-bddce4461415e6e4.js",revision:"bddce4461415e6e4"},{url:"/_next/static/chunks/pages/sign-up-037a25448d3bd7b3.js",revision:"037a25448d3bd7b3"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-9b312e20a4e32339.js",revision:"9b312e20a4e32339"},{url:"/apple-touch-icon.png",revision:"7e6342a225d31d510dc654efcf4286d0"},{url:"/favicon.ico",revision:"f52fa441cbaca46a336b6f3503e34819"},{url:"/images/logo.ico",revision:"f52fa441cbaca46a336b6f3503e34819"},{url:"/images/whale crystal2@0.5x.png",revision:"a677542290f8122cf0aaab26075258f7"},{url:"/images/whale crystal@0.5x.png",revision:"336cfe0dfc3f42bedfd01b4a01130d70"},{url:"/images/whale plastic 2@0.25x.png",revision:"e7c987eef6c9337bef08029258c95fba"},{url:"/images/whale plastic 2@0.5x.png",revision:"b3b9846ebfecd5f896c8cf7ac14dab8f"},{url:"/images/whale plastic 2@1x_1.png",revision:"a74a1d397d021499621ac4fd14386b8f"},{url:"/manifest.json",revision:"edfb56e4cefabce7e0cf04250ec4a029"},{url:"/startup.png",revision:"3a9d9b0f24743f9ff731ad62248a8a6e"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
