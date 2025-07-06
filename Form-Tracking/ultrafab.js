document.querySelector(".frm_button_submit").addEventListener("click", function () {
	var name = document.getElementById("field_f8xzv").value;
	var email = document.getElementById("field_xwt0n").value;
	var phone = "8888888888";
	var message = document.getElementById("field_6dd0a").value;

	if (!(name && phone && email)) {
		console.error("Missing required fields");
		return;
	}

	try {
		__ctm.form.track(
			"app.calltrackingmetrics.com", // the capture host
			"FRT472ABB2C5B9B141A9082EA8D403EB81D86DBFB25AD3C3F0F2DE88F8AAB00858C", // this FormReactor
			"5856843606",
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
