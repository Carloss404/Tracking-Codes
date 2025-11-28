(function () {
	window.addEventListener("message", function (event) {
		var msgData = JSON.parse(event.data);

		if (msgData.data && msgData.data.eventName === "Lead" && msgData.data.params && msgData.data.params.label === "Chat") {
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				event: "chat-started",
			});
		}
	});
})();
