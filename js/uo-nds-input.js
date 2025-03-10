/**
 * @file uo-nds-menu.js
 * @author Ahmed Alhaj @wdalhaj
 * @date March 2025
 */


// Add focus class on input focus
document.querySelectorAll('.input__field').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focus');
    });
    input.addEventListener('blur', function() {
        this.parentElement.classList.remove('focus');
    });
});