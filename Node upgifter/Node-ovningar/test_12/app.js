// Uppgift 12 \\

// Skapa en server som körs localt på port 3000 och skriver ut från index.html filen \\

const http = require('http')
const fs = require('fs')

//skapar en server som körs lokalt
http.createServer((request, response)=>{
    //läserr från index.html filen med hjälp av fileSystem(fs)
    fs.readFile('index.html', function(err, data){
        response.write(data)
        response.end()
    })
}).listen(3000, function(err){
    if(err)throw err
    console.log('Connected to port 3000');
})