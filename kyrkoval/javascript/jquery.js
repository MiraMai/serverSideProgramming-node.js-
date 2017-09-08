$(function () {
            let socket = io();
            $('form').submit(function(){
                socket.emit('Chat message', $('#m').val());
                $('#m').val('');
                return false;
            });
            socket.on('Chat message', (msg) => {
                $('#messages').append($('<li>').text(msg));
            })
        });