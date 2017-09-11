$(function () {
            let socket = io();
            $('form').submit(function(){
                socket.emit('vote', $('#inputNumber').val());
                $('#inputNumber').val('');
                return false;
            });
            socket.on('vote', (number) => {
                $('#vasa').append($('<span>').text(number));
            })
            
         /*   $("option").each(function() {
                if ($(this).text() === $('#vasa').text()) {
                    $('#masthug').text("Hello world!");
                }
            })*/
            
            /*for(let i=0, i<$('option').length; i++) {
                console.log(i);
            }*/
//            console.log($('#vasa')["0"].firstChild.data);
            console.log($('option').length);
            console.log($('option')["0"].outerText);
            console.log($('option').val());
            
           /* $("button").click(function(){
        $("p").hide();*/
    });
    //    });