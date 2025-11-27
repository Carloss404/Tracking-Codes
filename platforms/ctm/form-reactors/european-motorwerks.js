var form = document.getElementById("form_5d0u9");

form.addEventListener("submit", function () {
	var name = document.querySelector("input[name='item_meta[68]']").value;
	var email = document.querySelector("input[name='item_meta[69]']").value;
	var phone = document.querySelector("input[name='item_meta[70]']").value;
	var message = document.querySelector("textarea[name='item_meta[71]']")
		? document.querySelector("textarea[name='item_meta[71]']").value
		: "";

	if (name && email && phone) {
		try {
			__ctm.form.track(
				"app.calltrackingmetrics.com", // the capture host
				"FRT472ABB2C5B9B141A468807E2F2146A957D13E4CD5B2134387B298ABFA80E1B3E", // this FormReactor
				"5128469075",
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
			console.error("Error tracking form submission", error);
		}
	}
});
