document.getElementById("contactUsFormSubmit").addEventListener("click", function () {
	var firstName = document.getElementById("FirstName").value;
	var lastName = document.getElementById("LastName").value;
	var name = firstName + " " + lastName;

	var email = document.getElementById("EmailAddress").value;
	var phone = "8888888888";
	var message = document.getElementById("Message").value;

	if (!(name && phone && email)) {
		console.error("Missing required fields");
		return;
	}

	try {
		// there are two CTM accounts for this form; however, they both use the same website.
		// Therefore, we need to track the form submissions at the same time for both CTM accounts.
		__ctm.form.track(
			"app.calltrackingmetrics.com", // the capture host
			"FRT472ABB2C5B9B141A24E0163D0AB6A14B86FF2AC0BC61E0B75112CAC2AA8E18BD", // this FormReactor
			"5092535976",
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

		__ctm.form.track(
			"app.calltrackingmetrics.com", // the capture host
			"FRT472ABB2C5B9B141A91E0F177DE71D1D4CBFD86E694AE712A94AE92B1F103F7B7", // this FormReactor
			"5093599606",
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
