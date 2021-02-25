let contextMenuItem = {
	id: "web-referance",
	title: "Copy the web referance",
	contexts: ["selection"],
};

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener((clickData, tab) => {
	console.log(clickData.selectionText);
	const refLink = `${tab.url.toString()}#:~:text=${clickData.selectionText}`;
	console.log("SELECTED WORD", refLink);

	copyTextToClipboard(refLink);
	alert(`You mentioned this section: "${clickData.selectionText}"
	The referenced URL copied your clipboard!`);
});

function copyTextToClipboard(text) {
	//Create a textbox field where we can insert text to.
	var copyFrom = document.createElement("textarea");

	//Set the text content to be the text you wished to copy.
	copyFrom.textContent = text;

	//Append the textbox field into the body as a child.
	//"execCommand()" only works when there exists selected text, and the text is inside
	//document.body (meaning the text is part of a valid rendered HTML element).
	document.body.appendChild(copyFrom);

	//Select all the text!
	copyFrom.select();

	//Execute command
	document.execCommand("copy");

	//(Optional) De-select the text using blur().
	copyFrom.blur();

	//Remove the textbox field from the document.body, so no other JavaScript nor
	//other elements can get access to this.
	document.body.removeChild(copyFrom);
}
