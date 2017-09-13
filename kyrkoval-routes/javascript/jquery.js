// step 2 send the number from the input to the server. This is an event that we send to the server. The event is called 'vote' in this case.
$(function () {
    // step 1 connects the server to the client
    let socket = io();
    // end of step 1
    $('form').submit(function(){
        socket.emit('vote', $('#inputNumber').val());
        $('#inputNumber').val('');
        return false;
    });
// end of step 2 
            // step 3 include the number(message that we sent) on the page
            socket.on('vote', (number) => {
                $('#vasa').append($('<span>').text(number));
            })
            // end of step 3
    });

    //    });


