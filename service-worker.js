const CACHE_NAME='ai-navi-v11-icon';
const ASSETS=['./','./index.html','./manifest.webmanifest','./service-worker.js','./background.png','./favicon.png','./apple-touch-icon.png','./icon-192.png','./icon-512.png','./ai_launcher.html','./blackjack.html','./bita_oshi.html'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>k!==CACHE_NAME?caches.delete(k):null))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method==='GET')e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
