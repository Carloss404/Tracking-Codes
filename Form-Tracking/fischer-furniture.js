document.querySelector(".landing-form__submit").addEventListener("click", function () {
	var firstName = document.querySelector("input[name='FirstName']").value;
	var lastName = document.querySelector("input[name='LastName']").value;
	var name = firstName + " " + lastName;

	var phone = document.querySelector("input[name='CleanHomePhone']").value;
	var email = document.querySelector("input[name='EmailAddress']").value;
	var message = document.querySelector("textarea[name='MyMessage']").value;

	if (!(name && phone && email)) {
		console.error("Missing required fields");
		return;
	}

	try {
		__ctm.form.track(
			"app.calltrackingmetrics.com", // the capture host
			"FRT472ABB2C5B9B141AD73CB5A829DFDD620F69E1E96E8EECB3C5F121EDECF732E3", // this FormReactor
			"6055254967",
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

// simplysleepbetter.com
document.querySelector(".dsg-contact-1__submit").addEventListener("click", function () {
	var name = document.querySelector("input[name='name']").value;
	var email = document.querySelector("input[name='email']").value;
	var phone = document.querySelector("input[name='phone']").value;
	var message = document.querySelector("textarea[name='message']").value;

	if (!(name && phone && email)) {
		console.error("Missing required fields");
		return;
	}

	try {
		__ctm.form.track(
			"app.calltrackingmetrics.com", // the capture host
			"FRT472ABB2C5B9B141AD73CB5A829DFDD620FA62D5676B774ED9C6DFDC38871D732", // this FormReactor
			"6053094212",
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
