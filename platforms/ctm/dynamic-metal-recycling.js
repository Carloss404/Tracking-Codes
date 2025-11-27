document.getElementById("gform_submit_button_3").addEventListener("click", function () {
	var name = document.getElementById("input_3_1").value;
	var phone = document.getElementById("input_3_3").value;
	var email = document.getElementById("input_3_4").value;
	var message = document.getElementById("input_3_5").value;

	if (!(name && phone && email)) {
		console.error("Missing required fields");
		return;
	}

	try {
		__ctm.form.track(
			"app.calltrackingmetrics.com", // the capture host
			"FRT472ABB2C5B9B141A06521D2B0E246F015E5BE7AA757122A90731824A8DA9DA69", // this FormReactor
			"2195337389",
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
