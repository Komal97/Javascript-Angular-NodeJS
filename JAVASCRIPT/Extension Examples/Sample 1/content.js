console.log('chrome extension go');

// catch message from background.js
chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {

    console.log(message);
    if (message.text === 'hello') {
        paragraphs = document.getElementsByTagName('p');
        for (let p of paragraphs) {
            p.style['background-color'] = '#FF00FF';
        }
    }
}