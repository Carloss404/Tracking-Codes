window.addEventListener("message", function (event) {
	if (event.data.event === "calendly.event_scheduled") {
		window.dataLayer.push({
			event: "calendly-booking-scheduled",
		});
	}
});
