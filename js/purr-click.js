$(function(){
  var player1 = document.getElementById('player1');
  $('img').click(function(){
    player1.play();
  });
});


const a ="false"
const b ='true'

console.log({"a": !a, 'b': !b});