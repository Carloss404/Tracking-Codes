(function () {
	var submitButton = document.querySelector("button[name='et_builder_submit_button']");

	function handleSubmit() {
		var name = document.querySelector("input[name='et_pb_contact_name_0']").value;
		var email = document.querySelector("input[name='et_pb_contact_email_0']").value;
		var phone = document.querySelector("input[name='et_pb_contact_phone_0']").value;
		var message = document.querySelector("textarea[name='et_pb_contact_message_0']").value;

		if (!(name && email && phone && message)) {
			console.error("Missing required fields");
			return;
		}

		try {
			__ctm.form.track(
				"app.calltrackingmetrics.com",
				"FRT472ABB2C5B9B141AF2EB0C390056D17335CA865ABAB2D78B8D979A2010270DA3",
				"3058454359",
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

	submitButton.addEventListener("click", handleSubmit);
})();
