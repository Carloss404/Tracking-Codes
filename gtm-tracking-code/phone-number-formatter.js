(function () {
	var phoneLink = document.querySelector("a.elementor-button[href^='tel:']");

	if (phoneLink) {
		var currentHref = phoneLink.getAttribute("href");

		var decodedNumber = decodeURIComponent(currentHref.substring(4));

		var cleanNumber = decodedNumber.replace(/\D/g, "");

		if (cleanNumber) {
			phoneLink.setAttribute("href", "tel:" + cleanNumber);
		}
	}
})();
