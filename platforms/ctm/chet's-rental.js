document.querySelector("input[name='submit']").addEventListener("click", function () {
	var firstName = document.querySelector('input[name="strFirst"]').value;
	var lastName = document.querySelector('input[name="strLast"]').value;
	var name = firstName + " " + lastName;

	var phone = document.querySelector('input[name="strPhone"]').value;
	var email = document.querySelector('input[name="strEmail"]').value;
	var street = document.querySelector('input[name="strAddress1"]').value;
	var city = document.querySelector('input[name="strCity"]').value;
	var state = document.querySelector('input[name="strState"]').value;
	var zip = document.querySelector('input[name="strPostalCode"]').value;
	var message = document.querySelector('textarea[name="strComments"]').value;

	if (!(name && phone && email && street && city && state && zip)) {
		console.error("Missing required fields");
		return;
	}

	try {
		__ctm.form.track(
			"app.calltrackingmetrics.com", // the capture host
			"FRT472ABB2C5B9B141A77FF22DC7291FC7E49114982DD1BB0C647F30EE07AA4530B", // this FormReactor
			"8106786380",
			{
				country_code: "1",
				name: name,
				phone: phone,
				email: email,
				custom: {
					street: street,
					city: city,
					state: state,
					zip: zip,
					message: message,
				},
			}
		);
	} catch (error) {
		console.error("Error tracking form submission", error);
	}
});
