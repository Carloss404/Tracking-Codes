window.addEventListener("message", function (event) {
	if (event.data.event === "calendly.event_scheduled") {
		var dataLayer = window.dataLayer || [];
		dataLayer.push({
			event: "calendly_scheduled",
		});
	}
});
