document.getElementById("contactUsFormSubmit").addEventListener("click", function () {
	var firstName = document.getElementById("FirstName").value;
	var lastName = document.getElementById("LastName").value;
	var name = firstName + " " + lastName;

	var email = document.getElementById("EmailAddress").value;
	var phone = document.getElementById("PhoneNumber").value;
	var message = document.getElementById("Message").value;

	if (!(name && phone && email)) {
		console.error("Missing required fields");
		return;
	}

	try {
		__ctm.form.track(
			"app.calltrackingmetrics.com", // the capture host
			"FRT472ABB2C5B9B141A58EC7369CBE6A877493A60FFEAC95959EFE1362FB8DE8B5F", // this FormReactor
			"9152331491",
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
