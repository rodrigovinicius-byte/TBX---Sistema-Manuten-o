self.addEventListener('install', (e) => {
    console.log('[Service Worker] Instalado');
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    console.log('[Service Worker] Ativado');
});

self.addEventListener('fetch', (e) => {
    // Por enquanto, ele apenas deixa passar a conexão com a internet
    e.respondWith(fetch(e.request));
});
