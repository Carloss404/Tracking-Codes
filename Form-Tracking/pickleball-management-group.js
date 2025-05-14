var submitBtn = document.querySelector("input[value='Submit']");

submitBtn.addEventListener("click", function () {
	var name = document.querySelector("input[name='your-name'").value;
	var email = document.querySelector("input[name='your-email']").value;
	var message = document.querySelector("textarea[name='your-message']").value;

	if (name && email && message) {
		try {
			if (typeof __ctm === "undefined") {
				console.error("CallTrackingMetrics is not defined");
				return;
			}

			__ctm.form.track(
				"app.calltrackingmetrics.com", // the capture host
				"FRT472ABB2C5B9B141AEF4728E7E6350A3AD7DBC4D0A717EC1D502F5B73F035A0FB", // this FormReactor
				"7865749435",
				{
					country_code: "1", // the expected country code e.g. +1, +44, +55, +61, etc... the plus is excluded
					name: name,
					phone: "0000000000", // the phone number is not required
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
