console.log('I am a content script');

function makerandom_q(l){
  var text = "";
  var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for(var i=0; i < l; i++ ){  
    text += char_list.charAt(Math.floor(Math.random() * char_list.length));
  }
  return text;
}

// api key from youtube
const apiKey = "AIzaSyAPQAlYEomQoPh15um9oawp7fC00mJStpw"

// get random q for youtube search
const q = makerandom_q(3);
const url = "https://www.googleapis.com/youtube/v3/search?key=" + apiKey + "&videoDuration=short&maxResults=50&part=snippet&type=video&q=" +q;

// get video element from DOM of youtube page
const videoElement = document.querySelector('video');

videoElement.addEventListener('ended', async (event) => {
    console.log('video ended');
    const response = await fetch(url, {
      method: "GET",
    });
    const result = await response.json();
    const video = result.items[Math.floor(Math.random() * result.items.length)];
    const newUrl = `https://www.youtube.com/watch?v=${video.id.videoId}`;
    console.log(newUrl);
    // open link in same tab
    window.location.href = newUrl;
});


document.addEventListener('click', () => alert('Is this video anoying? Do you hate it?!'));
