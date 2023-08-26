//* object

//* querySelector

//^ enemyPlayer querySelector
enemyPlayerName = document.querySelector("enemy-playerName");
enemyPlayerStatus = document.querySelector("enemy-playerStatus");
enemyPlayerPonit = document.querySelector("enemy-playerPonit");
enemyPlayerGameAbout = document.querySelector("enemy-player-game-about");
//^ myPlayer querySelector
myPlayerName = document.querySelector("my-playerName");
myPlayerStatus = document.querySelector("my-playerStatus");
myPlayerPonit = document.querySelector("my-playerPonit");

//* addEventListener

document.addEventListener("keydown", function (e) {
  let duyme = e.key;
  if(duyme==="r"){console.log("rock")}
});

document.addEventListener("keydown", function (e) {
    let duyme = e.key;
    if(duyme==="p"){console.log("paper")}
  });

  document.addEventListener("keydown", function (e) {
    let duyme = e.key;
    if(duyme==="s"){console.log("scissor")}
  });
