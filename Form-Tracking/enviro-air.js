document.getElementById("gform_submit_button_2").addEventListener("click", function () {
	var name = document.getElementById("input_2_4").value;
	var email = document.getElementById("input_2_7").value;
	var phone = document.getElementById("input_2_8").value;
	var message = document.getElementById("input_2_10").value;

	if (!(name && phone && email)) {
		console.error("Missing required fields");
		return;
	}

	try {
		__ctm.form.track(
			"app.calltrackingmetrics.com", // the capture host
			"FRT472ABB2C5B9B141AD0BD7258C47CE05FF5241BFB0FFA919FC2607C664D6D2071", // this FormReactor
			"2626677083",
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
