// Listen for a browser click and when received, open a new tab with the url created below
if (window.contentScriptExists !== true) {
    window.contentScriptExists = true;
    chrome.runtime.onMessage.addListener(request => {
        if (request.message === "add_url_clicked") {
            // Get URL to send to app
            let destination = window.location.href;

            localStorage.setItem("url", destination);
            chrome.runtime.sendMessage({
                message: "open_links_app_with_new_url",
                app: "https://links-sw.herokuapp.com/app/_import-url",
                destination: destination
            });
        }
    });
}
