function download() {
	const quest = confirm("Do you want to go the download the unstable, broken APK")

	if (quest == true) {
		alert("Ok. Going to downloads. Be prepared for a buggy bad experience.")
		document.location = "https://github.com/debean/debean.github.io/releases/download/apk-test/The.Bean.apk"
	}
}

function blog() {
	const quest = confirm("Do you want to go the bean news?")

	if (quest == true) {
		alert("Ok. Going to news. Be prepared")
		document.location = "https://debeans.blogspot.com/"
	}
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}
