document.addEventListener("DOMContentLoaded", function(event) {

  /*
    Load me in baby
  */

  window.onload = function showPage() {
    let loadingLogo = document.getElementById("loadingLogo");
    let content = document.getElementById("contentSection")
    setTimeout(show, 3000);

    function show() {
      loadingLogo.classList.add("hide-logo");
      content.classList.add("slowShow");
    }
  }

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

  //For the work side of things
  work.addEventListener('mouseenter', e => {
    hiddenWork.classList.remove('hide-hidden-text');
    hiddenWork.classList.add("show-hidden-text");
  });
  
  work.addEventListener('mouseleave', e => {
    hiddenWork.classList.remove("show-hidden-text");
    hiddenWork.classList.add('hide-hidden-text');
  });

  // Load a new page in place of the last one
  bio.addEventListener("click", e => {
    bio.classList.add("transition-up");
    work.classList.add("transition-down");
    setTimeout(hideContent, 1000);
  });

  // Load a new page in place of the last one
  work.addEventListener("click", e => {
    bio.classList.add("transition-up");
    work.classList.add("transition-down");
    setTimeout(hideContent, 1000);
  })

  function hideContent() {
    bio.classList.add("hide-items");
    work.classList.add("hide-items");
  }

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