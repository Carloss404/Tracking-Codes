document.querySelector('input[class="gform_button button"]').addEventListener("click", function () {
	var firstName = document.querySelector('input[name="input_1.3"]').value;
	var lastName = document.querySelector('input[name="input_1.6"]').value;
	var name = firstName + " " + lastName;

	var email = document.querySelector('input[name="input_2"]').value;
	var phone = document.querySelector('input[name="input_3"]').value;
	var message = document.querySelector('textarea[name="input_23"]').value;

	if (!(name && phone && email && message)) {
		console.error("Missing required fields");
		return;
	}

	try {
		__ctm.form.track(
			"app.calltrackingmetrics.com",
			"FRT472ABB2C5B9B141A36373C8D9563F65E104F8B2A71DBBCFACAD92F416FE2A13A",
			"8774476107",
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
