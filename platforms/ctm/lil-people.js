document
	.querySelector("button[class='forminator-button forminator-button-submit']")
	.addEventListener("click", function () {
		var name = document.querySelector("input[name='name-1']").value;
		var email = document.querySelector("input[name='email-1']").value;
		var phone = document.querySelector("input[name='phone-1']").value;
		var message = document.querySelector("textarea[name='textarea-1']").value;

		if (!(name && email && phone && message)) {
			console.error("Missing required fields");
			return;
		}

		try {
			__ctm.form.track(
				"app.calltrackingmetrics.com", // the capture host
				"FRT472ABB2C5B9B141A476B764B355D46CF8FFE0865CB183F94CF77638366AB6852", // this FormReactor
				"4254751423",
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
