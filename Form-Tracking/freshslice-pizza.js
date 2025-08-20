document.getElementById("lp-pom-button-3049").addEventListener("click", function () {
	var name = document.querySelector("input[name='name']").value;
	var phone = document.querySelector("input[name='phone_number']").value;
	var email = document.querySelector("input[name='work_email']").value;
	var availableLiquidCashOnHand = document.querySelector(
		"input[name='available_liquid_cash_on_hand']:checked"
	).value;
	var partnershipType = document.querySelector("input[name='partnership_type']:checked").value;
	var regionOfInterest = document.getElementById("region_of_interest").value || "";
	var state = document.getElementById("state").value || "";
	var province = document.getElementById("province").value || "";

	if (!(name && phone && email && availableLiquidCashOnHand && partnershipType)) {
		console.error("Missing required fields");
		return;
	}

	try {
		__ctm.form.track(
			"app.calltrackingmetrics.com",
			"FRT472ABB2C5B9B141AAB23844ABDE5C33648012FDA90D6128371217617D82C9672",
			"3466806916",
			{
				country_code: "1",
				name: name,
				phone: phone,
				email: email,
				custom: {
					"Available Liquid Cash On Hand": availableLiquidCashOnHand,
					"Partnership Type": partnershipType,
					"Region Of Interest": regionOfInterest,
					State: state,
					Province: province,
				},
			}
		);
	} catch (error) {
		console.error("Error tracking form submission:", error);
	}
});
