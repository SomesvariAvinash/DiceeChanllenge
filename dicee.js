var P1 = Math.floor((Math.random()*6))+1;
var P2=  Math.floor((Math.random()*6))+1;
var randomDiceImage1 = "dice"+ P1 + ".png";
var randomImage1= "images/" + randomDiceImage1;
document.querySelector(".img1").setAttribute("src",randomImage1);
var randomDiceImage2 = "dice"+ P2 + ".png";
var randomImage2= "images/" + randomDiceImage2;
document.querySelector(".img2").setAttribute("src",randomImage2);
// if(P1 === 1){
//   document.querySelector(".img1").setAttribute("src","images/dice1.png");
// }else if(P1 === 2){
//   document.querySelector(".img1").setAttribute("src","images/dice2.png");
// }else if(P1 === 3){
//   document.querySelector(".img1").setAttribute("src","images/dice3.png");
// }else if(P1 === 4){
//   document.querySelector(".img1").setAttribute("src","images/dice4.png");
// }else if(P1 === 5){
//   document.querySelector(".img1").setAttribute("src","images/dice5.png");
// }else{
//   document.querySelector(".img1").setAttribute("src","images/dice6.png");
// }if(P2 === 1){
//   document.querySelector(".img2").setAttribute("src","images/dice1.png");
// }else if(P2 === 2){
//   document.querySelector(".img2").setAttribute("src","images/dice2.png");
// }else if(P2 === 3){
//   document.querySelector(".img2").setAttribute("src","images/dice3.png");
// }else if(P2 === 4){
//   document.querySelector(".img2").setAttribute("src","images/dice4.png");
// }else if(P2 === 5){
//   document.querySelector(".img2").setAttribute("src","images/dice5.png");
// }else{
//   document.querySelector(".img2").setAttribute("src","images/dice6.png");
// }
if(P1>P2){
  document.querySelector("h1").innerHTML="Player 1 Won";
}else if(P2>P1){
  document.querySelector("h1").innerHTML="Player 2 Won";
}else{
  document.querySelector("h1").innerHTML="Tied Refresh Again";
}
