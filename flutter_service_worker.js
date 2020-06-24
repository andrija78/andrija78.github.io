'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "147e5193f384b38888d6b43fa6a3cd7f",
"assets/assets/back-r.jpg": "52a184995093bf66be65c8af9aa1ceb7",
"assets/assets/back.jpg": "bc94f9b0b6af033fca94447afc30bb0b",
"assets/assets/BACK_BACK.jpg": "bc94f9b0b6af033fca94447afc30bb0b",
"assets/assets/BASTONE_AS.jpg": "c0dc416c343815ce7419fb5e22cbee1f",
"assets/assets/BASTONE_CETVORINA.jpg": "cd31e4ee3df442c8153ff5c9fda0253f",
"assets/assets/BASTONE_DUJA.jpg": "2b1644d83ad8d34e88a974ddb65c22d2",
"assets/assets/BASTONE_FANAT.jpg": "019ee07fec4e24e199e0151f5a29f408",
"assets/assets/BASTONE_KONJ.jpg": "94403138da22d0a8d134802385bb9b72",
"assets/assets/BASTONE_KRALJ.jpg": "c96343e39c6739e71c99e0bf6a8fa69c",
"assets/assets/BASTONE_PETINA.jpg": "06c1dd030854d7f0fc791de24d811891",
"assets/assets/BASTONE_SEDMINA.jpg": "447748deab088a9205c122cbd6ab2219",
"assets/assets/BASTONE_SESTINA.jpg": "2e67f4996f0e838524c6d3be59c72897",
"assets/assets/BASTONE_TRICA.jpg": "8a81e557cefac01860a3a34198764002",
"assets/assets/BLANK_BLANK.jpg": "bc94f9b0b6af033fca94447afc30bb0b",
"assets/assets/DINARE_AS.jpg": "88beb88acbe26b5a229db635901efbdd",
"assets/assets/DINARE_CETVORINA.jpg": "b2e46a4ed941bd1cf8c41bebebfe720f",
"assets/assets/DINARE_DUJA.jpg": "08a0d5554c585d8fd575f267b3e6c9e2",
"assets/assets/DINARE_FANAT.jpg": "f05d636a42a0452eecd4449fac7c8833",
"assets/assets/DINARE_KONJ.jpg": "9713cb7cffcc87e6338b100519bb6575",
"assets/assets/DINARE_KRALJ.jpg": "9f959dbf6b9c20257ed30a0964018ebd",
"assets/assets/DINARE_PETINA.jpg": "7b603b167b034505d27559e03807d202",
"assets/assets/DINARE_SEDMINA.jpg": "7a3fa827d710f6f01fb0ffe39f5acdc1",
"assets/assets/DINARE_SESTINA.jpg": "ba09ebab948b6869580f83fe99f48e2e",
"assets/assets/DINARE_TRICA.jpg": "72601dee7af287b75771084fb4289896",
"assets/assets/KUPE_AS.jpg": "0282139f420bf961c3bf31e81d33bbe2",
"assets/assets/KUPE_CETVORINA.jpg": "1fd81cee8d226dfc0f4f657c1d7910fd",
"assets/assets/KUPE_DUJA.jpg": "865e32104388072efb1848cb98662597",
"assets/assets/KUPE_FANAT.jpg": "ffe5c5985109d40cd9480254801fe727",
"assets/assets/KUPE_KONJ.jpg": "f0bbf94fea71d637aea92d3efdc33037",
"assets/assets/KUPE_KRALJ.jpg": "0bbc62d848e15490c53559509d615b55",
"assets/assets/KUPE_PETINA.jpg": "c6a60060a90b2d36ba9b635ec3ba2ac0",
"assets/assets/KUPE_SEDMINA.jpg": "d12d2c6ad755905346e85d427e8078f6",
"assets/assets/KUPE_SESTINA.jpg": "0a12818556b2c2fe827bb499cb95afdb",
"assets/assets/KUPE_TRICA.jpg": "355d4140c793ee7f8d1c129356bee8cf",
"assets/assets/SPADE_AS.jpg": "33bbd2a9660477d870cf093731c68bc8",
"assets/assets/SPADE_CETVORINA.jpg": "fbae808345f3a855e20efd00de9b8e1e",
"assets/assets/SPADE_DUJA.jpg": "9c209e3b1aa7f52c4c5665ec8338f881",
"assets/assets/SPADE_FANAT.jpg": "fd1b1b911d0e9757308b84a43436e659",
"assets/assets/SPADE_KONJ.jpg": "12f27076c61bf61a3d72df1fc3ec7fb7",
"assets/assets/SPADE_KRALJ.jpg": "23041b5d2765576d0b28541ddebfa39e",
"assets/assets/SPADE_PETINA.jpg": "9b8edd39b8c914002f564bfc009560c3",
"assets/assets/SPADE_SEDMINA.jpg": "8f388e2655fff4a66a279f99db7f99ae",
"assets/assets/SPADE_SESTINA.jpg": "876a41c3a0cff03a24595b6d522cdad1",
"assets/assets/SPADE_TRICA.jpg": "61270b986dd2678a79b6f980c3c36ac0",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/NOTICES": "14bfe7993183dd44bb1b1953042759e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "fc1a19916789b5f016606e19d102b495",
"/": "fc1a19916789b5f016606e19d102b495",
"main.dart.js": "536194e6346cb93985f4056ed0dcf4ba",
"manifest.json": "34ce20b934ade9c43d4c1a9140614d9b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.add(resourceKey);
    }
  }
  return Cache.addAll(resources);
}
