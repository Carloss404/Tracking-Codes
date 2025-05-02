var form = document.querySelector("form.simple");

form.addEventListener("submit", function () {
	var name = document.querySelector("input[name='name']").value;
	var email = document.querySelector("input[name='email']").value;
	var phone = document.querySelector("input[name='phone']").value;
	var message = document.querySelector("textarea[name='Questions/Comments']").value;

	if (name && email && phone) {
		try {
			__ctm.form.track(
				"app.calltrackingmetrics.com", // the capture host
				"FRT472ABB2C5B9B141AFB63F9925EE92E3E7C2815ABD928F3DD0439881AB33640F6", // this FormReactor
				"4075443920",
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
	}
});
