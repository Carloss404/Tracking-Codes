var submitBtn = document.getElementById("lp-pom-button-31");

submitBtn.addEventListener("click", function () {
	var name =
		(document.getElementById("full_name") && document.getElementById("full_name").value) ||
		(document.getElementById("nombre_completo") &&
			document.getElementById("nombre_completo").value);

	var email =
		(document.getElementById("email") && document.getElementById("email").value) ||
		(document.getElementById("correo_electronico") &&
			document.getElementById("correo_electronico").value);

	var phone =
		(document.getElementById("phone_number") && document.getElementById("phone_number").value) ||
		(document.getElementById("numero_celular") && document.getElementById("numero_celular").value);

	var message =
		(document.getElementById("website_url") && document.getElementById("website_url").value) ||
		(document.getElementById("pagina_web_si_tienes") &&
			document.getElementById("pagina_web_si_tienes").value);

	if (!(name && phone && email)) {
		console.error("Missing required fields");
		return;
	}

	try {
		var trackId = null;
		var btnText = submitBtn.innerText.toUpperCase();

		if (
			btnText.includes("FIX MY ADS") ||
			btnText.includes("CONSULTORÍA GRATIS") ||
			btnText.includes("GET STARTED")
		) {
			trackId = "FRT472ABB2C5B9B141A01CCB099D8230CC4DD273D67D504A43E79076C030382ECA9";
		} else if (btnText.includes("FIX MY SEO") || btnText.includes("IMPROVE MY SEO")) {
			trackId = "FRT472ABB2C5B9B141A01CCB099D8230CC4535C3BE590F00E153DFFBAB3DFB723BF";
		}

		if (trackId) {
			__ctm.form.track("app.calltrackingmetrics.com", trackId, "3056471803", {
				country_code: "1",
				name: name,
				phone: phone,
				email: email,
				custom: {
					message: message,
				},
			});
		}
	} catch (error) {
		console.error("Error tracking form submission:", error);
	}
});
