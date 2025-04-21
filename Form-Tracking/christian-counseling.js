var form = document.getElementById("fluentform_1");

form.addEventListener("submit", function () {
	var name = document.getElementById("ff_1_input_text_1").value;
	var phone = document.getElementById("ff_1_phone").value;
	var email = document.getElementById("ff_1_email").value;
	var message = document.getElementById("ff_1_message").value;

	if (name && phone && email && message) {
		try {
			__ctm.form.track(
				"app.calltrackingmetrics.com", // the capture host
				"FRT472ABB2C5B9B141A4D9BEFC449077C902FF44FCAD66255F20D2BD98C0CF94059", // this FormReactor
				"7243846082",
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
	}
});
