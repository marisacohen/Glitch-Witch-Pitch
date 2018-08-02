var player;

function onYouTubeIframeAPIReady(){
    player = new YT.Player ('videoPlayer', {
        width: 1000,
        height: 562.5,
        videoId: 't4TIKAqjbB8',
        events: {
            onReady: initialize
        }
    });
}
//is called when the player is fully loaded. Starts and interval, updating some of the controls every second
function initialize(){
    //update the controls on load
    updateTimerDisplay();
    updateProgressBar();
    
    //clear any old interval
    clearInterval(time_update_interval);
    
    //Start interval to update elaped time display and the elapsed part of the ptrgress bar every second
    
    time_update_interval = setInterval(function () {
        updateTimerDisplay();
        updateProgressBar();
    }, 1000)
}

$('.thumb').on('click', function(){
    var url = $(this).attr('data-video-id');
    player.cueVideoById(url);
});