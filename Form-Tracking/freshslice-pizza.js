document.getElementById("lp-pom-button-3049").addEventListener("click", function () {
	var name = document.querySelector("input[name='name']").value;
	var phone = document.querySelector("input[name='phone_number']").value;
	var email = document.querySelector("input[name='work_email']").value;

	if (!(name && phone && email)) {
		console.error("Missing required fields");
		return;
	}

	try {
		__ctm.form.track(
			"app.calltrackingmetrics.com", // the capture host
			"FRT472ABB2C5B9B141AAB23844ABDE5C33648012FDA90D6128371217617D82C9672", // this FormReactor
			"3466840259",
			{
				country_code: "1", // the expected country code e.g. +1, +44, +55, +61, etc... the plus is excluded
				name: name,
				phone: phone,
				email: email,
				custom: {},
			}
		);
	} catch (error) {
		console.error("Error tracking form submission:", error);
	}
});
