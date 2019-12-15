// Do this when the browser extension icon is clicked
chrome.browserAction.onClicked.addListener(function(tab) {
    // Message the active tab to say the extension button has been clicked
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        let activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {
            message: "add_url_clicked"
        });
    });
});

// Listen for a URL to open, and when received, open it in a new tab
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === "open_links_app_with_new_url") {
        chrome.tabs.create({ url: request.url });
    }
});