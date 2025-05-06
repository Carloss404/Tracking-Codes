var form = document.getElementById("form_contact-form");

form.addEventListener("submit", function () {
	var name = document.getElementById("field_qh4icy").value;
	var phone = document.getElementById("field_p3m8c").value;
	var email = document.getElementById("field_29yf4d").value;
	var message = document.getElementById("field_9jv0r1").value;

	if (name && phone && email) {
		try {
			__ctm.form.track(
				"app.calltrackingmetrics.com", // the capture host
				"FRT472ABB2C5B9B141A44F6B85642DF7AF9BF8F286ACD49D5E7F9F9D3FDAA4C44C6", // this FormReactor
				"3523529868",
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
	}
});

var cartForm = document.getElementById("yith-ywraq-default-form");

cartForm.addEventListener("submit", function () {
	var firstName = document.getElementById("first_name").value;
	var lastName = document.getElementById("last_name").value;
	var fullName = firstName + " " + lastName;

	var email = document.getElementById("email").value;
	var phone = document.getElementById("Phone").value;
	var message = document.getElementById("message").value;

	if (fullName && email && phone) {
		try {
			// trigger this method once you have the form data captured within you web form.  This means you have to capture the form submission events and data.
			__ctm.form.track(
				"app.calltrackingmetrics.com", // the capture host
				"FRT472ABB2C5B9B141A44F6B85642DF7AF9BF8F286ACD49D5E70DF6C10FC17526A7", // this FormReactor
				"3523529868",
				{
					country_code: "1", // the expected country code e.g. +1, +44, +55, +61, etc... the plus is excluded
					name: fullName,
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
	}
});
