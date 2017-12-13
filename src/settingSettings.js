var handDraw = false
var timer = 120

function getHandDraw() {
  return(handDraw)
}

function toggleHandDraw() {
  handDraw = !handDraw
}

function getTimer() {
  return(timer)
}

function setTimer(time) {
  timer = time
}

module.exports = {
  getMeHandDraw: function() {
    return getHandDraw();
  },
  toggleHandDraw: function(){
    return toggleHandDraw();
  },
  getTimer: function() {
    return getTimer();
  },
  setTimer: function(time) {
    return setTimer(time);
  }
}
