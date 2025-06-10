window.addEventListener("message", function (event) {
	if (event.data.action === "submission-completed") {
		window.dataLayer.push({
			event: "jotform-form-success",
			"hs-form-guid": event.data.formID,
		});
	}
});
