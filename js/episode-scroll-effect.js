var $leftShelf = $('.left-shelf');
var $rightShelf =$('.right-shelf');
var $window = $(window);

function checkLeftShelf(){
    var windowHeight = $window.height();
    var windowTopPosition = $window.scrollTop();
    var windowBottomPosition = (windowTopPosition + windowHeight);
    
    $.each($leftShelf, function(){
        var $element = $(this);
        var elementHeight = $element.outerHeight();
        var elementTopPosition = $element.offset().top;
        var elementBottomPosition = (elementTopPosition + elementHeight);
        
        //check to see if this current container is within viewport
        if ((elementBottomPosition >= windowTopPosition) && (elementTopPosition <= windowBottomPosition)){
            $element.addClass('open');
        }
    });
}

function checkRightShelf(){
    var windowHeight = $window.height();
    var windowTopPosition = $window.scrollTop();
    var windowBottomPosition = (windowTopPosition + windowHeight);
    
    $.each($rightShelf, function(){
        var $element = $(this);
        var elementHeight = $element.outerHeight();
        var elementTopPosition = $element.offset().top;
        var elementBottomPosition = (elementTopPosition + elementHeight);
        
        //check to see if this current container is within viewport
        if ((elementBottomPosition >= windowTopPosition) && (elementTopPosition <= windowBottomPosition)){
            $element.addClass('open');
        } 
    });
}


$window.on('scroll resize', checkLeftShelf);
$window.on('scroll resize', checkRightShelf);
$window.trigger('scroll');