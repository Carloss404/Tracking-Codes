var form = document.getElementById("form_contact22");

form.addEventListener("submit", function () {
	var name = document.getElementById("field_qh4icy3").value;
	var email = document.getElementById("field_29yf4d3").value;
	var phone = document.getElementById("field_lne4td2").value;
	var message = document.getElementById("field_9jv0r13").value;

	if (name && email && phone) {
		try {
			__ctm.form.track(
				"app.calltrackingmetrics.com", // the capture host
				"FRT472ABB2C5B9B141A07F6B927C551C1FFD48969DC4C8F85BA4A3CF322F4CEB372", // this FormReactor
				"3479236907",
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
			console.error("Error tracking form submission", error);
		}
	}
});
