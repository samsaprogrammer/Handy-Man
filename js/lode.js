 /* page refresh section start */

 function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
    }
    
    function fadeOut(){
        setInterval(loader, 3000);
    }
  
    window.onload = fadeOut();
  
    /* page refresh section end */
