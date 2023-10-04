'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "772297075a890345dbe7e76543e54777",
"index.html": "bd6a60b7fb08e3861eac07f1e0c4d29c",
"/": "bd6a60b7fb08e3861eac07f1e0c4d29c",
"main.dart.js": "44347ec433d2cbc3f9bff645282e7331",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "7d672e8731197a2a7887e108d6ecc4f7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b3cf7149588cedc52e5ed383746fdf9c",
"assets/images/reference_images/Amyda_ornata/Amyda_ornata_thumbnail.jpg": "e8ac3c4f372fa5fec167ff798e75216a",
"assets/images/reference_images/Mauremys_mutica/Mauremys_mutica_thumbnail.jpg": "a3dd0967cf5259f7cf604d142132aba1",
"assets/images/reference_images/Cuora_picturata/Cuora_picturata_thumbnail.jpg": "33619f7a1ff5a88d478e9f54a2012b2d",
"assets/images/reference_images/Cuora_amboinensis/Cuora_amboinensis_thumbnail.jpg": "64aa6b77b120d7d4310c3cf2c82b127c",
"assets/images/reference_images/Pelodiscus_sinensis/Pelodiscus_sinensis_thumbnail.jpg": "e1bd8a0420537319e47509627e567bcd",
"assets/images/reference_images/Cuora_galbinifrons/Cuora_galbinifrons_thumbnail.jpg": "45b1fbed81ed211f0c1260843ab9b7bf",
"assets/images/reference_images/Malayemys_subtrijuga/Malayemys_subtrijuga_thumbnail.jpg": "c25990d8d35eeab114f48a2dd2244334",
"assets/images/reference_images/Cuora_cyclornata/Cuora_cyclornata_thumbnail.jpg": "002a7d12ab03e3982527f8f273efad7b",
"assets/images/reference_images/Pelochelys_cantorii/Pelochelys_cantorii_thumbnail.jpg": "7474e3bb4df9afba946f8c431ada8743",
"assets/images/reference_images/Cuora_mouhotii/Cuora_mouhotii_thumbnail.jpg": "0303ef6d39887537a959f62ea3831697",
"assets/images/reference_images/Platysternon_megacephalum/Platysternon_megacephalum_thumbnail.jpg": "7e57b37573ea0b0b6086f9766a860238",
"assets/images/reference_images/Geoemyda_spengleri/Geoemyda_spengleri_thumbnail.jpg": "3d3eeb09b37d08f682094422b65bdab1",
"assets/images/reference_images/Heosemys_annandalii/Heosemys_annandalii_thumbnail.jpg": "342fee3e5bb8069490123c2e382c1424",
"assets/images/reference_images/Cyclemys_oldhamii/Cyclemys_oldhamii_thumbnail.jpg": "6b11b40985d1ebdf5c5819bcacd4a01f",
"assets/images/reference_images/Indotestudo_elongata/Indotestudo_elongata_thumbnail.jpg": "a241547f12ca8d0fd4821e1e6848f11c",
"assets/images/reference_images/Cyclemys_pulchristriata/Cyclemys_pulchristriata_thumbnail.jpg": "434bd51036c2e2319c1e097b53b6995d",
"assets/images/reference_images/Pelodiscus_variegatus/Pelodiscus_variegatus_thumbnail.jpg": "4e87a94f6fc1d2defd50bace93f2155f",
"assets/images/reference_images/Palea_steindachneri/Palea_steindachneri_thumbnail.jpg": "f622376901248bed57575a2fe0d741e7",
"assets/images/reference_images/Rafetus_swinhoei/Rafetus_swinhoei_thumbnail.jpg": "3ca104a52ed450295678316d139cc4ef",
"assets/images/reference_images/Cyclemys_atripons/Cyclemys_atripons_thumbnail.jpg": "e4d921b110675035fcfb768351962f70",
"assets/images/reference_images/Sacalia_quadriocellata/Sacalia_quadriocellata_thumbnail.jpg": "7d08481db3075cb826e4dcf4c983fc0a",
"assets/images/reference_images/Mauremys_annamensis/Mauremys_annamensis_thumbnail.jpg": "aae7afc32eca6a4e3f0d93e0bd167b4c",
"assets/images/reference_images/Siebenrockiella_crassicollis/Siebenrockiella_crassicollis_thumbnail.jpg": "49bacf6c9ab6aca1b7af7e9951ebcb70",
"assets/images/reference_images/Mauremys_sinensis/Mauremys_sinensis_thumbnail.jpg": "ce6b66a70a1a6a49b6726e95fc201021",
"assets/images/reference_images/Cuora_bourreti/Cuora_bourreti_thumbnail.jpg": "0fdd6f6e07573b8c4de0a6369d835421",
"assets/images/reference_images/Heosemys_grandis/Heosemys_grandis_thumbnail.jpg": "100fef9f354177488176ae88e7881687",
"assets/images/reference_images/Manouria_impressa/Manouria_impressa_thumbnail.jpg": "bbd428093d60d788159c5e9d46623b1b",
"assets/images/icons/logo.png": "15ae18f81456b625b5d0bf084fcb13a6",
"assets/images/placeholder-image.jpeg": "8865f01b09e3902c0a7c342fa11a0234",
"assets/AssetManifest.json": "43ab934c785a168828122e121634870d",
"assets/content/sample_api.json": "70fee31e0bafd5c67835bfa61c287aca",
"assets/content/faq_vi.json": "f2c229ac7d4b7b3638e4a2716c147b65",
"assets/content/about_us_vi.md": "0fa7f93ee99cdce462cd8454a7f92bbf",
"assets/content/species_info_vi.json": "e710268be0cd3c31775e03ed7b196d79",
"assets/content/faq_en.json": "27e1215e0e19f44d52391e0106b3f609",
"assets/content/laws.json": "a5d1d1815a26308c4cdb2a952ad1d622",
"assets/content/about_us_en.md": "2ad9df175daf2a3ffc771ad67337e6b2",
"assets/content/species_info_en.json": "520538cc760bb5cbd375c13cbb093002",
"assets/NOTICES": "5646ad0920cf3e16cce9ad2fb3149645",
"assets/FontManifest.json": "bf436384b828ee915a34d6123d1d189f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "2a792b62946f0880044e208d75a50a48",
"assets/fonts/HappyMonkey-Regular.ttf": "e97d8141e3bb9967f810609fc4860ada",
"assets/fonts/MaterialIcons-Regular.otf": "6f4aee771d7f657f613424b55dbc6d9d",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
