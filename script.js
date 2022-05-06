function randomFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function getKeyString(x, y) {    return `${x}x${y}`;
}

function createName() {
    const prefix = randomFromArray([
      "COOL",
      "SUPER",
      "HIP",
      "SMUG",
      "COOL",
      "SILKY",
      "GOOD",
      "SAFE",
      "DEAR",
      "DAMP",
      "WARM",
      "RICH",
      "LONG",
      "DARK",
      "SOFT",
      "BUFF",
      "DOPE",
    ]);
    const animal = randomFromArray([
      "BEAR",
      "DOG",
      "CAT",
      "FOX",
      "LAMB",
      "LION",
      "BOAR",
      "GOAT",
      "VOLE",
      "SEAL",
      "PUMA",
      "MULE",
      "BULL",
      "BIRD",
      "BUG",
    ]);
    return `${prefix} ${animal}`;
  }

  const mapData = {
    minX: 1,
    maxX: 52,
    minY: 4,
    maxY: 37,
    blockedSpaces: {
      /*"7x4": true,
      "1x11": true,
      "12x10": true,
      "4x7": true,
      "5x7": true,
      "6x7": true,
      "8x6": true,
      "9x6": true,
      "10x6": true,
      "7x9": true,
      "8x9": true,
      "9x9": true,*/
    },
  };
  function isSolid(x,y) {

    const blockedNextSpace = mapData.blockedSpaces[getKeyString(x, y)];
    return (
      blockedNextSpace ||
      x >= mapData.maxX ||
      x < mapData.minX ||
      y >= mapData.maxY ||
      y < mapData.minY
    )
  }
  
  function getRandomSafeSpot() {
    //We don't look things up by key here, so just return an x/y
    return randomFromArray([
      { x: 1, y: 4 },
      { x: 2, y: 4 },
      { x: 1, y: 5 },
      { x: 2, y: 6 },
      { x: 2, y: 8 },
      { x: 2, y: 9 },
      { x: 4, y: 8 },
      { x: 5, y: 5 },
      { x: 5, y: 8 },
      { x: 5, y: 10 },
      { x: 5, y: 11 },
      { x: 11, y: 7 },
      { x: 12, y: 7 },
      { x: 13, y: 7 },
      { x: 13, y: 6 },
      { x: 13, y: 8 },
      { x: 7, y: 6 },
      { x: 7, y: 7 },
      { x: 7, y: 8 },
      { x: 8, y: 8 },
      { x: 10, y: 8 },
      { x: 8, y: 8 },
      { x: 11, y: 4 },
    ]);
  }

(function () {
    
    let playerId;
    let playerRef;
    let players = {};
    let playerElements = {};

    const screen = document.querySelector(".screen");
    const namein = document.querySelector("#name");

    function handleArrowPress(xChange=0, yChange=0) {
        const newX = players[playerId].x + xChange;
        const newY = players[playerId].y + yChange;
        if (!isSolid(newX, newY)) {
          //move to the next space
          players[playerId].x = newX;
          players[playerId].y = newY;
          if (xChange === 1) {
            players[playerId].direction = "right";
          }
          if (xChange === -1) {
            players[playerId].direction = "left";
          }
          playerRef.set(players[playerId]);
          //attemptGrabCoin(newX, newY);
        }
      }

    function initgame() {
        new KeyPressListener("ArrowUp", () => handleArrowPress(0, -1))
        new KeyPressListener("ArrowDown", () => handleArrowPress(0, 1))
        new KeyPressListener("ArrowLeft", () => handleArrowPress(-1, 0))
        new KeyPressListener("ArrowRight", () => handleArrowPress(1, 0))

        const allPlayersRef = firebase.database().ref(`players`);
        const allCoinsRef = firebase.database().ref(`logs`);

        allPlayersRef.on("value", (snapshot) => {
            //Fires whenever a change occurs
            players = snapshot.val() || {};
            Object.keys(players).forEach((key) => {
              const characterState = players[key];
              let el = playerElements[key];
              // Now update the DOM
              el.querySelector(".Character_name").innerText = characterState.name;
              el.querySelector(".Character_logs").innerText = characterState.logs;
              el.setAttribute("data-color", characterState.color);
              el.setAttribute("data-direction", characterState.direction);
              const left = 16 * characterState.x + "px";
              const top = 16 * characterState.y - 4 + "px";
              el.style.transform = `translate3d(${left}, ${top}, 0)`;
            })
          })

        allPlayersRef.on("child_added", (snapshot) => {
            const addedPlayer = snapshot.val();
            const characterElement = document.createElement("div");
            characterElement.classList.add("Character", "grid-cell");
            if (addedPlayer.id === playerId){
                characterElement.classList.add("you");
            }
            characterElement.innerHTML = (`
            <div class="Character_shadow grid-cell"></div>
            <div class="Character_sprite grid-cell"></div>
            <div class="Character_name-container">
              <span class="Character_name"></span>
              <span class="Character_logs">0</span>
            </div>
            <div class="Character_you-arrow"></div>
          `);
          playerElements[addedPlayer.id] = characterElement;
          characterElement.querySelector(".Character_name").innerText = addedPlayer.name;
          characterElement.querySelector(".Character_logs").innerText = addedPlayer.logs;
          characterElement.setAttribute("data-color", addedPlayer.color);
          characterElement.setAttribute("data-direction", addedPlayer.direction);
          const left = 16 * addedPlayer.x + "px";
          const top = 16 * addedPlayer.y - 4 + "px";
          characterElement.style.transform = `translate3d(${left}, ${top}, 0)`;
          screen.appendChild(characterElement);

        })


    }
    firebase.auth().onAuthStateChanged((user) => {
        let username = prompt("Enter you nickname", "");
        console.log(user)
        if(user){
            //logged
            playerId = user.uid;
            playerRef = firebase.database().ref(`players/${playerId}`);

            const name = username;
            const playerc = ["blue", "red", "yellow", "black"];

            playerRef.set({
                id: playerId,
                name,
                direction: "right",
                color: randomFromArray(playerc),
                x: 3,
                y: 3,
                logs: 0,
            })

            playerRef.onDisconnect().remove();
            initgame();
            
        }
        else {
            //out
        }
    });



    firebase.auth().signInAnonymously().catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
    });
})();