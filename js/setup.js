 /* Declaring the global variables */
            var mouseX;
            var mouseY;
            var imageTop;
            var imageBottom;
            var imageLeft;
            var imageRight;
            
            /* Calling the initialization function */
            //$(init);
            
            /* The images need to re-initialize on load and on resize, or else the areas
             * where each image is displayed will be wrong. */
            $(window).load(init);
            //$(window).resize(init);
            
            /* Setting the mousemove event caller */
            $(window).mousemove(getMousePosition);
            
            /* This function is called on document ready, on load and on resize
             * and initiallizes all the images */
            function init(){
                
                /* Instanciate the mouse position variables */
                mouseX = 0;
                mouseY = 0;
                
                /* Instanciate a HeadImage class for every image */
                imageTop = $(".head-image").offset().top;
                imageBottom = imageTop + $(".head-image").height();
                imageLeft = $(".head-image").offset().left;
                imageRight = imageLeft + $(".head-image").width();
                
            }
            
            /* This function is called on mouse move and gets the mouse position. 
             * It also calls the HeadImage function to display the correct image*/
            function getMousePosition(event){
                
                /* Setting the mouse position variables */
                mouseX = event.pageX;
                mouseY = event.pageY;
                
                /*Calling the setImageDirection function of the HeadImage class
                 * to display the correct image*/
                $(".head-image").css("z-index", "0");
                
                if(mouseX > imageLeft && mouseX < imageRight && mouseY < imageTop){
                    $(".up").css("z-index", "1");
                } else if(mouseX < imageLeft && mouseY < imageTop){
                    $(".up-left").css("z-index", "1");
                } else if(mouseX < imageLeft && mouseY > imageTop && mouseY < imageBottom){
                    $(".left").css("z-index", "1");
                } else if(mouseX < imageLeft && mouseY > imageBottom){
                    $(".down-left").css("z-index", "1");
                } else if(mouseX > imageLeft && mouseX < imageRight && mouseY > imageBottom){
                    $(".down").css("z-index", "1");
                } else if(mouseX > imageRight && mouseY > imageBottom){
                    $(".down-right").css("z-index", "1");
                } else if(mouseX > imageRight && mouseY > imageTop && mouseY < imageBottom){
                    $(".right").css("z-index", "1");
                } else if(mouseX > imageRight && mouseY < imageTop){
                    $(".up-right").css("z-index", "1");
                } else {
                    $(".front").css("z-index", "1");
                }
            }