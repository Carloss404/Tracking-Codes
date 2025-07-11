setTimeout(function () {
	if (window.__ctm) {
		__ctm.main.runNow();
	}
}, 3000);

var lastUrl = location.href;

function checkUrlAndRunCtm() {
	var currentUrl = location.href;

	if (currentUrl !== lastUrl) {
		lastUrl = currentUrl;

		if (window.__ctm) {
			__ctm.main.runNow();
		}
	}
}

setInterval(checkUrlAndRunCtm, 500);
