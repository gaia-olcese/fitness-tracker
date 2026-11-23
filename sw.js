self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil((async () => {
    const windows = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    if (windows.length) {
      await windows[0].focus();
    } else {
      await self.clients.openWindow(new URL('./', self.registration.scope).href);
    }
  })());
});
