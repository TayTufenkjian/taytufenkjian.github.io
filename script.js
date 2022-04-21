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
})


