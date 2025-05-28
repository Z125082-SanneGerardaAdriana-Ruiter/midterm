//the context text //
const text = "Sanne Ruiter — Business & Computer Science";

//makes sure it starts at first letter
let i = 0;


function typeWriter() { //function to type out letter one at a time
  if (i < text.length) { //Checks if there are still letters left to type
    
    //add the next letter to the html element with id-type: typewirter
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    
    //moves to next letter
    i++;

    //wait 50miliseconds, then call this function again
    setTimeout(typeWriter, 50);
  }
}
//starts the typing animation when the page is loaded.
window.onload = typeWriter;




