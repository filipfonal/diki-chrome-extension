chrome.tabs.executeScript( {
    code: "window.getSelection().toString();"
}, function(selection) {
    document.getElementById("diki").src = "https://www.diki.pl/" + selection[0];
});