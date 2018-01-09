importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0-alpha.3/workbox-sw.js');

workbox.clientsClaim();

// Milk trick
workbox.routing.registerRoute(
  /\/img\/beer\.svg$/,
  () => caches.match('/img/milk.svg')
);

workbox.precaching.precacheAndRoute([
  {
    "url": "img/bar.svg",
    "revision": "d86c626f2caadc7f73f5987f9af611b6"
  },
  {
    "url": "img/beer.svg",
    "revision": "30b921568452c89dfbafa350f6263fc7"
  },
  {
    "url": "img/milk.svg",
    "revision": "4f18cee564ab485eea01bed8cab7b856"
  },
  {
    "url": "index.html",
    "revision": "0edb00801da856632d63a14928efc4bd"
  }
]);
