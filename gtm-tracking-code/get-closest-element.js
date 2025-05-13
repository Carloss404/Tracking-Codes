function getClosestElement(selector) {
	return document.activeElement && document.activeElement.closest(selector);
}

document.addEventListener("click", event => {
	const frameElement = event.target.closest("selector");

	if (frameElement) {
		console.log("Chat frame clicked", frameElement);
	}
});
