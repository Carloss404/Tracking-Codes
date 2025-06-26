// Manual Form Tracking

function manualFormTracking() {
	var button =
		document.getElementById("gform_submit_button_1") ||
		document.getElementById("gform_submit_button_5") ||
		document.getElementById("gform_submit_button_6");

	button.addEventListener("click", function () {
		var name = document.querySelector("input[name='input_2']").value;
		var email = document.querySelector("input[name='input_3']").value;
		var phone = document.querySelector("input[name='input_8']").value;
		var message = document.querySelector("textarea[name='input_6']").value;

		if (name && email && phone) {
			try {
				__ctm.form.track(
					"app.calltrackingmetrics.com", // the capture host
					"FRT472ABB2C5B9B141A44E100603088102CA0215BA574CEA91683CC38D53E13B8AD", // this FormReactor
					"8559611104",
					{
						country_code: "1", // the expected country code e.g. +1, +44, +55, +61, etc... the plus is excluded
						name: name,
						phone: phone,
						email: email,
						custom: {
							message: message,
						},
					}
				);
			} catch (error) {
				console.error("Error tracking form submission", error);
			}
		}
	});
}

// REST API Form Tracking

function restAPIFormTracking() {
	var form =
		document.getElementById("gform_6") ||
		document.getElementById("gform_5") ||
		document.getElementById("gform_1");

	var accessKey;
	var secretKey;

	if (form) {
		function getUrlParameter(name) {
			var regex = new RegExp("[?&]" + name + "=([^&#]*)");
			var results = regex.exec(window.location.search);
			return results ? decodeURIComponent(results[1].replace(/\+/g, " ")) : "";
		}
	}

	form.addEventListener("submit", function (event) {
		event.preventDefault();

		var name = document.querySelector("input[name='input_2']").value;
		var email = document.querySelector("input[name='input_3']").value;
		var phone = document.querySelector("input[name='input_8']").value;
		var message = document.querySelector("textarea[name='input_6']").value;

		var gclid = getUrlParameter("gclid");
		var campaignId = getUrlParameter("campaign_id");
		var adgroupId = getUrlParameter("adgroup_id");
		var creativeId = getUrlParameter("creative_id");
		var formId = getUrlParameter("form_id");

		var formData = new URLSearchParams();
		formData.append("caller_name", name);
		formData.append("email", email);
		formData.append("phone_number", phone);
		formData.append("custom_fields[message]", message);
		if (gclid) formData.append("paid_attribution[gclid]", gclid);
		if (campaignId) formData.append("paid_attribution[campaign_id]", campaignId);
		if (adgroupId) formData.append("paid_attribution[adgroup_id]", adgroupId);
		if (creativeId) formData.append("paid_attribution[creative_id]", creativeId);
		if (formId) formData.append("paid_attribution[form_id]", formId);

		var url =
			"https://api.calltrackingmetrics.com/api/v1/formreactor/FRT472ABB2C5B9B141A44E100603088102CA0215BA574CEA91683CC38D53E13B8AD?key=IqolisGnvyoD-xwPp9Fo0iu-kfYfDLj_hFk5F5vwuTk6mKu0";

		fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: formData.toString(),
		})
			.then(function (response) {
				if (response.ok) {
					console.log("Form submission tracked successfully");
				} else {
					console.error("Error tracking form submission", response.statusText);
				}
			})
			.catch(function (error) {
				console.error("Error tracking form submission", error);
			});
	});
}
