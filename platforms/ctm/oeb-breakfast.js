document.querySelector("form[aria-label='Contact form']").addEventListener("submit", function () {
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var name = lastName + " " + firstName;
	var email = document.getElementById("yourEmail").value;
	var phone = document.getElementById("yourPhone").value;
	var message = document.getElementById("yourMessage").value;

	if (!(name && email && phone && message)) {
		console.error("Missing required fields");
		return;
	}

	try {
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			event: "form-submission",
			formData: { name: name, email: email, phone: phone, message: message },
		});
	} catch (error) {
		throw new Error("DataLayer push error" + error);
	}

	try {
		__ctm.form.track(
			"app.calltrackingmetrics.com",
			"FRT472ABB2C5B9B141A0F23FF50B2A0CA9D2409A8C2B7759322D59E8A13C104D887",
			"4807642062",
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
		throw new Error("Error tracking form submission" + error);
	}
});
