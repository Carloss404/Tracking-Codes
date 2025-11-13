(function () {
	var body = document.body;
	if (!body) {
		console.error("Body not found");
		return;
	}

	var regexPatterns = [/(US Cell \s*)([\d\-().\s]{10,})/g, /([\d\-().\s]{10,})/g];

	regexPatterns.forEach(function (pattern) {
		body.innerHTML = body.innerHTML.replace(pattern, function (_, prefix, phoneNumber) {
			var telLink = phoneNumber.replace(/[^\d]/g, "");

			var linkElement = '<a href="tel:' + telLink + '">' + phoneNumber + "</a>";

			return prefix + linkElement;
		});
	});
})();

(function () {
	var rootElement = document.body;
	if (!rootElement) {
		return;
	}

	function walk(node) {
		if (
			node.nodeType === 1 &&
			node.nodeName !== "SCRIPT" &&
			node.nodeName !== "STYLE" &&
			node.nodeName !== "A"
		) {
			var childNodes = Array.prototype.slice.call(node.childNodes);
			for (var i = 0; i < childNodes.length; i++) {
				walk(childNodes[i]);
			}
		} else if (node.nodeType === 3) {
			var text = node.nodeValue;
			var phoneNumberRegex = /((?:\(\d{3}\)|\d{3})[\s\-.]?\d{3}[\s\-.]?\d{4})/g;

			if (phoneNumberRegex.test(text)) {
				var fragment = document.createDocumentFragment();
				var lastIndex = 0;
				var match;

				phoneNumberRegex.lastIndex = 0;

				while ((match = phoneNumberRegex.exec(text)) !== null) {
					fragment.appendChild(document.createTextNode(text.substring(lastIndex, match.index)));

					var a = document.createElement("a");
					var phoneNumber = match[0];
					a.href = "tel:" + phoneNumber.replace(/[^\d]/g, "");
					a.appendChild(document.createTextNode(phoneNumber));
					a.className = "yellow";
					fragment.appendChild(a);

					lastIndex = phoneNumberRegex.lastIndex;
				}

				fragment.appendChild(document.createTextNode(text.substring(lastIndex)));

				node.parentNode.replaceChild(fragment, node);
			}
		}
	}

	walk(rootElement);
})();
