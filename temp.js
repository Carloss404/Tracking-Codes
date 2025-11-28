(function () {
	var submitButtons = document.querySelectorAll("input[type='submit']");

	function handleSubmit(event) {
		var firstName = document.querySelector("input[name='first_name']").value;
		var lastName = document.querySelector("input[name='last_name']").value;
		var email = document.querySelector("input[name='email_address']").value;
		var phone = document.querySelector("input[name='phone_number']").value;
		var message = document.querySelector("textarea[name='your_message']").value;

		if (!(firstName && lastName && email && phone && message)) {
			console.error("Missing required fields");
			return;
		}

		if (event.target.value === "Submit") {
			try {
				__ctm.form.track(
					"app.calltrackingmetrics.com",
					"FRT472ABB2C5B9B141ABAFA204814699C32FCF99E1B22634E3B2D8E4A704C2B3094",
					"6094388573",
					{
						country_code: "1",
						name: firstName,
						phone: phone,
						email: email,
						custom: {
							"Last Name": lastName,
							message: message,
						},
					}
				);
			} catch (error) {
				console.error("Form submission error:", error);
			}
		}
	}

	submitButtons.forEach(function (button) {
		button.addEventListener("click", handleSubmit);
	});
})();
