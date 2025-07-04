document.getElementById("gform_submit_button_1").addEventListener("click", function () {
	var name = document.getElementById("input_1_1_3").value;
	var email = document.getElementById("input_1_2").value;
	var phone = document.getElementById("input_1_4").value;
	var message = document.getElementById("input_1_3").value;

	if (!(name && phone && email)) {
		console.error("Missing required fields");
		return;
	}

	try {
		__ctm.form.track(
			"app.calltrackingmetrics.com", // the capture host
			"FRT472ABB2C5B9B141A4E09EB92EACE6F50F17B19A0741ABF974F21F4BCFA738B17", // this FormReactor
			"8602541702",
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
