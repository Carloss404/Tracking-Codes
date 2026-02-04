(function () {
	document.querySelectorAll("a[href^='tel:']").forEach(function (phoneLink) {
		var href = phoneLink.getAttribute("href");

		var rawNumber = decodeURIComponent(href.replace("tel:", ""));

		var formattedNumber = rawNumber.replace(/[^\d+]/g, "").replace(/(?!^)\+/g, "");

		if (formattedNumber) {
			phoneLink.setAttribute("href", "tel:" + formattedNumber);
		}
	});
})();
