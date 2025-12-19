(function () {
	window.addEventListener(
		"submit",
		function () {
			if (window.location.pathname.includes("estimates")) {
				var name = document.querySelector("input[name='name']").value;
				var email = document.querySelector("input[name='email']").value;
				var phone = document.querySelector("input[name='phone']").value;
				var itemType = document.querySelector("select[name='itemType']").value;
				var damageDescription = document.querySelector("textarea[name='damageDescription']").value;

				if (!(name && email && phone && itemType && damageDescription)) {
					console.error("Missing required fields");
					return;
				}

				try {
					console.log("Form Values:", {
						name: name,
						email: email,
						phone: phone,
						itemType: itemType,
						damageDescription: damageDescription,
					});
				} catch (error) {
					console.error("Error tracking form submission", error);
				}
			}
		},
		true
	);
})();
