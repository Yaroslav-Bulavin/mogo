self.addEventListener("install", function (event) {
    console.log("[Service Worker] Innstalling Service Worker...", event);
});
self.addEventListener("activate", function (event) {
    console.log("[Service Worker] Activating Service Worker...", event);
    self.clients.claim();
});
self.addEventListener("fetch", function (event) {
    console.log("[Service Worker] Fetching something...", event);
    event.respondWith(fetch(event.request));
});