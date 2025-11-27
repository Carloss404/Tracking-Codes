(function () {
	function setUTMFields() {
		try {
			var utmData = localStorage.getItem("utm_data");
			if (!utmData) return;

			var parsedData = JSON.parse(utmData);
			if (typeof parsedData !== "object") return;

			var interval = setInterval(function () {
				var form = document.getElementById("mktoForm_8");
				if (!form) return;

				clearInterval(interval);

				var utmFields = {
					utm_source: ["utm_source", "utmsource"],
					utm_medium: ["utm_medium", "uTMMedium"],
					utm_campaign: ["utm_campaign", "uTMCampaign"],
					utm_term: ["utm_term", "uTMTerm"],
					utm_content: ["utm_content", "uTMContent"],
				};

				for (var key in utmFields) {
					if (!utmFields.hasOwnProperty(key)) continue;

					var value = parsedData[key];
					if (!value) continue;

					var names = utmFields[key];
					for (var i = 0; i < names.length; i++) {
						var field = form.querySelector('[name="' + names[i] + '"]');
						if (field && !field.value) {
							field.value = value;
							break;
						}
					}
				}
			}, 1000);
		} catch (error) {
			console.error("UTM localStorage script error: ", error);
		}
	}

	if (document.readyState === "complete") {
		setUTMFields();
	} else {
		window.addEventListener("load", setUTMFields);
	}
})();
