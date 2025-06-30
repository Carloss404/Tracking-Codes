// Contact Form
(window.__ctm_loaded || []).push(function () {
	document.querySelector("input[value='Submit Contact']").addEventListener("click", function () {
		var name = document.getElementById("contactFormName-template--18547975487708__main").value;
		var phone = document.getElementById("ContactFormPhone-template--18547975487708__main").value;
		var email = document.getElementById("contactFormEmail-template--18547975487708__main").value;
		var message = document.getElementById(
			"contactFormMessage-template--18547975487708__main"
		).value;

		if (!(name && phone && email)) {
			console.error("Missing required fields");
			return;
		}

		try {
			__ctm.form.track(
				"app.calltrackingmetrics.com", // the capture host
				"FRT472ABB2C5B9B141ADA6EFCFBEAC389FA5DEDFCA42219BEC3D962E53E3C66F6E5", // this FormReactor
				"9724402321",
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
	});
});

// Door Form
(window.__ctm_loaded || []).push(function () {
	document.querySelector("button[type='submit']").addEventListener("click", function () {
		var firstName = document.getElementById("58386-text-1").value;
		var lastName = document.getElementById("58386-text").value;
		var name = firstName + " " + lastName;

		var email = document.getElementById("58386-email").value;
		var phone = document.getElementById("58386-phone-1").value;
		var message = document.getElementById("58386-text-5").value;

		if (!(name && phone && email)) {
			console.error("Missing required fields");
			return;
		}

		try {
			__ctm.form.track(
				"app.calltrackingmetrics.com", // the capture host
				"FRT472ABB2C5B9B141ADA6EFCFBEAC389FAF9E1C9AD72F1B4C9BD03AA892B4F1F15", // this FormReactor
				"9724402321",
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
	});
});

// Free In-Home Estimate Form
(window.__ctm_loaded || []).push(function () {
	document.querySelector("button[type='submit']").addEventListener("click", function () {
		var name = document.getElementById("69328-text-1").value;
		var email = document.getElementById("69328-email").value;
		var phone = document.getElementById("69328-phone-1").value;
		var message = document.getElementById("69328-textarea").value;

		if (!(name && phone && email)) {
			console.error("Missing required fields");
			return;
		}

		try {
			__ctm.form.track(
				"app.calltrackingmetrics.com", // the capture host
				"FRT472ABB2C5B9B141ADA6EFCFBEAC389FAF9E1C9AD72F1B4C9C28B02D9942DA8AE", // this FormReactor
				"9724402321",
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
	});
});

// Free Kitchen Form
(window.__ctm_loaded || []).push(function () {
	document.querySelector("button[data-next-text='Next']").addEventListener("click", function () {
		var firstName = document.getElementById("52432-text").value;
		var lastName = document.getElementById("52432-text-1").value;
		var name = firstName + " " + lastName;

		var email = document.getElementById("52432-email").value;
		var phone = document.getElementById("52432-phone-1").value;
		var message = document.getElementById("52432-textarea").value;

		if (!(name && phone && email)) {
			console.error("Missing required fields");
			return;
		}

		try {
			__ctm.form.track(
				"app.calltrackingmetrics.com", // the capture host
				"FRT472ABB2C5B9B141ADA6EFCFBEAC389FAF9E1C9AD72F1B4C98347A0367E2FD06B", // this FormReactor
				"9724402321",
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
	});
});
