var fs = require('fs');

// opens a file. The file is created if it does not exist.
fs.open("./text.fil", "a", function(err, fd){
    console.log(err);
// 1st way to write smth in the file    
    fs.writeFile(fd, "\nHeja Bajen.");
    fs.close(fd);
});
// 2nd way to write smth in the file
fs.writeFile("./text.fil", "\nHej", function(err) {
    console.log(err);
});