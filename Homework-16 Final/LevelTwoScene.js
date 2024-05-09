// Define your LevelTwoScene
class LevelTwoScene extends Phaser.Scene {
    constructor() {
        super('LevelTwoScene');
        // Additional constructor logic for LevelTwoScene if needed
    }

    preload() {
        this.load.image('BigSky', 'Assets/bigsky.png');
        this.load.image('platform1', 'Assets/Platform/platform1.png');
                this.load.image('platform2', 'Assets/Platform/platform2.png');
                this.load.image('platform3', 'Assets/Platform/platform3.png');
                this.load.image('coin', 'Assets/Objects/coin.png');
                this.load.image('gem', 'Assets/Objects/gem.png');
                this.load.image('bomb', 'Assets/Objects/bomb.png');
                this.load.image('Rock', 'Assets/ForestObjects/rock.png');
                this.load.spritesheet('dude', 'Assets/Character/dude.png', { frameWidth: 32, frameHeight: 48 });
    }

    create() {
        this.add.image(400, 300, 'BigSky').setScale(2);
        platforms = this.physics.add.staticGroup();
                platforms.create(config.width / 2, config.height - 50, 'ground').setScale(4).refreshBody();
                platforms.create(600, 550, 'platform1'); //middle
                platforms.create(50, 350, 'platform2'); // upper left
                platforms.create(900, 285, 'platform3'); // upper right
                platforms.create(150, 900, 'platform3'); // ground left
                platforms.create(600, 900, 'platform3'); // ground middle
                platforms.create(1000, 900, 'platform3'); // ground right
    }

    update() {
        // Update logic for the second level
    }

    // Add other custom functions for LevelTwoScene as needed
}

// Create an instance of your LevelTwoScene
const levelTwoScene = new LevelTwoScene();

// Export the instance to be used in the main game file
export default levelTwoScene;
