define(['jquery', 'functions'], function($, f) {
    // deletes user's post
    function delete_post() {
        f.delete_item('form.my-post');
    }

    return delete_post();
});