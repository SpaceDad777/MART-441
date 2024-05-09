class TitleScene extends Phaser.Scene {
    constructor() {
        super('TitleScene');
    }

    preload() {
        this.load.image('TitleScreen', 'Assets/TitleScreen.png');
    }

    create() {
        // Display the loaded image
        this.add.image(400, 300, 'TitleScreen').setScale(2);

        // Add title text
        const titleText = this.add.text(config.width / 2, config.height / 2 - 100, 'Your Game Title', { fontSize: '48px', fill: '#fff' });
        titleText.setOrigin(0.5);

        // Add start button
        const startButton = this.add.text(config.width / 2, config.height / 2 + 50, 'Start Game', { fontSize: '32px', fill: '#fff' });
        startButton.setOrigin(0.5);
        startButton.setInteractive();

        // Button action to start the game
        startButton.on('pointerdown', () => {
            this.scene.start('GameScene'); // Replace 'GameScene' with the actual name of your game scene
            gameScene.resetGame();
        });
    }
}
