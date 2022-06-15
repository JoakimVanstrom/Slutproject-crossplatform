/* eslint-disable no-restricted-globals */

const statics = self.__WB_MANIFEST;

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open("grillkorv").then((cache) => {
      console.log(statics);
      cache.add("/");
      return cache.addAll(statics.map((url) => url.url));
    })
  );
});


self.addEventListener("fetch", (event) => {
  if (!(event.request.url.indexOf('http') === 0)) return;

  if (event.request.url.includes('/api.') && navigator.onLine) {
    return
  }

  event.respondWith(
    caches.open("grillkorv").then((cache) => {
      return cache.match(event.request).then((response) => {
        if (response) {
          return response;
        } else {
          const bananpaj = fetch(event.request);
          bananpaj.then((response) => {
            cache.put(event.request, response.clone());
          });
          return bananpaj;
        }
      });
    })
  );
});
