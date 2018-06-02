(function(){
    var $modal_one = $('#character-relation-closeup').detach();
    //var $modal_two = $('#memoryGlitchCloseUp').detach();
    $('#character-relation').on('click', function(){
        modal.open({content: $modal_one, width: 550, height: 680});
        });
    /*$('#memoryGlitch').on('click', function(){
        modal.open({content: $modal_two, width: 550, height: 680});
    });*/
    
}());