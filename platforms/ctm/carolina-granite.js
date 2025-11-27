var button = document.getElementById("wsf-1-field-88");

button.addEventListener("click", function () {
	var name = document.getElementById("wsf-1-field-84").value;
	var phone = document.getElementById("wsf-1-field-85").value;
	var email = document.getElementById("wsf-1-field-86").value;
	var interest = document.getElementById("wsf-1-field-87").value;

	if (name && phone && email) {
		try {
			__ctm.form.track(
				"app.calltrackingmetrics.com", // the capture host
				"FRT472ABB2C5B9B141AC6448A98CEC6DB6F9064E46C8D712C17256CEAD4A1CCFAF4", // this FormReactor
				"8644288825",
				{
					country_code: "1",
					name: name,
					phone: phone,
					email: email,
					custom: {
						interest: interest,
					},
				}
			);
		} catch (error) {
			console.error("Error tracking form:", error);
		}
	}
});
