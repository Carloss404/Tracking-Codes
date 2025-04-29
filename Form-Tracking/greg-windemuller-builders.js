var form = document.querySelector("form[aria-label='Contact form']");

form.addEventListener("submit", function () {
	var name = document.querySelector("input[placeholder='Your Name']").value;
	var email = document.querySelector("input[placeholder='Your Email']").value;
	var phone = document.querySelector("input[placeholder='Your Phone']").value;
	var message = document.querySelector("textarea[placeholder='How Can We Help You?']").value;

	if (name && email && phone) {
		try {
			__ctm.form.track(
				"app.calltrackingmetrics.com", // the capture host
				"FRT472ABB2C5B9B141ADCFE284ACB2D82450B27021B5FE8C5343A41F317695A83B1", // this FormReactor
				"6168983742",
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
