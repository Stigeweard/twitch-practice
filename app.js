$(function() {
    console.log("ready!");
    Twitch.init({
        clientId: process.env.CLIENT_ID
    }, function(error, status) {
        if (status.authenticated) {
            // Already logged in, hide button
            $('.twitch-connect').hide()
        }
        console.log('worked:', status);
        $('.twitch-connect').click(function() {
            console.log('clicked login');
            Twitch.login({
                scope: ['user_read', 'channel_read']
            });
        });
        $.ajax({
            type: 'GET',
            url: 'https://api.twitch.tv/kraken/streams/featured',

            success: function(data) {
                console.log('DATA IS HEREEERERERESFJGL;SKFJDGSL;JFK', data);
            }
        });
        // the sdk is now loaded
    });


});
