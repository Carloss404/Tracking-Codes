document.querySelector(".frm_button_submit").addEventListener("click", function () {
	var firstName = document.querySelector("input[name='item_meta[1]']").value;
	var lastName = document.querySelector("input[name='item_meta[2]']").value;
	var name = firstName + " " + lastName;

	var phone = document.querySelector("input[name='item_meta[7]']").value;
	var email = document.querySelector("input[name='item_meta[3]']").value;
	var order = document.querySelector("textarea[name='item_meta[5]']").value;

	if (!(name && phone && email)) {
		console.error("Missing required fields");
		return;
	}

	try {
		__ctm.form.track(
			"app.calltrackingmetrics.com",
			"FRT472ABB2C5B9B141ADA625CBC5ECC89757EEA49EB5B34BB871F879BC75F94D32B",
			"8644289949",
			{
				country_code: "1",
				name: name,
				phone: phone,
				email: email,
				custom: {
					Order: order,
				},
			}
		);
	} catch (error) {
		console.error("Error tracking form submission:", error);
	}
});
