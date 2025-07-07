document.querySelector(".frm_button_submit").addEventListener("click", function () {
	var firstName = document.getElementById("field_qh4icy").value;
	var lastName = document.getElementById("field_mrjqq").value;
	var name = firstName + " " + lastName;

	var email = document.getElementById("field_29yf4d").value;
	var phone = document.getElementById("field_9oopc").value;
	var message = document.getElementById("field_9jv0r1").value;

	if (!(name && phone && email)) {
		console.error("Missing required fields");
		return;
	}

	try {
		__ctm.form.track(
			"app.calltrackingmetrics.com", // the capture host
			"FRT472ABB2C5B9B141AEBEFF1DD04BBE65A094A9012707D05334B96D1D795B3BD0A", // this FormReactor
			"3527305777",
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
