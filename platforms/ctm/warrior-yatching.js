var formData = {};

var nextBtn = document.querySelector(
	"button[class='elementor-button elementor-size-sm e-form__buttons__wrapper__button e-form__buttons__wrapper__button-next']"
);

if (nextBtn) {
	nextBtn.addEventListener("click", function () {
		var fullName = document.getElementById("form-field-name").value;
		var guests = document.getElementById("form-field-field_ad8df74").value;
		var email = document.getElementById("form-field-email").value;

		if (!(fullName && email && guests)) {
			console.error("Missing required fields");
			return;
		}

		formData.full_name = fullName;
		formData.email = email;
		formData.guests = guests;
	});
}

var sendBtn = document.querySelector(
	"button[class='elementor-button elementor-size-sm e-form__buttons__wrapper__button']"
);

if (sendBtn) {
	sendBtn.addEventListener("click", function () {
		var phone = document.getElementById("form-field-field_22f2496").value;
		var message = document.getElementById("form-field-message").value;

		if (!(formData.full_name && formData.email && formData.guests)) {
			console.error("Step 1 data missing, cannot submit form");
			return;
		}

		if (!(phone && message)) {
			console.error("Missing required fields in Step 2");
			return;
		}

		try {
			__ctm.form.track(
				"app.calltrackingmetrics.com",
				"FRT472ABB2C5B9B141A41E4F9B05234510AF23EC3566D7F99A1807404DB96F525EC",
				"6466311326",
				{
					country_code: "1",
					name: formData.full_name,
					phone: phone,
					email: formData.email,
					custom: {
						Message: message,
					},
				}
			);

			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				event: "form_submitted",
				form_data: {
					email: formData.email,
					phone: phone,
				},
			});
		} catch (error) {
			console.error("Error tracking form submission:", error);
		}
	});
}
