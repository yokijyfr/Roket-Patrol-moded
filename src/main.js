let config = {
    typr: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play, twoPlay]
}
let game = new Phaser.Game(config);
// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

let keyF, keyR, keyLEFT, keyRIGHT, keyA, keyD, keyP;