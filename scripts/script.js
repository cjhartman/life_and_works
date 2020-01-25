document.addEventListener("DOMContentLoaded", function(event) {
    
    //For the bio side of things
    let bio = document.getElementById('showBio');
    let hiddenBio = document.getElementById("hiddenBio");
    bio.addEventListener('mouseenter', e => {
        hiddenBio.style.opacity = '1';
        hiddenBio.style.transition = '.3s';
        hiddenBio.style.transitionTimingFunction = 'ease-in';
        hiddenBio.style.transform = 'translateY(10%)';
    });
    
    bio.addEventListener('mouseleave', e => {
        hiddenBio.style.transitionTimingFunction = 'ease-in';
        hiddenBio.style.transform = 'translateY(-10%)';
        hiddenBio.style.opacity = '0';
    });

    //For the work side of things
    let work = document.getElementById('showWork');
    let hiddenWork = document.getElementById("hiddenWork");
    work.addEventListener('mouseenter', e => {
        hiddenWork.style.opacity = '1';
        hiddenWork.style.transition = '.3s';
        hiddenWork.style.transitionTimingFunction = 'ease-in';
        hiddenWork.style.transform = 'translateY(10%)';
    });
    
    work.addEventListener('mouseleave', e => {
        hiddenWork.style.transitionTimingFunction = 'ease-in';
        hiddenWork.style.transform = 'translateY(-10%)';
        hiddenWork.style.opacity = '0';
    });

    // stop scrolling on home page
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