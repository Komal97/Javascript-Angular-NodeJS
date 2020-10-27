let userinput = document.getElementById('userinput');

// call each time while typing
//userinput.input(function() {
userinput.addEventListener('keypress', function() {
    let params = {
        active: true,
        currentWindow: true
    }

    chrome.tabs.query(params, function(tabs) {

        console.log(tabs);
        //let msg = userinput.value;
        let msg = {
            'text': 'hello'
        };
        chrome.tabs.sendMessage(tabs[0].id, msg);
    });

});