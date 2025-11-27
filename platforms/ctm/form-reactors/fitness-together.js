document.querySelector("button[name='submit-btn']").addEventListener("click", function () {
	var name = document.getElementById("f_name").value;
	var email = document.getElementById("f_email").value;
	var phone = "8888888888";
	var message = document.getElementById("f_comments").value;

	if (!(name && phone && email)) {
		console.error("Missing required fields");
		return;
	}

	try {
		__ctm.form.track(
			"app.calltrackingmetrics.com", // the capture host
			"FRT472ABB2C5B9B141A474B4A589A149A3EA32ABA542727E54CBA160CDCFC743966", // this FormReactor
			"7046104389",
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
