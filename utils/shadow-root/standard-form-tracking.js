function handleButtonClick() {
	var formEmbed = document.querySelector("form-embed");

	if (formEmbed && formEmbed.shadowRoot) {
		var shadowRoot = formEmbed.shadowRoot;
		var submitButton = shadowRoot.querySelector("button[type='submit']");

		if (submitButton) {
			submitButton.addEventListener("click", function () {
				var name = shadowRoot.getElementById("first_name").value;
				var email = shadowRoot.getElementById("email").value;
				var phone = shadowRoot.getElementById("phone_number").value;
				var message = shadowRoot.querySelector("textarea[name='custom#message']").value;

				if (!(name && phone && email && message)) {
					console.error("Missing required fields");
					return;
				}

				try {
					window.dataLayer = window.dataLayer || [];
					window.dataLayer.push({
						event: "contact-form-submit",
						name: name,
						phone: phone,
						email: email,
						message: message,
					});
				} catch (error) {
					console.error("Error tracking form submission:", error);
				}
			});
			return true;
		}
	}

	return false;
}

var maxAttempts = 30;
var attempts = 0;
var interval = setInterval(function () {
	if (handleButtonClick() || attempts >= maxAttempts) {
		clearInterval(interval);
	}
	attempts++;
}, 100);
