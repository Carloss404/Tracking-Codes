var Tawk_API = Tawk_API || {};

Tawk_API.onChatStarted = function () {
	if (Tawk_API.isVisitorEngaged()) {
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({ event: "chat-started" });
	}
};
