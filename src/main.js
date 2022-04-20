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

let keyF, keyR, keyLEFT, keyRIGHT, keyA, keyD, keySPACE;


//point breakdown (100)
//1. Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (20)
//2. Implement a simultaneous two-player mode. In this mode there are two rockets at the same time, each with its own (key) controls, each capable of independent firing. (30)
//3. Implement a new timing/scoring mechanism that adds time to the clock for successful hits (20)
//4. Create new artwork for all of the in-game assets (rocket, spaceships, explosion) (20) 
//5. Create a new title screen (e.g., new artwork, typography, layout) (10)