let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Carl-Jung.jpg') {
      myImage.setAttribute('src','images/Diagram.jpg');  
    }
    if(mySrc === 'images/Diagram.jpg') {
      myImage.setAttribute('src','images/Quote.jpg');  
    }
    if(mySrc === 'images/Quote.jpg') {
      myImage.setAttribute('src','images/Carl-Jung.jpg');  
    }
}


