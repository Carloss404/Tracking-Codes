(function () {
	var submitButtons = document.querySelectorAll("input[name='submit']");

	function handleSubmit(event) {
		var name = document.querySelector("input[name='dmform-0']").value;
		var email = document.querySelector("input[name='dmform-1']").value;
		var phone = document.querySelector("input[name='dmform-2']").value;
		var patientStatus = document.querySelector("select[name='dmform-3']").value;
		var interestedServices = document.querySelector("select[name='dmform-4']").value;
		var preferredDay = document.querySelector("input[name='dmform-5']").value;
		var message = document.querySelector("input[name='dmform-6']").value;

		if (!(name && email && phone && patientStatus && interestedServices && preferredDay)) {
			console.error("Missing required fields");
			return;
		}

		if (event.target.value === "Send") {
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				event: "book-appointment-form-submitted",
				formData: {
					name: name,
					email: email,
					phone: phone,
					patientStatus: patientStatus,
					interestedServices: interestedServices,
					preferredDay: preferredDay,
				},
			});

			__ctm.form.track(
				"app.calltrackingmetrics.com",
				"FRT472ABB2C5B9B141AA672787008EB69ECC373839A816C7556B271BCF420DE7831",
				"3659901163",
				{
					country_code: "1",
					name: name,
					phone: phone,
					email: email,
					custom: {
						message: message,
						"Patient Status": patientStatus,
						"Interested Services": interestedServices,
						"Preferred Day": preferredDay,
					},
				}
			);
		}
	}

	submitButtons.forEach(function (button) {
		button.addEventListener("click", handleSubmit);
	});
})();
