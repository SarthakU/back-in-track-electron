PLAYED = false;
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
// 4. The API will call this function when the video player is ready.
function playTheVideo(id) {
    player = new YT.Player('player', {
        height: '180',
        width: '250',
        videoId: id,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });

    function onPlayerReady(event) {
        player.setPlaybackQuality('small');
        event.target.playVideo();
        $('.play-button').click(function() {
            if ($('.play-button.paused').length != 0) {
                event.target.playVideo();
            } else {
                // pauseVideo();
                event.target.playVideo();
            }
            $(this).toggleClass('paused');
        })
    }
}


// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;

function onPlayerStateChange(event) {
    // if (event.data == YT.PlayerState.PLAYING && !done) {
    //   setTimeout(stopVideo, 6000);
    //   done = true;
    // }
}

function pauseVideo() {
    player.pauseVideo();
}

function changevid(id) {
    player.loadVideoById(id, 0, "default");
}