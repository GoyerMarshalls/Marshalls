// sw.js — Goyer Marshal App
//
// Doel: uitsluitend PWA-installeerbaarheid op Android/Chrome, dat naast een
// geldig manifest ook een geregistreerde service worker met een fetch-handler
// vereist. Er wordt bewust GEEN offline-caching toegepast — elk verzoek gaat
// gewoon naar het netwerk. De app leunt op live Teecontrol-sync en actuele
// Supabase-data; caching zou marshals een verouderde versie kunnen laten zien.

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
