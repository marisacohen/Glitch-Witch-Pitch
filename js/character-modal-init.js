(function(){
    var $content = $('#character-relation-closeup').detach();
    $('#character-relation').on('click', function(){
        modal.open({content: $content, width: 1200, height: 780});
    });
}());