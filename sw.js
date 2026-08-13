const CACHE='property-ledger-shell-v1';
const FILES=['./','index.html','styles.css','logo.css','theme.css','red-theme.css','union-jack.css','typography.css','cloud.css','app.js','forecast.js','cloud.js','ja-monogram.svg','manifest.webmanifest'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
self.addEventListener('fetch',event=>{if(event.request.method!=='GET')return;event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request)));});
