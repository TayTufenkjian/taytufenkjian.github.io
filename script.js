document.addEventListener('DOMContentLoaded', function() {

    // Get all nav items
    let navItems = document.querySelectorAll('nav ul li');

    // Listen for a click on each nav item
    navItems.forEach(item => {
        item.addEventListener('click', event => {

            // Scroll to the section of the page that corresponds to the nav item
            let id = item.className
            document.getElementById(id).scrollIntoView({behavior: 'smooth'});

        })
    })

    // Hide mobile menu if window is resized to a large enough width
    let mobileMenu = document.querySelector('#mobile-menu');
    window.onresize = function () {
        if (window.innerWidth > 670 && mobileMenu.style.display === 'block') {
            mobileMenu.style.display = 'none';
        }
    }
})

function toggleNav() {
    let mobileMenu = document.querySelector('#mobile-menu');
    if (mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
    } else {
        mobileMenu.style.display = 'block';
    }
}
