(function () {
	window.addEventListener("message", function (event) {
		if (event.origin === "https://api.leadconnectorhq.com" && event.data[0] === "set-sticky-contacts") {
			var payload = event.data[2];

			var submission = {
				event: "leadconnector-form-submit",
				form_data: {
					full_name: payload.full_name,
					email: payload.email,
					phone: payload.phone,
					message: payload.message,
				},
			};

			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push(submission);
		}
	});
})();
