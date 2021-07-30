//javascript by Giacometti Luca - 2021

//variables
var menuActivated = false;


//methods
function whichAnimationEvent(){
  var t,
      el = document.createElement("fakeelement");

  var animations = {
    "animation"      : "animationend",
    "OAnimation"     : "oAnimationEnd",
    "MozAnimation"   : "animationend",
    "WebkitAnimation": "webkitAnimationEnd"
  }

  for (t in animations){
    if (el.style[t] !== undefined){
      return animations[t];
    }
  }
}

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
  var cross = document.querySelector('#myCanvas'),
      topMenu = document.querySelector('.animatedMenuTop'),
      menu = document.querySelector('.animatedMenu'),
      animationEventType = whichAnimationEvent();

  if (!menuActivated) {
    cross.style.transform = 'rotate(135deg)';
    topMenu.style.visibility = "visible";
    topMenu.style.animationName = 'myFadeIn';
    menu.style.visibility = 'visible';
    menu.style.animationName = 'myFadeIn';
    menuActivated = true;
  }
  else {
    cross.style.transform = '';
    topMenu.style.animationName = 'myFadeOut';
    menu.style.animationName = 'myFadeOut';

    /*I used to set a timer to set visibility at the end of the animation - not needed anymore
    setTimeout(function() {
      hideMenu(topMenu, menu);
    }, 700);*/

    //I need just one event listener since the duration is the same for both elements
    topMenu.addEventListener(animationEventType, () => {
      topMenu.style.visibility = 'hidden';
      menu.style.visibility = 'hidden';
    }, { once: true });
    
    menuActivated = false;
  }
}


//methods called when this js file is loaded
createMenuGraphics(); //create graphics for 'myCanvas' of animated menu
