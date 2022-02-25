
function dicegame() {  var n1 = Math.floor(Math.random() * 6 + 1);
  var imgrndm1 = "images/dice" + n1 + ".png";


  var n2 = Math.floor(Math.random() * 6 + 1);
  var imgrndm2 = "images/dice" + n2 + ".png";


document.querySelector("img.img1").setAttribute("src", imgrndm1);
document.querySelector("img.img2").setAttribute("src", imgrndm2);


if(n1 == n2){
  document.querySelector("h1").textContent = "Draw";
}
else if (n1 > n2) {
  document.querySelector("h1").textContent = "🎈Player 1 Wins";
}

else{
    document.querySelector("h1").textContent = "Player 2 Wins 🎈";
}
}

dicegame();
