document.querySelector(".elementor-button-content-wrapper").addEventListener("click", function () {
	var name = document.getElementById("form-field-name").value;
	var phone = document.getElementById("form-field-phone").value;
	var email = document.getElementById("form-field-field_c7ee0d9").value;
	var message = document.getElementById("form-field-message").value;

	if (!(name && phone && email)) {
		console.error("Missing required fields");
		return;
	}

	try {
		__ctm.form.track(
			"app.calltrackingmetrics.com", // the capture host
			"FRT472ABB2C5B9B141A475167AF4EFD5DFBCDF0394CA8BD8B5A479208D2FA57294E", // this FormReactor
			"5204929499",
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
