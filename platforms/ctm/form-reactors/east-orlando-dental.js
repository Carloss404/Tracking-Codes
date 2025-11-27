var messages = [];

window.addEventListener("message", function (event) {
	if (!event.data) {
		console.error("No data received");
		return;
	}

	messages.push(event.data);

	try {
		if (messages.length > 0 && messages[0][2]) {
			var formData = JSON.parse(messages[0][2]);

			var name = formData.name;
			var email = formData.email;
			var phone = formData.phone;
			var message = formData.message;

			if (name && email && phone) {
				__ctm.form.track(
					"app.calltrackingmetrics.com", // the capture host
					"FRT472ABB2C5B9B141ABF55BF0DA173EA515F7942DA8491504EC3159088FE11F80E", // this FormReactor
					"4074701663",
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
			}
		}
	} catch (error) {
		console.error("Error parsing form data:", error);
		return;
	}
});
