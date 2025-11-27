(function () {
	var submitBtns = document.querySelectorAll("input");

	function handleSubmit(event) {
		var name = document.querySelector("input[name='first_name']").value;
		var phone = document.querySelector("input[name='phone']").value;

		if (!(name && phone)) {
			console.error("Missing required fields");
			return;
		}

		try {
			var btnValue = event.target && event.target.value;

			if (
				typeof btnValue === "string" &&
				(btnValue.includes("GET FREE QUOTE") || btnValue.includes("COTIZACIÓN GRATIS"))
			) {
				window.dataLayer = window.dataLayer || [];
				window.dataLayer.push({
					event: "request-quote",
				});
			}
		} catch (error) {
			console.error("Form submission error:", error);
		}
	}

	submitBtns.forEach(function (submitBtn) {
		submitBtn.addEventListener("click", handleSubmit);
	});
})();
