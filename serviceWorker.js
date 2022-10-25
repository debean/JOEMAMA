const staticBean = "the-bean-homepage-v3"
const assets = [
	"/",
	"/index.html",
	"/style.css",
	"/script.js",
	"/android",
	"/ios",
	"/windows11"
]

self.addEventListener("install", installEvent => {
	installEvent.waitUntil(
		caches.open(staticBean).then(cache => {
			cache.addAll(assets)
		})
	)
})

self.addEventListener("fetch", fetchEvent => {
	fetchEvent.respondWith(
		caches.match(fetchEvent.request).then(res => {
			return res || fetch(fetchEvent.request)
		})
	)
})
