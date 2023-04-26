// document.querySelector("button").addEventListener("click", function () {
//     alert("I got clicked");
// });

// console.log(document.querySelectorAll("button"));
// querySelectorAll creates an Array and in the below code the i iterates through the Array the [i] is after the selector. 

// the below code uses a for loop to listen for all seven dies and is checking for clicks - it then passes the innerHTML which is the key letter to the switch statement. 
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML)
    });   
}

// below code checks for keyboard press and the event.key declares the key pressed - this is then passed to the makeSound function. 
document.addEventListener( "keydown", function() {
    makeSound(event.key);

    buttonAnimation(event.key);
});



function makeSound (key) {

switch (key) {
    case "w" :
        var audio = new Audio('./sounds/tom-1.mp3');
        audio.play();
        break;
    case "a" :
        var audio = new Audio('./sounds/tom-2.mp3');
        audio.play();
        break;
    case "s" :
        var audio = new Audio('./sounds/crash.mp3');
        audio.play();
        break;
    case "d" :
        var audio = new Audio('./sounds/kick-bass.mp3');
        audio.play();
        break;
    case "j" :
        var audio = new Audio('./sounds/snare.mp3');
        audio.play();
        break;
    case "k" :
        var audio = new Audio('./sounds/tom-3.mp3');
        audio.play();
        break;
    case "l" :
        var audio = new Audio('./sounds/tom-4.mp3');
        audio.play();
        break;
    }
}


// this function is activated on key press or mouse click of the drumkit keys. The first var uses the documnet.query Selector adding the "." with concactinaiton to the currentKey to find the DOM object. 
// The next line then selects the object with the var activeButton and appends the class of the object by adding the class pressed. 

function buttonAnimation (currentKey) {

    var activeButton = document.querySelector("." + currentKey)

    activeButton.classList.add('pressed');

    // The timOut function delays the function from activation by 0.1 secs. The setTimeout takes in the function first and then takes time in milliseconds. 
    
   setTimeout (function () {
    activeButton.classList.remove("pressed");
   }, 100);

}




