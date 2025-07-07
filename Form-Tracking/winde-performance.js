document.querySelector("form[name='New Form']").addEventListener("submit", function () {
	var name = document.getElementById("form-field-name").value;
	var email = document.getElementById("form-field-email").value;
	var phone = document.getElementById("form-field-field_05ad2af").value;
	var message = document.getElementById("form-field-message").value;

	if (!(name && phone && email)) {
		console.error("Missing required fields");
		return;
	}

	try {
		__ctm.form.track(
			"app.calltrackingmetrics.com", // the capture host
			"FRT472ABB2C5B9B141A024D8A667F096C33D15DCA897CF056702FBDF64FC2788CF5", // this FormReactor
			"2692933107",
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
