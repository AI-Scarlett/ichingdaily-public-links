/* Website-only, cookieless Umami analytics. Preserve Google Analytics. */
(function () {
  if (navigator.doNotTrack === '1' || navigator.globalPrivacyControl === true) return;
  var script = document.createElement('script');
  script.src = 'https://aiaiai.help/umami/script.js';
  script.async = true;
  script.dataset.websiteId = 'e7fff277-c5b7-4afd-b0d9-5ee01a3147c5';
  script.dataset.hostUrl = 'https://aiaiai.help/umami';
  script.dataset.domains = 'ai-scarlett.github.io';
  script.dataset.doNotTrack = 'true';
  script.dataset.excludeSearch = 'true';
  script.dataset.excludeHash = 'true';
  document.head.appendChild(script);
})();
