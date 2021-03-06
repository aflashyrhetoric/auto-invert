let toggle;

chrome.storage.sync.get("activated", function(obj){
  toggle = obj.activated;
  console.log(toggle);
}); 

let toggleOnOff = function(tab){
  toggle = !toggle;
  if (toggle) { 
    // Change Icon
    chrome.browserAction.setIcon({path: "on.png", tabId: tab.id});
    // Apply Script + CSS
    // chrome.tabs.executeScript(tab.id, {file: "night.js"});
    import('./night.js').then((nightScript) =>{
      chrome.tabs.executeScript(tab.id, {code: nightScript});
    })
  } else {
    // Change Icon
    chrome.browserAction.setIcon({path: "off.png", tabId: tab.id});
    // Apply Script + CSS
    // chrome.tabs.executeScript(tab.id, {file: "day.js"});
  }
};

chrome.browserAction.onClicked.addListener(toggleOnOff);