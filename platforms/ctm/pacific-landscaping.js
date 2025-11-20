document.querySelector("#form_contact-form").addEventListener("submit", function () {
	var name = document.querySelector('input[name="item_meta[1]"]').value;
	var phone = document.querySelector('input[name="item_meta[3]"]').value;
	var email = document.querySelector('input[name="item_meta[2]"]').value;
	var message = document.querySelector('input[name="item_meta[12]"]').value;

	if (!(name && phone && email && message)) {
		console.error("Missing required fields");
		return;
	}

	try {
		__ctm.form.track(
			"app.calltrackingmetrics.com",
			"FRT472ABB2C5B9B141A2BF47C2B17E2F790D726093E9A4EBAC5BE31271709E478BB",
			"8312986227",
			{
				country_code: "1",
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
