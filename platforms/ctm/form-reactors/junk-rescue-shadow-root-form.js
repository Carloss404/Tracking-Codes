function handleButtonClick() {
	var fielddLeadForms = document.querySelectorAll("fieldd-lead-form");

	if (fielddLeadForms.length > 0) {
		fielddLeadForms.forEach(function (el) {
			var shadowRoot = el.shadowRoot;
			var submitBtn = shadowRoot.querySelector("button.vfPrakkFNZ4f_IUyItwg");

			if (submitBtn) {
				submitBtn.addEventListener("click", function () {
					var firstName = shadowRoot.querySelector("input[name='firstName']").value;
					var lastName = shadowRoot.querySelector("input[name='lastName']").value;
					var email = shadowRoot.querySelector("input[name='emailID']").value;
					var phone = shadowRoot.querySelector("input[name='phone']").value;

					if (!(firstName && lastName && email && phone)) {
						console.error("Please fill in all fields.");
						return;
					}

					try {
						window.dataLayer = window.dataLayer || [];
						window.dataLayer.push({
							event: "instant-quote-form-submit",
							firstName: firstName,
							lastName: lastName,
							phone: phone,
							email: email,
						});
					} catch (error) {
						console.error("Error tracking form submission:", error);
					}
				});

				return true;
			}
		});
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
