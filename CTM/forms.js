// IPTrading
// Form Start

var form =
	document.getElementById("gform_6") ||
	document.getElementById("gform_5") ||
	document.getElementById("gform_1");

form.addEventListener("submit", function (event) {
	event.preventDefault();

	var name = document.querySelector("input[name='input_2']").value;
	var email = document.querySelector("input[name='input_3']").value;
	var phone = document.querySelector("input[name='input_8']").value;
	var message = document.querySelector("textarea[name='input_6']").value;

	if (name && email && phone) {
		try {
			__ctm.form.track(
				"app.calltrackingmetrics.com", // the capture host
				"FRT472ABB2C5B9B141A44E100603088102CA0215BA574CEA91683CC38D53E13B8AD", // this FormReactor
				"8559611104",
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

// Form End
