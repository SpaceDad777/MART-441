var player;
var coin;
var bombs;
var platforms;
var gem; // Define gem variable
var cursors;
var scoreText;
var gameOver = false;
var gemCollected = false; // Flag to track gem collection

class GameScene extends Phaser.Scene {
    constructor() {
        super('LevelTwoScene');
    }

    preload() {
        this.load.image('cavern', 'Assets/cavern1.png');
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
        this.add.image(400, 300, 'cavern').setScale(2);
        platforms = this.physics.add.staticGroup();
        platforms.create(config.width / 2, config.height - 50, 'ground').setScale(4).refreshBody();
        platforms.create(900, 200, 'platform1'); // middle
        platforms.create(1000, 550, 'platform1'); // lower right
        platforms.create(150, 550, 'platform2'); // upper left 
        platforms.create(100, 250, 'platform2'); // upper left
        platforms.create(150, 900, 'platform3'); // ground left
        platforms.create(600, 900, 'platform3'); // ground middle
        platforms.create(1000, 900, 'platform3'); // ground right
        this.add.image(600, 800, 'Rock').setScale(2);

        gem = this.physics.add.sprite(1000, 110, 'gem'); // Create gem sprite on the middle platform
        gem.setCollideWorldBounds(true);
        gem.setImmovable(true);
        gem.body.allowGravity = false;
        this.physics.add.collider(gem, platforms);

        player = this.physics.add.sprite(100, 450, 'dude');
        player.setBounce(0);
        player.setCollideWorldBounds(true);

        this.physics.add.collider(player, gem, this.collectGem, null, this); // Collider for gem

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [{ key: 'dude', frame: 4 }],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 20,
            repeat: -1
        });

        cursors = this.input.keyboard.createCursorKeys();

        coin = this.physics.add.group({
            key: 'coin',
            repeat: 5,
            setXY: { x: 70, y: 0, stepX: 250 }
        });

        coin.children.iterate(function (child) {
            child.setBounceY(Phaser.Math.FloatBetween(0.2, 0.6));
        });

        bombs = this.physics.add.group();

        this.physics.add.collider(player, platforms);
        this.physics.add.collider(coin, platforms);
        this.physics.add.collider(bombs, platforms);

        this.physics.add.overlap(player, coin, this.collectCoin, null, this);
        this.physics.add.collider(player, bombs, this.hitBomb, null, this);

        scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#fff' });
        

        // Create bombs
        this.createBomb();
        
    }
    
    update(time, delta) {
        if (gameOver) {
            return;
        }

        if (cursors.left.isDown) {
            player.setVelocityX(-160);
            player.anims.play('left', true);
        } else if (cursors.right.isDown) {
            player.setVelocityX(160);
            player.anims.play('right', true);
        } else {
            player.setVelocityX(0);
            player.anims.play('turn');
        }

        // Adjusted jump logic to prevent continuous jumping
        if (this.input.keyboard.checkDown(cursors.space, 500) && player.body.touching.down) {
            player.setVelocityY(-330);
        }

        // Check if gemCollected flag is true for level completion
        if (gemCollected) {
            this.levelComplete();

        
        }
    }

    collectCoin(player, coin) {
        coin.disableBody(true, true);
        this.score += 20;
        scoreText.setText('Score: ' + this.score);
    }

    collectGem(player, gem) {
        gem.disableBody(true, true);
        this.score += 50; // Increase score for collecting gem
        scoreText.setText('Score: ' + this.score);
        gemCollected = true; // Set gemCollected to true when gem is collected
    }

    createBomb() {
        var newBomb = bombs.create(Phaser.Math.Between(100, config.width - 100), 16, 'bomb');
        newBomb.setBounce(1);
        newBomb.setCollideWorldBounds(true);
        newBomb.setVelocity(Phaser.Math.Between(-2000, 3000), 20);
        newBomb.allowGravity = false;
    }

    hitBomb(player, bomb) {
        this.physics.pause();
        player.setTint(0xff0000);
        player.anims.play('turn');
        gameOver = true;

        // Add game over message and options
        // Add a background box
        const backgroundBox = this.add.rectangle(config.width / 2, config.height / 2, 600, 300, 0x000000, 0.8);
        backgroundBox.setOrigin(0.5);
        
        const gameOverText = this.add.text(config.width / 2, config.height / 2 - 100, 'Game Over', { fontSize: '48px', fill: '#fff' });
        gameOverText.setOrigin(0.5);

        const retryButton = this.add.text(config.width / 2, config.height / 2 + 50, 'Retry', { fontSize: '32px', fill: '#fff' });
        retryButton.setOrigin(0.5);
        retryButton.setInteractive();

        const homeButton = this.add.text(config.width / 2, config.height / 2 + 100, 'Home', { fontSize: '32px', fill: '#fff' });
        homeButton.setOrigin(0.5);
        homeButton.setInteractive();

        // Button actions
        retryButton.on('pointerdown', () => {
            // Add logic to retry the game
            console.log('Retry clicked');
            gameScene.resetGame();
        });

        homeButton.on('pointerdown', () => {
            // Add logic to go back to the home screen
            console.log('Home clicked');

            // Stop the game and reset variables if needed
            this.physics.pause();
            gameOver = true;
            gemCollected = false;
            this.score = 0; // Change score to this.score

            // Transition to the title screen scene
            this.scene.start('TitleScene'); // Replace 'TitleScene' with the actual name of your title screen scene
        });
    }

    levelComplete() {
        // Stop the game
        this.physics.pause();
        gameOver = true;

        // Add a background box
        const backgroundBox = this.add.rectangle(config.width / 2, config.height / 2, 600, 300, 0x000000, 0.8);
        backgroundBox.setOrigin(0.5);

        // Display a message for completing the level
        const levelCompleteText = this.add.text(config.width / 2, config.height / 2 - 100, 'Level Completed!', { fontSize: '48px', fill: '#fff' });
        levelCompleteText.setOrigin(0.5);

        // Add buttons for next level and home
        const nextLevelButton = this.add.text(config.width / 2, config.height / 2 + 50, 'Next Level', { fontSize: '32px', fill: '#fff' });
        nextLevelButton.setOrigin(0.5);
        nextLevelButton.setInteractive();

        const homeButton = this.add.text(config.width / 2, config.height / 2 + 100, 'Home', { fontSize: '32px', fill: '#fff' });
        homeButton.setOrigin(0.5);
        homeButton.setInteractive();

        // Button actions
        nextLevelButton.on('pointerdown', () => {
            // Add logic to transition to the next level
            console.log('Next Level clicked');
            this.scene.start('LevelTwoScene')
            // Replace this with your logic for next level
        });

        homeButton.on('pointerdown', () => {
            // Add logic to go back to the home screen
            console.log('Home clicked');

            // Stop the game and reset variables if needed
            this.physics.pause();
            gameOver = true;
            gemCollected = false;
            this.score = 0; // Change score to this.score

            // Transition to the title screen scene
            this.scene.start('TitleScene'); // Replace 'TitleScene' with the actual name of your title screen scene
        });
    }

    resetGame() {
        this.score = 0;
        this.lives = 4;
        gameOver = false;
        gemCollected = false;
        player.setPosition(100, 450);
        player.setVelocity(0);
        player.clearTint();
        this.scene.restart();
    }


}

// Create gameScene and titleScene outside the class
const gameScene = new GameScene();


const config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 900,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 150 },
            debug: false
        }
    },
    scene: GameScene
    
};

// Create a new Phaser Game instance
const game = new Phaser.Game(config);


// Add gameScene and titleScene to the game's scene manager
game.scene.add('GameScene', gameScene);


// Start the title scene

//score




