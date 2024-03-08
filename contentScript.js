chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'getSWFLink') {
    var scripts = document.getElementsByTagName('script');
    for (var i = 0; i < scripts.length; i++) {
      var script = scripts[i];
      if (script.innerHTML.includes("swfobject.embedSWF")) {
        var startIndex = script.innerHTML.indexOf("'") + 1;
        var endIndex = script.innerHTML.indexOf("'", startIndex);
        var swfLink = script.innerHTML.substring(startIndex, endIndex);
        sendResponse({ swfLink: swfLink });
        break;
      }
    }
  }
  return true;
});