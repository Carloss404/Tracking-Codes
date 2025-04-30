var form = document.getElementById("mc-embedded-subscribe-form");

form.addEventListener("submit", function () {
	var name = document.querySelector('input[name="FNAME"]').value;
	var phone = document.querySelector('input[name="PHONE"]').value;
	var email = document.querySelector('input[name="EMAIL"]').value;

	if (name && phone && email) {
		try {
			__ctm.form.track(
				"app.calltrackingmetrics.com", // the capture host
				"FRT472ABB2C5B9B141A38409B476D69687F673E83CCBAD6BDECC1CE80F6D9792C6C", // this FormReactor
				"8883420246",
				{
					country_code: "1",
					name: name,
					phone: phone,
					email: email,
					custom: {},
				}
			);
		} catch (error) {
			console.error("Error tracking form submission:", error);
		}
	}
});
