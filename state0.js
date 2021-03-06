var demo = {}, centerX = 600 / 2, centerY = 700 / 2, cat, speed = 150, score = 0, scoreText;
demo.state0 = function (){};
demo.state0.prototype = {
    preload: function (){
        game.load.image('menu', 'assets/backgrounds/catto.png');
    },
    create: function (){
        game.stage.backgroundColor = '#000000';
        addChangeStateEventListeners();
        
        game.world.setBounds(0, 0, 600, 700);
        var menuBG = game.add.sprite(0, 0, 'menu');
        
    },
    update: function (){}  
};

function changeState(i, stateNum){
    console.log(i);
    game.state.start('state' + stateNum);
}

function addKeyCallback(key, fn, args){
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}

function addChangeStateEventListeners(){
    addKeyCallback(Phaser.Keyboard.SPACEBAR, changeState, 1);
}