document.getElementById("vfb-4").addEventListener("click", function () {
	var name = document.getElementById("vfb-10").value;
	var phone = document.getElementById("vfb-16").value;
	var email = document.getElementById("vfb-12").value;
	var message = document.getElementById("vfb-14").value;

	if (!(name && phone && email && message)) {
		console.error("Missing required fields");
		return;
	}

	try {
		__ctm.form.track(
			"app.calltrackingmetrics.com", // the capture host
			"FRT472ABB2C5B9B141A8E20A135FB4D13282AFE99ECFA00BCD3525CF8A82B59E87C", // this FormReactor
			"5109919745",
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
