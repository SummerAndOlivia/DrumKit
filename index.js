var numbers = document.querySelectorAll(".drum").length;

for (var i = 0; i < numbers; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        var ButtonInnerHTML = this.innerHTML;

        switch (ButtonInnerHTML) {
          case "O":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

          case "L":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;

          case "I":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

          case "V":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

          case "I":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

          case "A":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

          case "!":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

  default: console.log(buttonInnerHTML);

}

});
}
