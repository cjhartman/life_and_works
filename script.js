document.addEventListener("DOMContentLoaded", function(event) {
    
    //For the bio side of things
    let bio = document.getElementById('showBio');
    let hiddenBio = document.getElementById("hiddenBio");
    bio.addEventListener('mouseenter', e => {
        hiddenBio.style.display = 'block';
    });
    
    bio.addEventListener('mouseleave', e => {
        hiddenBio.style.display = 'none';
    });

    //For the work side of things
    let work = document.getElementById('showWork');
    let hiddenWork = document.getElementById("hiddenWork");
    work.addEventListener('mouseenter', e => {
        hiddenWork.style.display = 'block';
    });
    
    work.addEventListener('mouseleave', e => {
        hiddenWork.style.display = 'none';
    });
    
});