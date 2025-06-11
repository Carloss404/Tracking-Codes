window.addEventListener("message", function (event) {
	if (event.origin.includes("jotform.com") && event.data.action === "submission-completed") {
		this.window.dataLayer = this.window.dataLayer || [];
		dataLayer.push({
			event: "jotform-success",
			formId: event.data.formID,
		});
	}
});
