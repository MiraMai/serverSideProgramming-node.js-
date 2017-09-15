// step 2 send the number from the input to the server. This is an event that we send to the server. The event is called 'vote' in this case.
$(function () {
    // step 1 connects the server to the client
    let socket = io();
    // end of step 1
    $('form').submit(function(){
         let votes = { 
            inputNumber: $('#inputNumber').val(),
            selectLokal: $('#selectLokal').val(),
            selectParti: $('#selectParti').val(),
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
                              
              console.log(votes.selectLokal);
              console.log(votes.selectParti);
    
                
              var lokal =  votes.selectLokal;
              var parti =  votes.selectParti;  
              var number = votes.inputNumber;
              let voteList = [];
                
             if ( lokal == "vasakyrkan" && parti != null && number >= 1) {
                $('#vasa').append($('<li>').text(parti + number));
                // voteList.push(number);
                      //let sum = voteList.reduce((a, b) => a + b, 0);
                     // console.log(voteList);
                } 
             else if (lokal == "masthuggskyrkan" && parti != null && number >= 1) {
                $('#masthug').append($('<li>').text(parti + number));
                }
             else if (lokal == "gårdstenskyrkan" && parti != null && number >= 1) {
                $('#gardsten').append($('<li>').text(parti + number));
                }
             else if (lokal == "kortedalakyrka" && parti != null && number >= 1) {
                $('#kortedala').append($('<li>').text(parti + number));
                }  
             else {
                alert("Du glömde välja vallokal eller/och parti  :)");
             }    
    
             
                
          //  console.log(voteList);

              })  
            // end of step 3
    });

    //    });


