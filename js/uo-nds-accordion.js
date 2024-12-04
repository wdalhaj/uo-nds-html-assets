/**
 * @file uo-nds-accordion.js
 * @author Ahmed Alhaj @wdalhaj
 * @date December 2024
 */

// 
// Accordion toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(accordionList => {
        const accordionHeaders = accordionList.querySelectorAll('.accordion-item__header');

        accordionHeaders.forEach(header => {
            header.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent default link behavior

                const accordionItem = header.closest('.accordion-list__item');
                const accordionBody = accordionItem.querySelector('.accordion-item__body');
                const accordionArrow = header.querySelector('.accordion-item__arrow svg');

                // Toggle active class
                accordionItem.classList.toggle('active');

                // Slide toggle for body
                if (accordionBody.style.maxHeight) {
                    accordionBody.style.maxHeight = null;
                    accordionArrow.style.transform = 'rotate(0deg)';
                } else {
                    accordionBody.style.maxHeight = (accordionBody.scrollHeight + 20) + 'px';
                    accordionArrow.style.transform = 'rotate(180deg)';
                }

                // Close other open accordions within the same accordion list
                const otherItems = accordionList.querySelectorAll('.accordion-list__item.active:not(.accordion-list__item:has(.accordion-item__header:hover))');
                otherItems.forEach(item => {
                    if (item !== accordionItem) {
                        const otherBody = item.querySelector('.accordion-item__body');
                        const otherArrow = item.querySelector('.accordion-item__arrow svg');

                        item.classList.remove('active');
                        otherBody.style.maxHeight = null;
                        otherArrow.style.transform = 'rotate(0deg)';
                    }
                });
            });
        });
    });
});
