function getClosestElement(selector) {
	return document.activeElement && document.activeElement.closest(selector);
}

document.addEventListener("click", function (event) {
	const frameElement = event.target.closest("selector");

	if (frameElement) {
		console.log("Chat frame clicked", frameElement);
	}
});
