'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "21f19a576fb81b7bf55d36c538e88dab",
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
"assets/LICENSE": "6ce1e594707fabbae91dd347018c0ce7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "fc1a19916789b5f016606e19d102b495",
"/": "fc1a19916789b5f016606e19d102b495",
"main.dart.js": "75c61430b5c8fcc4cec8866ecaa02860",
"manifest.json": "34ce20b934ade9c43d4c1a9140614d9b"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
