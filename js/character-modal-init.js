(function(){
    var $content = $('#character-relation-closeup').detach();
    $('#character-relation').on('click', function(){
        modal.open({content: $content, width: 680, height: 700});
    });
}());