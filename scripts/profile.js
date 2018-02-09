define(['jquery', 'functions'], function($, f) {
    // when user clicks edit, redirect them to the edit profile page
    function edit_profile() {
        $('#edit-profile-button').on('click', function() {
            location.href = './edit-profile.html';
        });
    }

    // deletes the credential from the user profile
    function delete_credentials() {
        f.delete_item('form.delete-credential');
    }

    function displayFilename() {
        $('.custom-file-input').on('change', function() {
            let filepath = $(this).val();
            let lastSlash = filepath.lastIndexOf('\\');
            let filename = filepath.slice(lastSlash + 1);

            $('#upload-filename').html(filename)
        })
    }

    return {
        edit_profile: edit_profile(),
        delete_credentials: delete_credentials(),
        displayFilename: displayFilename()
    }
});