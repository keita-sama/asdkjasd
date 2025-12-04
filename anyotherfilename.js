// Choose a cache name
const cacheName = "cache-v1";
// List the files to precache

const baseName = 'asdkjasd';

const assets = [
  // imma be real i made the extra resolutions but i don't think im gonna use them
  "/images/128.png",
  "/images/192.png",
  "/images/512.png",
  "/images/codelogo.svg",

  "/asdkjasd",
  "/index.html",
  "/styles.css",
  "/js/main.js",

  "/lib/ace/ace.js",
  "/lib/ace/ace.min.js",
  "/lib/ace/mode-python.js",
  "/lib/ace/theme-tomorrow_night_bright.js",

  "/lib/codicons/codicons.css",
  "/lib/codicons/codicons.min.css",
  "/lib/codicons/codicons.ttf",

  "/lib/skulpt/skulpt-stdlib.js",
  "/lib/skulpt/skulpt.js",
  "/lib/skulpt/skulpt.min.js",
];

const filesUpdate = cache => {
    const stack = [];
    assets.forEach(file => stack.push(
        cache.add(`${baseName}${file}`).catch(_=>console.error(`can't load ${file} to cache`))
    ));
    return Promise.all(stack);
};

// When the service worker is installing, open the cache and add the precache resources to it
self.addEventListener("install", (event) => {
  console.log("Service worker install event!");
  event.waitUntil(
    caches.open(cacheName).then(filesUpdate)
  );
});

self.addEventListener("activate", (event) => {
  console.log("Service worker activate event!");
});

// When there's an incoming fetch request, try and respond with a precached resource, otherwise fall back to the network
self.addEventListener("fetch", (event) => {
  console.log("Fetch intercepted for:", event.request.url);
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    })
  );
});
