require.config({
    paths: {
        "jquery": "jquery-3.3.1.min",
        "bootstrap": "bootstrap.bundle.min"
    },
    shim: {
        "bootstrap": {
            "deps": ["jquery"]
        }
    }
});

require(['jquery', 'bootstrap', 'profile', 'users', 'my_posts', 'applications', 'message', 'edit-profile'], function($, b, profile, users, myPosts, applications, message, editProfile) {
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