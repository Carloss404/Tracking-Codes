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
		__ctm.form.track(
			"app.calltrackingmetrics.com", // the capture host
			"FRT472ABB2C5B9B141A602B95257054DE78E1B17A99D21A6492C599EA1F5D0E1E25", // this FormReactor
			"9036086353",
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
