'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b20f941231b88af51a336ec27cf43255",
"assets/AssetManifest.bin.json": "2bb3ac22727198c59f57fb3446e01e1f",
"assets/AssetManifest.json": "ee4e4a4b1711a1624557e9ca7c255b79",
"assets/assets/images/affiche_attack-on-titan.jpg": "b767f25d645482f0bd6cfa5036a9591a",
"assets/assets/images/affiche_bleach.jpg": "9a047fe7f60bfbe1d300f437da01209b",
"assets/assets/images/affiche_demon-slayer-s3.jpg": "4ac25099a50a28ca1b74d38724ff0869",
"assets/assets/images/affiche_mha.jpg": "314f7f7c976fc8004af004c4b5f06fa8",
"assets/assets/images/affiche_my-hero-academia.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/affiche_naruto.jpg": "84e84d35a52297a5a927bc5ff74b04e1",
"assets/assets/images/affiche_one-piece-s10.jpg": "1f5992bffe87d34c8b9a7a086aeb5db9",
"assets/assets/images/affiche_tokyo-revengers-s1.jpg": "50ae1331d975668146070f74e21ac21a",
"assets/assets/images/affiche_tokyo-revengers.jpg": "c1ab2fa897b35ab87b232014a6f804d3",
"assets/assets/images/aot.jpg": "bf4d60be8f5fa635268b4b7bad4a6623",
"assets/assets/images/app_icon.png": "b70531305cbc75d4358678b0e8aed59e",
"assets/assets/images/app_icon_resized.png": "876680bf8b0e28908f4bebd57120711b",
"assets/assets/images/bleach.jpg": "581bce81110c94ec6fff418b8f7cf1dd",
"assets/assets/images/burger.png": "16c7bb64804c8d76b58040e8cb0aec0c",
"assets/assets/images/carouselle_mha.jpg": "a981e50b278ff71ec6e96d1e73c78fd8",
"assets/assets/images/carousselle-attack-on-titan.jpg": "1eee29844002106e3db6ef4623664426",
"assets/assets/images/carousselle-bleach.jpg": "728770e51d796b1c224d40219a953b5a",
"assets/assets/images/carousselle-demon-slayer.png": "88c6119f0500ef5183f8cff8f003b3a7",
"assets/assets/images/carousselle-my-hero-academia.jpg": "bacb483d238ed85dfa0461622a3a4e36",
"assets/assets/images/carousselle-naruto.jpg": "2a578d882ce612bb55e8e2837fd78bab",
"assets/assets/images/carousselle-one-piece.png": "eacb919a09decc69d52275aa0554c2d4",
"assets/assets/images/carousselle-tokyo-revengers.png": "2407cdc615aa90488c0b0507ffd64fd9",
"assets/assets/images/demonslayers.jpg": "c0987773cbf5b91cdf0bb30a2f619790",
"assets/assets/images/erased.jpg": "aa3ff3fb338e2bbccc020fab8489228d",
"assets/assets/images/event1.jpg": "a4dcef446cfcebc9ef64e67e4e5030bb",
"assets/assets/images/event2.jpg": "001dbee6b5d22b4ba19679c485386ac9",
"assets/assets/images/event3.jpg": "37dcb8255b8f80af2e143c15a11c52b6",
"assets/assets/images/ft.jpg": "64334aec5f5e22a39c9c10a852f0d567",
"assets/assets/images/hunterxhunter.jpg": "8a4b2a7686c65aab8dc17c2de88f569b",
"assets/assets/images/img.png": "3b9c953e9630ef7056478dac35afbc13",
"assets/assets/images/mha.jpg": "d78d5db76639a3e7d32b5c7cee9c14e6",
"assets/assets/images/naruto.jpg": "536e898f2bfb27f3e5043824387f3e18",
"assets/assets/images/vf.png": "477cb6d5c4e5e87906df0f898edc087a",
"assets/assets/images/vo.png": "7401e8fdffaf2f2fd57ed09d76efaca0",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "9913b5017e232e707e4f6f1ef6d976c6",
"assets/NOTICES": "3d9ed5e475a4125797dca8089be52d24",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "f93a13bbccf60e586ef2d2d644fa1063",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6b74f55e5d4c996cc505b7e1916ab05e",
"/": "6b74f55e5d4c996cc505b7e1916ab05e",
"main.dart.js": "a417a0bfb456304c7467029018029989",
"manifest.json": "39922efa47cda4a876d53579cfd20229",
"version.json": "28fe9a069dde0d0c3c1df54bfc25d84b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
