document.getElementById("1406294439").addEventListener("click", function () {
	var name = document.getElementById("1085655809").value;
	var email = document.getElementById("1316537564").value;
	var phone = document.getElementById("1232768276").value;
	var message = document.getElementById("1025170272").value;

	if (!(name && phone && email)) {
		console.error("Missing required fields");
		return;
	}

	try {
		__ctm.form.track(
			"app.calltrackingmetrics.com", // the capture host
			"FRT472ABB2C5B9B141A9440220F2D9334B60B72A43BC41702074C2020F09C5EA39E", // this FormReactor
			"7055351852",
			{
				country_code: "", // the expected country code e.g. +1, +44, +55, +61, etc... the plus is excluded
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
