document.getElementById("nf-field-4").addEventListener("click", function () {
	var firstName = document.getElementById("nf-field-1").value;
	var lastName = document.getElementById("nf-field-35").value;
	var name = firstName + " " + lastName;

	var email = document.getElementById("nf-field-2").value;
	var phone = document.getElementById("nf-field-37").value;
	var message = document.getElementById("nf-field-3").value;

	if (!(name && phone && email)) {
		console.error("Missing required fields");
		return;
	}

	try {
		__ctm.form.track(
			"app.calltrackingmetrics.com", // the capture host
			"FRT472ABB2C5B9B141ADA625CBC5ECC897566E7F72ABDF2F140979114F88FEED954", // this FormReactor
			"8446562503",
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
