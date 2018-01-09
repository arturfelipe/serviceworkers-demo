importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0-alpha.3/workbox-sw.js');

workbox.clientsClaim();

// Milk trick
workbox.routing.registerRoute(
  /\/img\/beer\.svg$/,
  () => caches.match('/img/milk.svg')
);

workbox.precaching.precacheAndRoute([]);
