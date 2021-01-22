function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
var m = getParameterByName('m');
if (m == "1") {
  document.getElementById("message").innerHTML = "<strong>Great! Thanks for filling out your entries for BURNABY BEST OF 2018! Fill out Ballot 2 to increase your chances!</strong>"; 
  
}