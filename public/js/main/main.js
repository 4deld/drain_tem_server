var press = "...Press Spacebar..."
var Main = {
    preload : function(){
        game.load.spritesheet("JUMP", "./assets/main/JUMP.png", 128, 256);
        game.load.spritesheet("SLIDE", "./assets/main/SLIDE.png", 50, 76);
        game.load.spritesheet("REROLL", "./assets/main/REROLL.png", 128, 256);
        game.load.spritesheet("player", "./assets/main/Hero.png", 44, 110);
        game.load.image("bg1", "./assets/main/background1.png");
        game.load.image("textPanel", "./assets/main/TEXTPANEL.png");
        game.load.image("ground", "./assets/main/Ground.png");
        game.load.image("normalBullet", "./assets/main/bullet.png");
        game.load.image("trackingBullet", "./assets/main/bullet2.png");
        game.load.image("button", "./assets/main/button.png");
        game.load.image("JUMP_UP", "./assets/main/JUMP_UP.png");
        game.load.image("Trap1", "./assets/main/Trap1.png");
        game.load.image("Trap2", "./assets/main/Trap2.png");
        game.load.image("Trap3", "./assets/main/Trap3.png");
        game.load.image("Trap4", "./assets/main/Trap4.png");
        game.load.image("NoCard", "./assets/main/NoCard.png");
        game.load.audio("bgm", "./assets/main/Ryugihak.mp3");
        //
        game.load.image("building1", "./assets/main/map/top.png");
        game.load.image("building2", "./assets/main/map/mid.png");
        game.load.image("building3", "./assets/main/map/mid_2.png");
        game.load.image("building4", "./assets/main/map/bot.png");
        //
        game.load.image("NPC1", "./assets/main/Gomacho.png");
        game.load.image("Table", "./assets/main/SitSitSit.png");
        game.load.image("PeopleSit", "./assets/main/People_Sit.png");
        game.load.spritesheet("Crow", "./assets/main/crow.png", 80, 78);
        game.load.image("Draw", "./assets/main/WhiteCenter.png");
    },
    create : function(){
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.stage.backgroundColor = "#1c242e";
        this.start();
        let text = game.add.text(0 , 0, press);
    },
    start : function(){
        game.state.start("Play");
    }

}
game.state.add("Main", Main);
game.state.start("Main");