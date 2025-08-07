var maxAttempts = 50;
var attempts = 0;

var chatFinderInterval = setInterval(function () {
	var inboxOnlineStoreChat = document.querySelector("inbox-online-store-chat");

	if (inboxOnlineStoreChat && inboxOnlineStoreChat.shadowRoot) {
		clearInterval(chatFinderInterval);

		setupButtonObserver(inboxOnlineStoreChat.shadowRoot);
	} else {
		attempts++;
		if (attempts >= maxAttempts) {
			clearInterval(chatFinderInterval);
		}
	}
}, 100);

function setupButtonObserver(shadowRoot) {
	var setupListener = function () {
		var chatButton = shadowRoot.querySelector("button.hover-effect-button");

		if (chatButton) {
			chatButton.addEventListener("click", function () {
				var firstName = shadowRoot.querySelector("input[placeholder='First Name']").value;
				var lastName = shadowRoot.querySelector("input[placeholder='Last Name']").value;
				var email = shadowRoot.querySelector("input[placeholder='Email Address']").value;

				if (!(firstName && lastName && email)) {
					console.error("Missing required fields");
					return;
				}

				try {
					window.dataLayer = window.dataLayer || [];
					window.dataLayer.push({
						event: "chat_started",
						first_name: firstName,
						last_name: lastName,
						email: email,
					});
				} catch (error) {
					console.error("Error tracking chat button click:", error);
				}
			});

			observer.disconnect();
		}
	};

	var observer = new MutationObserver(setupListener);

	observer.observe(shadowRoot, {
		childList: true,
		subtree: true,
	});

	setupListener();
}
