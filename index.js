//START MENU
const startDiv = document.createElement("div");
document.body.appendChild(startDiv);

const startMenu = document.createElement("img");
startMenu.src = "startMenuButton.png";
startDiv.appendChild(startMenu);
startMenu.style.width = "20%";
startMenu.classList.add("center");
startMenu.style.marginTop = "20%";

//DRUM SAMPLES & STYLES

let audio_kick = new Audio("kick_trap.wav");

let audio_snare = new Audio("snare_trap.wav");

let audio_hihat = new Audio("hihat_trap.wav");

let audio_crash = new Audio("crash_trap.wav");

startMenu.addEventListener("click", () => {
  let openingFill = new Audio("openingfill.wav");
  openingFill.play();
  document.body.removeChild(startDiv);

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
  imgDiv.style.marginLeft = "600px";

  const textDiv = document.createElement("div");
  document.body.appendChild(textDiv);
  textDiv.style.textAlign = "center";
  textDiv.style.marginLeft = "25px";

  //ANIMATION

  const animationContainerKit = document.createElement("div");
  animationContainerKit.classList.add("container");
  //ocument.body.appendChild(animationContainerKit);

  const animationContainerStick = document.createElement("div");
  animationContainerStick.classList.add("container");
  //document.body.appendChild(animationContainerStick);

  const animationContainerBongo = document.createElement("div");
  animationContainerBongo.classList.add("container");
  //document.body.appendChild(animationContainerBongo);

  //DRUMKIT

  const gifDrumkit = document.createElement("img");
  gifDrumkit.src = "drumgif.gif";
  animationContainerKit.appendChild(gifDrumkit);
  gifDrumkit.classList.add("center");
  gifDrumkit.style.marginTop = "100px";

  //DRUMSTICK

  const gifDrumStick = document.createElement("img");
  gifDrumStick.src = "bongogif.gif";
  animationContainerStick.appendChild(gifDrumStick);
  gifDrumStick.classList.add("center");
  gifDrumStick.style.marginTop = "100px";

  //BONGO

  const gifBongo = document.createElement("img");
  gifBongo.src = "drumsticksgif.gif";
  animationContainerBongo.appendChild(gifBongo);
  gifBongo.classList.add("center");
  gifBongo.style.marginTop = "100px";

  //let guitar_sample = new Audio('guitar_sample.wav');

  //let kickScore = 0;

  /* if (kickScore === 9) {
    guitar_sample.play();
    const guitarUpdate = document.createElement("h3");
    guitarUpdate.innerHTML = "GUITAR RIFF UNLOCKED"
    document.body.appendChild(guitarUpdate);
    guitarUpdate.style.textAlign = "center"
    guitarUpdate.style.fontSize = "xx-large";
    guitarUpdate.style.marginTop = "200px";
    
    
  } */
  //ANIMATION CONTROL
  //FUNCTIONS FOR ANIMATION CHANGES

  function drumKitGifOn() {
    document.body.appendChild(animationContainerBongo);
    document.body.appendChild(animationContainerStick);

    document.body.removeChild(animationContainerBongo);
    document.body.removeChild(animationContainerStick);
    document.body.appendChild(animationContainerKit);
  }

  function drumStickGifOn() {
    document.body.appendChild(animationContainerBongo);
    document.body.appendChild(animationContainerKit);

    document.body.removeChild(animationContainerBongo);
    document.body.removeChild(animationContainerKit);
    document.body.appendChild(animationContainerStick);
  }

  function bongoGifOn() {
    document.body.appendChild(animationContainerStick);
    document.body.appendChild(animationContainerKit);

    document.body.removeChild(animationContainerStick);
    document.body.removeChild(animationContainerKit);
    document.body.appendChild(animationContainerBongo);
  }
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

  //KEYDOWN EVENTS
  document.addEventListener("keydown", function playAnything(event) {
    switch (event.key.toLowerCase()) {
      case "d":
        audio_snare.play();
        drumStickGifOn();
        document.addEventListener("keydown", function playAnything(event) {
          if (event.key.toLowerCase() === "d") {
            audio_snare.pause();
            audio_snare.currentTime = 0;
            audio_snare.play();
            drumStickGifOn();
          }
        });
        break;
    }
  });

  document.addEventListener("keydown", function playAnything(event) {
    switch (event.key.toLowerCase()) {
      case "g":
        audio_hihat.play();
        bongoGifOn();
        document.addEventListener("keydown", function playAnything(event) {
          if (event.key.toLowerCase() === "g") {
            audio_hihat.pause();
            audio_hihat.currentTime = 0;
            audio_hihat.play();
            bongoGifOn();
          }
        });
        break;
    }
  });

  document.addEventListener("keydown", function playAnything(event) {
    switch (event.key.toLowerCase()) {
      case "a":
        audio_kick.play();
        drumKitGifOn();
        document.addEventListener("keydown", function playAnything(event) {
          if (event.key.toLowerCase() === "a") {
            audio_kick.pause();
            audio_kick.currentTime = 0;
            audio_kick.play();
            drumKitGifOn();
          }
        });
        break;
    }
  });

  document.addEventListener("keydown", function playAnything(event) {
    switch (event.key.toLowerCase()) {
      case "j":
        console.log("UH");
        audio_crash.play();
        bongoGifOn();
        document.addEventListener("keydown", function playAnything(event) {
          if (event.key.toLowerCase() === "j") {
            audio_crash.pause();
            audio_crash.currentTime = 0;
            audio_crash.play();
            bongoGifOn();
          }
        });
        break;
    }
  });
});
