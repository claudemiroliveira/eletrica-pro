const CACHE_NAME = "eletrica-pro-v4";

const APP_FILES = [
  "/eletrica-pro/",
  "/eletrica-pro/index.html",
  "/eletrica-pro/manifest.json",
  "/eletrica-pro/icons/icon-192.png",
  "/eletrica-pro/icons/icon-512.png"
];

// INSTALA NOVA VERSÃO
self.addEventListener("install", event => {
  self.skipWaiting(); // ativa imediatamente

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_FILES))
  );
});

// REMOVE CACHE ANTIGO AUTOMATICAMENTE
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );

  self.clients.claim(); // assume controle sem reload
});

// ESTRATÉGIA: SEMPRE BUSCA NOVA VERSÃO PRIMEIRO
self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});


