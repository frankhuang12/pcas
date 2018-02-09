define(['jquery'], function($) {
    return {
        // deleting items from the view
        delete_item: function(item) {
            $(document).on('submit', item, function(e) {
                e.preventDefault();

                $(this).remove();
            });
        }
    }
});