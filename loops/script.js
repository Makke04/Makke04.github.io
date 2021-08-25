/*for(let i = 0; i < 3; i++) {
    for(let i = 0; i < 5; i++) {
        
        document.write("#")
    }
    document.write("<br>")
}
*/

/*let array =["bmw", "volvo", "mersu", "audi"]


array.push("LoL xd")

array.pop()

array.splice(3)

document.write(array)
*/

/* array.pop tar bort den sista texten/
array.pop()

/array.splice tar bort text från 3 uppåt/
array.splice(3)

document.write(array)
*/

function myFunction(){
  var number = prompt("lägg siffror");
  if (number != null){
      document.getElementById("math").innerHTML =
       number;
  }
}


