---
title: Configuration Tips
description: Hasznos tippek a Docusaurus projektek konfigurálásához.
sidebar_position: 3
---

# ⚙️ Configuration Tips

Ebben a részben hasznos tippeket találsz a Docusaurus projektek konfigurálásához – a legfontosabb beállításoktól kezdve a haladó testreszabási lehetőségekig.

---

## 1. `docusaurus.config.js` – Az alap konfigurációs fájl

Ez a fájl tartalmazza a weboldal nevét, URL-jét, témáit, plugineket és sok mást.

### Példa részlet:

```js
module.exports = {
  title: 'My Site',
  url: 'https://example.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'my-org',
  projectName: 'my-project',
};
