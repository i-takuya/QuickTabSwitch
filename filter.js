var search = '#search',
tag = 'tab_element';

$(function() {
    $(document).on('keyup', search, function(e) {
        var val =  $.trim($(search).val()).replace(/ +/g, ' ').toLowerCase();

        $(tag).show().filter(function() {
        var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
        console.log(text.indexOf(val));
        return !~text.indexOf(val);
    }).hide();
    });
});
