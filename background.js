{
  "name": "Awesome Test Extension",
   
  "background": {
    "scripts": [
                "lib/jquery.js",
                "playNum.js",
                "runner.js",
                "selector.js",
                "twoRunners.js"
                "background.js"],
    "persistent": false
  }

}
chrome.runtime.onInstalled.addListener(function()){
    chrome.storage.sync.set(
    {
    config:[
        {
            domain:'docker',
            color:'#2496ed'/
        },
    ],
    },
        null
  );
    
}
