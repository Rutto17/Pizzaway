//javascript by Savietto Davide e Giacometti Luca - 2021

//variables
var menuActivated = false;

//methods
function createMenuGraphics() {
  var c = document.getElementById("myCanvas");
  if (c.getContext("2d")) {
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(25, 5);
    ctx.lineTo(25, 45);
    ctx.strokeStyle = 'rgb(117, 117, 117)';
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.stroke();
    ctx.moveTo(5, 25);
    ctx.lineTo(45, 25);
    ctx.strokeStyle = 'rgb(117, 117, 117)';
    ctx.lineCap = 'round';
    ctx.stroke();
  }
}

function showMenu() {
  var cross = document.querySelector('#myCanvas');
  var topMenu = document.querySelector('.animatedMenuTop');
  var menu = document.querySelector('.animatedMenu');
  if (!menuActivated) {
    cross.style.transform = 'rotate(135deg)';
    cross.style.webkitTransform = 'rotate(135deg)';
    topMenu.style.visibility = "visible";
    topMenu.style.animationName = 'myFadeIn';
    menu.style.visibility = 'visible';
    menu.style.animationName = 'myFadeIn';
    menuActivated = true;
  }
  else {
    cross.style.transform = '';
    cross.style.webkitTransform = '';
    topMenu.style.animationName = 'myFadeOut';
    //I need just one event listener since the duration is the same for both
    menu.style.animationName = 'myFadeOut';
    setTimeout(function() {
      hideMenu(topMenu, menu);
    }, 700);
    menuActivated = false;
  }
}

//methods called when this js file is loaded
createMenuGraphics(); //create graphics for 'myCanvas' of animated menu
