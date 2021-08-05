//javascript by Giacometti Luca - 2021

//gl variables
var navbarCollapsed = true;


//methods
function whichAnimationEvent() {
  var t,
    el = document.createElement("fakeelement");

  var animations = {
    "animation": "animationend",
    "OAnimation": "oAnimationEnd",
    "MozAnimation": "animationend",
    "WebkitAnimation": "webkitAnimationEnd"
  }

  for (t in animations) {
    if (el.style[t] !== undefined) {
      return animations[t];
    }
  }
}

/* --MENU' A COMPARSA RIMOSSO
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
      menu = document.querySelector('.animatedMenu'),
      animationEventType = whichAnimationEvent();

  if (!menuActivated) {
    cross.style.transform = 'rotate(135deg)';
    menu.style.visibility = 'visible';
    menu.style.animationName = 'fade-in';
    menuActivated = true;
  }
  else {
    cross.style.transform = '';
    menu.style.animationName = 'fade-out';

    /*I used to set a timer to set visibility at the end of the animation - not needed anymore
    setTimeout(function() {
      hideMenu(topMenu, menu);
    }, 700);

    //I need just one event listener since the duration is the same for both elements
    menu.addEventListener(animationEventType, () => {
      menu.style.visibility = 'hidden';
    }, { once: true });
    
    menuActivated = false;
  }
}
*/

function main() {
  const _perspectiveContainer = document.querySelector('.perspective-container'),
    _toggler = document.querySelector('#toggler'),
    _navbar = document.querySelector('#navbar'),
    _animationEnd = whichAnimationEvent(),
    NAVBAR_FADEANIMATION_DURATION = 100;

  //scroll handler for navbar animation
  _perspectiveContainer.addEventListener('scroll', () => {
    if (_perspectiveContainer.scrollTop != 0) {
      _navbar.className = 'navbar navbar-light navbar-expand-lg navbar-togglable fixed-top';
      _navbar.style.animationDuration = '0.6s';
      _navbar.style.animationName = 'navbar-expand';
    }
    else {
      _navbar.className = 'navbar navbar-dark navbar-expand-lg navbar-togglable fixed-top';
      _navbar.style.animationDuration = '0.6s';
      _navbar.style.animationName = 'navbar-collapse';
    }
    //_navbar.style.backgroundColor = 'rgba(255, 255, 255,' + (1/NAVBAR_FADEANIMATION_DURATION)*_perspectiveContainer.scrollTop + ')';
  });

  //toggler click handler
  _toggler.addEventListener('click', () => {
    if (navbarCollapsed) {
      _navbar.className = 'navbar navbar-light navbar-expand-lg navbar-togglable fixed-top';
      _navbar.style.animationDuration = '0.6s';
      _navbar.style.animationName = 'navbar-expand';
    }
    else {
      _navbar.className = 'navbar navbar-dark navbar-expand-lg navbar-togglable fixed-top';
      _navbar.style.animationDuration = '0.6s';
      _navbar.style.animationName = 'navbar-collapse';
    }
  });


  //navbar animationEnd handler
  _navbar.addEventListener(_animationEnd, () => {
    if (navbarCollapsed) {
      _navbar.style.backgroundColor = 'rgba(255, 255, 255, 1)';
      navbarCollapsed = false;
    }
    else {
      _navbar.style.backgroundColor = 'rgba(255, 255, 255, 0)';
      navbarCollapsed = true;
    }
  });
}

//methods called when this js file is loaded
main();
//createMenuGraphics(); //create graphics for 'myCanvas' of animated menu
