const cacheName = "version-1";
const urlsToCache = ["index.html", "offline.html"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log("Opened Cache");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(async () => {
      try {
        return await fetch(event.request);
      } catch {
        return await caches.match("offline.html");
      }
    })
  );
});

self.addEventListener("activate", (event) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(cacheName);
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheNames) => {
          if (!cacheWhitelist.includes(cacheNames)) {
            return caches.delete(cacheNames);
          }
        })
      )
    )
  );
});
