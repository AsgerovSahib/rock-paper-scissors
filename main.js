//* object

//* querySelector

//^ enemyPlayer querySelector
enemyPlayerName = document.querySelector("#enemy-playerName");
enemyPlayerStatus = document.querySelector("#enemy-playerStatus");
enemyPlayerPonit = document.querySelector("#enemy-playerPonit");
enemyPlayerGameAbout = document.querySelector("#enemy-player-game-about");
enemyGameElement = document.querySelector(".enemy-gameElement");
//^ myPlayer querySelector
myPlayerName = document.querySelector("#my-playerName");
myPlayerStatus = document.querySelector("#my-playerStatus");
myPlayerPonit = document.querySelector("#my-playerPonit");
myGameElement = document.querySelector(".my-gameElement");

//& player
let enemyPoint = 0;
let point = 0;
let enemy_action_value;
// //~ rename player
let playerName = prompt("pleace add name");
myPlayerName.innerHTML = playerName;

//^ enemy_action
function enemy_action() {
  enemy_action_value = Math.floor(Math.random() * 3);
  // Will return a integer between 0 and 2
  console.log(enemy_action_value);
  switch (enemy_action_value) {
    case 0:
      enemy_action_value = "enemy-rock";
      console.log(enemy_action_value);
      enemyGameElement.innerHTML = "<img src=./images/rock2.png >";
      break;
    case 1:
      enemy_action_value = "enemy-paper";

      console.log(enemy_action_value);
      enemyGameElement.innerHTML = "<img src=./images/rps_game_paper.png >";
      break;
    case 2:
      enemy_action_value = "enemy-scissors";
      console.log(enemy_action_value);
      enemyGameElement.innerHTML =
        "<img width='200px' src=./images/Scissor.webp>";
      break;
    default:
      break;
  }
}

//TODO   functions

function myWiner() {
  document.getElementById("myGameBox").setAttribute("class", "winner");
  document.getElementById("enemyGameBox").setAttribute("class", "loser");
  myPlayerStatus.innerHTML = "winner";
  enemyPlayerStatus.innerHTML = "loser";
}
function draw() {
  document.getElementById("myGameBox").setAttribute("class", "draw");
  document.getElementById("enemyGameBox").setAttribute("class", "draw");
  myPlayerStatus.innerHTML = "draw";
  enemyPlayerStatus.innerHTML = "draw";
}
function loser() {
  document.getElementById("myGameBox").setAttribute("class", "loser");
  document.getElementById("enemyGameBox").setAttribute("class", "winner");
  myPlayerStatus.innerHTML = "loser";
  enemyPlayerStatus.innerHTML = "winner";
}

//* game

function game(my_action_value) {
  if (my_action_value == "my-rock" && enemy_action_value == "enemy-scissors") {
    point++;
    myPlayerPonit.innerHTML = `${point}`;
    enemyPlayerPonit.innerHTML = `${enemyPoint}`;
    myWiner();
  } else if (
    my_action_value == "my-rock" &&
    enemy_action_value == "enemy-rock"
  ) {
    draw();
  } else if (
    my_action_value == "my-rock" &&
    enemy_action_value == "enemy-paper"
  ) {
    enemyPoint++;
    myPlayerPonit.innerHTML = `${point}`;
    enemyPlayerPonit.innerHTML = `${enemyPoint}`;
    loser();
  } else if (
    my_action_value == "my-paper" &&
    enemy_action_value == "enemy-scissors"
  ) {
    enemyPoint++;
    loser();
    myPlayerPonit.innerHTML = `${point}`;
    enemyPlayerPonit.innerHTML = `${enemyPoint}`;
  } else if (
    my_action_value == "my-paper" &&
    enemy_action_value == "enemy-paper"
  ) {
    draw();
  } else if (
    my_action_value == "my-paper" &&
    enemy_action_value == "enemy-rock"
  ) {
    point++;
    myWiner();
    myPlayerPonit.innerHTML = `${point}`;
    enemyPlayerPonit.innerHTML = `${enemyPoint}`;
  } else if (
    my_action_value == "my-scissors" &&
    enemy_action_value == "enemy-rock"
  ) {
    enemyPoint++;
    loser();
    myPlayerPonit.innerHTML = `${point}`;
    enemyPlayerPonit.innerHTML = `${enemyPoint}`;
  } else if (
    my_action_value == "my-scissors" &&
    enemy_action_value == "enemy-scissors"
  ) {
    draw();
  } else if (
    my_action_value == "my-scissors" &&
    enemy_action_value == "enemy-paper"
  ) {
    point++;
    myWiner();
    myPlayerPonit.innerHTML = `${point}`;
    enemyPlayerPonit.innerHTML = `${enemyPoint}`;
  }
}

//* addEventListener

document.addEventListener("keydown", function (e) {
  let duyme = e.key;
  if (duyme === "r") {
    console.log("rock");
    let my_action_value = "my-rock";
    myGameElement.innerHTML = "<img src=./images/rock2.png >";
    // myGameElement.innerHTML = "<img src="./images/rock2.png" alt="">";
    enemy_action();
    game(my_action_value);
  }
});

document.addEventListener("keydown", function (e) {
  let duyme = e.key;
  if (duyme === "p") {
    console.log("paper");
    let my_action_value = "my-paper";
    myGameElement.innerHTML = "<img src=./images/rps_game_paper.png >";
    enemy_action();
    game(my_action_value);
  }
});

document.addEventListener("keydown", function (e) {
  let duyme = e.key;
  if (duyme === "s") {
    console.log("scissors");
    let my_action_value = "my-scissors";
    myGameElement.innerHTML = "<img width='200px' src=./images/Scissor.webp>";
    enemy_action();
    game(my_action_value);
  }
});
