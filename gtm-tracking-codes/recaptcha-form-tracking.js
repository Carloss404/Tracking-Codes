(function () {
	var allForms = document.querySelectorAll("form[name='New Form'], form[name='Request a Quote!']");

	function handleFormSubmit() {
		var recaptchaElement = document.getElementById("g-recaptcha-response");

		var recaptchaToken = (recaptchaElement && recaptchaElement.value) || "";

		if (recaptchaToken) {
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				event: "form-submission",
			});
		} else {
			console.error("Form submission blocked: reCAPTCHA not completed.");
		}
	}

	allForms.forEach(function (form) {
		form.addEventListener("submit", handleFormSubmit);
	});
})();
