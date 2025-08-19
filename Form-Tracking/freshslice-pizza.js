document.getElementById("lp-pom-button-3049").addEventListener("click", function () {
	var name = document.querySelector("input[name='name']").value;
	var phone = document.querySelector("input[name='phone_number']").value;
	var email = document.querySelector("input[name='work_email']").value;
	var availableLiquidCashOnHand = document.querySelector(
		"input[name='available_liquid_cash_on_hand']:checked"
	).value;
	var partnershipType = document.querySelector("input[name='partnership_type']:checked").value;
	var regionOfInterest = document.querySelector("input[name='region_of_interest']:selected").value;
	var state = document.querySelector("input[name='state']:selected").value;
	var province = document.querySelector("input[name='province']:selected").value;

	if (!(name && phone && email && availableLiquidCashOnHand && partnershipType)) {
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
