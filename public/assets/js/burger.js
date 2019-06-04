$(function(){
    $('#change-eaten').on('click', function(event){
        var id= $(this).data('id');
        var eaten = $(this).data('eaten');
        var newDevoured = {
            devoured: eaten
        };
        $.ajax('/api/devour', +id, {
            type: 'PUT',
            data: newDevoured
        }).then(function(){
            location.reload();
        })
    })
    $('#new').on('click', function(event){
        event.preventDefault();
        var newData = {
        burger_name: $('input:text').val().trim(),
        devoured: $('#devoured').val()
        }
        console.log(newData);
        $.ajax('/api/post', {
            type: 'POST',
            data: newData
        }).then(function(){
            location.reload();
        })   
    });
});
