var btn = document.getElementById("tmp_button-38751");

btn.addEventListener("click", function () {
	var firstName = document.querySelector("input[name='first_name']").value;
	var lastName = document.querySelector("input[name='last_name']").value;
	var fullName = firstName + " " + lastName;
	var email = document.querySelector("input[name='email']").value;
	var phone = document.querySelector("input[name='phone']").value;

	if (fullName && phone && email) {
		try {
			__ctm.form.track(
				"app.calltrackingmetrics.com", // the capture host
				"FRT472ABB2C5B9B141ABF3B4DE19D9350442B3A75FA5539D11B4043A183CE80730C", // this FormReactor
				"8889284572",
				{
					country_code: "1", // the expected country code e.g. +1, +44, +55, +61, etc... the plus is excluded
					name: fullName,
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
