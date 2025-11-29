(function () {
	var submitBtns = document.querySelectorAll("button[type='submit']");

	function handleSubmit(event) {
		var name = document.getElementById("cog-0").value;
		var phone = document.getElementById("cog-1").value;
		var email = document.getElementById("cog-2").value;
		var message = document.getElementById("cog-3").value;

		if (!(name && phone && email && message)) {
			console.error("Missing required fields");
			return;
		}

		if (event.target.innerText === "Submit") {
			try {
				__ctm.form.track(
					"app.calltrackingmetrics.com",
					"FRT472ABB2C5B9B141A9A2EDBF8C95D779349DEDECD0DC012CE813804E7DC892277",
					"9417596498",
					{
						country_code: "1",
						name: name,
						phone: phone,
						email: email,
						custom: {
							message: message,
						},
					}
				);
			} catch (error) {
				console.error("Form submission error: ", error);
			}
		}
	}

	submitBtns.forEach(function (btn) {
		btn.addEventListener("click", handleSubmit);
	});
})();
