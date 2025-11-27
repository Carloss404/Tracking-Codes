window.addEventListener("message", function (event) {
	if (event.origin.includes("jotform.com") && event.data.action === "submission-completed") {
		window.dataLayer = window.dataLayer || [];
		dataLayer.push({
			event: "jotform-success",
			formId: event.data.formID,
		});
	}
});
