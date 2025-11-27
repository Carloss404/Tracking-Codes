(window.__ctm_loaded || []).push(function () {
	document
		.querySelector("button[data-hook='submit-button']")
		.addEventListener("click", function () {
			var name = document.getElementById(
				"form-field-input-7e9d7a34-8f8d-481e-ee07-66a36d1ef4ed-comp-m3rhcfvk-"
			).value;
			var email = document.getElementById(
				"form-field-input-8ffeec5e-d1fd-49d4-b311-bf77a33d3eea-comp-m3rhcfvk-"
			).value;
			var phone = document.getElementById(
				"form-field-input-89942ff5-d82e-4a2e-5ee6-3f3585a777c8-comp-m3rhcfvk-"
			).value;
			var message = document.getElementById(
				"form-field-input-8aeac2cb-e4f2-4a80-9a92-21d659b14f99-comp-m3rhcfvk-"
			).value;

			if (!(name && phone && email)) {
				console.error("Missing required fields");
				return;
			}

			try {
				__ctm.form.track(
					"app.calltrackingmetrics.com", // the capture host
					"FRT472ABB2C5B9B141A41FBCA4E4A74F75787AE535F9661215ECB2E962517B91CED", // this FormReactor
					"3608356475",
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
});
