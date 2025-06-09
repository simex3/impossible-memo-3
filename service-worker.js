self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('memo-cache').then(function(cache) {
      return cache.addAll([
        './',
        './impossible_memo.html',
        './manifest.json',
        './carta_logo_impossible_memo.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});