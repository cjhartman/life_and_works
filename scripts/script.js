document.addEventListener("DOMContentLoaded", function(event) {

    /*
      Start Home Page functionality
    */
    let bio = document.getElementById('showBio');
    let hiddenBio = document.getElementById("hiddenBio");
    let work = document.getElementById('showWork');
    let hiddenWork = document.getElementById("hiddenWork");
    
    //For the bio side of things
    bio.addEventListener('mouseenter', e => {
      hiddenBio.classList.remove('hide-hidden-text');
      hiddenBio.classList.add("show-hidden-text");
    });
    
    bio.addEventListener('mouseleave', e => {
      hiddenBio.classList.remove("show-hidden-text");
      hiddenBio.classList.add('hide-hidden-text');
    });

    bio.addEventListener("click", e => {
      bio.classList.add("transition-up");
      work.classList.add("transition-down");
    })

    //For the work side of things
    work.addEventListener('mouseenter', e => {
      hiddenWork.classList.remove('hide-hidden-text');
      hiddenWork.classList.add("show-hidden-text");
    });
    
    work.addEventListener('mouseleave', e => {
      hiddenWork.classList.remove("show-hidden-text");
      hiddenWork.classList.add('hide-hidden-text');
    });

    /*
      End Home Page functionality
    */

    // // stop scrolling on home page
    function preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault)
          e.preventDefault();
        e.returnValue = false;  
      }
      
      document.getElementById('home').onmousewheel = function(e) { 
        document.getElementById('home').scrollTop -= e. wheelDeltaY; 
        preventDefault(e);
      }
    
});