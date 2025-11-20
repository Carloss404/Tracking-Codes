document.querySelector("button[form='contactForm']").addEventListener("click", function () {
	var name = document.querySelector("input[name='name']").value;
	var email = document.querySelector("input[name='email']").value;
	var phone = document.querySelector("input[name='phone']").value;
	var message = document.querySelector("textarea[name='comments']").value;

	if (!(name && email && phone && message)) {
		console.error("Missing required fields");
		return;
	}

	try {
		__ctm.form.track(
			"app.calltrackingmetrics.com", // the capture host
			"FRT472ABB2C5B9B141A1062644053DF9343CCC634A2FE717CBA9DD154373DD8322C", // this FormReactor
			"4782954346",
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
