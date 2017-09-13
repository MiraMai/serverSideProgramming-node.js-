// step 2 send the number from the input to the server. This is an event that we send to the server. The event is called 'vote' in this case.
$(function () {
    // step 1 connects the server to the client
    let socket = io();
    // end of step 1
    $('form').submit(function(){
         let votes = { 
            inputNumber: $('#inputNumber').val(),
            select: $('select').val(),
            vasa: $('#vasa').val(),
            masthug: $('#masthug').val(),
            gardsten: $('#gardsten').val(),
            kortedala: $('#kortedala').val()
         };
        socket.emit('submit', votes);
    });
// end of step 2 
            // step 3 include the number(message that we sent) on the page
            socket.on('submit', (votes) => {
                
                
              var lokal =  votes.select;
              var number = $('#inputNumber').val(); 
                
              switch(lokal) {

                  case "vasakyrkan":
                    $('#vasa').append($('<span>').text(votes.inputNumber));
                  break;
                      
                  case "masthuggskyrkan":
                    $('#masthug').append($('<span>').text(votes.inputNumber));
                  break; 
                      
                  case "gårdstenskyrkan":
                    $('#gardsten').append($('<span>').text(votes.inputNumber));
                  break;
                      
                  case "kortedalakyrka":
                    $('#kortedala').append($('<span>').text(votes.inputNumber));
                  break;      
    
              }    
              })  
            // end of step 3
    });

    //    });


