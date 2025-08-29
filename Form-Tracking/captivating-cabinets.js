var button = document.querySelector(
	"button[class='action next submit material_filled-button wizard__submit']"
);

button.addEventListener("click", function () {
	var fullName = document.getElementById("96892-text-1").value;
	var email = document.getElementById("96892-email").value;
	var phone = document.getElementById("96892-phone-1").value;
	var state = document.getElementById("96892-text-2").value;
	var zipCode = document.getElementById("96892-text-3").value;
	var licenseNumber = document.getElementById("96892-text-4").value;
	var howManyKitchens = document.getElementById("96892-select-2").value;
	var assembledOrRTACabinets = document.querySelector("input[name='radio-1']:checked").value;
	var designServices = document.querySelector("input[name='radio-2']:checked").value;
	var message = document.getElementById("96892-textarea-1").value;

	if (
		!(
			fullName &&
			email &&
			phone &&
			state &&
			zipCode &&
			licenseNumber &&
			howManyKitchens &&
			assembledOrRTACabinets &&
			designServices &&
			message
		)
	) {
		console.error("Missing required fields");
		return;
	}

	try {
		__ctm.form.track(
			"app.calltrackingmetrics.com",
			"FRT472ABB2C5B9B141A54633035E82A8470C65A6FEAD590CF41D89B230D13A56F99",
			"7327599408",
			{
				country_code: "1",
				name: fullName,
				phone: phone,
				email: email,
				custom: {
					State: state,
					"Zip Code": zipCode,
					"Contractor License Number, EIN or Tax ID": licenseNumber,
					"Approximately how many kitchens or bathrooms do you remodel a year? is required":
						howManyKitchens,
					"Do you prefer assembled or RTA cabinets? *": assembledOrRTACabinets,
					"Do you require design services? *": designServices,
					Message: message,
				},
			}
		);
	} catch (error) {
		console.error("Error tracking form submission:", error);
	}
});
