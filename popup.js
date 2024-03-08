document.getElementById('getLinkButton').addEventListener('click', function() {
	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, { action: 'getSWFLink' }, function(response) {
			if (response && response.swfLink) {
				console.log(response.swfLink);
				window.open(response.swfLink);
			}
		});
	});
});