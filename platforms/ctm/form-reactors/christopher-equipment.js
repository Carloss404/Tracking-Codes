(function () {
	var button = document.getElementById("submitBtn");

	function handleSubmit() {
		var firstName = document.querySelector("input[name='firstName']").value;
		var lastName = document.querySelector("input[name='lastName']").value;
		var name = firstName + " " + lastName;
		var email = document.querySelector("input[name='email']").value;
		var phone = document.getElementById("phone").value;
		var message = document.querySelector("textarea[name='message']").value;

		if (!(firstName && lastName && email && phone && message)) {
			console.error("Missing required fields");
			return;
		}

		try {
			__ctm.form.track(
				"app.calltrackingmetrics.com",
				"FRT472ABB2C5B9B141A3AD22110C693BE4E9DC0F96FD737587B192C554999889832",
				"2566355736",
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
	}

	button.addEventListener("click", handleSubmit);
})();
