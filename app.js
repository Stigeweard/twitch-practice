$(function() {
    console.log("ready!");
    Twitch.init({
        clientId: 'ipr78n41sqd6fqbacj2gykwv5lxpnd'
    }, function(error, status) {
        console.log('worked:', status);
        $.ajax({
            type: 'GET',
            url: 'https://api.twitch.tv/kraken/streams/featured',
            headers: {
                'Client-ID': 'ipr78n41sqd6fqbacj2gykwv5lxpnd'
            },
            success: function(data) {
                console.log('DATA IS HEREEERERERESFJGL;SKFJDGSL;JFK', data);
            }
        });
        // the sdk is now loaded
    });

    


});
