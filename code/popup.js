document.addEventListener('DOMContentLoaded', function () {

  // var test= document.getElementById("firstText").innerHTML;
  // document.getElementById("secondText").innerHTML;
  var parts = window.location.hash.substring(1).split('|')
  var url = window.atob(parts[0]);
  var title = window.atob(parts[1]);
  
});

