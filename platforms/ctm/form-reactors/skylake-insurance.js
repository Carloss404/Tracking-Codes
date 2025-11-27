// Contact Form
document.getElementById("gform_submit_button_2").addEventListener("click", function () {
	var firstName = document.getElementById("input_2_6").value;
	var lastName = document.getElementById("input_2_7").value;
	var name = firstName + " " + lastName;

	var email = document.getElementById("input_2_2").value;
	var phone = document.getElementById("input_2_3").value;
	var message = document.getElementById("input_2_4").value;

	if (!(name && email && phone && message)) {
		console.error("Missing required fields");
		return;
	}

	try {
		__ctm.form.track(
			"app.calltrackingmetrics.com", // the capture host
			"FRT472ABB2C5B9B141A56497B3782894BDFE2D8870F76AF0405ADE48E2A752C5950", // this FormReactor
			"8559702408",
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
