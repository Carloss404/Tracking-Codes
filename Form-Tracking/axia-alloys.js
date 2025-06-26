var form = document.querySelector(".fc-form");

form.addEventListener("submit", function () {
	var name = document.querySelector("input[data-field-id='field1']").value;
	var email = document.querySelector("input[data-field-id='field2']").value;
	var message = document.querySelector("textarea[data-field-id='field3']").value;

	if (name && email) {
		try {
			__ctm.form.track(
				"app.calltrackingmetrics.com", // the capture host
				"FRT472ABB2C5B9B141A0023ADA836C4D47E020CF3E9B06E8403072C3E941D691C3B", // this FormReactor
				"4807643178",
				{
					country_code: "1", // the expected country code e.g. +1, +44, +55, +61, etc... the plus is excluded
					name: name,
					phone: "8888888888",
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
