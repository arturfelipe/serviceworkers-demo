const CACHE_VERSION = 'v1';
const CACHE_NAME = `some-cool-bar-${CACHE_VERSION}`;

self.addEventListener('install', event => {
  console.log(`[SW] Installing ${CACHE_NAME}`);

  // Precaching
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log(`[SW] Precaching ${CACHE_NAME}`);
        return cache.addAll([
          '/',
          '/img/beer.svg',
          '/img/bar.svg',
          '/img/milk.svg'
        ])
      })
  );

});

self.addEventListener('activate', event => {
  console.log(`[SW] Activated ${CACHE_NAME}`);

  // Cache cleanup
  event.waitUntil(
    caches.keys()
      .then(cacheNames => Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName != CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      ))
  );
});

self.addEventListener('fetch', event => {
  console.log(`[SW] Handling fetch ${CACHE_NAME}`);

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
