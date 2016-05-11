// Handle sent tough button
$(function(){
    $('#sendTough').on('click', function(e){
        var parameters = { name: $('#input').val() };
        $.post('/', parameters, function(data) {
            $('#story').html(data.message);
        });
    });
});
