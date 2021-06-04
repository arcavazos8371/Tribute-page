let myImage = document.querySelector('img');



myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Carl-Jung.jpg') {
      myImage.setAttribute('src','images/Diagram.jpg');
      
    }
    else if(mySrc === 'images/Diagram.jpg') {
      myImage.setAttribute('src','images/Quote.jpg');  
    }
    else{
      myImage.setAttribute('src','images/Carl-Jung.jpg');  
    }
}




