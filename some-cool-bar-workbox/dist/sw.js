/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/YYPcyY
 */


importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.0.0-alpha.3/workbox-sw.js");









/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
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
].concat(self.__precacheManifest || []);

if (Array.isArray(self.__precacheManifest)) {
  workbox.precaching.suppressWarnings();
  workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
}
