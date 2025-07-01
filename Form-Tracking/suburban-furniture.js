(window.__ctm_loaded || []).push(function () {
	document.getElementById("gform_submit_button_4").addEventListener("click", function () {
		var firstName = document.getElementById("input_4_1_3").value;
		var lastName = document.getElementById("input_4_1_6").value;
		var name = firstName + " " + lastName;

		var phone = document.getElementById("input_4_2").value;
		var email = document.getElementById("input_4_3").value;
		var message = document.getElementById("input_4_5").value;

		if (!(name && phone && email)) {
			console.error("Missing required fields");
			return;
		}

		try {
			__ctm.form.track(
				"app.calltrackingmetrics.com", // the capture host
				"FRT472ABB2C5B9B141A03903525D7F8DF41B53C70F65C5568C79A2AC4B587D2F9FD", // this FormReactor
				"9735775368",
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
});
