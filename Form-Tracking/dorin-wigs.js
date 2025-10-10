function handleButtonClick() {
	var formEmbed = document.querySelector("form-embed");

	if (formEmbed && formEmbed.shadowRoot) {
		var shadowRoot = formEmbed.shadowRoot;
		var submitButton = shadowRoot.querySelector("button[type='submit']");

		if (submitButton) {
			submitButton.addEventListener("click", function () {
				var name = document.getElementById("first_name").value;
				var email = document.getElementById("email").value;
				var phone = document.getElementById("phone_number").value;
				var message = document.querySelector("textarea[name='custom#message']").value;

				if (!(name && phone && email && message)) {
					console.error("Missing required fields");
					return;
				}

				try {
					__ctm.form.track(
						"app.calltrackingmetrics.com", // the capture host
						"FRT472ABB2C5B9B141A164A41524E8C2A43A63AF12BF7FFDD904205F0969E347471", // this FormReactor
						"9549511202",
						{
							country_code: "1", // the expected country code e.g. +1, +44, +55, +61, etc... the plus is excluded
							name: name,
							phone: phone,
							email: email,
							custom: {
								message: message,
							},
						}
					);
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
