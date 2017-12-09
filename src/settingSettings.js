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
// async setHandDraw() {
//   try {
//     const value = await AsyncStorage.getItem('hand draw');
//     if (value !== null){
//       // We have data!!
//       console.log(value);
//       if (value == 'false') {
//         try {
//           await AsyncStorage.setItem('hand draw', 'true');
//         } catch (error) {
//           // Error saving data
//         }
//       } else {
//         try {
//           await AsyncStorage.setItem('hand draw', 'false');
//         } catch (error) {
//           // Error saving data
//         }
//       }
//     }
//   } catch (error) {
//     // Error retrieving data
//   }
// }
//
// handDraw() {
//   return new Promise(
//     (resolve, reject) => {
//       this.setHandDraw();
//       resolve();
//     }
// }
