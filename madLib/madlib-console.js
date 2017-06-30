var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

function message(){
  console.log('message called');
  var random1 = Math.floor(Math.random() * startupX.length);
  var random2 = Math.floor(Math.random() * startupY.length);

  var h1xfory = document.getElementById('xForY');
  h1xfory.innerHTML = 'A startup that is ' + startupX[random1] + ' but for ' + startupY[random2];
  //alert(random1);
}
function load(){
  //alert('load!');
  //refrence dom buttoms
  var btncreate = document.getElementById('create');
  var buddy = document.getElementById('save');
  var lizard = document.getElementById('print');

  //alert(btncreate);
  // event listener. wire 3 buttons and keep it consistent.
  btncreate.addEventListener('click', message);
  buddy.addEventListener('click', message);
  lizard.addEventListener('click', message);

}

load();
