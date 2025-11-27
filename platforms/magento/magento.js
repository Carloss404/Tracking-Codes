function sha256(str, callback) {
	var buffer = new TextEncoder().encode(str);

	crypto.subtle.digest("SHA-256", buffer).then(function (hash) {
		var bytes = new Uint8Array(hash);
		var hex = [];

		for (var i = 0; i < bytes.length; i++) {
			var v = bytes[i].toString(16);

			if (v.length < 2) v = "0" + v;

			hex.push(v);
		}

		callback(hex.join(""));
	});
}

function sendEnhancedConversion() {
	var emailField = document.querySelector("#customer-email");
	var phoneField = document.querySelector("#customer-phone");

	var email = emailField ? emailField.value.trim().toLowerCase() : "";
	var phone = phoneField ? phoneField.value.trim() : "";

	function proceed(hashedEmail, hashedPhone) {
		gtag("set", "user_data", {
			email: hashedEmail,
			phone_number: hashedPhone,
		});

		gtag("event", "conversion", {
			send_to: "AW-XXXXXXX/YYYYYYY",
			value: window.purchaseValue,
			currency: "USD",
			transaction_id: window.orderId,
		});
	}

	if (email && phone) {
		sha256(email, function (hashedEmail) {
			sha256(phone, function (hashedPhone) {
				proceed(hashedEmail, hashedPhone);
			});
		});
	} else if (email) {
		sha256(email, function (hashedEmail) {
			proceed(hashedEmail, "");
		});
	} else if (phone) {
		sha256(phone, function (hashedPhone) {
			proceed("", hashedPhone);
		});
	} else {
		proceed("", "");
	}
}

document.addEventListener("DOMContentLoaded", function () {
	if (window.orderId && window.purchaseValue) {
		sendEnhancedConversion();
	}
});
