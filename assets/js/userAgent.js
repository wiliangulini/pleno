let userAgent = navigator.userAgent || navigator.vendor || window.opera;
if(userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) ) {
      document.getElementById("chatBody").style.height = 90+"vh";
} else if (userAgent.match(/Android/i)) {
      document.getElementById("chatBody").style.height = 98+"vh";
}