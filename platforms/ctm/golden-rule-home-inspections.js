var form = document.querySelector(".et_pb_contact_form ");

form.addEventListener("submit", function () {
	var name = document.getElementById("et_pb_contact_name_0").value;
	var email = document.getElementById("et_pb_contact_email_0").value;
	var phone = document.getElementById("et_pb_contact_phone_0").value;
	var message = document.getElementById("et_pb_contact_message_0").value;

	if (name && email && phone) {
		try {
			__ctm.form.track(
				"app.calltrackingmetrics.com", // the capture host
				"FRT472ABB2C5B9B141AA0D47E89F1A93B048379CE739BF10A6C59DF39C3E2E83520", // this FormReactor
				"2394206480",
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
			console.error("Form submission error:", error);
		}
	}
});
