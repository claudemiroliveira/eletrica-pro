const CACHE_NAME = "eletrica-pro-v7";

const APP_FILES = [
  "/eletrica-pro/",
  "/eletrica-pro/index.html",
  "/eletrica-pro/manifest.json",
  "/eletrica-pro/licenca.js",
  "/eletrica-pro/icons/icon-192.png",
  "/eletrica-pro/icons/icon-512.png"
];

/self.addEventListener("install", event => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_FILES))
  );
});

// avisa páginas abertas que há update
self.addEventListener("activate", event => {
  event.waitUntil(
    self.clients.matchAll().then(clients => {
      clients.forEach(client => {
        client.postMessage({ type: "UPDATE_READY" });
      });
    })
  );

  self.clients.claim();

});

// FETCH — atualização silenciosa
self.addEventListener("fetch", event => {

  event.respondWith(
    caches.match(event.request).then(cached => {

      const networkFetch = fetch(event.request)
        .then(response => {
          caches.open(CACHE_NAME)
            .then(cache => cache.put(event.request, response.clone()));
          return response;
        })
        .catch(() => cached);

      // responde rápido com cache e atualiza depois
      return cached || networkFetch;
    })
  );

});





