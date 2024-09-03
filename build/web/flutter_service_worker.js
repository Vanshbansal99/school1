'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "af87269f4780cf5871a95385f3609b2b",
"version.json": "9b5d7d3e2de12bbb5672f234d4cba135",
"index.html": "cb2dd2afc47db078de0f0a9e0d5f359e",
"/": "cb2dd2afc47db078de0f0a9e0d5f359e",
"main.dart.js": "5596edf6267fa679f2985dde5a2da127",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f158b291c3e505b1e4fcea2d8f820b63",
"assets/AssetManifest.json": "b569c49a1c809d27050d13a65c92e836",
"assets/NOTICES": "ae41ea2e645699fda4e4789a0e341ea5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "31782ffc234a14a252ab64e1ef2d8aa7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ef1f5384f8a94baa2b1bbd4355732f19",
"assets/fonts/MaterialIcons-Regular.otf": "adbda7fddc54c32668cf429a80e5ff60",
"assets/assets/images/robokit.png": "39b7b80219fdafdf7d7e2a0059c241de",
"assets/assets/images/GPS_Sensor_module2.png": "0fef946e88011ec69813da32161927d9",
"assets/assets/images/image%2520(2).png": "e77cdec628220118b090d485ff5d8463",
"assets/assets/images/IR_Sensor_module.png": "00c3cb34491e203c2d5206f2db9026f0",
"assets/assets/images/inspeed.png": "3605053ceb084bed2b893f04c674e6c1",
"assets/assets/images/16x2_LCD.png": "0534e3debb47dedd50bc4fe44b9829bc",
"assets/assets/images/Raindrop_Sensor_module.png": "ae249e6f140bfc79320ff6c4457532a0",
"assets/assets/images/Raindrop_Sensor_module2.png": "500f4e4b3d7f1e67f7d51f5dc8c22e28",
"assets/assets/images/instep.png": "4db3ddf033068fb907c82a6a67b37581",
"assets/assets/images/SG90_Servo_Motor.png": "280624888a231b63696e70a843a87644",
"assets/assets/images/Water_level_Sensor_module2.png": "41f76dcbad7810713e70d4096688f753",
"assets/assets/images/USB_Cable_&_Jumper_wire.png": "23dcb11767168512b7cc1aed69e3dd16",
"assets/assets/images/awadh_logo_super_new%2520copy.png": "a5f1a93e200079cda227b2b213ca487b",
"assets/assets/images/Wheel.png": "adca8b7c44ccf3aaf87fa3c0b8fc3846",
"assets/assets/images/acc.png": "9bd23159917a13bd4250ccb472eb29d8",
"assets/assets/images/speed.png": "db84a9aadd25362979ca620977e4d8d1",
"assets/assets/images/step.png": "551ee8c7d422692bd52500a2e3ff8b6c",
"assets/assets/images/12v_Battery.png": "f75a6c95387f05556bf1c7f2d0d3b7a9",
"assets/assets/images/6.jpeg": "3d121aedb6d6d7da608a1d4d46bdd825",
"assets/assets/images/Bluetooth_module2.png": "f1af93241b2bc22055b11d38e7269767",
"assets/assets/images/mobile2.png": "ff6f469ebd3111a60ca24067f8b30b9a",
"assets/assets/images/7.jpeg": "51a996ec3d82fb1922e943e74a22ce63",
"assets/assets/images/distance.png": "1709ad626b7d4cb02535434a57a926fe",
"assets/assets/images/Hall_effect_sensor_module2.png": "ab036b873a49bc0db37c3b5de575c7ad",
"assets/assets/images/robo.jpg": "308d596e742d8ac0e1be77f01c48f48a",
"assets/assets/images/robobg.png": "e87f7d1c4a883678f78887ff64bfac5b",
"assets/assets/images/sensor.png": "ba019bf0d50e3272e947e5faeab02031",
"assets/assets/images/sg.png": "3f3c38bb1bcc7107c4ec0493c6ea8156",
"assets/assets/images/16x2_LCD2.png": "74333ca4bac2297d38145eb2225609cb",
"assets/assets/images/pastel_bg_sensor.png": "da529b836a3e51b6db67eae404517e17",
"assets/assets/images/Water_pump_with_pipe.png": "3ff0d65684630291bafe7519a6c5c667",
"assets/assets/images/awadh_logo_super_new.png": "a5f1a93e200079cda227b2b213ca487b",
"assets/assets/images/micro2.png": "7b966ca3ac6d65cb7086ac85c80355dd",
"assets/assets/images/IR_Sensor_module2.png": "77704f0924bfb5da6609aa7618b63690",
"assets/assets/images/Car_Chassis.png": "a67f780aab156b61c9ef05d6c89cdb6d",
"assets/assets/images/micro.png": "db8904108ba6c9c83297d9fa2a2e4b1f",
"assets/assets/images/DC_motor2.png": "f288e28af1bd7ac7242a2cc7205cb8c7",
"assets/assets/images/4.jpeg": "03ad8c8446829371f5a65ade0d4e5dfc",
"assets/assets/images/iot.jpg": "c9968aaa6d770071b9f1732633caa099",
"assets/assets/images/Car_Chassis2.png": "ced5183c00575c13d67805028d89b075",
"assets/assets/images/img1.jpeg": "4f23bc60249afa8b3076f2d15c6d279c",
"assets/assets/images/img2.png": "5c3f1e6962fba6f673b625dbd7092afd",
"assets/assets/images/bg1.jpg": "bed0517063f0e2b887b89cb810052032",
"assets/assets/images/Awadh_logo_New-removebg-preview.png": "85d0ff32c81ba89783df572202ccb006",
"assets/assets/images/DC_motor.png": "ab28e62736c2b12a8a90d1db07433ebd",
"assets/assets/images/mobile.png": "85602b0b971a6567febd866c4d2e3db6",
"assets/assets/images/2.jpeg": "3782357e54e88d87ebbe908ec709cc2b",
"assets/assets/images/Hall_effect_sensor_module.png": "abe762b7e11453f3f3d81e5ff970a9fd",
"assets/assets/images/Water_pump_with_pipe2.png": "723c637050cee2a6deb317c1f241b33c",
"assets/assets/images/awadhlogo.png": "6d6b64421d1b4a04c1d5c30a14e66161",
"assets/assets/images/Water_level_Sensor_module.png": "5d8170837c52f3e3e5fc0ed51a089a6e",
"assets/assets/images/Ultrasonic_Sensor_Module2.png": "a991d5819ed48d705f1a4c8b5cfd1ceb",
"assets/assets/images/12v_Battery2.png": "18f669d2fe81dce9efd9cc7941e4c99f",
"assets/assets/images/USB_Cable___Jumper_wire2.png": "c7613ad72ce98d28fafa347a43477364",
"assets/assets/images/GPS_Sensor_module.png": "0eb16f98ee7f49f7771a83ea5b72a986",
"assets/assets/images/bg_for_CPS_tutorials.png": "447c101d00c1fe4c7efb5d1681de3765",
"assets/assets/images/Wheel1.png": "2894333bf4ac8cd6c3870d4dbb1be506",
"assets/assets/images/2.png": "2e830be3fbd297ce80a6a40ced40c4c0",
"assets/assets/images/Awadh.PNG": "32ab471f28a99a8af46e91dc7c3ff5a7",
"assets/assets/images/inacc.png": "2ca14ec26061f15278bd12bab0dcf2f4",
"assets/assets/images/awadh_banner.jpeg": "ebf77306f5a0d839380a7269de3f4b2f",
"assets/assets/images/WhatsApp%2520Image%25202024-08-26%2520at%252012.13.08.jpeg": "9b410f5c7809f6b72b3fe48d8e971322",
"assets/assets/images/image%2520(1).png": "b65c1a92cd3a13494fccdfd7a4a62e25",
"assets/assets/images/3.jpeg": "da172aa133eb22931b34a90f7880d061",
"assets/assets/images/Bluetooth_module.png": "46e8a5794f5d87ae9f171bdd716f660f",
"assets/assets/images/Ultrasonic_Sensor_Module.png": "b6c3f645cd52f630015858c3bd56399c",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
