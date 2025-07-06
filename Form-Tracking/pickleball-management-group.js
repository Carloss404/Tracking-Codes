document.querySelector("input[value='Submit']").addEventListener("click", function () {
	var name = document.querySelector("input[name='your-name'").value;
	var phone = "8888888888";
	var email = document.querySelector("input[name='your-email']").value;
	var message = document.querySelector("textarea[name='your-message']").value;

	if (!(name && phone && email)) {
		console.error("Missing required fields");
		return;
	}

	try {
		__ctm.form.track(
			"app.calltrackingmetrics.com", // the capture host
			"FRT472ABB2C5B9B141AEF4728E7E6350A3AE02AB6D57163DBF05A777BED57F8F4E9", // this FormReactor
			"7868339493",
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
