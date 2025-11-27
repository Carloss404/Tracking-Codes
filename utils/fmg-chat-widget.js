window.addEventListener("message", function (event) {
	if (
		event.data.type === "EVENT_SEND_MESSAGE" &&
		event.data.type !== "EVENT_SEND_MESSAGE_CONFIRMATION"
	) {
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			event: "send_message",
		});
	}
});
