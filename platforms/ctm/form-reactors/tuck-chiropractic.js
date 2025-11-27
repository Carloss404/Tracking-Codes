// Contact form
document.getElementById("gform_submit_button_1").addEventListener("click", function () {
	var name = document.getElementById("input_1_1").value;
	var email = document.getElementById("input_1_2").value;
	var phone = document.getElementById("input_1_3").value;
	var message = document.getElementById("input_1_6").value;

	if (!(name && phone && email)) {
		console.error("Missing required fields");
		return;
	}

	try {
		__ctm.form.track(
			"app.calltrackingmetrics.com", // the capture host
			"FRT472ABB2C5B9B141AA8991C3D22B2EE66900841303398A43117624734DB7D3916", // this FormReactor
			"5405924882",
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

// Schedule appointment form
document.getElementById("gform_submit_button_4").addEventListener("click", function () {
	var firstName = document.getElementById("input_4_1_3").value;
	var lastName = document.getElementById("input_4_1_6").value;
	var name = firstName + " " + lastName;

	var phone = document.getElementById("input_4_3").value;
	var email = document.getElementById("input_4_4").value;
	var message = document.getElementById("input_4_5").value;

	if (!(name && phone && email)) {
		console.error("Missing required fields");
		return;
	}

	try {
		__ctm.form.track(
			"app.calltrackingmetrics.com", // the capture host
			"FRT472ABB2C5B9B141AA8991C3D22B2EE66900841303398A431F2BD2CEE3164206D", // this FormReactor
			"5405924882",
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
