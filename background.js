chrome.omnibox.onInputEntered.addListener(function (text) {
	var createProperties = {
		url : "http://search.aol.com/aol/search?q="
		 + encodeURIComponent(text)
	};
	chrome.tabs.create(createProperties);
});
chrome.omnibox.onInputStarted
.addListener(function () {
	var suggestion = {
		description : "Search using America Online Web Search for the query: %s "
	}
	chrome.omnibox.setDefaultSuggestion(suggestion);
});
