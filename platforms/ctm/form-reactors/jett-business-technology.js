<<<<<<< HEAD:Form-Tracking/jett-business-technology.js
var button =
	document.querySelectorAll('button[class="elementor-button elementor-size-sm"]').textContent ||
	document.getElementById("gform_submit_button_1").textContent;

if (button) {
	button.addEventListener("click", function () {
		var firstName =
			document.getElementById("form-field-name").value ||
			document.getElementById("input_1_4_3").value;
		var latName =
			document.getElementById("form-field-field_d29e68e").value ||
			document.getElementById("input_1_4_6").value;
		var phone =
			document.getElementById("form-field-field_06507b1").value ||
			document.getElementById("input_1_5").value;
		var email =
			document.getElementById("form-field-email").value ||
			document.getElementById("input_1_2").value;
		var interest =
			document.querySelector('input[name="form_fields[field_e9e4b2f][]"]:checked').value ||
			document.querySelector('input[name="input_9.4"]:checked').value;
		var message =
			document.getElementById("form-field-message").value ||
			document.getElementById("input_1_3").value;

		if (!(firstName && phone && email)) {
			console.error("Missing required fields");
			return;
		}

		try {
			window.dataLayer = window.dataLayer || [];
			dataLayer.push({
				event: "get_started_form_submit",
			});
		} catch (error) {
			console.error("Error tracking form submission:", error);
		}
	});
}
=======
var button =
	document.querySelectorAll('button[class="elementor-button elementor-size-sm"]').textContent ||
	document.getElementById("gform_submit_button_1").textContent;

if (button) {
	button.addEventListener("click", function () {
		var firstName =
			document.getElementById("form-field-name").value ||
			document.getElementById("input_1_4_3").value;
		var latName =
			document.getElementById("form-field-field_d29e68e").value ||
			document.getElementById("input_1_4_6").value;
		var phone =
			document.getElementById("form-field-field_06507b1").value ||
			document.getElementById("input_1_5").value;
		var email =
			document.getElementById("form-field-email").value ||
			document.getElementById("input_1_2").value;
		var interest =
			document.querySelector('input[name="form_fields[field_e9e4b2f][]"]:checked').value ||
			document.querySelector('input[name="input_9.4"]:checked').value;
		var message =
			document.getElementById("form-field-message").value ||
			document.getElementById("input_1_3").value;

		if (!(firstName && phone && email)) {
			console.error("Missing required fields");
			return;
		}

		try {
			window.dataLayer = window.dataLayer || [];
			dataLayer.push({
				event: "get_started_form_submit",
			});
		} catch (error) {
			console.error("Error tracking form submission:", error);
		}
	});
}
>>>>>>> 660ef71ecb51b07091074f10b5304165e084cd44:platforms/ctm/jett-business-technology.js
