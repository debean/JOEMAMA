function vote() {
	const quest = confirm("Do you want to go the gogle form?")

	if (quest == true) {
		alert("Ok. Going to form. Be prepared")
		document.location = "https://forms.gle/hVwonzsXXKSHAG968"
	}
}

function blancstore() {
	const quest = confirm("Do you want to go blancstore?")

	if (quest == true) {
		alert("Ok. Going to blancstore. Be prepared")
		document.location = "https://blanstore.imibuks.repl.co"
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
