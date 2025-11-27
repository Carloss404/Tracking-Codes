var form =
	document.getElementById("revinate_contact_api_form") || document.getElementById("gform_6");

form.addEventListener("submit", function () {
	var name =
		document.querySelector("input[name='firstName']").value ||
		document.querySelector("input[name='input_1']").value;
	var email =
		document.querySelector("input[name='email']").value ||
		document.querySelector("input[name='input_4']").value;
	var phone = document.getElementById("input_6_14").value || "";
	var message = document.getElementById("input_6_7").value || "";

	if (!(name && phone && email)) {
		console.error("Missing required fields");
		return;
	}

	try {
		__ctm.form.track(
			"app.calltrackingmetrics.com", // the capture host
			"FRT472ABB2C5B9B141A0456D47208565EC4A3DF90CA6E980250184B69F1E99A4C10", // this FormReactor
			"8304652859",
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
});
