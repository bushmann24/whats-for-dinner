const CACHE_NAME = 'whatsfordinner-v1';

// Install event - fires when the service worker is first registered
self.addEventListener('install', event => {
    self.skipWaiting(); // Forces the waiting service worker to become the active service worker.
});

// Activate event - cleans up old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
    self.clients.claim(); // Take control of all pages immediately
});

// Fetch event - Network First, falling back to cache
self.addEventListener('fetch', event => {
    // Only handle GET requests
    if (event.request.method !== 'GET') return;

    event.respondWith(
        fetch(event.request)
            .then(response => {
                // If the network fetch is successful, clone the response and save it to the cache
                const responseClone = response.clone();
                caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, responseClone);
                });
                return response; // Return the fresh network data
            })
            .catch(() => {
                // If the network fails (offline), pull the last known version from the cache
                return caches.match(event.request);
            })
    );
});
