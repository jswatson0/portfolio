$('#notify').click(function() {
    $(this).slideUp().empty();
});

$(function(){
    $('#notify').html('Welcome to the test page!').slideDown();
});