define(['jquery', 'functions'], function($, f) {
    $.ajax({
        method: 'GET',
        url: '/get/user-profile-description',
        success: function(resp) {
            // populate inputs with data
        }
    });
});