/* Progo service worker.
   Caches the app files on the first visit so everything loads offline.
   After that it serves from the cache and refreshes the cache in the background,
   so a new deploy shows up the next time the app is opened after one launch. */

var CACHE = 'progo-v7'; // bump this when you add or rename files below

var ASSETS = [
  './',
  'index.html',
  'manifest.webmanifest',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-512.png',
  'icons/apple-touch-icon.png'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE)
      .then(function (cache) { return cache.addAll(ASSETS); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys()
      .then(function (keys) {
        return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
      })
      .then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (event) {
  var req = event.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.open(CACHE).then(function (cache) {
      return cache.match(req, { ignoreSearch: true }).then(function (hit) {
        var network = fetch(req, { cache: 'no-cache' })
          .then(function (res) {
            if (res && res.ok) cache.put(req, res.clone());
            return res;
          })
          .catch(function () { return null; });

        if (hit) {
          event.waitUntil(network);
          return hit;
        }
        return network.then(function (res) {
          if (res) return res;
          if (req.mode === 'navigate') return cache.match('index.html');
          return Response.error();
        });
      });
    })
  );
});
