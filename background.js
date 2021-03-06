// Do this when the browser extension icon is clicked
chrome.browserAction.onClicked.addListener(tab => {
    // inject content.js into activeTab
    chrome.tabs.executeScript(tab.id, {
        file: "content.js"
    });
    // Message the active tab to say the extension button has been clicked
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        let activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {
            message: "add_url_clicked"
        });
    });
});

// Listen for a URL and when received, open the app and append the requested
// URL using HTTP GET
chrome.runtime.onMessage.addListener(request => {
    if (request.message === "open_links_app_with_new_url") {
        chrome.tabs.create({
            url: request.app + "/?url=" + request.destination
        });
    }
});
