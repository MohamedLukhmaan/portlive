'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "009c9e65172e010890f7f65fde438006",
"splash/img/dark-1x.gif": "01aa59228c9c8cc29a909412bbdf2485",
"splash/img/light-1x.gif": "01aa59228c9c8cc29a909412bbdf2485",
"splash/img/light-2x.gif": "b8ba011a0424004cbaed449fc1387ddf",
"splash/img/dark-4x.gif": "76a6e163c490fc2d3d6992c925b96dda",
"splash/img/light-3x.gif": "ed86e43717e4459a33df8e3b89953d9d",
"splash/img/dark-3x.gif": "ed86e43717e4459a33df8e3b89953d9d",
"splash/img/light-4x.gif": "76a6e163c490fc2d3d6992c925b96dda",
"splash/img/dark-2x.gif": "b8ba011a0424004cbaed449fc1387ddf",
"index.html": "ccd783c9124e41ed3d4c80bb61388fc3",
"/": "ccd783c9124e41ed3d4c80bb61388fc3",
"main.dart.js": "0dbcb4f0d12356fe46d1b3065e720d3d",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "6bce31871d83b8edb3e7b7aef5f03716",
"icons/Icon-192.png": "ad8d641432b6a007f121489349385e63",
"icons/Icon-maskable-192.png": "ae530a262f9982965baa3fa48dae18ff",
"icons/Icon-maskable-512.png": "10b7992e46d2f7fb3a54b0763ccd8ec7",
"icons/Icon-512.png": "7f0a2f7129a2b0ce4ffd5079bf9e6464",
"manifest.json": "ed8cb14dda757c0caef000fa1961b1f3",
"assets/AssetManifest.json": "77f66eef68a772296b2c9b1eeff42e40",
"assets/NOTICES": "664f7609db64767e7f850568c899835e",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "04aadcd687ad3c1c62d6f20e102a2cd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "227c02552ec25bf010ade6bcbcdec4ae",
"assets/fonts/MaterialIcons-Regular.otf": "7bdd2ce18c8cff85c13c4163f08f73e6",
"assets/assets/images/splash.gif": "3ec03a0b5d35fde72a39eb1dfb5f8cc6",
"assets/assets/images/xcode.png": "706cbc3da0c58e932d797d51d9ae03f9",
"assets/assets/images/dashboard.png": "67fc688d0c4ec106de9dbf6cd25fb59c",
"assets/assets/images/git.png": "76f6e2fda69a701e205f6b694f57ea86",
"assets/assets/images/experience.jpg": "e9bb6dfa5c7b1eff1bade94aa20e06a5",
"assets/assets/images/groupAttendance.png": "7aad40bec8de2295ab014d8b64a72b43",
"assets/assets/images/consumer.png": "94f0b97bdd985924154fc00e331b193d",
"assets/assets/images/flutter.svg": "9a6e81be6ff5b09956f4f85fe1f0a89f",
"assets/assets/images/nanoTracker.png": "e8d67ac46259b85c250d5407fccf9811",
"assets/assets/images/firebase.png": "dae7f44af6bf5c3f4b6eeb4d65eb2bde",
"assets/assets/images/js.png": "41877a16bb3c413c3f43cb91f7c4e404",
"assets/assets/images/alagapa-logo.png": "2880f87da7e8fd94157bedefbe8e741d",
"assets/assets/images/nanosoft.png": "dc7147734279ef7f10e780734da0951d",
"assets/assets/images/figma.png": "ad64f0f4d2b1ef94ca2e7e9540cfb1fb",
"assets/assets/images/vsCode.png": "915f1febee00b50adc1c540ca6f0d1f3",
"assets/assets/images/man.jpg": "65aed749ee190dec5f4bd27b22daf84a",
"assets/assets/images/back3.jpg": "a9f9f4605346f241d702c7b7cd1f464d",
"assets/assets/images/xceed.svg": "518a37b3c6f9c25d90c70ee2238e6d3d",
"assets/assets/images/back1.jpg": "96d16decd052575196ca4e1efa06a5fb",
"assets/assets/images/cah-logo.png": "31f8c8dc6ec09c133d2a7274a2c5e9cf",
"assets/assets/images/graduate.jpg": "1a5f9b32beb37043f22b4145caf4824a",
"assets/assets/images/logo.png": "6bce31871d83b8edb3e7b7aef5f03716",
"assets/assets/images/html.png": "c39c239ee189747106cb001337d97a5f",
"assets/assets/images/back4.png": "883d8fec5f8e8ccdbfbac111d215ee26",
"assets/assets/images/postman.png": "ef6d8855aba6f5b2b9b7190f76446e2f",
"assets/assets/images/playstore.svg": "bd8f2843df647e82df054df459b65bb1",
"assets/assets/images/androidStudio.svg": "dab0217380317370b1ff0971e5973cfb",
"assets/assets/images/profile.svg": "c2cbe9e524d0aeb9adfd20000e085bed",
"assets/assets/images/react.svg": "a03a8833e53dfa6c581691d24c25557f",
"assets/assets/images/app-store_5977575.svg": "32a5c1418572ff1a3d293eddc10c2a8b",
"assets/assets/images/css.png": "e477d001a13005d2f7911a169c59d588",
"assets/assets/images/dart.png": "80e0cfaf4e39a2700665ae5762d76645",
"assets/assets/images/flutterFlow.png": "b217dbbf8c5cb17e76b1e959c4d554ad",
"assets/assets/images/technician.png": "36fcca12173e7cfc48839aab18d6e979",
"assets/assets/pdf/resume.pdf": "b6100d89da31c794e79402b3301c5adb",
"assets/assets/icons/resume.svg": "7b7c7d07082d11ea0cf58029da14f9bd",
"assets/assets/icons/appDeploy.svg": "ed7b19168ef5e7131eb882a199497f8b",
"assets/assets/icons/user.svg": "7de5e5f7d3fbd734c8d9328cc6806365",
"assets/assets/icons/brain_7576758.svg": "a834f144358272d040b62fa34f47aebc",
"assets/assets/icons/github.svg": "1f33e75d7b7df995b1609f8573ac8c9b",
"assets/assets/icons/hobbie.svg": "5de773d42119d0b541688d9be0b1457a",
"assets/assets/icons/mail.svg": "932e1e20cf574d9c3798deebdd34616b",
"assets/assets/icons/goal.svg": "e21a2a78387addc7be8a8a10c6537471",
"assets/assets/icons/nationality.svg": "907f3c605d4c7535a0e86a21d5f5eac3",
"assets/assets/icons/gender.svg": "909df6efbb2bb68e5b120060264b3cd2",
"assets/assets/icons/language.svg": "1179f2e799b5f5743e3923b2d31a00c1",
"assets/assets/icons/location.svg": "6b59dbf15188e182860802ca41cc2c6d",
"assets/assets/icons/linkedin.svg": "338f8f0a73cb7700c055cfb68803259d",
"assets/assets/icons/discord.svg": "d3a06c733379f3d8dc0c10f4ed2f71b7",
"assets/assets/icons/birthday.svg": "8abccabd7ef12d761c5a950c4643986d",
"assets/assets/lottie/back1.json": "b2b2c3505d91bdd22840c817a742a092",
"assets/assets/lottie/back4.json": "349349ba0a4339da128c7b629f537152",
"assets/assets/lottie/back5.json": "5ab2ea279409c607b083e1edafd03ef1",
"assets/assets/lottie/back2.json": "ab10392eb9976adece47469bc0f465ef",
"assets/assets/lottie/back3.json": "6fe622cc5ae8b5a9af4ba8de5d690051",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
