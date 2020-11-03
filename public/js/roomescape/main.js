var press = "...Press Spacebar..."
var Main = {
    preload : function(){
        game.load.image("textPanel", "./assets/roomescape/TEXTPANEL.png");
        game.load.audio("bgm", "./assets/roomescape/Ryugihak.mp3");
        //
        game.load.image("Table", "./assets/roomescape/DESK.png");
        game.load.image("Mouse", "./assets/roomescape/Mouse.png");
        game.load.image("KeyBoard", "./assets/roomescape/KEYBOARD.png");
        game.load.image("PC", "./assets/roomescape/PC.png");
        game.load.image("PC_USB", "./assets/roomescape/PC_USB.png");
        game.load.image("Mover", "./assets/roomescape/Mover.png");
        game.load.image("UI", "./assets/roomescape/Item.png");
        game.load.image("Monitor", "./assets/roomescape/Monitor.png");
        game.load.image("Monitor_Die", "./assets/roomescape/Monitor_Die.png");
        game.load.image("USB", "./assets/roomescape/USB.png");
        game.load.image("KEY", "./assets/roomescape/KEY.png");
        game.load.image("Door", "./assets/roomescape/Door.png");
        game.load.image("Door_Open", "./assets/roomescape/Door_Open.png");
        game.load.image("GoldGo", "./assets/roomescape/GoldGo.png");
        game.load.image("GoldGo_Open", "./assets/roomescape/GoldGo_Open.png");
        game.load.image("Drawer", "./assets/roomescape/Drawer.png");
        game.load.image("Drawer_Down", "./assets/roomescape/Drawer_Down.png");
        game.load.image("Drawer_Up", "./assets/roomescape/Drawer_Up.png");
        game.load.image("Wall", "./assets/roomescape/Wall.png");
        game.load.image("Bottom", "./assets/roomescape/Bottom.png");
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