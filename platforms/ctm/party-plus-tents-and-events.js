// Contact Form
document.addEventListener("DOMContentLoaded", function () {
	document.querySelector(".frm_button_submit").addEventListener("click", function () {
		var name = document.querySelector("input[name='item_meta[1]']").value;
		var phone = document.querySelector("input[name='item_meta[7]']").value;
		var email = document.querySelector("input[name='item_meta[3]']").value;
		var message = document.querySelector("textarea[name='item_meta[5]']").value;

		if (!(name && phone && email)) {
			console.error("Missing required fields");
			return;
		}

		try {
			__ctm.form.track(
				"app.calltrackingmetrics.com", // the capture host
				"FRT472ABB2C5B9B141A44F6B85642DF7AF9BF8F286ACD49D5E7F9F9D3FDAA4C44C6",
				"3526752054",
				{
					country_code: "1",
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
	});

	document
		.querySelectorAll("form[action='https://partyplusgrandrent.com/']")[2]
		.addEventListener("submit", function () {
			var firstName = document.querySelector("input[name='first_name']").value;
			var lastName = document.querySelector("input[name='last_name']").value;
			var name = firstName + " " + lastName;

			var phone = document.querySelector("input[name='phone_number']").value;
			var email = document.querySelector("input[name='email_address]").value;
			var message = document.querySelector("textarea[name='message']").value;

			if (!(name && phone && email)) {
				console.error("Missing required fields");
				return;
			}

			try {
				__ctm.form.track(
					"app.calltrackingmetrics.com", // the capture host
					"FRT472ABB2C5B9B141A44F6B85642DF7AF9BF8F286ACD49D5E7F9F9D3FDAA4C44C6",
					"3526752054",
					{
						country_code: "1",
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
		});
});

// Cart Form
document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("yith-ywraq-default-form").addEventListener("submit", function () {
		var firstName = document.getElementById("first_name").value;
		var lastName = document.getElementById("last_name").value;
		var fullName = firstName + " " + lastName;

		var email = document.getElementById("email").value;
		var phone = document.getElementById("Phone").value;
		var message = document.getElementById("message").value;

		if (fullName && email && phone) {
			try {
				__ctm.form.track(
					"app.calltrackingmetrics.com", // the capture host
					"FRT472ABB2C5B9B141A44F6B85642DF7AF9BF8F286ACD49D5E70DF6C10FC17526A7", // this FormReactor
					"3526752054",
					{
						country_code: "1", // the expected country code e.g. +1, +44, +55, +61, etc... the plus is excluded
						name: fullName,
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
});
