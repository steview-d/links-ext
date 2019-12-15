// Listen for a browser click and when received, open a new tab with the url created below
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === "add_url_clicked") {
        // Eventually, this will build the url into an endpoint for the 'links' app
        let destination = window.location.href;
        chrome.runtime.sendMessage({
            message: "open_links_app_with_new_url",
            url: destination
        });
    }
});
