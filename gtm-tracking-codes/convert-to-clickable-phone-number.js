(function () {
	var body = document.body;
	if (!body) {
		console.error("Body not found");
		return;
	}

	var regexPatterns = [/(Call us at\s*)([\d\-().\s]{10,})/g, /(Call\s*)([\d\-().\s]{10,})/g];

	regexPatterns.forEach(function (pattern) {
		body.innerHTML = body.innerHTML.replace(pattern, function (_, prefix, phoneNumber) {
			var telLink = phoneNumber.replace(/[^\d]/g, "");

			var linkElement = '<a href="tel:' + telLink + '">' + phoneNumber + "</a>";

			return prefix + linkElement;
		});
	});
})();
