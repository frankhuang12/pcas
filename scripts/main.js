require.config({
    paths: {
        "jquery": "https://code.jquery.com/jquery-3.2.1.slim.min",
        "bootstrap": "bootstrap.bundle.min"
    },
    shim: {
        "bootstrap": {
            "deps": ["jquery"]
        }
    }
});

require(['jquery', 'bootstrap', 'profile', 'users', 'my_posts', 'applications', 'message'], function($, b, profile, users, my_posts, applications, message) {
    // the modules' return statement is enough to invoke the methods inside, so you don't have to call the function as seen below

    //profile.edit_profile;

    //profile.delete_credentials;

    //users.registration;

    //my_posts.delete_post();
    $('[data-toggle="tooltip"]').tooltip();

    applications.withdraw;
    applications.complete;
    applications.rate;
    message.markAsRead;
});