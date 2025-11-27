var button = document.querySelector(".frm_button_submit ");

button.addEventListener("click", function () {
	var name = document.getElementById("field_6vh4o").value;
	var email = document.getElementById("field_7kmn").value;
	var phone = document.getElementById("field_t33wc").value;
	var message = document.getElementById("field_w2bad").value;

	if (name && email && phone) {
		try {
			__ctm.form.track(
				"app.calltrackingmetrics.com", // the capture host
				"FRT472ABB2C5B9B141A043AB529D1B39EBFAF17738D52D172B8AC4E87E013652B70", // this FormReactor
				"6267844113",
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
