 //** aug 4 query Selector of image or img src on click or on double click **//
  let myImage = document.querySelector('img');
  
  myImage.onclick = function() {
      let mySrc = myImage.getAttribute('src');
      if(mySrc === 'firefox-icon.png') {
        myImage.setAttribute('src','firefox2.png');
      } else {
        myImage.setAttribute('src','firefox-icon.png');
      }
  }
  
  myImage.ondblclick = function() {
      let mySrc = myImage.getAttribute('src');
      if(mySrc === 'firefox-icon.png') {
        myImage.setAttribute('src','firefox3.png');
      } else {
        myImage.setAttribute('src','firefox-icon.png');
      }
  
  }