window.addEventListener("message", function (event) {
	if (event.data.type === "hsFormCallback" && event.data.eventName === "onFormSubmitted") {
		var formData = {
			first_name: event.data.firstname,
			last_name: event.data.lastname,
			email: event.data.email,
			phone: event.data.phone,
			state: event.data.state,
			how_did_you_hear_about_us: event.data.how_did_you_hear_about_us,
			message: event.data.message,
			trailer_type: event.data.trailer_type,
		};

		if (!formData) {
			console.error("Missing required fields");
			return;
		}

		try {
		} catch (error) {
			console.error("Error tracking form submission:", error);
		}
	}
});
