const menuBtn = document.getElementById('menu-btn');
        const closeMenu = document.getElementById('close-menu');
        const mobileMenu = document.getElementById('mobile-menu');
        
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
        });

        closeMenu.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });




        document.addEventListener("DOMContentLoaded", function () {
        const searchIcon = document.querySelector(".search-icon");
        const closeSearch = document.querySelector(".close-search");
        const topSearch = document.querySelector(".top-search");
        const header = document.querySelector(".header");

        // Show search bar and move header down
        searchIcon.addEventListener("click", function () {
            topSearch.style.display = "block";
            header.classList.add("header-move");
        });

        // Hide search bar and move header back up
        closeSearch.addEventListener("click", function () {
            topSearch.style.display = "none";
            header.classList.remove("header-move");
        });
    });




    document.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (window.scrollY > 50) {
            header.style.padding = "10px 20px"; /* Smaller padding */
        } else {
            header.style.padding = "15px 20px"; /* Default padding */
        }
    });



    document.addEventListener("DOMContentLoaded", function () {
        const searchIcon = document.querySelector(".search-icon");
        const closeSearch = document.querySelector(".close-search");
        const topSearch = document.querySelector(".top-search");

        // Show search bar (slide down)
        searchIcon.addEventListener("click", function () {
            topSearch.style.maxHeight = "100px"; // Adjust based on content height
            topSearch.style.opacity = "1";
            topSearch.style.visibility = "visible";
        });

        // Hide search bar (slide up)
        closeSearch.addEventListener("click", function () {
            topSearch.style.maxHeight = "0";
            topSearch.style.opacity = "0";
            topSearch.style.visibility = "hidden";
        });
    });
