var db;
var gameState = 0;
var playerCount;
var form, player, game;

function setup()
{
    createCanvas(displayWidth, displayHeight);

    db = firebase.database();
    
    game = new Game();
    game.getState();
    game.start();
}
                                                       
function draw()
{
    
}

