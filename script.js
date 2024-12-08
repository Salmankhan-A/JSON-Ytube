$(document).ready(function(){
    $.getJSON('videos.json', function(data) {
        var videos = data.videos;

        for (var i = 0; i < 12; i++) {
            $('#videoSource' + (i + 1)).attr('src', videos[i].src);
            $('#video' + (i + 1))[0].load(); // Load the new video source
        }
    });
});