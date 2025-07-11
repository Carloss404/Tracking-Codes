var continueButton = null;
var buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {
	if (button.textContent === "Continue") {
		continueButton = button;
	}
});

if (continueButton) {
	continueButton.addEventListener("click", function () {
		var firstName = document.getElementById("first_name_01JZBEE57WR0P0ZB4ZBCTHPF2C").value;
		var lastName = document.getElementById("last_name_01JZBEE582JE46Z1EQDB6JV4H6").value;
		var name = firstName + " " + lastName;

		var phone = document.getElementById("phone_number_01JZBEE587PYDQ2SQBYPNHCZNA").value;
		var email = document.getElementById("email_01JZBEE58DGBCGFW2X3GQSJ1BX").value;

		if (!(name && phone && email)) {
			console.error("Missing required fields");
			return;
		}

		try {
			__ctm.form.track(
				"app.calltrackingmetrics.com", // the capture host
				"FRT472ABB2C5B9B141A164A41524E8C2A43A63AF12BF7FFDD904205F0969E347471", // this FormReactor
				"9543290892",
				{
					country_code: "1", // the expected country code e.g. +1, +44, +55, +61, etc... the plus is excluded
					name: name,
					phone: phone,
					email: email,
					custom: {},
				}
			);
		} catch (error) {
			console.error("Error tracking form submission:", error);
		}
	});
}
