// to get random video from youtube
function makerandom_q(l){
  var text = "";
  var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for(var i=0; i < l; i++ ){  
    text += char_list.charAt(Math.floor(Math.random() * char_list.length));
  }
  return text;
}

const apiKey = "AIzaSyAPQAlYEomQoPh15um9oawp7fC00mJStpw"
const q = makerandom_q(3);

const url = "https://www.googleapis.com/youtube/v3/search?key=" + apiKey + "&maxResults=50&part=snippet&type=video&q=" +q;
