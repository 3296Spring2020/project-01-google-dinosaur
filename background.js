var contextMenus = {};

contextMenus.createGame =
    chrome.contextMenus.create(
        {
            "title": "Awesome Testing extension",
            "contexts":["editable"]
        },
        function () {
            if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError.message);
            }
        }

    );
chrome.contextMenus.onVisited.addListener(contextMenuHandler);

function contextMenuHandler(info, tab) {
    if (info.menuItemId === contextMenus.createGame) {
        console.log("hii");
        chrome.tabs.executeScript(
            {
                file: "gaming.html"

            }
        );
    } 

    
}
