chrome.tabs.onUpdated.addListener(async (tabId, tab) => {
  if (tab.url && tab.url.includes("youtube.com/watch")){
    console.log("executing content script")
    chrome.scripting.executeScript({
      target: {tabId: tabId},
      files: ['./contentScript.js','popup.js'],
  });
  
  }
});

chrome.webNavigation.onCompleted.addListener(async (tab) => {
  if(tab.frameId==0){
    //logic
  
  
  }

});




// chrome.tabs.onUpdated.addListener(async (tabId, tab) => {
//   if (tab.url && tab.url.includes("youtube.com/watch")) {
//     chrome.tabs.sendMessage(tabId, {type: 'getDoc'}, async (doc) => {
//       console.log(doc);
//     });
//   }
// });

// // to get random video from youtube
// function makerandom_q(l){
//   var text = "";
//   var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//   for(var i=0; i < l; i++ ){  
//     text += char_list.charAt(Math.floor(Math.random() * char_list.length));
//   }
//   return text;
// }

// const apiKey = "AIzaSyAPQAlYEomQoPh15um9oawp7fC00mJStpw"
// const q = makerandom_q(3);

// const url = "https://www.googleapis.com/youtube/v3/search?key=" + apiKey + "&maxResults=50&part=snippet&type=video&q=" +q;



// chrome.tabs.onUpdated.addListener(async (tabId, tab) => {
//   if (tab.url && tab.url.includes("youtube.com/watch")) {
//     // Get all videos of the random list 
//     console.log("I am on watch page from background script");
//     const response = await fetch(url, {
//       method: "GET",
//     });
    
//     const result = await response.json();
    
//     const video = result.items[Math.floor(Math.random() * result.items.length)];
    
//     const newUrl = `https://www.youtube.com/watch?v=${video.id.videoId}`;
    
//     console.log(newUrl);
    
    
//     // open link in same tab
//     // chrome.tabs.update(tabId, {url: newUrl});
//   }
// })

// chrome.tabs.onUpdated.addListener((tab) => {
  //   if (tab.url && tab.url.includes("youtube.com/watch")) {
    //   console.log("I am on watch page from background script");
    //   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     files: ["contentScript.js"]
//   });
// }});

// const test = async () => {
//   const response = await fetch(url, {
//     method: "GET",
//   });
  
//   const result = await response.json();
  
//   console.log(result);
// }

// test()