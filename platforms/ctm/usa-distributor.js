// Contact Form
document.querySelector("button[type='submit']").addEventListener("click", function () {
	var name = document.getElementById(
		"input--template--16605491298463__contact-form--contactname"
	).value;
	var email = document.getElementById(
		"input--template--16605491298463__contact-form--contactemail"
	).value;
	var phone = "8888888888";
	var message = document.getElementById(
		"input--template--16605491298463__contact-form--contactbody"
	).value;

	if (!(name && phone && email)) {
		console.error("Missing required fields");
		return;
	}

	try {
		__ctm.form.track(
			"app.calltrackingmetrics.com", // the capture host
			"FRT472ABB2C5B9B141A8C60F88E143AFF5AE2775D1AE6E22508EC667FEF7F1D2FBD", // this FormReactor
			"2156642199",
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

// Contractor Form
document.querySelector("button[type='submit']").addEventListener("click", function () {
	var name = document.getElementById("119186-text-1").value;
	var email = document.getElementById("119186-email-1").value;
	var phone = document.getElementById("119186-phone-1").value;
	var message = document.getElementById("119186-textarea-1").value;

	if (!(name && phone && email)) {
		console.error("Missing required fields");
		return;
	}

	try {
		__ctm.form.track(
			"app.calltrackingmetrics.com", // the capture host
			"FRT472ABB2C5B9B141A8C60F88E143AFF5AE2775D1AE6E22508BC1B8378E37D342A", // this FormReactor
			"2156642199",
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

// Free 3D Design Form
document.querySelector("button[type='submit']").addEventListener("click", function () {
	var firstName = document.getElementById("119187-text").value;
	var lastName = document.getElementById("119187-text-1").value;
	var name = firstName + " " + lastName;

	var email = document.getElementById("119187-email").value;
	var phone = document.getElementById("119187-phone-1").value;
	var message = document.getElementById("119187-textarea").value;

	if (!(name && phone && email)) {
		console.error("Missing required fields");
		return;
	}

	try {
		__ctm.form.track(
			"app.calltrackingmetrics.com", // the capture host
			"FRT472ABB2C5B9B141A8C60F88E143AFF5ACF4F0C6E938583235EC21097A6844E56", // this FormReactor
			"2156642199",
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
