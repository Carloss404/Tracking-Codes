(function () {
	var phoneRegex = /(Call Us:\s*)([\d\-().\s]{10,})/;

	var paragraphs = document.querySelectorAll("p");

	for (var i = 0; i < paragraphs.length; i++) {
		var p = paragraphs[i];

		if (phoneRegex.test(p.innerHTML)) {
			p.innerHTML = p.innerHTML.replace(phoneRegex, function (fullMatch, prefix, phoneNumber) {
				var telLink = phoneNumber.replace(/[^\d]/g, "");

				var linkElement = '<a href="tel:' + telLink + '">' + phoneNumber + "</a>";

				return prefix + linkElement;
			});

			break;
		}
	}
})();
