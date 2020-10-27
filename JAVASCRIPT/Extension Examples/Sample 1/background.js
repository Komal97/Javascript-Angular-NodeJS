console.log('background running');

// send message to content.js regarding icon clicking which is a browser action happened in background
chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
    let msg = {
        'text': 'hello'
    }
    chrome.tabs.sendMessage(tab.id, msg);
}

//chrome.runtime.sendMessage(tab.id, msg);          ---> from popup to background