var nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        nav.classList.add('bg-light', 'shadow');
    } else {
        nav.classList.remove('bg-light', 'shadow' );
    }
});

//navbtn
var menuBtn = document.querySelector("navbarNav");
var btns = menuBtn.getElementsByClassName("nav-link");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
}

// Scroll Top
function scrollToTop(){
    window.scrollTo(0,0);
}
