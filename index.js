//DIV ELEMENT
const divElement = document.createElement("div");
document.body.appendChild(divElement);


//H1 ELEMENT
const h1Title = document.createElement("h1");
h1Title.innerHTML = "Virtual Drummer";
divElement.appendChild(h1Title);
h1Title.style.textAlign = "center";
h1Title.style.fontSize = "xxx-large";

//FOUR BUTTONS

const imgDiv = document.createElement("div");
document.body.appendChild(imgDiv);
imgDiv.style.textAlign = "center";

const textDiv = document.createElement("div");
document.body.appendChild(textDiv);
textDiv.style.textAlign = "center";


//BUTTON A - KICK

//TEXT
const buttonAText = document.createElement("h2");
buttonAText.innerHTML = "KICK";
textDiv.appendChild(buttonAText);
buttonAText.style.marginLeft = "-465px";
buttonAText.style.fontSize = "xx-large";

//BUTTON 
const buttonA = document.createElement("img");
buttonA.src = "buttonA.png";
imgDiv.appendChild(buttonA);
buttonA.width = "100";
buttonA.style.marginLeft = "-15px";
buttonA.style.marginTop = "100px";

let audio_kick_trap = new Audio('kick_trap.wav');


document.addEventListener('keydown', function(event) {
    if (event.key === 'a' || event.key === 'A') {
        audio_kick_trap.play();
    }
  });







//BUTTON D - SNARE

//TEXT
const buttonDText = document.createElement("h2");
buttonDText.innerHTML = "SNARE";
textDiv.appendChild(buttonDText);
buttonDText.style.marginLeft = "-165px";
buttonDText.style.marginTop = "-58px";
buttonDText.style.fontSize = "xx-large";


//BUTTON
const buttonD = document.createElement("img");
buttonD.src = "buttonD.png";
imgDiv.appendChild(buttonD);
buttonD.width = "100";
buttonD.style.marginLeft = "50px";
buttonD.style.marginTop = "100px";

let audio_snare_trap = new Audio('snare_trap.wav');


document.addEventListener('keydown', function(event) {
    if (event.key === 'd' || event.key === 'D') {
        audio_snare_trap.play();
    }
  });




//BUTTON G - HIHAT

//TEXT
const buttonGText = document.createElement("h2");
buttonGText.innerHTML = "HI-HAT";
textDiv.appendChild(buttonGText);
buttonGText.style.marginLeft = "135px";
buttonGText.style.marginTop = "-58px";
buttonGText.style.fontSize = "xx-large";


//BUTTON
const buttonG = document.createElement("img");
buttonG.src = "buttonG.png";
imgDiv.appendChild(buttonG);
buttonG.width = "100";
buttonG.style.marginLeft = "50px";
buttonG.style.marginTop = "100px";

let audio_hihat_trap = new Audio('hihat_trap.wav');


document.addEventListener('keydown', function(event) {
    if (event.key === 'g' || event.key === 'G') {
        audio_hihat_trap.play();
    }
  });





//BUTTON J - CRASH

//TEXT
const buttonJText = document.createElement("h2");
buttonJText.innerHTML = "CRASH";
textDiv.appendChild(buttonJText);
buttonJText.style.marginLeft = "435px";
buttonJText.style.marginTop = "-58px";
buttonJText.style.fontSize = "xx-large";


//BUTTON
const buttonJ = document.createElement("img");
buttonJ.src = "buttonJ.png";
imgDiv.appendChild(buttonJ);
buttonJ.width = "100";
buttonJ.style.marginLeft = "50px";
buttonJ.style.marginTop = "100px";

let audio_crash_trap = new Audio('crash_trap.wav');


document.addEventListener('keydown', function(event) {
    if (event.key === 'j' || event.key === 'J') {
        audio_crash_trap.play();
    }
  });