define(['jquery'], function($) {
    // when user clicks register, redirect the to the register page
    function registration() {
        $('#registration-button').on('click', function() {
            location.href = './register.html';
        });
    }

    return registration();
});