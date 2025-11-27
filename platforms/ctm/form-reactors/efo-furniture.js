(window.__ctm_loaded || []).push(function () {
	document.getElementById("contactUsFormSubmit").addEventListener("click", function () {
		var firstName = document.querySelector("input[name='FirstName']").value;
		var lastName = document.querySelector("input[name='LastName']").value;
		var fullName = firstName + " " + lastName;

		var email = document.querySelector("input[name='EmailAddress']").value;
		var phone = document.querySelector("input[name='PhoneNumber']").value;
		var message = document.querySelector("textarea[name='Message']").value;

		if (!(fullName && email && phone && message)) {
			console.error("Missing required fields");
			return;
		}

		try {
			__ctm.form.track(
				"app.calltrackingmetrics.com", // the capture host
				"FRT472ABB2C5B9B141AC70EC5F78A30AB8DBA8B6C26069E04B711849AFD033E7F9C", // this FormReactor
				"5706656068",
				{
					country_code: "1", // the expected country code e.g. +1, +44, +55, +61, etc... the plus is excluded
					name: fullName,
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
});
