var button = document.querySelector("a[href='#submit-form']");

button.addEventListener("click", function () {
	var name = document.querySelector("input[name='name'").value;
	var email = document.querySelector("input[name='email']").value;
	var phone = document.querySelector("input[name='phone']").value;

	if (name && email && phone) {
		try {
			__ctm.form.track(
				"app.calltrackingmetrics.com", // the capture host
				"FRT472ABB2C5B9B141AF7C3E89173DEAFD542C7DC6AD9A8E9FD682D3895CFE21CE8", // this FormReactor
				"7027293171",
				{
					country_code: "1", // the expected country code e.g. +1, +44, +55, +61, etc... the plus is excluded
					name: name,
					phone: phone,
					email: email,
					custom: {},
				}
			);
		} catch (error) {
			console.error("Error tracking form submission", error);
		}
	}
});
