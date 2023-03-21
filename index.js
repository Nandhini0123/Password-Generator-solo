const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const pwdBtn = document.getElementById("generate-password");
const first_password = document.getElementById("password-one");
const second_password = document.getElementById("password-two");

pwdBtn.addEventListener("click", function(){
    let x; 
    let y;
    let rand1 = " ";
    let rand2 = " ";
    for (let i = 0; i < 15; i++) {
        x = Math.floor(Math.random()*(characters.length));
        y = Math.floor(Math.random()*(characters.length));
         rand1 += characters[x] ;
         rand2 += characters[y] ;
    }
    first_password.value = rand1;
    second_password.value = rand2;
})