var form = document.getElementById("form_contact2");

form.addEventListener("submit", function () {
	var name = document.getElementById("field_qh4icy2").value;
	var email = document.getElementById("field_29yf4d2").value;
	var phone = document.getElementById("field_4s1pj").value;
	var message = document.getElementById("field_9jv0r12").value;

	if (name && email && phone) {
		try {
			__ctm.form.track(
				"app.calltrackingmetrics.com", // the capture host
				"FRT472ABB2C5B9B141A36373C8D9563F65EE4778ECD96DE00A462C8950C88FE74C4", // this FormReactor
				"7187151917",
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
			console.error("Error tracking form:", error);
		}
	}
});
