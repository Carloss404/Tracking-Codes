(function () {
	var submitButtons = document.querySelectorAll("input[type='submit']");

	function handleSubmit(event) {
		var firstName = document.querySelector("input[name='first_name']").value;
		var lastName = document.querySelector("input[name='last_name']").value;
		var email = document.querySelector("input[name='email_address']").value;
		var phone = document.querySelector("input[name='phone_number']").value;
		var message = document.querySelector("textarea[name='your_message']").value;

		if (!(firstName && lastName && email && phone && message)) {
			console.error("Missing required fields");
			return;
		}

		if (event.target.value === "Submit") {
			try {
				__ctm.form.track(
					"app.calltrackingmetrics.com",
					"FRT472ABB2C5B9B141ABAFA204814699C32FCF99E1B22634E3B2D8E4A704C2B3094",
					"6094388573",
					{
						country_code: "1",
						name: firstName,
						phone: phone,
						email: email,
						custom: {
							"Last Name": lastName,
							message: message,
						},
					}
				);
			} catch (error) {
				console.error("Form submission error:", error);
			}
		}
	}

	submitButtons.forEach(function (button) {
		button.addEventListener("click", handleSubmit);
	});
})();

(function () {
	// Find the chat widget container
	var chatWidgetContainer = document.querySelector("div[class='intercom-with-namespace-4wz414 edrs4yi0']");

	if (!chatWidgetContainer) return;

	// Create a transparent overlay div
	var overlay = document.createElement("div");
	overlay.style.cssText = `
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1000;
		opacity: 0;
		cursor: pointer;
	`;

	// Make sure container is positioned
	chatWidgetContainer.style.position = "relative";

	// Add the overlay to capture clicks
	chatWidgetContainer.appendChild(overlay);

	// Track clicks on the overlay
	overlay.addEventListener("click", function (event) {
		event.stopPropagation();
		console.log("Chat widget clicked (via overlay)");
		console.log("Element:", chatWidgetContainer);

		// Your tracking logic here
		// dataLayer.push, GA, etc.

		// Optional: Forward the click to the iframe after tracking
		var iframe = chatWidgetContainer.querySelector("iframe[name='intercom-launcher-frame']");
		if (iframe) {
			// Temporarily disable overlay to allow iframe to receive click
			overlay.style.pointerEvents = "none";

			// Simulate click on iframe
			setTimeout(function () {
				iframe.click();
				// Re-enable overlay after a short delay
				setTimeout(function () {
					overlay.style.pointerEvents = "auto";
				}, 100);
			}, 0);
		}
	});
})();
