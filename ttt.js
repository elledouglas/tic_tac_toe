document.addEventListener('DOMContentLoaded', function (){

var square1 = document.querySelector('.one')
var square2 = document.querySelector('.two')
var square3 = document.querySelector('.three')
var square4 = document.querySelector('.four')
var square5 = document.querySelector('.five')
var square6 = document.querySelector('.six')
var square7 = document.querySelector('.seven')
var square8 = document.querySelector('.eight')
var square9 = document.querySelector('.nine')


  var clickCount = 0;

  var player_one = document.querySelector('.player_1')
  var player_two = document.querySelector('.player_2')
//
// var turn = 'X';
// var score = {
//     'X': 0,
//     'O': 0
// };

// player 1 starts
var clickEvent = function(event){

  if (this.innerHTML === ''){
    clickClount++
    var img = document.createElement('img');
    if (clickEvent % 2 === 1)
    {
    img.src = 'x-png-25.png';
    this.classList.add(player_one)
    }
    else
    {
      img.src = '0.png';
      this.classList.add(player_two);
    }
  this.appendChild(img);

  }
}

  square1.addEventListener('click', function(){
var square1 = document.querySelector('.one');
// if ( this === player_one
//   style.backgroundColor = "blue";
  });

  square2.addEventListener('click', clickEvent){
var square2 = document.querySelector('.two')
  });

  square3.addEventListener('click', clickEvent){
  var square3 = document.querySelector('.three')
  });

  square4.addEventListener('click', clickEvent) {
var square4 = document.querySelector('.four')
  });

  square5.addEventListener('click', clickEvent){
var square5 = document.querySelector('.five')
  });

  square6.addEventListener('click', clickEvent){
var square6 = document.querySelector('.six')
  });

  square7.addEventListener('click', clickEvent){
var square7 = document.querySelector('.seven')
  });

  square8.addEventListener('click', clickEvent){
var square8 = document.querySelector('.eight')
  });

  square9.addEventListener('click', clickEvent){
  var square9 = document.querySelector('.nine')
  });

})
