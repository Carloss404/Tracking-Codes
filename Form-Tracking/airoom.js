// Get Financing Form
document.querySelector('button[name="wpforms[submit]"]').addEventListener("click", function () {
	var name = document.querySelector('input[name="wpforms[fields][1][first]"]').value;
	var phone = document.querySelector('input[name="wpforms[fields][3]"]').value;
	var email = document.querySelector('input[name="wpforms[fields][2]"]').value;
	var address = document.querySelector('input[name="wpforms[fields][5][address1]"]').value;
	var message = document.querySelector('textarea[name="wpforms[fields][7]"]').value;

	if (!(name && phone && email && message)) {
		console.error("Missing required fields");
		return;
	}

	try {
		__ctm.form.track(
			"app.calltrackingmetrics.com", // the capture host
			"FRT472ABB2C5B9B141A81285E54CE4D2231B2AA0C39C5A25160228A8319CB43925B", // this FormReactor
			"8479612835",
			{
				country_code: "1", // the expected country code e.g. +1, +44, +55, +61, etc... the plus is excluded
				name: name,
				phone: phone,
				email: email,
				custom: {
					address: address,
					message: message,
				},
			}
		);
	} catch (error) {
		console.error("Error tracking form submission", error);
	}
});

// Contact Form
document.querySelector('button[name="wpforms[submit]"]').addEventListener("click", function () {
	var name = document.querySelector('input[name="wpforms[fields][0][first]"]').value;
	var phone = document.querySelector('input[name="wpf-temp-wpforms[fields][3]"]').value;
	var email = document.querySelector('input[name="wpforms[fields][1]"]').value;
	var message = document.querySelector('textarea[name="wpforms[fields][2]"]').value;

	if (!(name && phone && email && message)) {
		console.error("Missing required fields");
		return;
	}

	try {
		__ctm.form.track(
			"app.calltrackingmetrics.com", // the capture host
			"FRT472ABB2C5B9B141A81285E54CE4D2231B2AA0C39C5A251605AF83E8EA0C2AF01", // this FormReactor
			"8479612835",
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
});

// Home Page Form
document.querySelector('button[value="wpforms-submit"]').addEventListener("click", function () {
	var name = document.querySelector('input[name="wpforms[fields][33][first]"]').value;
	var phone = document.querySelector('input[name="wpforms[fields][14]"]').value;
	var email = document.querySelector('input[name="wpforms[fields][3]"]').value;
	var address = document.querySelector('input[name="wpforms[fields][32][address1]"]').value;

	if (!(name && phone && email)) {
		console.error("Missing required fields");
		return;
	}

	try {
		__ctm.form.track(
			"app.calltrackingmetrics.com", // the capture host
			"FRT472ABB2C5B9B141A81285E54CE4D2231B2AA0C39C5A251608A1B73DCE914E0E6", // this FormReactor
			"8479612835",
			{
				country_code: "1", // the expected country code e.g. +1, +44, +55, +61, etc... the plus is excluded
				name: name,
				phone: phone,
				email: email,
				custom: {
					address: address,
				},
			}
		);
	} catch (error) {
		console.error("Error tracking form submission", error);
	}
});
