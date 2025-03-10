/**
 * @file uo-nds-menu.js
 * @author Ahmed Alhaj @wdalhaj
 * @date December 2024
 */


// Mobile menu toggle
const menuBtn = document.querySelector('.mobile-menu__btn');
const closeBtn = document.querySelector('.close_btn');
const headerNav = document.querySelector('.header-nav--full');

menuBtn.addEventListener('click', () => {
    headerNav.style.display = headerNav.style.display === 'flex' ? 'none' : 'flex';
    document.body.classList.toggle('menu-open');
});

closeBtn.addEventListener('click', () => {
    headerNav.style.display = headerNav.style.display === 'flex' ? 'none' : 'flex';
    document.body.classList.toggle('menu-open');
});

// Handle submenu interactions
const menuItems = document.querySelectorAll('.header-menu__item');

menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('header menu item clicked');

        // Check if item is already active
        const isActive = item.classList.contains('header-menu__item--active');
        
        // Remove active class from all menu items
        menuItems.forEach(menuItem => {
            menuItem.classList.remove('header-menu__item--active');
        });

        // Hide all active submenus
        const activeSubmenus = document.querySelectorAll('.header__sub-menu');
        activeSubmenus.forEach(submenu => {
            submenu.classList.remove('header__sub-menu--active');
        });

        // If item wasn't active before, make it active and show its submenu
        if (!isActive && item.classList.contains('has-submenu')) {
            item.classList.add('header-menu__item--active');
            const submenu = item.nextElementSibling;
            if (submenu && submenu.classList.contains('header__sub-menu')) {
                submenu.classList.add('header__sub-menu--active');
            }
        }
    });
});

// Close submenus and remove active class when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.header-nav__menu')) {
        document.querySelectorAll('.header__sub-menu').forEach(submenu => {
            submenu.classList.remove('header__sub-menu--active');
        });
        menuItems.forEach(item => {
            item.classList.remove('header-menu__item--active');
        });
    }
});
