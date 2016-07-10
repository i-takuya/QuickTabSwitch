var tabs = '#tab_list',
tag = '#div tab_element';

$(function() {
    $(document).on('keyup', tabs, function(e) {
        var val =  $.trim($(tabs).val()).replace(/ +/g, ' ').toLowerCase();

        $(tag).show().filter(function() {
        var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
        console.log(text.indexOf(val));
        return !~text.indexOf(val);
    }).hide();
    });
});
