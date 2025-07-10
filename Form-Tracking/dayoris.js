document.querySelector("#wpforms-form-14137").addEventListener("submit", function () {
	var name = document.querySelector("input[name='wpforms[fields][0]']").value;
	var email = document.querySelector("input[name='wpforms[fields][1]']").value;
	var phone = document.querySelector("input[name='wpf-temp-wpforms[fields][8]']").value;
	var message = document.querySelector("textarea[name='wpforms[fields][2]']").value;

	if (!(name && phone && email && message)) {
		console.error("Missing required fields");
		return;
	}

	__ctm.form.track(
		"app.calltrackingmetrics.com", // the capture host
		"FRT472ABB2C5B9B141AF6C22E6510C3F2ACCF4A25A3A48874BC9AF33982F1A7CC2A", // this FormReactor
		"7866861206",
		{
			country_code: "1",
			name: name,
			phone: phone,
			email: email,
			custom: {
				message: message,
			},
		}
	);
});
