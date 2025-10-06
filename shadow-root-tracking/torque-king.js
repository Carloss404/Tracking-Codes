var isListenerAttached = false;

function handleButtonClick() {
	if (isListenerAttached) {
		return true;
	}

	var inboxOnlineStoreChat = document.querySelector("inbox-online-store-chat");

	if (inboxOnlineStoreChat && inboxOnlineStoreChat.shadowRoot) {
		var shadowRoot = inboxOnlineStoreChat.shadowRoot;
		var chatButton = shadowRoot.querySelector(
			"button[class='chat-toggle chat-toggle--#000000 chat-toggle--icon-button chat-toggle--text-button chat-toggle--bottom-right']"
		);

		if (chatButton) {
			chatButton.addEventListener("click", function () {
				try {
					window.dataLayer = window.dataLayer || [];
					window.dataLayer.push({
						event: "chat_button_clicked",
					});
				} catch (error) {
					console.error("Error tracking chat button click:", error);
				}
			});

			isListenerAttached = true;
			return true;
		}
	}

	return false;
}

var maxAttempts = 30;
var attempts = 0;
var interval = setInterval(function () {
	if (handleButtonClick() || attempts >= maxAttempts) {
		clearInterval(interval);
	}
	attempts++;
}, 100);

// Buy with SHOP
document.querySelector("shop-pay-wallet-button").addEventListener("click", function () {
	try {
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			event: "shop_button_clicked",
		});
	} catch (error) {
		console.error("Error tracking shop button click:", error);
	}
});
