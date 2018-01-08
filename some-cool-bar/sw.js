// Service Worker Scope V1

const CACHE_VERSION = 'v1';

self.addEventListener('install', event => {
  console.log(`[SW] Installing ${CACHE_VERSION}`);

  // Precaching
  event.waitUntil(
    caches.open(`some-cool-bar-${CACHE_VERSION}`)
      .then(cache => {
        console.log(`[SW] Precaching ${CACHE_VERSION}`);
        return cache.addAll([
          '/',
          '/img/bar.svg',
          '/img/milk.svg'
        ])
      })
  );

});

self.addEventListener('activate', event => {
  console.log(`[SW] Activated ${CACHE_VERSION}`);
});

self.addEventListener('fetch', event => {
  console.log(`[SW] Handling fetch ${CACHE_VERSION}`);

  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        const url = new URL(event.request.url);

        // Serve a glass of milk instead of a beer
        if (url.origin == location.origin && url.pathname.endsWith('/img/beer.svg')) {
          return caches.match('/img/milk.svg');
        }

        // Cache hit - return response from cache
        if (response) {
          return response;
        }

        return fetch(event.request);
      }
    )
  );
});
