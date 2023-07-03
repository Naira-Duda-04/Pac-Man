let Data = (function (){
    "use strict";
    
    const levelsData = [
        { // 1
            ghostSpeed        : 0.75,                           // Normal Ghost speed
            tunnelSpeed       : 0.4,                            // Ghost speed in the tunel
            pmSpeed           : 0.8,                            // Normal Pacman speed
            eatingSpeed       : 0.71,                           // Pacman speed while eating
            ghostFrightSpeed  : 0.5,                            // Ghost speed in Fright mode
            pmFrightSpeed     : 0.9,                            // Pacman speed in Fright mode
            eatingFrightSpeed : 0.79,                           // Pacman speed in Fright mode while eating
            elroyDotsLeft1    : 20,                             // How many dots left before Blinky "Cruise Elroy" mode 1
            elroySpeed1       : 0.8,                            // The speed of Blinky "Cruise Elroy" mode 1
            elroyDotsLeft2    : 10,                             // How many dots left before Blinky "Cruise Elroy" mode 2
            elroySpeed2       : 0.85,                           // The speed of Blinky "Cruise Elroy" mode 2
            fruitType         : 1,                              // The type of fruit for this level
            fruitScore        : 100,                            // The score when catching a fruit
            frightTime        : 6,                              // The fright mode time
            frightBlinks      : 5,                              // The amount of blinks before turning back
            switchTimes       : [ 7, 20, 7, 20, 5, 20, 5, 1 ],  // The times between scatter, chase, scatter... modes
            penForceTime      : 4,                              // The time after a ghost leaves the pen while the pacman is not eating dots
            penLeavingLimit   : [ 0, 0, 30, 60 ]                // Amount of dots before each ghost leaves the pen
        },
        { // 2
            ghostSpeed        : 0.85,
            tunnelSpeed       : 0.45,
            pmSpeed           : 0.9,
            eatingSpeed       : 0.79,
            ghostFrightSpeed  : 0.55,
            pmFrightSpeed     : 0.95,
            eatingFrightSpeed : 0.83,
            elroyDotsLeft1    : 30,
            elroySpeed1       : 0.9,
            elroyDotsLeft2    : 15,
            elroySpeed2       : 0.95,
            fruitType         : 2,
            fruitScore        : 300,
            frightTime        : 5,
            frightBlinks      : 5,
            switchTimes       : [ 7, 20, 7, 20, 5, 1033, 1 / 60, 1 ],
            penForceTime      : 4,
            penLeavingLimit   : [ 0, 0, 0, 50 ]
        },
        { // 3
            ghostSpeed        : 0.85,
            tunnelSpeed       : 0.45,
            pmSpeed           : 0.9,
            eatingSpeed       : 0.79,
            ghostFrightSpeed  : 0.55,
            pmFrightSpeed     : 0.95,
            eatingFrightSpeed : 0.83,
            elroyDotsLeft1    : 40,
            elroySpeed1       : 0.9,
            elroyDotsLeft2    : 20,
            elroySpeed2       : 0.95,
            fruitType         : 3,
            fruitScore        : 500,
            frightTime        : 4,
            frightBlinks      : 5,
            switchTimes       : [ 7, 20, 7, 20, 5, 1033, 1 / 60, 1 ],
            penForceTime      : 4,
            penLeavingLimit   : [ 0, 0, 0, 0 ]
        },
        { // 4
            ghostSpeed        : 0.85,
            tunnelSpeed       : 0.45,
            pmSpeed           : 0.9,
            eatingSpeed       : 0.79,
            ghostFrightSpeed  : 0.55,
            pmFrightSpeed     : 0.95,
            eatingFrightSpeed : 0.83,
            elroyDotsLeft1    : 40,
            elroySpeed1       : 0.9,
            elroyDotsLeft2    : 20,
            elroySpeed2       : 0.95,
            fruitType         : 3,
            fruitScore        : 500,
            frightTime        : 3,
            frightBlinks      : 5,
            switchTimes       : [ 7, 20, 7, 20, 5, 1033, 1 / 60, 1 ],
            penForceTime      : 4,
            penLeavingLimit   : [ 0, 0, 0, 0 ]
        },
        { // 5
            ghostSpeed        : 0.95,
            tunnelSpeed       : 0.5,
            pmSpeed           : 1,
            eatingSpeed       : 0.87,
            ghostFrightSpeed  : 0.6,
            pmFrightSpeed     : 1,
            eatingFrightSpeed : 0.87,
            elroyDotsLeft1    : 40,
            elroySpeed1       : 1,
            elroyDotsLeft2    : 20,
            elroySpeed2       : 10.05,
            fruitType         : 4,
            fruitScore        : 700,
            frightTime        : 2,
            frightBlinks      : 5,
            switchTimes       : [ 5, 20, 5, 20, 5, 1037, 1 / 60, 1 ],
            penForceTime      : 3,
            penLeavingLimit   : [ 0, 0, 0, 0 ]
        },
        { // 6
            ghostSpeed        : 0.95,
            tunnelSpeed       : 0.5,
            pmSpeed           : 1,
            eatingSpeed       : 0.87,
            ghostFrightSpeed  : 0.6,
            pmFrightSpeed     : 1,
            eatingFrightSpeed : 0.87,
            elroyDotsLeft1    : 50,
            elroySpeed1       : 1,
            elroyDotsLeft2    : 25,
            elroySpeed2       : 10.05,
            fruitType         : 4,
            fruitScore        : 700,
            frightTime        : 5,
            frightBlinks      : 5,
            switchTimes       : [ 5, 20, 5, 20, 5, 1037, 1 / 60, 1 ],
            penForceTime      : 3,
            penLeavingLimit   : [ 0, 0, 0, 0 ]
        },
        { // 7
            ghostSpeed        : 0.95,
            tunnelSpeed       : 0.5,
            pmSpeed           : 1,
            eatingSpeed       : 0.87,
            ghostFrightSpeed  : 0.6,
            pmFrightSpeed     : 1,
            eatingFrightSpeed : 0.87,
            elroyDotsLeft1    : 50,
            elroySpeed1       : 1,
            elroyDotsLeft2    : 25,
            elroySpeed2       : 1.05,
            fruitType         : 5,
            fruitScore        : 1000,
            frightTime        : 2,
            frightBlinks      : 5,
            switchTimes       : [ 5, 20, 5, 20, 5, 1037, 1 / 60, 1 ],
            penForceTime      : 3,
            penLeavingLimit   : [ 0, 0, 0, 0 ]
        },
        { // 8
            ghostSpeed        : 0.95,
            tunnelSpeed       : 0.5,
            pmSpeed           : 1,
            eatingSpeed       : 0.87,
            ghostFrightSpeed  : 0.6,
            pmFrightSpeed     : 1,
            eatingFrightSpeed : 0.87,
            elroyDotsLeft1    : 50,
            elroySpeed1       : 1,
            elroyDotsLeft2    : 25,
            elroySpeed2       : 1.05,
            fruitType         : 5,
            fruitScore        : 1000,
            frightTime        : 2,
            frightBlinks      : 5,
            switchTimes       : [ 5, 20, 5, 20, 5, 1037, 1 / 60, 1 ],
            penForceTime      : 3,
            penLeavingLimit   : [ 0, 0, 0, 0 ]
        },
        { // 9
            ghostSpeed        : 0.95,
            tunnelSpeed       : 0.5,
            pmSpeed           : 1,
            eatingSpeed       : 0.87,
            ghostFrightSpeed  : 0.6,
            pmFrightSpeed     : 1,
            eatingFrightSpeed : 0.87,
            elroyDotsLeft1    : 60,
            elroySpeed1       : 1,
            elroyDotsLeft2    : 30,
            elroySpeed2       : 1.05,
            fruitType         : 6,
            fruitScore        : 2000,
            frightTime        : 1,
            frightBlinks      : 3,
            switchTimes       : [ 5, 20, 5, 20, 5, 1037, 1 / 60, 1 ],
            penForceTime      : 3,
            penLeavingLimit   : [ 0, 0, 0, 0 ]
        },
        { // 10
            ghostSpeed        : 0.95,
            tunnelSpeed       : 0.5,
            pmSpeed           : 1,
            eatingSpeed       : 0.87,
            ghostFrightSpeed  : 0.6,
            pmFrightSpeed     : 1,
            eatingFrightSpeed : 0.87,
            elroyDotsLeft1    : 60,
            elroySpeed1       : 1,
            elroyDotsLeft2    : 30,
            elroySpeed2       : 1.05,
            fruitType         : 6,
            fruitScore        : 2000,
            frightTime        : 5,
            frightBlinks      : 5,
            switchTimes       : [ 5, 20, 5, 20, 5, 1037, 1 / 60, 1 ],
            penForceTime      : 3,
            penLeavingLimit   : [ 0, 0, 0, 0 ]
        },
        { // 11
            ghostSpeed        : 0.95,
            tunnelSpeed       : 0.5,
            pmSpeed           : 1,
            eatingSpeed       : 0.87,
            ghostFrightSpeed  : 0.6,
            pmFrightSpeed     : 1,
            eatingFrightSpeed : 0.87,
            elroyDotsLeft1    : 60,
            elroySpeed1       : 1,
            elroyDotsLeft2    : 30,
            elroySpeed2       : 1.05,
            fruitType         : 7,
            fruitScore        : 3000,
            frightTime        : 2,
            frightBlinks      : 5,
            switchTimes       : [ 5, 20, 5, 20, 5, 1037, 1 / 60, 1 ],
            penForceTime      : 3,
            penLeavingLimit   : [ 0, 0, 0, 0 ]
        },
        { // 12
            ghostSpeed        : 0.95,
            tunnelSpeed       : 0.5,
            pmSpeed           : 1,
            eatingSpeed       : 0.87,
            ghostFrightSpeed  : 0.6,
            pmFrightSpeed     : 1,
            eatingFrightSpeed : 0.87,
            elroyDotsLeft1    : 80,
            elroySpeed1       : 1,
            elroyDotsLeft2    : 40,
            elroySpeed2       : 1.05,
            fruitType         : 7,
            fruitScore        : 3000,
            frightTime        : 1,
            frightBlinks      : 3,
            switchTimes       : [ 5, 20, 5, 20, 5, 1037, 1 / 60, 1 ],
            penForceTime      : 3,
            penLeavingLimit   : [ 0, 0, 0, 0 ]
        },
        { // 13
            ghostSpeed        : 0.95,
            tunnelSpeed       : 0.5,
            pmSpeed           : 1,
            eatingSpeed       : 0.87,
            ghostFrightSpeed  : 0.6,
            pmFrightSpeed     : 1,
            eatingFrightSpeed : 0.87,
            elroyDotsLeft1    : 80,
            elroySpeed1       : 1,
            elroyDotsLeft2    : 40,
            elroySpeed2       : 1.05,
            fruitType         : 8,
            fruitScore        : 5000,
            frightTime        : 1,
            frightBlinks      : 3,
            switchTimes       : [ 5, 20, 5, 20, 5, 1037, 1 / 60, 1 ],
            penForceTime      : 3,
            penLeavingLimit   : [ 0, 0, 0, 0 ]
        },
        { // 14
            ghostSpeed        : 0.95,
            tunnelSpeed       : 0.5,
            pmSpeed           : 1,
            eatingSpeed       : 0.87,
            ghostFrightSpeed  : 0.6,
            pmFrightSpeed     : 1,
            eatingFrightSpeed : 0.87,
            elroyDotsLeft1    : 80,
            elroySpeed1       : 1,
            elroyDotsLeft2    : 40,
            elroySpeed2       : 1.05,
            fruitType         : 8,
            fruitScore        : 5000,
            frightTime        : 3,
            frightBlinks      : 5,
            switchTimes       : [ 5, 20, 5, 20, 5, 1037, 1 / 60, 1 ],
            penForceTime      : 3,
            penLeavingLimit   : [ 0, 0, 0, 0 ]
        },
        { // 15
            ghostSpeed        : 0.95,
            tunnelSpeed       : 0.5,
            pmSpeed           : 1,
            eatingSpeed       : 0.87,
            ghostFrightSpeed  : 0.6,
            pmFrightSpeed     : 1,
            eatingFrightSpeed : 0.87,
            elroyDotsLeft1    : 100,
            elroySpeed1       : 1,
            elroyDotsLeft2    : 50,
            elroySpeed2       : 1.05,
            fruitType         : 8,
            fruitScore        : 5000,
            frightTime        : 1,
            frightBlinks      : 3,
            switchTimes       : [ 5, 20, 5, 20, 5, 1037, 1 / 60, 1 ],
            penForceTime      : 3,
            penLeavingLimit   : [ 0, 0, 0, 0 ]
        },
        { // 16
            ghostSpeed        : 0.95,
            tunnelSpeed       : 0.5,
            pmSpeed           : 1,
            eatingSpeed       : 0.87,
            ghostFrightSpeed  : 0.6,
            pmFrightSpeed     : 1,
            eatingFrightSpeed : 0.87,
            elroyDotsLeft1    : 100,
            elroySpeed1       : 1,
            elroyDotsLeft2    : 50,
            elroySpeed2       : 1.05,
            fruitType         : 8,
            fruitScore        : 5000,
            frightTime        : 1,
            frightBlinks      : 3,
            switchTimes       : [ 5, 20, 5, 20, 5, 1037, 1 / 60, 1 ],
            penForceTime      : 3,
            penLeavingLimit   : [ 0, 0, 0, 0 ]
        },
        { // 17
            ghostSpeed        : 0.95,
            tunnelSpeed       : 0.5,
            pmSpeed           : 1,
            eatingSpeed       : 0.87,
            ghostFrightSpeed  : 0.6,
            pmFrightSpeed     : 1,
            eatingFrightSpeed : 0.87,
            elroyDotsLeft1    : 100,
            elroySpeed1       : 1,
            elroyDotsLeft2    : 50,
            elroySpeed2       : 1.05,
            fruitType         : 8,
            fruitScore        : 5000,
            frightTime        : 0,
            frightBlinks      : 0,
            switchTimes       : [ 5, 20, 5, 20, 5, 1037, 1 / 60, 1 ],
            penForceTime      : 3,
            penLeavingLimit   : [ 0, 0, 0, 0 ]
        },
        { // 18
            ghostSpeed        : 0.95,
            tunnelSpeed       : 0.5,
            pmSpeed           : 1,
            eatingSpeed       : 0.87,
            ghostFrightSpeed  : 0.6,
            pmFrightSpeed     : 1,
            eatingFrightSpeed : 0.87,
            elroyDotsLeft1    : 100,
            elroySpeed1       : 1,
            elroyDotsLeft2    : 50,
            elroySpeed2       : 1.05,
            fruitType         : 8,
            fruitScore        : 5000,
            frightTime        : 1,
            frightBlinks      : 3,
            switchTimes       : [ 5, 20, 5, 20, 5, 1037, 1 / 60, 1 ],
            penForceTime      : 3,
            penLeavingLimit   : [ 0, 0, 0, 0 ]
        },
        { // 19
            ghostSpeed        : 0.95,
            tunnelSpeed       : 0.5,
            pmSpeed           : 1,
            eatingSpeed       : 0.87,
            ghostFrightSpeed  : 0.6,
            pmFrightSpeed     : 1,
            eatingFrightSpeed : 0.87,
            elroyDotsLeft1    : 120,
            elroySpeed1       : 1,
            elroyDotsLeft2    : 60,
            elroySpeed2       : 1.05,
            fruitType         : 8,
            fruitScore        : 5000,
            frightTime        : 0,
            frightBlinks      : 0,
            switchTimes       : [ 5, 20, 5, 20, 5, 1037, 1 / 60, 1 ],
            penForceTime      : 3,
            penLeavingLimit   : [ 0, 0, 0, 0 ]
        },
        { // 20
            ghostSpeed        : 0.95,
            tunnelSpeed       : 0.5,
            pmSpeed           : 1,
            eatingSpeed       : 0.87,
            ghostFrightSpeed  : 0.6,
            pmFrightSpeed     : 1,
            eatingFrightSpeed : 0.87,
            elroyDotsLeft1    : 120,
            elroySpeed1       : 1,
            elroyDotsLeft2    : 60,
            elroySpeed2       : 1.05,
            fruitType         : 8,
            fruitScore        : 5000,
            frightTime        : 0,
            frightBlinks      : 0,
            switchTimes       : [ 5, 20, 5, 20, 5, 1037, 1 / 60, 1 ],
            penForceTime      : 3,
            penLeavingLimit   : [ 0, 0, 0, 0 ]
        },
        { // 21+
            ghostSpeed        : 0.95,
            tunnelSpeed       : 0.5,
            pmSpeed           : 0.9,
            eatingSpeed       : 0.79,
            ghostFrightSpeed  : 0.75,
            pmFrightSpeed     : 0.9,
            eatingFrightSpeed : 0.79,
            elroyDotsLeft1    : 120,
            elroySpeed1       : 1,
            elroyDotsLeft2    : 60,
            elroySpeed2       : 1.05,
            fruitType         : 8,
            fruitScore        : 5000,
            frightTime        : 0,
            frightBlinks      : 0,
            switchTimes       : [ 5, 20, 5, 20, 5, 1037, 1 / 60, 1 ],
            penForceTime      : 3,
            penLeavingLimit   : [ 0, 0, 0, 0 ]
        }],
    
    /** @const Data */
        fruitNames     = [ "Cherries", "Strawberry", "Peach", "Apple", "Grapes", "Galaxian", "Bell", "Key" ],
        fruitDots1     = 174,
        fruitDots2     = 74,
        energizerValue = 5,
        pillValue      = 1,
        extraLife      = 10000,
        pillMult       = 10,
        eyesBonus      = 12000,
        totalSwitchs   = 7,
        blinksTimer    = 200,
        penDotsCount   = [ 0, 7, 17, 32 ],
        inPenSpeed     = 0.6,
        eyesSpeed      = 2,
        exitPenSpeed   = 0.4,
        pathSpeeds     = {
            inPen    : inPenSpeed,
            exitPen  : exitPenSpeed,
            enterPen : eyesSpeed
        };
    
    /** @type {number} the current game level */
    let gameLevel = 1;
    
    
    
    
    /** The public API */
    return {
        /**
         * Sets the game level
         * @param {number} level
         */
        set level(level) {
            gameLevel = level;
        },
        
        
        /**
         * The amount of time a fruit stays in the board
         * @return {number}
         */
        get fruitTime() {
            return Math.round(Math.random() * 1000) + 9000;
        },
        
        /**
         * The amount of dots left before showing the fruit
         * @return {number}
         */
        get fruitDots1() {
            return fruitDots1;
        },
        
        /**
         * The amount of dots left before showing the fruit
         * @return {number}
         */
        get fruitDots2() {
            return fruitDots2;
        },
        
        /**
         * The value for the energizer
         * @return {number}
         */
        get energizerValue() {
            return energizerValue;
        },
        
        /**
         * The value for the pill
         * @return {number}
         */
        get pillValue() {
            return pillValue;
        },
        
        
        /**
         * The score required for each extra life
         * @return {number}
         */
        get extraLife() {
            return extraLife;
        },
        
        /**
         * Returns the pills multiplier
         * @return {number}
         */
        get pillMult() {
            return pillMult;
        },
        
        /**
         * Returns the eves bonus score
         * @return {number}
         */
        get eyesBonus() {
            return eyesBonus;
        },
        
        /**
         * Returns the total amount of Ghost's mode switchs
         * @return {number}
         */
        get totalSwitchs() {
            return totalSwitchs;
        },
        
        /**
         * Returns the Ghost's blink time
         * @return {number}
         */
        get blinksTimer() {
            return blinksTimer;
        },
        
        /**
         * Returns the Ghost's eyes mode speed
         * @return {number}
         */
        get eyesSpeed() {
            return eyesSpeed;
        },
        
        
        /**
         * Returns the value asociated with the given key for the current level
         * @param {string} variable
         * @return {(number|string|Array.<number>)}
         */
        getLevelData(variable) {
            var level = Math.min(gameLevel - 1, levelsData.length - 1),
                data  = levelsData[level],
                value = data[variable];

            if (Array.isArray(value)) {
                return Object.create(value);
            }
            return value;
        },
            
        /**
         * Returns the fruit name for the current level
         * @return {string}
         */
        getFruitName() {
            return fruitNames[Data.getLevelData("fruitType") - 1];
        },
        
        /**
         * Returns the Pen Force time in miliseconds
         * @return {number}
         */
        getPenForceTime() {
            return Data.getLevelData("penForceTime") * 1000;
        },
        
        /**
         * Returns the switch time at the given mode in miliseconds
         * @param {number} mode
         * @return {number}
         */
        getSwitchTime(mode) {
            return Data.getLevelData("switchTimes")[mode] * 1000;
        },
        
        /**
         * Returns the Fright time in miliseconds
         * @return {number}
         */
        getFrightTime() {
            return Data.getLevelData("frightTime") * 1000;
        },
        
        /**
         * Returns the amount of switchs when blinking in fright mode
         * @return {number}
         */
        getBlinks() {
            return Data.getLevelData("frightBlinks") * 2;
        },
        
        /**
         * Returns the ghost speed
         * @param {boolean} inPen
         * @return {number}
         */
        getGhostSpeed(inPen) {
            return inPen ? inPenSpeed : Data.getLevelData("ghostSpeed");
        },
        
        /**
         * Returns the ghost speed inside a path
         * @param {string} path
         * @return {number}
         */
        getPathSpeed(path) {
            return pathSpeeds[path];
        },
        
        /**
         * Returns the Score for a dead Ghost
         * @param {number} amount
         * @return {number}
         */
        getGhostScore(amount) {
            return Math.pow(2, amount) * 100;
        },
        
        /**
         * Returns the amount of dots required before exiting the Pen for the given ghost
         * @param {number} ghost
         * @return {number}
         */
        getPenDotsCount(ghost) {
            return penDotsCount[ghost];
        },
        
        /**
         * Returns true if the given mode is Frighten
         * @param {number} mode
         * @return {boolean}
         */
        isFrighten(mode) {
            return mode === "blue" || mode === "white";
        }
    };
    
}());


/**
 * The Game Display
 */
class Display {
    
    /**
     * The Game Display constructor
     * @param {function} callback
     */
    constructor(callback) {
        this.container = document.querySelector("#container");
        this.display   = "mainScreen";
        this.callback  = callback;
    }
    
    
    /**
     * Gets the Game Display
     * @return {string}
     */
    get() {
        return this.display;
    }
    
    /**
     * Sets the Game Display
     * @param {string} display
     * @return {Display}
     */
    set(display) {
        this.display = display;
        return this;
    }
    
    
    /**
     * Adds the class to the design to show the Display
     */
    show() {
        this.container.className = this.display;
        this.callback();
    }
    
    
    /**
     * Returns true if the game is in the main screen
     * @return {boolean}
     */
    isMainScreen() {
        return this.display === "mainScreen";
    }
    
    /**
     * Returns true if the game is in a playing mode
     * @return {boolean}
     */
    isPlaying() {
        return [ "ready", "playing", "paused" ].includes(this.display);
    }
    
    /**
     * Returns true if the game is paused
     * @return {boolean}
     */
    isPaused() {
        return this.display === "paused";
    }
}

/**
 * The Food Class
 */
class Food {
    
    /**
     * The Food constructor
     */
    constructor() {
        this.ctx = Board.boardCanvas.context;
        
        this.init();
        this.createMatrix();
        this.createEnergizers();
    }
    
    /**
     * Initializes the instance
     */
    init() {
        this.total      = Board.pillAmount;
        this.minRadius  = Board.pillSize;
        this.maxRadius  = Board.energizerSize;
        this.radius     = this.maxRadius;
        this.energizers = [];
        this.matrix     = [];
        this.mult       = -1;
    }
    
    /**
     * Creates a Matrix with the positions of the pills and energizers
     */
    createMatrix() {
        for (let i = 0; i < Board.rows; i += 1) {
            this.matrix[i] = [];
            for (let j = 0; j < Board.cols; j += 1) {
                this.matrix[i][j] = Board.hasPill(j, i) ? Data.pillValue : 0;
            }
        }
        
        Board.energizers.forEach((pos) => {
            this.matrix[pos.y][pos.x] = Data.energizerValue;
        });
    }
    
    /**
     * Creates a list with only the active energizers
     */
    createEnergizers() {
        this.energizers = [];
        
        Board.energizers.forEach((pos) => {
            if (this.matrix[pos.y][pos.x] === Data.energizerValue) {
                this.energizers.push(Board.getTileXYCenter(pos));
            }
        });
    }
    
    
    /**
     * Does the Enerigizers animation
     */
    wink() {
        this.calcRadius();
        this.drawEnergizers();
    }
    
    /**
     * Calculates the Radius for the Energizers
     */
    calcRadius() {
        this.radius += this.mult * 0.1;
        
        if (this.radius <= this.minRadius) {
            this.mult = 1;
        } else if (this.radius >= this.maxRadius) {
            this.mult = -1;
        }
    }
    
    
    /**
     * Draws all the Pills and Energizers in the board
     */
    draw() {
        this.drawPills();
        this.drawEnergizers();
    }
    
    /**
     * Draws all the Pills in the board
     */
    drawPills() {
        this.ctx.save();
        this.ctx.fillStyle = "white";
        
        this.matrix.forEach((row, y) => {
            row.forEach((value, x) => {
                let rect = Board.getPillRect(x, y);
                if (value === Data.pillValue) {
                    this.ctx.fillRect(rect.x, rect.y, rect.size, rect.size);
                }
            });
        });
        this.ctx.restore();
    }
    
    /**
     * Clears a Pill at the given position
     * @param {number} x
     * @param {number} y
     */
    clearPill(x, y) {
        let rect = Board.getPillRect(x, y);
        this.ctx.clearRect(rect.x, rect.y, rect.size, rect.size);
    }
    
    
    /**
     * Draws all the remaining Energizers with the given radius
     */
    drawEnergizers() {
        this.energizers.forEach((pos) => {
            this.clearEnergizer(pos.x, pos.y);
            this.drawEnergizer(pos.x, pos.y, this.radius);
        });
    }
    
    /**
     * Draws an Energizer at the given position with the given radius
     * @param {number} x
     * @param {number} y
     * @param {number} radius
     */
    drawEnergizer(x, y, radius) {
        this.ctx.save();
        this.ctx.fillStyle = "white";
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.restore();
    }
    
    /**
     * Clears an Energizer at the given position
     * @param {number} x
     * @param {number} y
     */
    clearEnergizer(x, y) {
        let radius = this.maxRadius;
        this.ctx.clearRect(x - radius, y - radius, radius * 2, radius * 2);
    }
    
    
    /**
     * Returns true if there is a Pill at the given cell
     * @param {{x: number, y: number}} tile
     * @return {boolean}
     */
    isAtPill(tile) {
        return this.matrix[tile.y][tile.x] > 0;
    }
    
    /**
     * The Blob eats the Pill at the given cell. Returns the value of the pill. 1 for dot, 5 for energizer
     * @param {{x: number, y: number}} tile
     * @return {number}
     */
    eatPill(tile) {
        let value = this.matrix[tile.y][tile.x],
            pos   = Board.getTileXYCenter(tile);
        
        this.clearPill(tile.x, tile.y);
        this.matrix[tile.y][tile.x] = 0;
        this.total -= 1;
        
        if (value === Data.energizerValue) {
            this.clearEnergizer(pos.x, pos.y);
            this.createEnergizers();
        }
        return value;
    }
    
    
    /**
     * Returns the amount of PÃŽlls left
     * return {number}
     */
    getLeftPills() {
        return this.total;
    }
}

/**
 * The Fruit Class
 */
class Fruit {
    
    /**
     * The Fruit constructor
     */
    constructor() {
        this.ctx   = Board.boardCanvas.context;
        this.timer = 0;
    }
    
    
    /**
     * Try to add a fruit in the board
     * @param {number} dotsLeft
     */
    add(dotsLeft) {
        if (dotsLeft === Data.fruitDots1 || dotsLeft === Data.fruitDots2) {
            this.timer = Data.fruitTime;
            this.draw(Board.fruitTile);
        }
    }
    
    /**
     * Reduces the fruit timer when there is one
     * @param {number} time
     */
    reduceTimer(time) {
        if (this.timer > 0) {
            this.timer -= time;
            if (this.timer <= 0) {
                this.eat();
            }
        }
    }
    
    /**
     * Eats the Fruit
     */
    eat() {
        this.clear();
        this.timer = 0;
    }
    
    /**
     * Returns true if the given tile is at the fruit position
     * @param {{x: number, y: number}}
     * @return {boolean}
     */
    isAtPos(tile) {
        if (this.timer > 0) {
            let rect = Board.getFruitRect(),
                pos  = Board.tileToPos(tile);
            
            return (
                pos.x >= rect.left && pos.x <= rect.right &&
                pos.y >= rect.top  && pos.y <= rect.bottom
            );
        }
        return false;
    }
    
    
    /**
     * Draws a Fruit
     * @param {{x: number, y: number}}
     */
    draw(tile) {
        let pos = Board.tileToPos(tile);
        this.ctx.save();
        this.ctx.translate(pos.x, pos.y);
        this["draw" + Data.getFruitName()]();
        this.ctx.restore();
    }
    
    /**
     * Clears the Fruit
     */
    clear() {
        let pos = Board.fruitPos;
        this.ctx.clearRect(pos.x - 1, pos.y - 1, Board.fruitSize, Board.fruitSize);
    }
    
    
    /**
     * Draws the Cherries Fruit
     */
    drawCherries() {
        this.ctx.fillStyle = "rgb(255, 0, 0)";
        this.ctx.beginPath();
        this.ctx.arc(10, 14, 4, 0, 2 * Math.PI);
        this.ctx.arc(4, 10, 4, 0, 2 * Math.PI);
        this.ctx.fill();
        
        this.ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        this.ctx.beginPath();
        this.ctx.arc(8, 15.5, 1.5, 0, 2 * Math.PI);
        this.ctx.arc(1.5, 11, 1.5, 0, 2 * Math.PI);
        this.ctx.fill();
        
        this.ctx.strokeStyle = "rgb(0, 153, 0)";
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(17, 1);
        this.ctx.quadraticCurveTo(9, 1, 5, 9);
        this.ctx.moveTo(17, 1);
        this.ctx.quadraticCurveTo(12, 3, 10, 12);
        this.ctx.stroke();
        
        this.ctx.strokeStyle = "rgb(222, 151, 81)";
        this.ctx.lineWidth = 3;
        this.ctx.lineCap = "round";
        this.ctx.beginPath();
        this.ctx.moveTo(17, 1);
        this.ctx.lineTo(16, 2);
        this.ctx.stroke();
    }
    
    /**
     * Draws the Strawberry Fruit
     */
    drawStrawberry() {
        let dots = [ 3, 7, 5, 6, 4, 10, 7, 8, 6, 11, 7, 13, 9, 10, 9, 14, 10, 12, 11, 8, 12, 11, 14, 6, 14, 9 ];
        
        this.ctx.fillStyle = "rgb(222, 0, 0)";
        this.ctx.beginPath();
        this.ctx.moveTo(9, 3);
        this.ctx.quadraticCurveTo(17, 3, 17, 7);
        this.ctx.quadraticCurveTo(17, 14, 9, 17);
        this.ctx.quadraticCurveTo(1, 14, 1, 7);
        this.ctx.quadraticCurveTo(1, 3, 9, 3);
        this.ctx.fill();
        
        this.ctx.fillStyle = "rgb(0, 222, 0)";
        this.ctx.beginPath();
        this.ctx.moveTo(5, 3);
        this.ctx.lineTo(13, 3);
        this.ctx.lineTo(14, 4);
        this.ctx.lineTo(9, 7);
        this.ctx.lineTo(4, 4);
        this.ctx.fill();
        
        this.ctx.fillStyle = "rgb(255, 255, 255)";
        this.ctx.fillRect(8, 0, 2, 4);
        
        for (let i = 0; i < dots.length; i += 2) {
            this.ctx.fillRect(dots[i], dots[i + 1], 1, 1);
        }
    }
    
    /**
     * Draws the Peach Fruit
     */
    drawPeach() {
        this.ctx.fillStyle = "rgb(255, 181, 33)";
        this.ctx.beginPath();
        this.ctx.arc(6, 10, 5, Math.PI, 1.5 * Math.PI, false);
        this.ctx.arc(12, 10, 5, 1.5 * Math.PI, 2 * Math.PI, false);
        this.ctx.arc(10, 11, 7, 0, 0.5 * Math.PI, false);
        this.ctx.arc(8, 11, 7, 0.5 * Math.PI, Math.PI, false);
        this.ctx.fill();
        
        this.ctx.strokeStyle = "rgb(0, 222, 0)";
        this.ctx.lineCap = "round";
        this.ctx.beginPath();
        this.ctx.moveTo(6, 5);
        this.ctx.lineTo(14, 4);
        this.ctx.moveTo(14, 0);
        this.ctx.quadraticCurveTo(11, 0, 10, 7);
        this.ctx.stroke();
    }
    
    /**
     * Draws the Apple Fruit
     */
    drawApple() {
        this.ctx.fillStyle = "rgb(222, 0, 0)";
        this.ctx.beginPath();
        this.ctx.arc(6, 8, 5, Math.PI, 1.5 * Math.PI, false);
        this.ctx.arc(12, 8, 5, 1.5 * Math.PI, 2 * Math.PI, false);
        this.ctx.arc(10, 11, 7, 0, 0.5 * Math.PI, false);
        this.ctx.arc(13, 15, 3, 0.5 * Math.PI, Math.PI, false);
        this.ctx.arc(6, 15, 3, 0, 0.5 * Math.PI, false);
        this.ctx.arc(8, 11, 7, 0.5 * Math.PI, Math.PI, false);
        this.ctx.fill();
        
        this.ctx.strokeStyle = "rgb(0, 222, 0)";
        this.ctx.lineCap = "round";
        this.ctx.beginPath();
        this.ctx.arc(3, 7, 7, 1.5 * Math.PI, 2 * Math.PI, false);
        this.ctx.arc(13, 4, 4, Math.PI, 1.5 * Math.PI, false);
        this.ctx.stroke();
        
        this.ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
        this.ctx.beginPath();
        this.ctx.arc(7, 9, 4, Math.PI, 1.5 * Math.PI, false);
        this.ctx.stroke();
    }
    
    /**
     * Draws the Grapes Fruit
     */
    drawGrapes() {
        this.ctx.fillStyle = "rgb(0, 222, 0)";
        this.ctx.beginPath();
        this.ctx.arc(9, 11, 8, 0, 2 * Math.PI);
        this.ctx.fill();
        
        this.ctx.strokeStyle = "rgb(74, 74, 0)";
        this.ctx.beginPath();
        this.ctx.moveTo(9, 4);
        this.ctx.lineTo(2, 11);
        this.ctx.lineTo(7, 16);
        this.ctx.moveTo(14, 6);
        this.ctx.lineTo(8, 12);
        this.ctx.lineTo(14, 18);
        this.ctx.moveTo(9, 6);
        this.ctx.lineTo(15, 12);
        this.ctx.lineTo(10, 17);
        this.ctx.moveTo(10, 14);
        this.ctx.lineTo(4, 18);
        this.ctx.stroke();
        
        this.ctx.strokeStyle = "rgb(222, 148, 74)";
        this.ctx.beginPath();
        this.ctx.moveTo(4, 0);
        this.ctx.lineTo(5, 1);
        this.ctx.lineTo(12, 1);
        this.ctx.moveTo(9, 1);
        this.ctx.lineTo(9, 4);
        this.ctx.stroke();
    }
    
    /**
     * Draws the Galaxian Fruit
     */
    darwGalaxian() {
        this.ctx.fillStyle   = "rgb(255, 250, 55)";
        this.ctx.strokeStyle = "rgb(255, 250, 55)";
        this.ctx.beginPath();
        this.ctx.moveTo(1, 4);
        this.ctx.lineTo(17, 4);
        this.ctx.lineTo(9, 11);
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.moveTo(9, 11);
        this.ctx.lineTo(9, 18);
        this.ctx.stroke();
        
        this.ctx.strokeStyle = "rgb(0, 51, 255)";
        this.ctx.beginPath();
        this.ctx.moveTo(1, 1);
        this.ctx.lineTo(1, 6);
        this.ctx.lineTo(8, 12);
        this.ctx.moveTo(17, 1);
        this.ctx.lineTo(17, 6);
        this.ctx.lineTo(10, 12);
        this.ctx.stroke();
        
        this.ctx.fillStyle   = "rgb(255, 0, 0)";
        this.ctx.strokeStyle = "rgb(255, 0, 0)";
        this.ctx.beginPath();
        this.ctx.moveTo(3, 5);
        this.ctx.lineTo(9, 0);
        this.ctx.lineTo(15, 5);
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.moveTo(9, 3);
        this.ctx.lineTo(9, 6);
        this.ctx.stroke();
    }
    
    /**
     * Draws the Bell Fruit
     */
    drawBell() {
        this.ctx.fillStyle = "rgb(255, 255, 33)";
        this.ctx.beginPath();
        this.ctx.moveTo(1, 15);
        this.ctx.quadraticCurveTo(1, 1, 9, 1);
        this.ctx.quadraticCurveTo(17, 1, 17, 15);
        this.ctx.fill();
        
        this.ctx.fillStyle = "rgb(0, 222, 222)";
        this.ctx.fillRect(3, 14, 12, 3);
        this.ctx.fillStyle = "rgb(255, 255, 255)";
        this.ctx.fillRect(9, 14, 3, 3);
        
        this.ctx.strokeStyle = "rgb(255, 255, 255)";
        this.ctx.beginPath();
        this.ctx.moveTo(8, 4);
        this.ctx.quadraticCurveTo(4, 4, 4, 13);
        this.ctx.stroke();
    }
    
    /**
     * Draws the Key Fruit
     */
    drawKey() {
        this.ctx.fillStyle = "rgb(0, 222, 222)";
        this.ctx.beginPath();
        this.ctx.arc(6, 3, 3, Math.PI, 1.5 * Math.PI, false);
        this.ctx.arc(12, 3, 3, 1.5 * Math.PI, 2 * Math.PI, false);
        this.ctx.arc(12, 5, 3, 0, 0.5 * Math.PI, false);
        this.ctx.arc(6, 5, 3, 0.5 * Math.PI, Math.PI, false);
        this.ctx.fill();
        this.ctx.clearRect(6, 2, 6, 2);
        
        this.ctx.strokeStyle = "rgb(255, 255, 255)";
        this.ctx.beginPath();
        this.ctx.moveTo(8, 8);
        this.ctx.lineTo(8, 15);
        this.ctx.arc(9.5, 13.5, 1.5, Math.PI, 0, true);
        this.ctx.lineTo(11, 8);
        this.ctx.moveTo(11, 10);
        this.ctx.lineTo(14, 10);
        this.ctx.moveTo(11, 13);
        this.ctx.lineTo(14, 13);
        this.ctx.stroke();
    }
}

/**
 * The Blob Class
 */
class Blob {
    
    /**
     * The Blob constructor
     */
    constructor() {
        this.init(Board.gameCanvas);
    }
    
    /**
     * Initializes the Blob
     * @param {Canvas} canvas
     */
    init(canvas) {
        this.canvas     = canvas;
        this.ctx        = canvas.context;
        
        this.tile       = Board.startingPos;
        this.tileCenter = Board.getTileXYCenter(this.tile);
        this.x          = this.tileCenter.x;
        this.y          = this.tileCenter.y;
        this.dir        = Board.startingDir;
        this.speed      = Data.getLevelData("pmSpeed");
        this.center     = true;
        this.turn       = null;
        this.delta      = null;
        this.mouth      = 5;
        this.radius     = Board.blobRadius;
        this.sound      = 1;
    }
    
    
    /**
     * Animates the Blob
     * @param {number} speed
     * @return {boolean}
     */
    animate(speed) {
        let newTile = false;
        if (this.center && this.crashed()) {
            this.mouth = 5;
        } else if (this.delta) {
            newTile = this.cornering(speed);
        } else {
            newTile = this.move(speed);
        }
        this.draw();
        return newTile;
    }
    
    /**
     * Moves the Blob
     * @param {number} speed
     * @return {boolean}
     */
    move(speed) {
        this.x += this.dir.x * this.speed * speed;
        this.y += this.dir.y * this.speed * speed;
        
        this.moveMouth();
        this.newTile();
        let newTile = this.atCenter();
        
        this.x = Board.tunnelEnds(this.x);
        return newTile;
    }
    
    /**
     * Changes the state of the Blob's mouth
     */
    moveMouth() {
        this.mouth = (this.mouth + 1) % 20;
    }
    
    /**
     * The Blob might have entered a new Tile, and several things might need to be done
     */
    newTile() {
        let tile = Board.getTilePos(this.x, this.y);
        if (!Board.equalTiles(this.tile, tile)) {
            this.tile       = tile;
            this.tileCenter = Board.getTileXYCenter(tile);
            this.center     = false;
            
            if (this.turn && this.inBoard(this.turn) && !this.isWall(this.turn)) {
                this.delta = {
                    x : this.dir.x || this.turn.x,
                    y : this.dir.y || this.turn.y
                };
            }
        }
    }
    
    /**
     * Does the turning or wall crash when the Blob is at, or just passed, the center of a tile
     * @return {boolean}
     */
    atCenter() {
        if (!this.center && this.passedCenter()) {
            let turn = false;
            if (this.turn && this.inBoard(this.turn) && !this.isWall(this.turn)) {
                this.dir  = this.turn;
                this.turn = null;
                turn      = true;
            }
            if (turn || this.crashed()) {
                this.x = this.tileCenter.x;
                this.y = this.tileCenter.y;
            }
            this.center = true;
            
            return true;
        }
        return false;
    }
    
    
    /**
     * Does a faster turn by turnning a bit before the corner.
     * Only when a turn is asked before reaching an intersection
     * @param {number} speed
     * @return {boolean}
     */
    cornering(speed) {
        this.x += this.delta.x * this.speed * speed;
        this.y += this.delta.y * this.speed * speed;
        
        if (this.passedCenter()) {
            if (this.dir.x) {
                this.x = this.tileCenter.x;
            }
            if (this.dir.y) {
                this.y = this.tileCenter.y;
            }
            this.dir   = this.turn;
            this.turn  = null;
            this.delta = null;
            
            return true;
        }
        return false;
    }
    
    /**
     * Eats food (dots, energizers, fruits)
     * @param {boolean} atPill
     * @param {boolean} frightenGhosts
     */
    onEat(atPill, frightenGhosts) {
        if (!atPill) {
            this.sound = 1;
        }
        
        let key;
        if (frightenGhosts) {
            key = atPill ? "eatingFrightSpeed" : "pmFrightSpeed";
        } else {
            key = atPill ? "eatingSpeed" : "pmSpeed";
        }
        this.speed = Data.getLevelData(key);
    }
    
    /**
     * Returns the apropiate sound effect
     * @return {string}
     */
    getSound() {
        this.sound = (this.sound + 1) % 2;
        return this.sound ? "eat2" : "eat1";
    }
    
    /**
     * New direction (given by the user)
     * @param {{x: number, y: number}} turn
     */
    makeTurn(turn) {
        if (this.delta) {
            return;
        }
        if (this.turnNow(turn)) {
            this.dir    = turn;
            this.turn   = null;
            this.center = false;
        } else {
            this.turn = turn;
        }
    }
    
    
    /**
     * Draws a Blob with the given data
     */
    draw() {
        let values = [ 0, 0.2, 0.4, 0.2 ],
            mouth  = Math.floor(this.mouth / 5),
            delta  = values[mouth];
        
        this.savePos();
        this.ctx.save();
        this.ctx.fillStyle = "rgb(255, 255, 51)";
        this.ctx.translate(Math.round(this.x), Math.round(this.y));
        this.ctx.rotate(this.getAngle());
        this.ctx.beginPath();
        this.ctx.arc(0, 0, this.radius, (1 + delta) * Math.PI, (3 - delta) * Math.PI);
        this.ctx.lineTo(Math.round(this.radius / 3), 0);
        this.ctx.fill();
        this.ctx.restore();
    }
    
    /**
     * Saves the Blob's position to delete clear it before the next animation
     */
    savePos() {
        this.canvas.savePos(this.x, this.y);
    }
    
    /**
     * Draws the next step in the Blob's death animation
     * @param {Context} ctx
     * @param {number}  count
     */
    drawDeath(ctx, count) {
        let delta = count / 50;
        
        ctx.fillStyle = "rgb(255, 255, 51)";
        ctx.beginPath();
        ctx.arc(0, 0, this.radius, (1.5 - delta) * Math.PI, (1.5 + delta) * Math.PI, true);
        ctx.lineTo(0, 0);
        ctx.fill();
    }
    
    /**
     * Draws a circle as the next step in the Blob Death animation
     * @param {Context} ctx
     * @param {number}  count
     */
    drawCircle(ctx, count) {
        let radius = Math.round(count / 2);
        
        ctx.strokeStyle = "rgb(159, 159, 31)";
        ctx.lineWidth   = 3;
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, 2 * Math.PI, true);
        ctx.stroke();
    }
        

    /**
     * Returns true if the Blob crashed with a wall
     * @return {boolean}
     */
    crashed() {
        return this.inBoard(this.dir) && this.isWall(this.dir);
    }
    
    /**
     * Returns true if the Blob has passed the center of the currrent tile
     * @return {boolean}
     */
    passedCenter() {
        return (
            (this.dir.x ===  1 && this.x >= this.tileCenter.x) ||
            (this.dir.x === -1 && this.x <= this.tileCenter.x) ||
            (this.dir.y ===  1 && this.y >= this.tileCenter.y) ||
            (this.dir.y === -1 && this.y <= this.tileCenter.y)
        );
    }
    
    /**
     * Returns true if the Blob has to turn now
     * @param {{x: number, y: number}}
     * @return {boolean}
     */
    turnNow(turn) {
        return (
            (!this.dir.x && !turn.x) || (!this.dir.y && !turn.y) ||  // Half Turn
            (this.center && this.crashed() && this.inBoard(turn) && !this.isWall(turn))    // Crash Turn
        );
    }
    
    /**
     * Returns true if the next tile is a wall
     * @param {{x: number, y: number}}
     * @return {boolean}
     */
    isWall(turn) {
        let tile = Board.sumTiles(this.tile, turn);
        return Board.isWall(tile.x, tile.y);
    }
    
    /**
     * Returns true if the next tile is a wall
     * @param {{x: number, y: number}}
     * @return {boolean}
     */
    inBoard(turn) {
        let tile = Board.sumTiles(this.tile, turn);
        return Board.inBoard(tile.x, tile.y);
    }
    
    /**
     * Returns the angle of the Blob using its direction
     * @return {number}
     */
    getAngle() {
        let angle;
        if (this.dir.x === -1) {
            angle = 0;
        } else if (this.dir.x ===  1) {
            angle = Math.PI;
        } else if (this.dir.y === -1) {
            angle = 0.5 * Math.PI;
        } else if (this.dir.y ===  1) {
            angle = 1.5 * Math.PI;
        }
        return angle;
    }
    
    
    /**
     * Returns the Blob x position
     * @return {number}
     */
    getX() {
        return this.x;
    }
    
    /**
     * Returns the Blob y position
     * @return {number}
     */
    getY() {
        return this.y;
    }
    
    /**
     * Returns the Blob direction
     * @return {{x: number, y: number}}
     */
    getDir() {
        return this.dir;
    }
    
    /**
     * Returns the Blob tile
     * @return {{x: number, y: number}}
     */
    getTile() {
        return this.tile;
    }
}

/**
 * The Game High Scores
 */
class HighScores {
    
    /**
     * The Game High Scores constructor
     */
    constructor() {
        this.input     = document.querySelector(".input input");
        this.scores    = document.querySelector(".scores");
        this.none      = document.querySelector(".none");
        this.data      = new Storage("pacman.hs");
        this.total     = this.data.get("total") || 0;
        this.focused   = false;
        this.maxScores = 10;
        
        this.input.onfocus = () => this.focused = true;
        this.input.onblur  = () => this.focused = false;
    }
    
    /**
     * Show the Scores for the given mode
     */
    show() {
        this.scores.innerHTML = "";
        this.showHideNone(this.total === 0);
        
        if (this.total > 0) {
            this.displayTitles();
            this.displayScores();
        }
    }
    
    /**
     * Create the titles and place it in the DOM
     */
    displayTitles() {
        let div = this.createContent("name", "lvl", "score");
        div.className = "titles";
        this.scores.appendChild(div);
    }
    
    /**
     * Create each score line and place it in the DOM
     */
    displayScores() {
        for (let i = 1; i <= this.total; i += 1) {
            let data = this.data.get(i),
                div  = this.createContent(data.name, data.level, Utils.formatNumber(data.score, ","));
            
            div.className = "highScore";
            this.scores.appendChild(div);
        }
    }
    
    /**
     * Creates the content for each High Score
     */
    createContent(name, level, score) {
        let namer   = "<div class='left'>"   + name  + "</div>",
            lvler   = "<div class='middle'>" + level + "</div>",
            screr   = "<div class='right'>"  + score + "</div>",
            element = document.createElement("DIV");
        
        element.innerHTML = namer + lvler + screr;
        return element;
    }
    
    /**
     * Tries to save a score, when possible
     * @param {number} level
     * @param {number} score
     * @return {boolean}
     */
    save(level, score) {
        if (this.input.value) {
            this.saveData(level, score);
            return true;
        }
        return false;
    }
    
    /**
     * Gets the scores and adds the new one in the right position, updating the total, when possible
     * @param {number} level
     * @param {number} score
     */
    saveData(level, score) {
        let data   = [],
            saved  = false,
            actual = {
                name  : this.input.value,
                level : level,
                score : score
            };
        
        for (let i = 1; i <= this.total; i += 1) {
            let hs = this.data.get(i);
            if (!saved && hs.score < actual.score) {
                data.push(actual);
                saved = true;
            }
            if (data.length < this.maxScores) {
                data.push(hs);
            }
        }
        if (!saved && data.length < this.maxScores) {
            data.push(actual);
        }
        
        this.data.set("total", data.length);
        data.forEach((element, index) => {
            this.data.set(index + 1, element);
        });
        this.total = data.length;
    }
    
    /**
     * Deletes all the Scores
     */
    restore() {
        for (let i = 1; i <= this.total; i += 1) {
            this.data.remove(i);
        }
        this.data.set("total", 0);
        this.show();
    }
    
    /**
     * Shows or hides the no results element
     * @param {boolean} show
     */
    showHideNone(show) {
        this.none.style.display = show ? "block" : "none";
    }
    
    /**
     * Sets the input value and focus it
     */
    setInput() {
        this.input.value = "";
        this.input.focus();
    }
    
    /**
     * Returns true if the input is focus
     * @return {boolean}
     */
    isFocused() {
        return this.focused;
    }
}

let Board = (function () {
    "use strict";
    
    /**
     * @const The Board MAtrix (28x31) and the Values
     * 0 Wall | 1 Path | 2 Pill on Path | 3 Intersection | 4 Pill on Interection | 5 Tunnel
     */
    const wallValue    = 0,
        pillPathValue  = 2,
        interValue     = 3,
        interPillValue = 4,
        tunnelValue    = 5,
        
        boardMatrix    = [
            [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            [ 0, 4, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 4, 0, 0, 4, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 4, 0 ],
            [ 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0 ],
            [ 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0 ],
            [ 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0 ],
            [ 0, 4, 2, 2, 2, 2, 4, 2, 2, 4, 2, 2, 4, 2, 2, 4, 2, 2, 4, 2, 2, 4, 2, 2, 2, 2, 4, 0 ],
            [ 0, 2, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 2, 0 ],
            [ 0, 2, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 2, 0 ],
            [ 0, 4, 2, 2, 2, 2, 4, 0, 0, 4, 2, 2, 4, 0, 0, 4, 2, 2, 4, 0, 0, 4, 2, 2, 2, 2, 4, 0 ],
            [ 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0, 0, 2, 0, 0, 3, 1, 1, 3, 1, 1, 3, 1, 1, 3, 0, 0, 2, 0, 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0 ],
            [ 5, 5, 5, 5, 5, 5, 4, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 4, 5, 5, 5, 5, 5, 5 ],
            [ 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0, 0, 2, 0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0, 2, 0, 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0 ],
            [ 0, 4, 2, 2, 2, 2, 4, 2, 2, 4, 2, 2, 4, 0, 0, 4, 2, 2, 4, 2, 2, 4, 2, 2, 2, 2, 4, 0 ],
            [ 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0 ],
            [ 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0 ],
            [ 0, 3, 2, 4, 0, 0, 4, 2, 2, 4, 2, 2, 4, 1, 1, 4, 2, 2, 4, 2, 2, 4, 0, 0, 4, 2, 3, 0 ],
            [ 0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0 ],
            [ 0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0 ],
            [ 0, 4, 2, 4, 2, 2, 4, 0, 0, 4, 2, 2, 4, 0, 0, 4, 2, 2, 4, 0, 0, 4, 2, 2, 4, 2, 4, 0 ],
            [ 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0 ],
            [ 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0 ],
            [ 0, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 0 ],
            [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
        ],
    
    /**
     * @const Possible Turns at the Intersections
     * 0 Up | 1 Left | 2 Down | 3 Right
     */
        boardTurns = {
            x1y1   : [ 2, 3       ],
            x6y1   : [ 1, 2, 3    ],
            x12y1  : [ 1, 2       ],
            x15y1  : [ 2, 3       ],
            x21y1  : [ 1, 2, 3    ],
            x26y1  : [ 1, 2       ],
            x1y5   : [ 0, 2, 3    ],
            x6y5   : [ 0, 1, 2, 3 ],
            x9y5   : [ 1, 2, 3    ],
            x12y5  : [ 0, 1, 3    ],
            x15y5  : [ 0, 1, 3    ],
            x18y5  : [ 1, 2, 3    ],
            x21y5  : [ 0, 1, 2, 3 ],
            x26y5  : [ 0, 1, 2    ],
            x1y8   : [ 0, 3       ],
            x6y8   : [ 0, 1, 2    ],
            x9y8   : [ 0, 3       ],
            x12y8  : [ 1, 2       ],
            x15y8  : [ 2, 3       ],
            x18y8  : [ 0, 1       ],
            x21y8  : [ 0, 2, 3    ],
            x26y8  : [ 0, 1       ],
            x9y11  : [ 2, 3       ],
            x12y11 : [ 1, 3       ],
            x15y11 : [ 1, 3       ],
            x18y11 : [ 1, 2       ],
            x6y14  : [ 0, 1, 2, 3 ],
            x9y14  : [ 0, 1, 2    ],
            x18y14 : [ 0, 2, 3    ],
            x21y14 : [ 0, 1, 2, 3 ],
            x9y17  : [ 0, 2, 3    ],
            x18y17 : [ 0, 1, 2    ],
            x1y20  : [ 2, 3       ],
            x6y20  : [ 0, 1, 2, 3 ],
            x9y20  : [ 0, 1, 3    ],
            x12y20 : [ 1, 2       ],
            x15y20 : [ 2, 3       ],
            x18y20 : [ 0, 1, 3    ],
            x21y20 : [ 0, 1, 2, 3 ],
            x26y20 : [ 1, 2       ],
            x1y23  : [ 0, 3       ],
            x3y23  : [ 1, 2       ],
            x6y23  : [ 0, 2, 3    ],
            x9y23  : [ 1, 2, 3    ],
            x12y23 : [ 1, 3       ],
            x15y23 : [ 1, 3       ],
            x18y23 : [ 1, 2, 3    ],
            x21y23 : [ 0, 1, 2    ],
            x24y23 : [ 2, 3       ],
            x26y23 : [ 0, 1       ],
            x1y26  : [ 2, 3       ],
            x3y26  : [ 0, 1, 3    ],
            x6y26  : [ 0, 1       ],
            x9y26  : [ 0, 3       ],
            x12y26 : [ 1, 2       ],
            x15y26 : [ 2, 3       ],
            x18y26 : [ 0, 1       ],
            x21y26 : [ 0, 3       ],
            x24y26 : [ 0, 1, 3    ],
            x26y26 : [ 1, 2       ],
            x1y29  : [ 0, 3       ],
            x12y29 : [ 0, 1, 3    ],
            x15y29 : [ 0, 1, 3    ],
            x26y29 : [ 0, 1       ]
        },
    
    /** @const Board data */
        energizers    = [{ x: 1, y: 3 }, { x: 26, y: 3 }, { x: 1, y: 23 }, { x: 26, y: 23 }],
        pillAmount    = 244,
        fruitTile     = { x: 13.25, y: 16.8333 },
        fruitSize     = 20,
        tileSize      = 12,
        lineWidth     = 2,
        halfLine      = lineWidth / 2,
        bigRadius     = tileSize / 2,
        smallRadius   = tileSize / 4,
        eraseSize     = tileSize * 2,
        boardCols     = boardMatrix[0].length,
        boardRows     = boardMatrix.length,
        canvasWidth   = tileSize * boardCols,
        canvasHeight  = tileSize * boardRows,
        scoreHeight   = tileSize * 2,
        totalHeight   = canvasHeight + scoreHeight,
        tunnelStart   = -tileSize / 2,
        tunnelEnd     = tileSize * boardCols + tunnelStart,
        ghostSize     = tileSize * 1.5,
        blobRadius    = Math.round(tileSize / 1.5),
        pillSize      = Math.round(tileSize * 0.16666),
        energizerSize = Math.round(tileSize * 0.41666),
        boardColor    = "rgb(0, 51, 255)",
        startingPos   = { x: 14, y: 23 },
        startingDir   = { x: -1, y:  0 },
        eyesTarget    = { x: 13, y: 11 };
    
    /** @type {Canvas} The Game Canvas */
    let boardCanvas, screenCanvas, gameCanvas;
    
    
    /**
     * Returns the position at the middle of a tile
     * @param {number} tile
     * @return {number}
     */
    function getTileCenter(tile) {
        return Math.round((tile + 0.5) * tileSize);
    }
    
    /**
     * Converts an x,y tile into an x,y position
     * @param {{x: number, y: number}} tile
     * @return {{x: number, y: number}}
     */
    function tileToPos(tile) {
        return { x: tile.x * tileSize, y: tile.y * tileSize };
    }
    
    
    
    /**
     * The Board API
     */
    return {
        create() {
            boardCanvas  = new BoardCanvas();
            screenCanvas = new Canvas().init("screen");
            gameCanvas   = new GameCanvas();
        },

        /**
         * Returns the conetext for the board element
         * @return {Canvas}
         */
        get boardCanvas() {
            return boardCanvas;
        },

        /**
         * Returns the conetext for the screen element
         * @return {Canvas}
         */
        get screenCanvas() {
            return screenCanvas;
        },

        /**
         * Returns the conetext for the game element
         * @return {Canvas}
         */
        get gameCanvas() {
            return gameCanvas;
        },
        
        
        
        /**
         * Clears the saved rects in the Game Canvas
         */
        clearGame() {
            gameCanvas.clearSavedRects();
        },
        
        /**
         * Draws the board
         * @param {boolean} newLevel
         */
        drawBoard(newLevel) {
            boardCanvas.drawBoard(newLevel);
        },
        
        /**
         * Clears all the Canvas
         */
        clearAll() {
            boardCanvas.clear();
            gameCanvas.clear();
            screenCanvas.clear();
        },
        
        
        
        /**
         * Returns the width of the canvas
         * @return {number}
         */
        get width() {
            return canvasWidth;
        },
        
        /**
         * Returns the height of the canvas
         * @return {number}
         */
        get height() {
            return totalHeight;
        },
        
        /**
         * Returns the amount of columns of the matrix
         * @return {number}
         */
        get cols() {
            return boardCols;
        },
        
        /**
         * Returns the amount of rows of the matrix
         * @return {number}
         */
        get rows() {
            return boardRows;
        },
        
        /**
         * Returns the tile size
         * @return {number}
         */
        get tileSize() {
            return tileSize;
        },
        
        /**
         * Returns the line width
         * @return {number}
         */
        get lineWidth() {
            return lineWidth;
        },
        
        /**
         * Returns the half of the line width
         * @return {number}
         */
        get halfLine() {
            return halfLine;
        },
        
        /**
         * Returns the big radius
         * @return {number}
         */
        get bigRadius() {
            return bigRadius;
        },
        
        /**
         * Returns the small radius
         * @return {number}
         */
        get smallRadius() {
            return smallRadius;
        },
        
        /**
         * Returns the erase size
         * @return {number}
         */
        get eraseSize() {
            return eraseSize;
        },
        
        /**
         * Returns the board color
         * @return {string}
         */
        get boardColor() {
            return boardColor;
        },
        
        /**
         * Returns an array with the position of the energizers
         * @return {Array.<{x: number, y: number}>}
         */
        get energizers() {
            return energizers;
        },

        /**
         * Returns the amount of Pills in the board
         * @return {number}
         */
        get pillAmount() {
            return pillAmount;
        },
        
        /**
         * The tile of the fruit in the board
         * @return {{x: number, y: number}}
         */
        get fruitTile() {
            return fruitTile;
        },
        
        /**
         * The position of the fruit in the board
         * @return {{x: number, y: number}}
         */
        get fruitPos() {
            return tileToPos(fruitTile);
        },
        
        /**
         * The size of the fruit in the board
         * @return {number}
         */
        get fruitSize() {
            return fruitSize;
        },
        
        /**
         * The size of the pill in the board
         * @return {number}
         */
        get pillSize() {
            return pillSize;
        },
        
        /**
         * The size of the energizer in the board
         * @return {number}
         */
        get energizerSize() {
            return energizerSize;
        },
        
        /**
         * The ghost size in the board
         * @return {number}
         */
        get ghostSize() {
            return ghostSize;
        },
        
        /**
         * The blob radius in the board
         * @return {number}
         */
        get blobRadius() {
            return blobRadius;
        },
        
        /**
         * Returns the starting position of the blob
         * @return {{x: number, y: number}}
         */
        get startingPos() {
            return { x: startingPos.x, y: startingPos.y };
        },
        
        /**
         * Returns the starting direction of the blob
         * @return {{x: number, y: number}}
         */
        get startingDir() {
            return { x: startingDir.x, y: startingDir.y };
        },
        
        
        /**
         * Returns the eyes target
         * @return {{x: number, y: number}}
         */
        get eyesTarget() {
            return eyesTarget;
        },
        
        /**
         * Returns the ghost starting tile depending if is on the pen
         * @param {boolean} inPen
         * @return {{x: number, y: number}}
         */
        getGhostStartTile(inPen) {
            return inPen ? { x: 13, y: 14 } : { x: 13, y: 11 };
        },
        
        /**
         * Returns the ghost starting turn depending if is on the pen
         * @param {boolean} inPen
         * @return {?{x: number, y: number}}
         */
        getGhostStartTurn(inPen) {
            return inPen ? { x: -1, y: 0 } : null;
        },
        
        
        /**
         * Returns the position at the middle of a tile
         * @param {{x: number, y: number}} tile
         * @return {{x: number, y: number}}
         */
        getTileXYCenter(tile) {
            return {
                x : getTileCenter(tile.x),
                y : getTileCenter(tile.y)
            };
        },
        
        /**
         * Returns the position at the top-left corner of a tile
         * @param {number} tile
         * @return {number}
         */
        getTileCorner(tile) {
            return Math.round(tile * tileSize);
        },
        
        /**
         * Returns the position of a tile in terms of the matrix coordinates
         * @param {number} x
         * @param {number} y
         * @return {{x: number, y: number}}
         */
        getTilePos(x, y) {
            return {
                x : Math.floor(x / tileSize),
                y : Math.floor(y / tileSize)
            };
        },
        
        /**
         * Does a sumatory over all the tiles
         * @param {...{x: number, y: number}} tiles
         * @return {{x: number, y: number}}
         */
        sumTiles(...tiles) {
            return tiles.reduce((last, current) => {
                return { x: last.x + current.x, y: last.y + current.y };
            }, { x: 0, y: 0 });
        },
        
        /**
         * Returns true if the given tiles are the same
         * @param {{x: number, y: number}} tile1
         * @param {{x: number, y: number}} tile2
         * @return {boolean}
         */
        equalTiles(tile1, tile2) {
            return tile1.x === tile2.x && tile1.y === tile2.y;
        },
        
        
        /**
         * Returns the rectangle for the Pill at the given position
         * @param {number} x
         * @param {number} y
         * @return {{x: number, y: number, size: number}}
         */
        getPillRect(x, y) {
            return {
                x    : Board.getTileCenter(x) - Board.pillSize / 2,
                y    : Board.getTileCenter(y) - Board.pillSize / 2,
                size : Board.pillSize
            };
        },
        
        /**
         * Returns the rectangle for the Fruit
         * @return {{left: number, right: number, top: number, bottom: number}}
         */
        getFruitRect() {
            let pos  = Board.fruitPos,
                size = Board.fruitSize / 3;
            
            return {
                left   : pos.x - size,
                right  : pos.x + size,
                top    : pos.y - size,
                bottom : pos.y + size
            };
        },
        
        
        /**
         * Returns a new position for a player if is at the end of the tunnel
         * @param {number} x
         * @return {number}
         */
        tunnelEnds(x) {
            if (x < tunnelStart) {
                return tunnelEnd;
            }
            if (x > tunnelEnd) {
                return tunnelStart;
            }
            return x;
        },
        
        
        /**
         * Returns true if there is a wall at the given position
         * @param {number} col
         * @param {number} row
         * @return {boolean}
         */
        inBoard(col, row) {
            return row >= 0 && col >= 0 && row < boardRows && col < boardCols;
        },
        
        /**
         * Returns true if there is a wall at the given position
         * @param {number} col
         * @param {number} row
         * @return {boolean}
         */
        isWall(col, row) {
            return boardMatrix[row][col] === wallValue;
        },
        
        /**
         * Returns true if there is an intersection at the given position
         * @param {number} col
         * @param {number} row
         * @return {boolean}
         */
        isIntersection(col, row) {
            return boardMatrix[row][col] === interValue || boardMatrix[row][col] === interPillValue;
        },
        
        /**
         * Returns true if there is a tunnel at the given position
         * @param {number} col
         * @param {number} row
         * @return {boolean}
         */
        isTunnel(col, row) {
            return boardMatrix[row][col] === tunnelValue;
        },
        
        /**
         * Returns true if there can be a pill at the given position
         * @param {number} col
         * @param {number} row
         * @return {boolean}
         */
        hasPill(col, row) {
            return boardMatrix[row][col] === pillPathValue || boardMatrix[row][col] === interPillValue;
        },
        
        
        /**
         * Returns all the possible turns at a given position
         * @param {string} pos
         * @return {Array.<number>}
         */
        getTurns(pos) {
            return boardTurns[pos] || null;
        },
        
        /**
         * Converts a x,y object into a string
         * @param {{x: number, y: number}} tile
         * @return {string}
         */
        tileToString(tile) {
            return "x" + String(tile.x) + "y" + String(tile.y);
        },
        
        /**
         * Transforms a number into an x,y direction
         * @param {number} value
         * @return {{x: number, y: number}}
         */
        numberToDir(value) {
            switch (value) {
            case 0:
                return { x:  0, y: -1 };   // Up
            case 1:
                return { x: -1, y:  0 };   // Left
            case 2:
                return { x:  0, y:  1 };   // Down
            case 3:
                return { x:  1, y:  0 };   // Right
            }
        },
        
        /**
         * Transforms an x,y direction into a number
         * @param {{x: number, y: number}} dir
         * @return {number}
         */
        dirToNumber(dir) {
            switch (this.tileToString(dir)) {
            case "x0y-1":
                return 0;   // Up
            case "x-1y0":
                return 1;   // Left
            case "x0y1":
                return 2;   // Down
            case "x1y0":
                return 3;   // Right
            }
        },
                
        
        getTileCenter,
        tileToPos
    };
}());

/**
 * The Canvas Base Class
 */
class Canvas {
    
    /**
     * Initializes the Canvas Object
     * @param {string} name
     * @return {Canvas}
     */
    init(name) {
        let canvas    = document.querySelector("." + name);
        canvas.width  = Board.width;
        canvas.height = Board.height;
        
        this.ctx              = canvas.getContext("2d");
        this.ctx.font         = "2em 'Whimsy TT'";
        this.ctx.fillStyle    = "white";
        this.ctx.textAlign    = "center";
        this.ctx.textBaseline = "middle";
        
        this.rects            = [];
        
        return this;
    }
    
    /**
     * Returns the conetext for the board element
     * @return {RenderingContext}
     */
    get context() {
        return this.ctx;
    }
    
    /**
     * Fills the canvas with black at the given alpha value
     * @param {number} alpha
     * @param {number=} x
     * @param {number=} y
     * @param {number=} width
     * @param {number=} height
     */
    fill(alpha, x, y, width, height) {
        this.ctx.save();
        this.ctx.fillStyle = "rgba(0, 0, 0, " + alpha + ")";
        this.ctx.fillRect(x || 0, y || 0, width || Board.width, height || Board.height);
        this.ctx.restore();
    }
    
    /**
     * Clear the entire board
     */
    clear() {
        this.ctx.clearRect(0, 0, Board.width, Board.height);
        this.rects = [];
    }
    
    /**
     * Clears only the saved rects
     */
    clearSavedRects() {
        this.rects.forEach((rect) => {
            this.ctx.clearRect(rect.x, rect.y, rect.width, rect.height);
            if (rect.alpha) {
                this.fill(rect.alpha, rect.x, rect.y, rect.width, rect.height);
            }
        });
        this.rects = [];
    }
    
    /**
     * Saves a new position to clear in the future
     * @param {number} x
     * @param {number} y
     */
    savePos(x, y) {
        this.rects.push({
            x      : x - Board.eraseSize / 2,
            y      : y - Board.eraseSize / 2,
            width  : Board.eraseSize,
            height : Board.eraseSize
        });
    }
    
    /**
     * Saves a new rectangle to clear in the future
     * @param {{x: number, y: number, width: number, height: number, alpha: ?number}} data
     */
    saveRect(data) {
        this.rects.push(data);
    }
    
    /**
     * Draws the Text in the canvas
     * @param {{text: string, pos: {x: number, y: number}, color: string, size: ?numer, align: ?string}} data
     */
    drawText(data) {
        let metrics, width, height, mult = 0.5;
        
        this.ctx.save();
        if (data.size) {
            this.ctx.font = data.size + "em 'Whimsy TT'";
        }
        if (data.align) {
            this.ctx.textAlign = data.align;
            mult = data.align === "left" ? 1 : 0;
        }
        this.ctx.fillStyle = data.color;
        this.ctx.fillText(data.text, data.pos.x * Board.tileSize, data.pos.y * Board.tileSize);
        this.ctx.restore();
        
        metrics = this.ctx.measureText(data.text);
        width   = metrics.width + Board.tileSize;
        height  = data.size ? (data.size + 0.5) * Board.tileSize : 2.5 * Board.tileSize;
        
        this.saveRect({
            x      : data.pos.x * Board.tileSize - mult * width,
            y      : data.pos.y * Board.tileSize - height / 2,
            width  : width,
            height : height,
            alpha  : data.alpha || 0
        });
    }
}

/**
 * @extends {Canvas}
 * The Board Canvas Class
 */
class BoardCanvas extends Canvas {
    
    /**
     * The Board Canvas constructor
     */
    constructor() {
        super();
        
        this.init("board");
        
        this.ctx.lineWidth   = Board.lineWidth;
        this.ctx.strokeStyle = Board.boardColor;
        
        
        this.drawTShapes = {
            "down"  : { radians: 0,   x:  0, y:  0 },
            "left"  : { radians: 0.5, x:  0, y: -5 },
            "right" : { radians: 1.5, x: -1, y:  0 },
            "up"    : { radians: 1,   x: -1, y: -5 }
        };
        this.radians = {
            "top-left"     : { from:   1, to: 1.5 },
            "top-right"    : { from: 1.5, to:   2 },
            "bottom-right" : { from:   0, to: 0.5 },
            "bottom-left"  : { from: 0.5, to:   1 }
        };
        this.corners = {
            "top-left"     : { x:  1, y:  1 },
            "top-right"    : { x: -1, y:  1 },
            "bottom-right" : { x: -1, y: -1 },
            "bottom-left"  : { x:  1, y: -1 }
        };
        this.smallCorners = {
            "top-left" : {
                x : { cell: 1, line: -1 },
                y : { cell: 1, line: -1 }
            },
            "top-right" : {
                x : { cell: 0, line:  1 },
                y : { cell: 1, line: -1 }
            },
            "bottom-right" : {
                x : { cell: 0, line:  1 },
                y : { cell: 0, line:  1 }
            },
            "bottom-left" : {
                x : { cell: 1, line: -1 },
                y : { cell: 0, line:  1 }
            }
        };
    }
    
    
    /**
     * Draw the Board
     * @param {boolean} newLevel
     */
    drawBoard(newLevel) {
        this.drawGhostsPen();
        
        this.ctx.save();
        this.ctx.strokeStyle = newLevel ? "white" : Board.boardColor;
        this.drawOuterBorder();
        this.drawInnerBorder();
        
        // First Row
        this.drawRectangle(2,  2,  4, 3);
        this.drawRectangle(7,  2,  5, 3);
        this.drawRectangle(16, 2,  5, 3);
        this.drawRectangle(22, 2,  4, 3);
        
        // Second Row
        this.drawRectangle(2,  6, 4, 2);
        this.drawTShape(7,     6, 4, 4, "right");
        this.drawTShape(10,    6, 4, 4, "down");
        this.drawTShape(16,    6, 4, 4, "left");
        this.drawRectangle(22, 6, 4, 2);
        
        // Third Row
        this.drawRectangle(7,  15, 2, 5);
        this.drawTShape(10,    18, 4, 4, "down");
        this.drawRectangle(19, 15, 2, 5);
        
        // Fourth Row
        this.drawLShape(2,     21, false);
        this.drawRectangle(7,  21, 5, 2);
        this.drawRectangle(16, 21, 5, 2);
        this.drawLShape(22,    21, true);
        
        // Fith Row
        this.drawTShape(2,  24, 4, 6, "up");
        this.drawTShape(10, 24, 4, 4, "down");
        this.drawTShape(16, 24, 6, 4, "up");
        
        this.ctx.restore();
    }
    
    /**
     * Draws the Ghosts Pen House
     */
    drawGhostsPen() {
        this.ctx.strokeRect(10.5 * Board.tileSize,                  12.5 * Board.tileSize,                  7 * Board.tileSize,                   4 * Board.tileSize);
        this.ctx.strokeRect(11   * Board.tileSize - Board.halfLine, 13   * Board.tileSize - Board.halfLine, 6 * Board.tileSize + Board.lineWidth, 3 * Board.tileSize + Board.lineWidth);
        this.ctx.strokeRect(13   * Board.tileSize - Board.halfLine, 12.5 * Board.tileSize,                  2 * Board.tileSize + Board.lineWidth, Board.tileSize / 2 - Board.halfLine);
        this.ctx.clearRect(13    * Board.tileSize,                  12.5 * Board.tileSize - Board.halfLine, 2 * Board.tileSize,                   Board.tileSize / 2 + Board.halfLine);
        
        this.ctx.save();
        this.ctx.strokeStyle = "white";
        this.ctx.strokeRect(13   * Board.tileSize + Board.halfLine, 12.5 * Board.tileSize + Board.lineWidth, 2 * Board.tileSize - Board.lineWidth, Board.halfLine);
        this.ctx.restore();
    }
    
    /**
     * Draws the Board outer border
     */
    drawOuterBorder() {
        this.ctx.beginPath();
        
        // Top Corners
        this.drawOuterBigCorner(0,  0, "top-left");
        this.drawOuterBigCorner(27, 0, "top-right");
        
        // Right Tunnel
        this.drawOuterBigCorner(27,    9, "bottom-right");
        this.drawOuterSmallCorner(22,  9, "top-left");
        this.drawOuterSmallCorner(22, 13, "bottom-left");
        this.ctx.lineTo(28 * Board.tileSize, 13 * Board.tileSize + Board.halfLine);
        this.ctx.moveTo(28 * Board.tileSize, 16 * Board.tileSize - Board.halfLine);
        this.drawOuterSmallCorner(22, 15, "top-left");
        this.drawOuterSmallCorner(22, 19, "bottom-left");
        this.drawOuterBigCorner(27,   19, "top-right");
        
        // Bottom Corners
        this.drawOuterBigCorner(27,   30, "bottom-right");
        this.drawOuterBigCorner(0,    30, "bottom-left");
        
        // Left Tunnel
        this.drawOuterBigCorner(0,    19, "top-left");
        this.drawOuterSmallCorner(5,  19, "bottom-right");
        this.drawOuterSmallCorner(5,  15, "top-right");
        this.ctx.lineTo(0, 16 * Board.tileSize - Board.halfLine);
        this.ctx.moveTo(0, 13 * Board.tileSize + Board.halfLine);
        this.drawOuterSmallCorner(5,  13, "bottom-right");
        this.drawOuterSmallCorner(5,   9, "top-right");
        this.drawOuterBigCorner(0,     9, "bottom-left");
        
        this.ctx.lineTo(Board.halfLine, Board.bigRadius + Board.halfLine);
        this.ctx.stroke();
    }
    
    /**
     * Draws the Board inner border
     */
    drawInnerBorder() {
        this.ctx.beginPath();
        
        // Top Border
        this.drawInnerCorner(0,   0, "top-left",     false, false);
        this.drawInnerCorner(13,  0, "top-right",    false, false);
        this.drawInnerCorner(13,  4, "bottom-left",  true,  true);
        this.drawInnerCorner(14,  4, "bottom-right", true,  true);
        this.drawInnerCorner(14,  0, "top-left",     false, false);
        this.drawInnerCorner(27,  0, "top-right",    false, false);
        
        // Right Border
        this.drawInnerCorner(27,  9, "bottom-right", false, false);
        this.drawInnerCorner(22,  9, "top-left",     true,  true);
        this.drawInnerCorner(22, 13, "bottom-left",  true,  true);
        this.ctx.lineTo(28 * Board.tileSize, 13.5 * Board.tileSize);
        this.ctx.moveTo(28 * Board.tileSize, 15.5 * Board.tileSize);
        this.drawInnerCorner(22, 15, "top-left",     true,  true);
        this.drawInnerCorner(22, 19, "bottom-left",  true,  true);
        this.drawInnerCorner(27, 19, "top-right",    false, false);
        this.drawInnerCorner(27, 24, "bottom-right", false, false);
        this.drawInnerCorner(25, 24, "top-left",     true,  true);
        this.drawInnerCorner(25, 25, "bottom-left",  true,  true);
        this.drawInnerCorner(27, 25, "top-right",    false, false);
        
        // Bottom Border
        this.drawInnerCorner(27, 30, "bottom-right", false, false);
        this.drawInnerCorner(0,  30, "bottom-left",  false, false);
        
        // Left Border
        this.drawInnerCorner(0,  25, "top-left",     false, false);
        this.drawInnerCorner(2,  25, "bottom-right", true,  true);
        this.drawInnerCorner(2,  24, "top-right",    true,  true);
        this.drawInnerCorner(0,  24, "bottom-left",  false, false);
        this.drawInnerCorner(0,  19, "top-left",     false, false);
        this.drawInnerCorner(5,  19, "bottom-right", true,  true);
        this.drawInnerCorner(5,  15, "top-right",    true,  true);
        this.ctx.lineTo(0, 15.5 * Board.tileSize);
        this.ctx.moveTo(0, 13.5 * Board.tileSize);
        this.drawInnerCorner(5,  13, "bottom-right", true,  true);
        this.drawInnerCorner(5,   9, "top-right",    true,  true);
        this.drawInnerCorner(0,   9, "bottom-left",  false, false);
        this.ctx.lineTo(Board.tileSize / 2, Board.tileSize / 2 + Board.smallRadius);
        
        this.ctx.stroke();
    }
    
    
    /**
     * Draws a drawRectangle at the given position with the given size
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     */
    drawRectangle(x, y, width, height) {
        this.ctx.save();
        this.ctx.translate(x * Board.tileSize, y * Board.tileSize);
        
        this.ctx.beginPath();
        this.drawInnerCorner(0,                  0, "top-left",     true, false);
        this.drawInnerCorner(width - 1,          0, "top-right",    true, false);
        this.drawInnerCorner(width - 1, height - 1, "bottom-right", true, false);
        this.drawInnerCorner(0,         height - 1, "bottom-left",  true, false);
        this.ctx.closePath();
        
        this.ctx.stroke();
        this.ctx.restore();
    }
    
    /**
     * Draws a t shape at the given position and with the given properties
     * @param {number} x
     * @param {number} y
     * @param {number} left
     * @param {number} right
     * @param {string} type
     */
    drawTShape(x, y, left, right, type) {
        let data  = this.drawTShapes[type],
            width = left + right;
        
        this.ctx.save();
        this.ctx.translate(x * Board.tileSize, y * Board.tileSize);
        this.ctx.rotate(data.radians * Math.PI);
        this.ctx.translate(data.x * width * Board.tileSize, data.y * Board.tileSize);
        
        this.ctx.beginPath();
        this.drawInnerCorner(0,         0, "top-left",     true,  false);
        this.drawInnerCorner(width - 1, 0, "top-right",    true,  false);
        this.drawInnerCorner(width - 1, 1, "bottom-right", true,  false);
        this.drawInnerCorner(left,      1, "top-left",     false, true);
        this.drawInnerCorner(left,      4, "bottom-right", true,  false);
        this.drawInnerCorner(left - 1,  4, "bottom-left",  true,  false);
        this.drawInnerCorner(left - 1,  1, "top-right",    false, true);
        this.drawInnerCorner(0,         1, "bottom-left",  true,  false);
        
        this.ctx.stroke();
        this.ctx.restore();
    }
    
    /**
     * Draws an l shape at the given position
     * @param {number} x
     * @param {number} y
     * @param {boolean} reflect
     */
    drawLShape(x, y, reflect) {
        this.ctx.save();
        this.ctx.translate(x * Board.tileSize, y * Board.tileSize);
        
        if (reflect) {
            this.ctx.transform(-1, 0, 0, 1, 0, 0);
            this.ctx.translate(-4 * Board.tileSize, 0);
        }
        
        this.ctx.beginPath();
        this.drawInnerCorner(0, 0, "top-left",     true,  false);
        this.drawInnerCorner(3, 0, "top-right",    true,  false);
        this.drawInnerCorner(3, 4, "bottom-right", true,  false);
        this.drawInnerCorner(2, 4, "bottom-left",  true,  false);
        this.drawInnerCorner(2, 1, "top-right",    false, true);
        this.drawInnerCorner(0, 1, "bottom-left",  true,  false);
        
        this.ctx.stroke();
        this.ctx.restore();
    }
    
    
    /**
     * Draws a corner for the outer line with a big angle
     * @param {number} x
     * @param {number} y
     * @param {string} type
     */
    drawOuterBigCorner(x, y, type) {
        let data = this.corners[type],
            pos  = {
                x : x * Board.tileSize + Board.bigRadius + data.x * Board.halfLine,
                y : y * Board.tileSize + Board.bigRadius + data.y * Board.halfLine
            };
        
        this.corner(pos, Board.bigRadius, type, false);
    }
    
    /**
     * Draws a corner for the outer line with a small angle
     * @param {number} x
     * @param {number} y
     * @param {string} type
     */
    drawOuterSmallCorner(x, y, type) {
        let radius = this.corners[type],
            data   = this.smallCorners[type],
            pos    = {
                x : (x + data.x.cell) * Board.tileSize + radius.x * Board.smallRadius + data.x.line * Board.halfLine,
                y : (y + data.y.cell) * Board.tileSize + radius.y * Board.smallRadius + data.y.line * Board.halfLine
            };
        
        this.corner(pos, Board.smallRadius, type, true);
    }
    
    /**
     * Draws a corner for the board
     * @param {number} x
     * @param {number} y
     * @param {string} type
     * @param {boolean} isBig
     * @param {boolean} anitclockwise
     */
    drawInnerCorner(x, y, type, isBig, anitclockwise) {
        let radius = isBig ? Board.bigRadius : Board.smallRadius,
            data   = this.corners[type],
            pos    = {
                x : (x + 0.5) * Board.tileSize + data.x * radius,
                y : (y + 0.5) * Board.tileSize + data.y * radius
            };
        
        this.corner(pos, radius, type, anitclockwise);
    }
    
    /**
     * Draws a corner at the given position and with the given radius and type
     * @param {{x: number, y: number}} pos
     * @param {number} radius
     * @param {string} type
     * @param {boolean} anitclockwise
     */
    corner(pos, radius, type, anitclockwise) {
        let rad    = this.radians[type],
            result = [rad.from * Math.PI, rad.to * Math.PI];
        
        if (anitclockwise) {
            result.reverse();
        }
        rad = { from: result[0], to: result[1] };
        
        this.ctx.arc(pos.x, pos.y, radius, rad.from, rad.to, anitclockwise);
    }
    
    
    /**
     * Draws lines over the board for testing
     */
    drawLines() {
        this.ctx.strokeStyle = "#CCC";
        this.ctx.lineWidth   = 1;
        this.ctx.beginPath();
        
        for (let i = 0; i < Board.rows; i += 1) {
            this.ctx.moveTo(0,           i * Board.tileSize);
            this.ctx.lineTo(Board.width, i * Board.tileSize);
        }
        for (let i = 0; i < Board.cols; i += 1) {
            this.ctx.moveTo(i * Board.tileSize, 0);
            this.ctx.lineTo(i * Board.tileSize, Board.canvasHeight);
        }
        this.ctx.stroke();
    }
    
    /**
     * Draws the intersections over the board for testing
     */
    drawIntersections() {
        Object.keys(Board.boardTurns).forEach((key) => {
            let coords = key.replace("x", "").split("y"),
                x      = Board.getTileCorner(Number(coords[0])),
                y      = Board.getTileCorner(Number(coords[1]));
            
            this.ctx.fillRect(x, y, Board.tileSize, Board.tileSize);
            this.ctx.save();
            this.ctx.strokeStyle = "white";
            
            Board.boardTurns[key].forEach((value) => {
                let dir = Board.numberToDir(value),
                    bx  = Board.getTileCorner(Number(coords[0]) + dir.x),
                    by  = Board.getTileCorner(Number(coords[1]) + dir.y);
                
                this.ctx.strokeRect(bx, by, Board.tileSize, Board.tileSize);
            });
            this.ctx.restore();
        });
    }
}

/**
 * @extends {Canvas}
 * The Game Canvas Class
 */
class GameCanvas extends Canvas {
    
    /**
     * The Game Canvas constructor
     */
    constructor() {
        super();
        this.init("game");
    }
    
    /**
     * Draws the Ghosts Targets for testing
     * @param {Array.<Ghost>} ghosts
     */
    drawTargets(ghosts) {
        this.ctx.save();
        ghosts.forEach((ghost) => {
            this.ctx.fillStyle   = ghost.getBodyColor();
            this.ctx.strokeStyle = ghost.getBodyColor();
            
            let tile = Board.getTileXYCenter(ghost.getTargetTile());
            this.ctx.beginPath();
            this.ctx.moveTo(ghost.getX(), ghost.getY());
            this.ctx.lineTo(tile.x, tile.y);
            this.ctx.fillRect(tile.x - 4, tile.y - 4, 8, 8);
            this.ctx.stroke();
        });
        this.ctx.restore();
    }
}

/**
 * @extends {Blob}
 * The Demo Blob Class
 */
class ScoreBlob extends Blob {
    
    /**
     * The Demo Blob constructor
     * @param {number} number
     */
    constructor(number) {
        super();
        this.init(Board.boardCanvas);
        
        this.tile = { x: 19.5, y: 31.8 },
        this.x    = Board.getTileCenter(this.tile.x + number * 1.4);
        this.y    = Board.getTileCenter(this.tile.y);
        this.dir  = Board.startingDir;
    }
    
    /**
     * Clears the Blob
     */
    clear() {
        this.ctx.clearRect(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
    }
}

/**
 * The Score Class
 */
class Score {
    
    /**
     * The Score constructor
     */
    constructor() {
        this.canvas = Board.boardCanvas;
        this.ctx    = this.canvas.context;
        
        this.score  = 0;
        this.level  = 1;
        this.lives  = 2;
        this.bonus  = 0;
        this.ghosts = 0;
        
        this.textTop     = 32.5;
        this.scoreLeft   = 3.2;
        this.livesLeft   = 16.3;
        this.scoreMargin = 0.5;
        this.scoreWidth  = 7;
        this.scoreHeight = 2;
        this.scoreColor  = "rgb(255, 255, 51)";
        this.fruitTile   = { x: 26, y: 31.5 };
        
        this.blobs = [ new ScoreBlob(0), new ScoreBlob(1) ];
        this.food  = new Fruit();
    }
    
    
    /**
     * Draws the Score, Blobs and Fruit in the board
     */
    draw() {
        this.drawTexts();
        this.drawScore();
        
        this.blobs.forEach(function (blob) {
            blob.draw();
        });
        this.food.draw(this.fruitTile);
    }
    
    
    /**
     * Increases the game score by the given amount
     * @param {number} amount
     */
    incScore(amount) {
        this.score += amount;
        if (this.score > Data.extraLife * Math.pow(10, this.bonus)) {
            if (this.lives < 4) {
                this.incLife(true);
            }
            this.bonus += 1;
        }
        this.drawScore();
    }
    
    /**
     * Increases/Decreases the game lives depending on the param
     * @param {boolean} isIncrease
     */
    incLife(isIncrease) {
        this.lives += isIncrease ? 1 : -1;
        
        if (isIncrease) {
            let blob = new ScoreBlob(this.lives - 1);
            this.blobs.push(blob);
            blob.draw();
        } else if (this.blobs.length) {
            let blob = this.blobs.pop();
            blob.clear();
        }
    }
    
    
    /**
     * Increases the game level
     */
    newLevel() {
        this.level += 1;
        this.ghosts = 0;
        Data.level  = this.level;
    }
    
    /**
     * The Blob ate a pill/energizer
     * @param {number} value
     */
    pill(value) {
        this.incScore(value * Data.pillMult);
    }
    
    /**
     * The Blob ate a fruit
     * @return {number}
     */
    fruit() {
        let score = Data.getLevelData("fruitScore");
        this.incScore(score);
        return score;
    }
    
    /**
     * The Blob kill a Ghost
     * @param {number} amount
     * @return {number}
     */
    kill(amount) {
        var score = Data.getGhostScore(amount);
        this.incScore(score);
        
        if (amount === 4) {
            this.ghosts += 1;
            if (this.ghosts === 4) {
                this.incScore(Data.eyesBonus);
            }
        }
        return score;
    }
    
    /**
     * The Blob died, decrease the lifes
     * @return {boolean} True on Game Over
     */
    died() {
        this.incLife(false);
        return this.lives >= 0;
    }
    
    
    /**
     * Draws the texts in the board
     */
    drawTexts() {
        this.canvas.drawText({
            text : "Score",
            size : 1.8,
            pos  : { x: this.scoreLeft, y: this.textTop }
        });
        this.canvas.drawText({
            text : "Lives",
            size : 1.8,
            pos  : { x: this.livesLeft, y: this.textTop }
        });
    }
    
    /**
     * Draws the score in the board
     */
    drawScore() {
        let left   = this.ctx.measureText("Score").width,
            margin = this.scoreMargin * Board.tileSize,
            top    = this.textTop     * Board.tileSize,
            width  = this.scoreWidth  * Board.tileSize + margin / 2,
            height = this.scoreHeight * Board.tileSize;
        
        this.ctx.save();
        this.ctx.fillStyle = this.scoreColor;
        this.ctx.textAlign = "left";
        this.ctx.font      = "1.8em 'Whimsy TT'";
        this.ctx.clearRect(left + margin / 2, top - height / 2 - 2, width, height + 2);
        this.ctx.fillText(this.score, left + margin, top);
        this.ctx.restore();
    }
    
    
    /**
     * Returns the current level
     * @return {number}
     */
    getLevel() {
        return this.level;
    }
    
    /**
     * Returns the current score
     * @return {number}
     */
    getScore() {
        return this.score;
    }
}

/**
 * The Ghosts Class
 */
class Ghosts {
    
    /**
     * The Ghosts constructor
     * @param {?oldManager} Ghosts
     */
    constructor(oldManager) {
        // Ghosts Data
        this.globalMode  = "scatter";                   // Global Mode
        this.modeCounter = 0;                           // Amount of switchs between Scatter-Chase
        this.modeTimer   = Data.getSwitchTime(0);       // Scatter/Chase timer
        this.frightTimer = 0;                           // Frigthen timer
        this.blinksCount = 0;                           // Amount of blinks at frighten end
        this.eyesCounter = 0;                           // Amount of dead Ghost during a fright mode
        
        // The Ghosts
        var canvas       = Board.gameCanvas;
        this.blinky      = new Blinky(canvas, oldManager ? oldManager.blinky.getDots() : null);
        this.pinky       = new Pinky(canvas, oldManager ? oldManager.pinky.getDots() : null);
        this.inky        = new Inky(canvas, oldManager ? oldManager.inky.getDots() : null, this.blinky);
        this.clyde       = new Clyde(canvas, oldManager ? oldManager.clyde.getDots() : null);
        this.ghosts      = [ this.blinky, this.pinky, this.inky, this.clyde ];
        
        // Pen Data
        this.penType     = !!oldManager;               // Type used to force ghosts out of the pen (false = using
                                                       // ... ghost's dot counters | true = using global dot counter)
        this.penTimer    = 0;                          // Pen Leaving Force Timer
        this.globalDots  = 0;                          // Global dots counter
        this.inPen       = [ this.pinky, this.inky, this.clyde ];
        
        if (!this.penType) {
            this.inPen.forEach(() => this.checkDotLimit());
        }
    }
    
    
    /**
     * Animates all the Ghosts, and reduces the ghosts modes timers
     * @param {number} time
     * @param {number} speed
     * @param {Blob}   blob
     */
    animate(time, speed, blob) {
        if (this.frightTimer > 0) {
            this.frightTimer -= time;
        } else if (this.modeCounter < Data.totalSwitchs && this.modeTimer > 0) {
            this.modeTimer -= time;
        }
        
        this.switchMode(blob);
        this.move(speed, blob);
        this.increasePenTimer(time);
    }
    
    /**
     * Changes the Ghosts mode
     * @param {Blob} blob
     */
    switchMode(blob) {
        let oldMode = this.globalMode;
        if (Data.isFrighten(this.globalMode) && this.frightTimer <= 0) {
            this.blinksCount -= 1;
            
            if (this.blinksCount >= 0) {
                this.frightTimer = Data.blinksTimer;
                this.globalMode  = this.globalMode === "white" ? "blue" : "white";
            } else {
                this.globalMode  = this.getSwitchMode();
            }
            this.switchGhostsMode(oldMode, blob);
        
        } else if (this.modeTimer <= 0) {
            this.modeCounter += 1;
            this.globalMode   = this.getSwitchMode();
            this.modeTimer    = Data.getSwitchTime(this.modeCounter);
            this.switchGhostsMode(oldMode, blob);
        }
    }
    
    /**
     * Changes the mode of each Ghost
     * @param {number} oldMode
     * @param {Blob}   blob
     */
    switchGhostsMode(oldMode, blob) {
        this.ghosts.forEach((ghost) => {
            ghost.switchMode(oldMode, this.globalMode, blob);
        });
    }
    
    /**
     * Moves all the Ghosts
     * @param {number} speed
     * @param {Blob}   blob
     */
    move(speed, blob) {
        let mode = this.getSwitchMode();
        this.ghosts.forEach((ghost) => {
            if (ghost.move(speed, blob, mode)) {
                this.addGhostToPen(ghost);
            }
        });
    }
    
    /**
     * Draws all The Ghosts
     */
    draw() {
        this.ghosts.forEach((ghost) => ghost.draw());
    }
    
    /**
     * Sets the Ghosts targets when the Blob reached a new Tile
     * @param {Blob} blob
     */
    setTargets(blob) {
        this.ghosts.forEach((ghost) => {
            if (ghost.shouldChangeTarget(this.globalMode)) {
                ghost.setChaseTarget(blob, this.blinky);
            }
        });
    }
    
    /**
     * Sets Blinky's "Cruise Elroy" Mode when the number of dots left reaches the target
     * @param {number} dots
     */
    checkElroyDots(dots) {
        this.blinky.checkElroyDots(dots);
    }
    
    /**
     * Switches to Frighten mode
     * @param {Blob} blob
     */
    frighten(blob) {
        var oldMode      = this.globalMode;
        this.globalMode  = "blue";
        this.frightTimer = Data.getFrightTime();
        this.blinksCount = Data.getBlinks();
        this.eyesCounter = 0;
        
        this.switchGhostsMode(oldMode, blob);
    }
    
    /**
     * The Ghost kills the Blob or Dies from it. Returns true if the Blob died
     * @param {{x: number, y: number}} blobTile
     * @param {function} onKll
     * @param {function} onDie
     */
    crash(blobTile, onKill, onDie) {
        this.ghosts.some((ghost) => {
            let result = ghost.killOrDie(blobTile);
            if (result === "kill") {
                this.eyesCounter += 1;
                onKill(this.eyesCounter, ghost.getTile());
            } else if (result === "die") {
                onDie();
            }
            return !!result;
        });
    }
    
    /**
     * Returns the current Scatter or Chase mode
     * @return {string}
     */
    getSwitchMode() {
        return this.modeCounter % 2 === 0 ? "scatter" : "chase";
    }
    
    /**
     * Returns the current Mode, including the Fright variations
     * @return {number}
     */
    getMode() {
        return this.globalMode;
    }
    
    /**
     * Returns true if the current mode is a Fright
     * @return {boolean}
     */
    areFrighten() {
        return Data.isFrighten(this.globalMode);
    }
    
    
    /**
     * Increases the global dots or the first Ghost internal dots depending on the mode
     */
    incDotCounter() {
        if (!this.penType) {
            this.incGhostsDots();
        } else {
            this.incGlobalDots();
        }
    }
    
    /**
     * Increases the internal dots counter for the Ghost in the Pen array
     */
    incGhostsDots() {
        if (this.inPen.length > 0) {
            this.inPen[0].increaseDots();
            this.checkDotLimit();
        }
    }
    
    /**
     * Checks if a ghost can leave pen
     */
    checkDotLimit() {
        let limits = Data.getLevelData("penLeavingLimit"),
            ghost  = this.inPen[0];
        
        if (limits[ghost.getID()] <= ghost.getDots()) {
            this.releaseGhostFromPen();
        }
    }
    
    /**
     * Increases the global dot counter and release ghosts changes type when required
     */
    incGlobalDots() {
        this.globalDots += 1;
        
        this.inPen.forEach((ghost) => {
            if (this.globalDots === Data.getPenDotsCount(ghost.getID())) {
                if (ghost.getID() <= 2) {
                    this.releaseGhostFromPen();
                } else {
                    this.penType    = false;
                    this.globalDots = 0;
                }
            }
        });
    }
    
    /**
     * Increases the Pen Timer
     * @param {number} time
     */
    increasePenTimer(time) {
        this.penTimer += time;
        if (this.inPen.length > 0 && this.penTimer >= Data.getPenForceTime()) {
            this.releaseGhostFromPen();
            this.penTimer = 0;
        }
    }
    
    /**
     * Resents the Pen Timer to cero, since the Blob ate a pill and checks the Dots counters
     */
    resetPenTimer() {
        this.penTimer = 0;
        this.incDotCounter();
    }
    
    /**
     * Releases the first Ghost in the vector from Pen
     */
    releaseGhostFromPen() {
        let ghost = this.inPen[0];
        ghost.setPath("exitPen");
        ghost.activateElroy();
        
        this.inPen = this.inPen.slice(1);
    }
    
    /**
     * Adds the given Ghost to Pen
     * @param {Ghost} ghost
     */
    addGhostToPen(ghost) {
        // Blinky never stays in the Pen
        if (ghost.getID() === 0) {
            ghost.setPath("exitPen");
        } else {
            let i = 0;
            while (i < this.inPen.length && this.inPen[i].getID() <= ghost.getID()) {
                i += 1;
            }
            this.inPen.splice(i, 0, ghost);
            ghost.setPath("inPen");
            
            if (!this.penType) {
                this.checkDotLimit();
            }
        }
    }
}

/**
 * The Ghost Base Class
 */
class Ghost {
    
    /**
     * Initializes the Ghost
     * @param {Canvas}  canvas
     * @param {?number} dots
     */
    init(canvas, dots) {
        this.canvas     = canvas;
        this.ctx        = canvas.context;
        
        this.mode       = "scatter";
        this.tile       = Board.getGhostStartTile(this.inPen);
        this.tileCenter = Board.getTileXYCenter(this.tile);
        this.turn       = Board.getGhostStartTurn(this.inPen);
        this.center     = false;
        this.dotsCount  = dots || 0;
        this.target     = this.scatter;
        this.speed      = Data.getGhostSpeed(this.inPen);
        this.feet       = 0;
        this.path       = null;
        this.pathName   = null;
        this.pathStep   = 0;
    }
    
    /**
     * Switches the Ghost mode
     * @param {number} oldMode
     * @param {number} newMode
     * @param {Blob}   blob
     */
    switchMode(oldMode, newMode, blob) {
        if (!this.dontSwitch(oldMode)) {
            this.mode   = newMode;
            this.target = this.getTarget(blob);
            this.speed  = this.getSpeed();
                
            if (!this.dontHalfTurn(oldMode)) {
                if (this.path === null) {
                    this.turn = {
                        x : this.dir.x * -1,
                        y : this.dir.y * -1
                    };
                } else {
                    this.turn = { x: 1, y: 0 };
                }
            }
        }
    }
    
    /**
     * Moves the Ghost
     * @param {number} speed
     * @param {Blob}   blob
     * @param {number} switchMode
     * @return {boolean}
     */
    move(speed, blob, switchMode) {
        let addToPen = false;
        this.x += this.dir.x * this.speed * speed;
        this.y += this.dir.y * this.speed * speed;
        
        if (this.path !== null) {
            addToPen = this.pathMove(blob, switchMode);
        } else {
            this.normalMove(blob);
        }
        
        this.moveFeet();
        this.draw();
        return addToPen;
    }
    
    /**
     * Moves the Ghost in a predefined path
     * @param {Blob}   blob
     * @param {number} switchMode
     * @return {boolean}
     */
    pathMove(blob, switchMode) {
        let step = this.path[this.pathStep];
        if (this.passedDist()) {
            if (this.dir.x) {
                this.x = step.distx;
            }
            if (this.dir.y) {
                this.y = step.disty;
            }
            
            if (step.next !== null) {
                this.pathStep = step.next;
                this.dir      = this.path[this.pathStep].dir;
            
            } else if (this.pathName === "exitPen") {
                this.path  = null;
                this.dir   = this.turn;
                this.turn  = null;
                this.speed = Data.getGhostSpeed(false);
            
            } else if (this.pathName === "enterPen") {
                this.mode       = switchMode;
                this.target     = this.getTarget(blob);
                this.tile       = Board.getGhostStartTile(false);
                this.tileCenter = Board.getTileXYCenter(this.tile);
                this.turn       = Board.getGhostStartTurn(true);
                return true;
            }
        }
        return false;
    }
    
    /**
     * Moves the Ghost around the board
     * @param {Blob} blob
     */
    normalMove(blob) {
        this.newTile(blob);
        this.x = Board.tunnelEnds(this.x);
        
        if (!this.center && this.passedCenter()) {
            if (this.turn) {
                this.makeTurn();
            }
            if (this.isNextIntersection()) {
                this.decideTurn();
            }
            this.speed  = this.getSpeed();
            this.center = true;
        }
    }
    
    
    /**
     * The Ghost moved to a new Tile
     * @param {Blob} blob
     */
    newTile(blob) {
        var tile = Board.getTilePos(this.x, this.y);
        if (!Board.equalTiles(this.tile, tile)) {
            this.tile       = tile;
            this.tileCenter = Board.getTileXYCenter(this.tile);
            this.center     = false;
            
            if (this.isEnteringPen()) {
                this.setPath("enterPen");
            }
        }
    }
    
        
    /**
     * Sets the Path of the Ghost
     * @param {string} path
     */
    setPath(name) {
        this.pathName = name;
        this.pathStep = 0;
        this.path     = this.paths[this.pathName];
        this.dir      = this.path[this.pathStep].dir;
        this.speed    = Data.getPathSpeed(name);
    }
    
    /**
     * Returns true if the Ghost is entering the Pen
     * @return {boolean}
     */
    isEnteringPen() {
        return this.mode === "eyes" && Board.equalTiles(this.tile, Board.eyesTarget);
    }
    
    
    /**
     * The Ghost turns used the previously stored turn direction
     */
    makeTurn() {
        this.x    = this.tileCenter.x;
        this.y    = this.tileCenter.y;
        this.dir  = this.turn;
        this.turn = null;
    }
    
    /**
     * The Ghost decided which direction to do next depending on different factors
     */
    decideTurn() {
        let turns = this.getTurns();
        if (turns.length === 1) {
            this.turn = turns[0];
        } else if (Data.isFrighten(this.mode)) {
            this.turn = turns[Utils.rand(0, turns.length - 1)];
        } else {
            this.turn = this.getTargetTurn(turns);
        }
    }
    
    /**
     * Returns a list with all the possible turns a Ghost can do at an intersection
     * @return {Array.<{x: number, y: number}>}
     */
    getTurns() {
        let tile   = this.getNextTile(),
            pos    = Board.tileToString(tile),
            turns  = Board.getTurns(pos),
            result = [];
        
        turns.forEach((turn) => {
            if ((turn + 2) % 4 !== Board.dirToNumber(this.dir)) {
                result.push(Board.numberToDir(turn));
            }
        });
        return result;
    }
    
    /**
     * Decides the best turn depending on which cell after the intersection is closes to the target
     * @param {Array.<{x: number, y: number}>} turns
     * @return {{x: number, y: number}}
     */
    getTargetTurn(turns) {
        let tile   = this.getNextTile(),
            best   = 999999,
            result = {};
        
        turns.forEach((turn) => {
            let ntile = Board.sumTiles(tile, turn),
                distx = Math.pow(this.target.x - ntile.x, 2),
                disty = Math.pow(this.target.y - ntile.y, 2),
                dist  = Math.sqrt(distx + disty);
            
            if (dist < best) {
                best   = dist;
                result = turn;
            }
        });
        return result;
    }
    
    /**
     * Checks if the Ghost and the Blob are in the same tile and when those
     * are the same depending on the Ghost's mode, it can kill the blob or die
     * @param {{x: number, y: number}} blobTile
     * @return {string}
     */
    killOrDie(blobTile) {
        if (Board.equalTiles(this.tile, blobTile) && !this.path) {
            if (Data.isFrighten(this.mode)) {
                this.mode   = "eyes";
                this.target = Board.eyesTarget;
                this.speed  = Data.eyesSpeed;
                return "kill";
            
            } else if (this.mode !== "eyes") {
                return "die";
            }
        }
    }
    
    /**
     * Returns true if the Ghost should change it's target
     * @param {number} globalMode
     * @return {boolean}
     */
    shouldChangeTarget(globalMode) {
        return this.mode !== "eyes" && (globalMode === "chase" || this.isElroy());
    }
    
    /**
     * Don't let the Ghost change mode on certain cases
     * @param {number} mode
     * @return {boolean}
     */
    dontSwitch(mode) {
        return (Data.isFrighten(mode) && !Data.isFrighten(this.mode)) || this.mode === "eyes";
    }
    
    /**
     * Don't let the Ghost half turn when switching from Blue to White mode
     * @param {number} mode
     * @return {boolean}
     */
    dontHalfTurn(mode) {
        return mode === "blue" || mode === "white";
    }
    
    /**
     * Returns the Ghost's Speed based on diferent factors
     * @return {number}
     */
    getSpeed() {
        let speed = Data.getGhostSpeed(false);
        
        if (this.mode === "eyes") {
            speed = Data.eyesSpeed;
        } else if (Data.isFrighten(this.mode)) {
            speed = Data.getLevelData("ghostFrightSpeed");
        } else if (Board.isTunnel(this.tile.x, this.tile.y)) {
            speed = Data.getLevelData("tunnelSpeed");
        } else if (this.isElroy()) {
            speed = Data.getLevelData("elroySpeed" + this.elroyMode);
        }
        return speed;
    }
    
    /**
     * Returns true if the Ghost moved past certain distance stored in the Path
     * @return {boolean}
     */
    passedDist() {
        let path = this.path[this.pathStep];
        return (
            (this.dir.x ===  1 && this.x >= path.distx) ||
            (this.dir.x === -1 && this.x <= path.distx) ||
            (this.dir.y ===  1 && this.y >= path.disty) ||
            (this.dir.y === -1 && this.y <= path.disty)
        );
    }
    
    /**
     * Returns true if the Ghost passed the center of the tile
     * @return {boolean}
     */
    passedCenter() {
        return (
            (this.dir.x ===  1 && this.x >= this.tileCenter.x) ||
            (this.dir.x === -1 && this.x <= this.tileCenter.x) ||
            (this.dir.y ===  1 && this.y >= this.tileCenter.y) ||
            (this.dir.y === -1 && this.y <= this.tileCenter.y)
        );
    }
    
    /**
     * Returns the next tile
     * @return {{x: number, y: number}}
     */
    getNextTile() {
        return Board.sumTiles(this.tile, this.dir);
    }
    
    /**
     * Returns true if the next tile is an intersection
     * @return {boolean}
     */
    isNextIntersection() {
        let tile = this.getNextTile();
        return Board.isIntersection(tile.x, tile.y);
    }
    
    /**
     * Returns the Ghost's target depending on the current mode
     * @param {Blob} blob
     * @return {{x: number, y: number}}
     */
    getTarget(blob) {
        if (this.mode === "chase" || this.isElroy()) {
            return this.chase(blob);
        }
        return this.scatter;
    }
    
    
    /**
     * Returns true if the Ghost is in "Cruise Elroy" Mode. Only used for Blinky
     * @return {boolean}
     */
    isElroy() {
        return false;
    }
    
    /**
     * Makes it possible for a Ghost to switch to "Cruise Elroy" Mode. Only used for Blinky
     */
    activateElroy() {
        return undefined;
    }
    
    /**
     * Increases the internal pills count of a Ghost
     */
    increaseDots() {
        this.dotsCount += 1;
    }
    
    /**
     * Sets the Chase target of the Ghost
     * @param {Blob} blob
     */
    setChaseTarget(blob) {
        this.target = this.chase(blob);
    }
    
    
    /**
     * Changes the Drawing for the Ghosts feet
     */
    moveFeet() {
        this.feet = (this.feet + 0.3) % 2;
    }
    
    /**
     * Draws the Ghost
     */
    draw() {
        let center = Board.ghostSize / 2;
        this.canvas.savePos(this.x, this.y);
        this.ctx.save();
        this.ctx.translate(Math.round(this.x) - center, Math.round(this.y) - center);
        
        this.ghostBody();
        if (Data.isFrighten(this.mode)) {
            this.ghostFrightenFace();
        } else {
            this.ghostNormalFace();
        }
        this.ctx.restore();
    }
    
    /**
     * Draws the Ghost's Body
     */
    ghostBody() {
        this.ctx.fillStyle = this.getBodyColor();
        this.ctx.beginPath();
        this.ctx.arc(8,  8, 8, Math.PI, 1.5 * Math.PI, false);
        this.ctx.arc(10, 8, 8, 1.5 * Math.PI, 2 * Math.PI, false);
        
        if (!Math.floor(this.feet)) {
            this.ghostFeet0();
        } else {
            this.ghostFeet1();
        }
        this.ctx.fill();
    }
    
    /**
     * Draws one of the variations of the Ghost's Feet
     */
    ghostFeet0() {
        this.ctx.lineTo(18, 16);
        this.ctx.lineTo(16, 18);
        this.ctx.lineTo(15, 18);
        this.ctx.lineTo(12, 15);
        this.ctx.lineTo(9, 18);
        this.ctx.lineTo(6, 15);
        this.ctx.lineTo(3, 18);
        this.ctx.lineTo(2, 18);
        this.ctx.lineTo(0, 16);
        this.ctx.lineTo(0, 8);
    }
    
    /**
     * Draws the other variation of the Ghost's Feet
     */
    ghostFeet1() {
        this.ctx.lineTo(18, 18);
        this.ctx.lineTo(15, 15);
        this.ctx.lineTo(12, 18);
        this.ctx.lineTo(11, 18);
        this.ctx.lineTo(9, 15);
        this.ctx.lineTo(7, 18);
        this.ctx.lineTo(6, 18);
        this.ctx.lineTo(3, 15);
        this.ctx.lineTo(0, 18);
        this.ctx.lineTo(0, 8);
    }
    
    /**
     * Draws the Ghost's Face for the Chase/Scatter/Eyes modes
     */
    ghostNormalFace() {
        this.ctx.fillStyle = "rgb(255, 255, 255)";
        this.ctx.beginPath();
        this.ctx.arc(6    + this.dir.x * 2, 7 + this.dir.y * 2, 3, 0, 2 * Math.PI);
        this.ctx.arc(12.5 + this.dir.x * 2, 7 + this.dir.y * 2, 3, 0, 2 * Math.PI);
        this.ctx.fill();
        
        this.ctx.fillStyle = "rgb(0, 51, 255)";
        this.ctx.beginPath();
        this.ctx.arc(6    + this.dir.x * 4, 7 + this.dir.y * 4, 1.5, 0, 2 * Math.PI);
        this.ctx.arc(12.5 + this.dir.x * 4, 7 + this.dir.y * 4, 1.5, 0, 2 * Math.PI);
        this.ctx.fill();
    }
    
    /**
     * Draws the Ghost's Face for the Frighten (Blue/White) modes
     */
    ghostFrightenFace() {
        this.ctx.fillStyle = this.getFaceColor();
        this.ctx.beginPath();
        this.ctx.arc(6, 7, 1.5, 0, 2 * Math.PI);
        this.ctx.arc(12.5, 7, 1.5, 0, 2 * Math.PI);
        this.ctx.fill();
        
        this.ctx.strokeStyle = this.getFaceColor();
        this.ctx.beginPath();
        this.ctx.moveTo(3, 14);
        this.ctx.lineTo(5, 11);
        this.ctx.lineTo(7, 14);
        this.ctx.lineTo(9, 11);
        this.ctx.lineTo(11, 14);
        this.ctx.lineTo(13, 11);
        this.ctx.lineTo(15, 14);
        this.ctx.stroke();
    }
    
    /**
     * Returns the color for the Ghosts body depending on the mode
     * @return {string}
     */
    getBodyColor() {
        switch (this.mode) {
        case "blue":
            return "rgb(0, 51, 255)";
        case "white":
            return "rgb(255, 255, 255)";
        case "eyes":
            return "rgb(0, 0, 0)";
        default:
            return this.color;
        }
    }
    
    /**
     * Returns the color used for the Ghosts face depending on the mode
     * @return {string}
     */
    getFaceColor() {
        return this.mode === "blue" ? "rgb(255, 255, 255)" : "rgb(255, 0, 0)";
    }
    
    
    /**
     * Returns the Ghost's ID
     * @return {number}
     */
    getID() {
        return this.id;
    }
    
    /**
     * Returns the Ghost's x position
     * @return {number}
     */
    getX() {
        return this.x;
    }
    
    /**
     * Returns the Ghost's y position
     * @return {number}
     */
    getY() {
        return this.y;
    }
    
    /**
     * Returns the Ghost's tile position
     * @return {{x: number, y: number}}
     */
    getTile() {
        return this.tile;
    }
    
    /**
     * Returns the Ghost's interntal dots counter
     * @return {number}
     */
    getDots() {
        return this.dotsCount;
    }
    
    /**
     * Returns the Ghost's current target tile
     * @return {number}
     */
    getTargetTile() {
        return this.target;
    }
}

/**
 * @extends {Ghost}
 * The Blinky Class
 */
class Blinky extends Ghost {
    
    /**
     * The Blinky constructor
     * @param {Canvas}  canvas
     * @param {?number} dots
     */
    constructor(canvas, dots) {
        super();
        
        this.paths = {
            exitPen : [
                { dir : { x:  0, y: -1 }, disty : 138, next : null }
            ],
            enterPen : [
                { dir : { x: -1, y:  0 }, distx : 168, next : 1    },
                { dir : { x:  0, y:  1 }, disty : 174, next : null }
            ]
        };
        
        this.id      = 0;
        this.x       = 168;
        this.y       = 138;
        this.dir     = { x: -1, y:  0 };
        this.scatter = { x: 25, y: -3 };
        this.inPen   = false;
        this.color   = Blinky.color;
        
        this.init(canvas, dots);
        
        this.elroyMode   = 0;
        this.activeElroy = dots !== null;
    }
    
    /**
     * Returns the Ghost's name
     * @return {string}
     */
    static get name() {
        return "Blinky";
    }
    
    /**
     * Returns the Ghost's color
     * @return {string}
     */
    static get color() {
        return "rgb(221, 0, 0)";
    }
    
    
    /**
     * Blinky's target is always the current tile of the Blob
     * @param {Blob} blob
     * @return {{x: number, y: number}}
     */
    chase(blob) {
        return blob.getTile();
    }
    
    /**
     * Sets Blinky's "Cruise Elroy" Mode when the number of dots left reaches the target
     * @param {number} dots
     */
    checkElroyDots(dots) {
        if (dots === Data.getLevelData("elroyDotsLeft1") ||
                dots === Data.getLevelData("elroyDotsLeft2")) {
            this.elroy += 1;
        }
    }
    
    /**
     * Returns true when Blinky is in "Cruise Elroy" Mode. Only used for Blinky
     * @return {boolean}
     */
    isElroy() {
        return this.activeElroy && this.elroy > 0;
    }
    
    /**
     * Makes it possible for Blinky to switch to "Cruise Elroy" Mode
     */
    activateElroy() {
        this.activeElroy = true;
    }
}

/**
 * @extends {Ghost}
 * The Clyde Class
 */
class Clyde extends Ghost {
    
    /**
     * The Clyde constructor
     * @param {Canvas}  canvas
     * @param {?number} dots
     */
    constructor(canvas, dots) {
        super();
        
        this.paths = {
            inPen    : [
                { dir : { x:  0, y: -1 }, disty : 168, next : 1 },
                { dir : { x:  0, y:  1 }, disty : 180, next : 0 }
            ],
            exitPen  : [
                { dir : { x: -1, y:  0 }, distx : 168, next : 1    },
                { dir : { x:  0, y: -1 }, disty : 138, next : null }
            ],
            enterPen : [
                { dir : { x: -1, y:  0 }, distx : 168, next : 1    },
                { dir : { x:  0, y:  1 }, disty : 174, next : 2    },
                { dir : { x:  1, y:  0 }, distx : 192, next : null }
            ]
        };
        
        this.id      = 3;
        this.x       = 192;
        this.y       = 174;
        this.scatter = { x: 0, y: 31 };
        this.inPen   = true;
        this.color   = Clyde.color;
        
        this.init(canvas, dots);
        this.setPath("inPen");
    }
    
    /**
     * Returns the Ghost's name
     * @return {string}
     */
    static get name() {
        return "Clyde";
    }
    
    /**
     * Returns the Ghost's color
     * @return {string}
     */
    static get color() {
        return "rgb(255, 153, 0)";
    }
    

    /**
     * Clyde's target is the Blob possition if is further away and the Scatter if is closer
     * @param {Blob} blob
     * @return {{x: number, y: number}}
     */
    chase(blob) {
        let x = Math.pow(this.tile.x - blob.getTile().x, 2),
            y = Math.pow(this.tile.y - blob.getTile().y, 2);
        
        if (Math.sqrt(x + y) > 8) {
            return blob.getTile();
        }
        return this.scatter;
    }
}

/**
 * @extends {Ghost}
 * The Inky Class
 */
class Inky extends Ghost {
    
    /**
     * The Inky constructor
     * @param {Canvas} canvas
     * @param {number} dots
     * @param {Blinky} blinky
     */
    constructor(canvas, dots, blinky) {
        super();
        
        this.paths = {
            inPen    : [
                { dir : { x:  0, y: -1 }, disty : 168, next : 1 },
                { dir : { x:  0, y:  1 }, disty : 180, next : 0 }
            ],
            exitPen  : [
                { dir : { x:  1, y:  0 }, distx : 168, next : 1    },
                { dir : { x:  0, y: -1 }, disty : 138, next : null }
            ],
            enterPen : [
                { dir : { x: -1, y:  0 }, distx : 168, next : 1    },
                { dir : { x:  0, y:  1 }, disty : 174, next : 2    },
                { dir : { x: -1, y:  0 }, distx : 144, next : null }
            ]
        };
        
        this.id      = 2;
        this.x       = 144;
        this.y       = 174;
        this.scatter = { x: 27, y: 31 };
        this.inPen   = true;
        this.color   = Inky.color;
        this.blinky  = blinky;
        
        this.init(canvas, dots);
        this.setPath("inPen");
    }
    
    /**
     * Returns the Ghost's name
     * @return {string}
     */
    static get name() {
        return "Inky";
    }
    
    /**
     * Returns the Ghost's color
     * @return {string}
     */
    static get color() {
        return "rgb(102, 255, 255)";
    }

    
    /**
     * Inky's target is an average of Blinky's position and the Blob's position
     * @param {Blob} blob
     * @return {{x: number, y: number}}
     */
    chase(blob) {
        let offsetx = blob.getTile().x + 2 * blob.getDir().x,
            offsety = blob.getTile().y + 2 * blob.getDir().y;
        
        // Recreating bug where Up = Up+Left
        if (blob.getDir().y === -1) {
            offsetx -= 2;
        }
        return {
            x : offsetx * 2 - this.blinky.getTile().x,
            y : offsety * 2 - this.blinky.getTile().y
        };
    }
}

/**
 * @extends {Ghost}
 * The Pinky Class
 */
class Pinky extends Ghost {
    
    /**
     * The Pinky constructor
     * @param {Canvas}  canvas
     * @param {?number} dots
     */
    constructor(canvas, dots) {
        super();
        
        this.paths = {
            inPen    : [
                { dir : { x:  0, y: -1 }, disty : 168, next : 1 },
                { dir : { x:  0, y:  1 }, disty : 180, next : 0 }
            ],
            exitPen  : [
                { dir : { x:  0, y: -1 }, disty : 138, next : null }
            ],
            enterPen : [
                { dir : { x: -1, y:  0 }, distx : 168, next : 1    },
                { dir : { x:  0, y:  1 }, disty : 174, next : null }
            ]
        };
        
        this.id      = 1;
        this.x       = 168;
        this.y       = 174;
        this.scatter = { x: 2, y: -3 };
        this.inPen   = true;
        this.color   = Pinky.color;
        
        this.init(canvas, dots);
        this.setPath("inPen");
    }
    
    /**
     * Returns the Ghost's name
     * @return {string}
     */
    static get name() {
        return "Pinky";
    }
    
    /**
     * Returns the Ghost's color
     * @return {string}
     */
    static get color() {
        return "rgb(255, 153, 153)";
    }

    
    
    /**
     * Pinky's target is always 4 tiles ahead of the Blob
     * @param {Blob} blob
     * @return {{x: number, y: number}}
     */
    chase(blob) {
        let targetx = blob.getTile().x + 4 * blob.getDir().x,
            targety = blob.getTile().y + 4 * blob.getDir().y;
        
        // Recreating bug where Up = Up+Left
        if (blob.getDir().y === -1) {
            targetx -= 4;
        }
        return { x: targetx, y: targety };
    }
}

/**
 * The Animations Manager Class
 */
class Animations {
    
    /**
     * The Animations Manager constructor
     */
    constructor() {
        this.canvas     = Board.screenCanvas;
        this.animations = [];
    }
    
    /**
     * Returns true if there is an animation
     */
    isAnimating() {
        return this.animations.length &&
            this.animations.some((anim) => anim.blocksGameLoop());
    }
    
    /**
     * Animates the current animation, if possible
     * @param {number} time
     */
    animate(time) {
        if (this.animations.length) {
            this.animations.forEach((animation, index, object) => {
                animation.incTimer(time);
                if (animation.isAnimating()) {
                    animation.animate();
                } else {
                    animation.onEnd();
                    object.splice(index, 1);
                }
            });
        }
    }
    
    /**
     * Ends all the Animations
     */
    endAll() {
        this.animations.forEach((anim) => anim.onEnd());
        this.animations = [];
    }
    
    /**
     * Adds a new animation
     * @param {Animation} animation
     */
    add(animation) {
        this.animations.push(animation);
    }
    
    
    
    /**
     * Creates the Ready Animation
     * @param {function} callback
     */
    ready(callback) {
        this.add(new ReadyAnimation(this.canvas, callback));
    }
    
    /**
     * Creates the Paused Animation
     */
    paused() {
        this.add(new PausedAnimation(this.canvas));
    }
    
    /**
     * Creates the Blob's Death Animation
     * @param {Blob}     blob
     * @param {function} callback
     */
    death(blob, callback) {
        this.add(new DeathAnimation(this.canvas, blob, callback));
    }
    
    /**
     * Creates the Game Over Animation
     * @param {function} callback
     */
    gameOver(callback) {
        this.add(new GameOverAnimation(this.canvas, callback));
    }
    
    /**
     * Creates the Ghost Score Animation
     * @param {string} text
     * @param {{x: number, y: number}} pos
     */
    ghostScore(score, pos) {
        this.add(new GhostScoreAnimation(this.canvas, score, pos));
    }
    
    /**
     * Creates the Fruit Score Animation
     * @param {string} text
     * @param {{x: number, y: number}} pos
     */
    fruitScore(score, pos) {
        this.add(new FruitScoreAnimation(this.canvas, score, pos));
    }
    
    /**
     * Creates the End Level Animation
     * @param {function} callback
     */
    endLevel(callback) {
        this.add(new EndLevelAnimation(callback));
    }
    
    /**
     * Creates the New Level Animation
     * @param {number}   level
     * @param {function} callback
     */
    newLevel(level, callback) {
        this.add(new NewLevelAnimation(this.canvas, level, callback));
    }
}

/**
 * The Animation Base Class
 */
class Animation {
    
    /**
     * The Animation Base constructor
     */
    constructor() {
        this.time = 0;
    }
    
    /**
     * Increases the timer
     * @param {number} time
     */
    incTimer(time) {
        this.time += time;
    }
    
    /**
     * Returns true if the animation hasn't ended
     * @return {boolean}
     */
    isAnimating() {
        return this.endTime > this.time;
    }
    
    /**
     * Returns true if the game loop stops while the animation is running
     * @return {boolean}
     */
    blocksGameLoop() {
        return this.blocksGame;
    }
    
    /**
     * Does the Animation
     * @param {number} time
     */
    animate() {
        return undefined;
    }
    
    /**
     * Called when the animation ends
     */
    onEnd() {
        if (this.canvas) {
            if (this.clearAll) {
                this.canvas.clear();
            } else {
                this.canvas.clearSavedRects();
            }
        }
        
        if (this.callback) {
            this.callback();
        }
    }
}

/**
 * @extends {Animation}
 * The Paused Animation
 */
class DeathAnimation extends Animation {
    
    /**
     * The Paused Animation constructor
     * @param {Canvas}   canvas
     * @param {Blob}     blob
     * @param {function} callback
     */
    constructor(canvas, blob, callback) {
        super();
        
        this.canvas     = canvas;
        this.ctx        = canvas.context;
        this.blob       = blob;
        this.callback   = callback;
        this.blocksGame = true;
        this.endTime    = 1350;
        this.x          = blob.getX();
        this.y          = blob.getY();
    }
    
    /**
     * Does the Death animation
     */
    animate() {
        let count = Math.round(this.time / 15);
        
        this.canvas.clearSavedRects();
        this.ctx.save();
        this.ctx.translate(this.x, this.y);
        
        if (this.time < 750) {
            this.blob.drawDeath(this.ctx, count);
        } else if (this.time < 1050) {
            this.blob.drawCircle(this.ctx, count - 50);
        } else {
            this.blob.drawCircle(this.ctx, count - 70);
        }
        
        this.ctx.restore();
        this.canvas.savePos(this.x, this.y);
    }
}

/**
 * @extends {Animation}
 * The End Level Animation
 */
class EndLevelAnimation extends Animation {
    
    /**
     * The End Level Animation constructor
     * @param {function} callback
     */
    constructor(callback) {
        super();
        
        this.callback   = callback;
        
        this.blinks     = 0;
        this.blocksGame = true;
        this.blinkTimer = 150;
        this.endTime    = 1600;
    }
    
    /**
     * Does the End Level animation
     */
    animate() {
        if (this.time > this.blinkTimer) {
            Board.boardCanvas.clear();
            Board.drawBoard(this.blinks % 2 === 0);
            this.blinks     += 1;
            this.blinkTimer += 150;
        }
    }
}

/**
 * @extends {Animation}
 * The Fruit Score Animation
 */
class FruitScoreAnimation extends Animation {
    
    /**
     * The Fruit Score Animation constructor
     * @param {Canvas} canvas
     * @param {string} text
     * @param {{x: number, y: number}} pos
     */
    constructor(canvas, text, pos) {
        super();
        
        this.canvas     = canvas;
        this.text       = text;
        this.pos        = pos;
        this.blocksGame = true;
        this.endTime    = 2400;
    }
    
    /**
     * Does the Fruit Score animation
     */
    animate() {
        let color = "rgb(255, 184, 255)";
        if (this.time > 200 && this.time < 2400) {
            let alpha = this.time < 1000 ? 1 : 1 - Math.round((this.time - 1000) * 1.25) / 2000;
            color = "rgba(255, 184, 255, " + alpha + ")";
        }
        
        this.canvas.clear();
        this.canvas.drawText({
            size  : 1,
            color : color,
            text  : this.text,
            pos   : {
                x : this.pos.x + 0.5,
                y : this.pos.y + 0.5
            }
        });
        
        if (this.time > 200) {
            this.blocksGame = false;
        }
    }
}


/**
 * @extends {Animation}
 * The Game Over Animation
 */
class GameOverAnimation extends Animation {
    
    /**
     * The Game Over constructor
     * @param {Canvas}   canvas
     * @param {function} callback
     */
    constructor(canvas, callback) {
        super();
        
        this.canvas     = canvas;
        this.callback   = callback;
        this.blocksGame = true;
        this.endTime    = 2000;
    }
    
    /**
     * Does the Game Over animation
     */
    animate() {
        let size  = Math.round(this.endTime - this.time) / 700,
            alpha = Math.round(this.endTime - this.time) / 2000;
        
        this.canvas.clear();
        this.canvas.fill(0.8);
        
        this.canvas.drawText({
            size  : Math.max(2, size),
            color : "rgba(255, 0, 0, " + Math.max(0, alpha) + ")",
            text  : "Game Over",
            pos   : { x: 14, y: 17.3 },
            alpha : 0.8
        });
    }
}

/**
 * @extends {Animation}
 * The Ghost Score Animation
 */
class GhostScoreAnimation extends Animation {
    
    /**
     * The Ghost Score Animation constructor
     * @param {Canvas} canvas
     * @param {string} text
     * @param {{x: number, y: number}} pos
     */
    constructor(canvas, text, pos) {
        super();
        
        this.canvas     = canvas;
        this.text       = text;
        this.pos        = pos;
        this.blocksGame = true;
        this.endTime    = 1000;
    }
    
    /**
     * Does the Ghost Score animation
     */
    animate() {
        let size = Math.min(0.2 + Math.round(this.time * 100 / 500) / 100, 1);
        
        this.canvas.clearSavedRects();
        this.canvas.drawText({
            size  : size,
            color : "rgb(51, 255, 255)",
            text  : this.text,
            pos   : {
                x : this.pos.x + 0.5,
                y : this.pos.y + 0.5
            }
        });
        
        if (this.time > 200) {
            this.blocksGame = false;
        }
    }
}

/**
 * @extends {Animation}
 * The New Level Animation
 */
class NewLevelAnimation extends Animation {
    
    /**
     * The New Level Animation constructor
     * @param {Canvas}   canvas
     * @param {number}   level
     * @param {function} callback
     */
    constructor(canvas, level, callback) {
        super();
        
        this.canvas     = canvas;
        this.level      = level;
        this.callback   = callback;
        
        this.blinks     = 0;
        this.blocksGame = true;
        this.blinkTimer = 150;
        this.endTime    = 2000;
        this.clearAll   = true;
    }
    
    /**
     * Does the New Level animation
     */
    animate() {
        let calc  = Math.round(this.time * 0.03),
            pos   = calc < 17.15 ? calc - 2 : 15,
            lvl   = (this.level < 10 ? "0" : "") + this.level,
            right = Board.cols;
        
        this.canvas.clear();
        this.canvas.fill(0.8);
        
        this.canvas.drawText({
            color : "rgb(255,255,255)",
            align : "right",
            text  : "Level",
            pos   : { x: pos, y: 17.3 }
        });
        this.canvas.drawText({
            color : "rgb(255,255,51)",
            align : "left",
            text  : lvl,
            pos   : { x: right - pos + 2, y: 17.3 }
        });
    }
}

/**
 * @extends {Animation}
 * The Paused Animation
 */
class PausedAnimation extends Animation {
    
    /**
     * The Paused Animation
     * @param {Canvas} canvas
     */
    constructor(canvas) {
        super();
        
        this.canvas     = canvas;
        this.blocksGame = true;
        this.timePart   = 500;
        this.partDiv    = 5;
        this.maxSize    = 2.2;
        this.minSize    = 1.5;
        this.clearAll   = true;
    }
    
    /**
     * Returns true if the animation hasn't ended
     * @param {number} time
     * @return {boolean}
     */
    isAnimating() {
        return true;
    }
    
    /**
     * Animates the Paused text alternating sizes increases and decreases
     */
    animate() {
        let time = this.time % this.timePart,
            anim = Math.floor(this.time / this.timePart) % 2,
            part = time * (this.maxSize - this.minSize) / this.timePart,
            size = anim ? this.maxSize - part : this.minSize + part;
        
        this.canvas.clear();
        this.canvas.fill(0.8);
        
        this.canvas.drawText({
            size  : size,
            color : "rgb(255, 255, 51)",
            text  : "Paused!",
            pos   : { x: 14, y: 17.3 },
            alpha : 0.8
        });
    }
}

/**
 * @extends {Animation}
 * The Ready Animation
 */
class ReadyAnimation extends Animation {
    
    /**
     * The Ready Animation constructor
     * @param {Canvas}   canvas
     * @param {function} callback
     */
    constructor(canvas, callback) {
        super();
        
        this.canvas     = canvas;
        this.callback   = callback;
        this.blocksGame = true;
        this.endTime    = 3000;
        
        this.canvas.drawText({
            color : "rgb(255, 255, 51)",
            text  : "Ready!",
            pos   : { x: 14, y: 17.3 }
        });
    }
}


/**
 * The Demo Class
 */
class Demo {
    
    /**
     * The Demo constructor
     */
    constructor() {
        this.canvas  = Board.screenCanvas;
        this.ctx     = this.canvas.context;
        
        this.step    = -1;
        this.name    = "";
        this.bigBlob = new BigBlob();
        this.food    = new DemoFood();
        
        this.nextAnimation();
    }
    
    
    /**
     * Destroys the current Demo and leaves it ready for the next start
     */
    destroy() {
        this.step    = -1;
        this.bigBlob = new BigBlob();
        
        this.canvas.clear();
        this.nextAnimation();
    }
    
    
    /**
     * Calls the animation the demo is at
     * @param {number} time
     * @param {number} speed
     */
    animate(time, speed) {
        switch (this.name) {
        case "title":
            this.titleAnimation(time);
            break;
        case "chase":
            this.chaseAnimation(speed);
            break;
        case "frighten":
            this.frightenAnimation(time, speed);
            break;
        case "present":
            this.presentAnimation(time, speed);
            break;
        }
    }
    
    /**
     * Jumps to the next animation in the demo
     */
    nextAnimation() {
        this.step  = this.step === DemoData.animations.length - 1 ? 1 : this.step + 1;
        this.name  = DemoData.animations[this.step];
        this.timer = 0;
        
        switch (this.name) {
        case "chase":
            this.initChase();
            break;
        case "frighten":
            this.initFrighten();
            break;
        case "present":
            this.initPresent();
            break;
        }
    }
    
    
    /**
     * The Title Animation
     * @param {number} time
     */
    titleAnimation(time) {
        this.timer += time;
        let alpha   = 1 - Math.round(10 * this.timer / DemoData.title.endTime) / 10;
        
        this.canvas.clear();
        this.bigBlob.animate(time);
        this.canvas.fill(alpha);
        
        if (this.timer > DemoData.title.endTime) {
            this.canvas.clear();
            this.drawTitle();
            this.bigBlob.endAnimation();
            this.nextAnimation();
        }
    }
    
    /**
     * Draws the Pacman title
     */
    drawTitle() {
        var left  = Board.tileToPos(DemoData.title.leftText),
            right = Board.tileToPos(DemoData.title.rightText);
        
        this.ctx.save();
        this.ctx.font      = "6em 'Whimsy TT'";
        this.ctx.textAlign = "right";
        this.ctx.fillText("Pa", left.x, left.y);
        this.ctx.textAlign = "left";
        this.ctx.fillText("man", right.x, right.y);
        this.ctx.restore();
    }
    
    
    /**
     * Initializes the Players for the Chase animation
     */
    initChase() {
        let size = Board.tileSize,
            yPos = DemoData.chase.playersY * size,
            dir  = DemoData.chase.playersDir;
        
        this.createPlayers();
        this.blob.chaseDemo(dir,       -size, yPos);
        this.blinky.chaseDemo(dir, -4 * size, yPos);
        this.pinky.chaseDemo(dir,  -6 * size, yPos);
        this.inky.chaseDemo(dir,   -8 * size, yPos);
        this.clyde.chaseDemo(dir, -10 * size, yPos);
        
        this.endPos = DemoData.chase.endTile * Board.tileSize;
    }
    
    /**
     * Creates the Blob and the Ghosts
     */
    createPlayers() {
        this.blob   = new DemoBlob();
        this.blinky = new DemoGhost(Blinky.name, Blinky.color);
        this.pinky  = new DemoGhost(Pinky.name, Pinky.color);
        this.inky   = new DemoGhost(Inky.name, Inky.color);
        this.clyde  = new DemoGhost(Clyde.name, Clyde.color);
        
        this.ghosts = [ this.blinky, this.pinky, this.inky, this.clyde ];
    }
    
    /**
     * The Chase Animation
     * @param {number} speed
     */
    chaseAnimation(speed) {
        this.animatePlayers(speed, true);
        
        if (this.blob.getX() >= this.endPos) {
            this.nextAnimation();
        }
    }
    
    
    /**
     * Initializes the Players for the Frighten animation
     */
    initFrighten() {
        var speed = Data.getLevelData("ghostFrightSpeed") * DemoData.frighten.speedMult,
            dir   = DemoData.frighten.playersDir;
        
        this.blob.frightenDemo(dir);
        this.blinky.frightenDemo(dir, speed);
        this.pinky.frightenDemo(dir, speed);
        this.inky.frightenDemo(dir, speed);
        this.clyde.frightenDemo(dir, speed);
        
        this.scores = [];
        this.endPos = DemoData.frighten.endTile * Board.tileSize;
    }
    
    /**
     * The Frighten Animation
     * @param {number} time
     * @param {number} speed
     */
    frightenAnimation(time, speed) {
        this.animatePlayers(speed);
        this.drawScores(time);
        
        if (this.ghosts.length > 0 && this.blob.getX() <= this.ghosts[0].getX()) {
            this.ghosts.shift();
            this.text = this.blob.getX();
            this.scores.push({
                timer : 0,
                size  : 1,
                color : "rgb(51, 255, 255)",
                text  : Data.getGhostScore(4 - this.ghosts.length),
                pos   : {
                    x : this.blob.getX() / Board.tileSize,
                    y : DemoData.frighten.textTile
                }
            });
        }
        if (this.blob.getX() < this.endPos) {
            this.nextAnimation();
        }
    }
    
    /**
     * Draws the Scores in the Canvas
     * @param {number} time
     */
    drawScores(time) {
        this.scores.forEach((score, index) => {
            score.timer += time;
            score.size   = Math.min(0.2 + Math.round(score.timer * 100 / DemoData.chase.scoreInc) / 100, 1);
            
            if (score.timer < DemoData.chase.scoreTime) {
                this.canvas.drawText(score);
            } else {
                this.scores.splice(index, 1);
            }
        });
    }
    
    
    /**
     * Initializes the Players for the Present animation
     */
    initPresent() {
        this.blob = null;
        this.blinky.presentDemo(DemoData.present.dir);
        this.pinky.presentDemo(DemoData.present.dir);
        this.inky.presentDemo(DemoData.present.dir);
        this.clyde.presentDemo(DemoData.present.dir);
        
        this.ghosts   = [ this.blinky ];
        this.others   = [ this.pinky, this.inky, this.clyde ];
        this.count    = 4;
        this.presentX = DemoData.present.tile * Board.tileSize;
        this.exitX    = Board.width + Board.tileSize;
    }
    
    /**
     * The Present Animation
     * @param {number} time
     * @param {number} speed
     */
    presentAnimation(time, speed) {
        if (this.timer <= 0) {
            this.animatePlayers(speed);
            
            if (this.count > 0 && this.ghosts[0].getX() > this.presentX) {
                this.drawName(this.ghosts[0]);
                if (this.others.length) {
                    this.ghosts.unshift(this.others[0]);
                    this.others.shift();
                }
                this.timer  = DemoData.present.timer;
                this.count -= 1;
            
            } else if (this.ghosts[this.ghosts.length - 1].getX() > this.exitX) {
                this.ghosts.pop();
                if (!this.ghosts.length) {
                    this.nextAnimation();
                }
            }
            
        } else {
            this.timer -= time;
        }
    }
    
    /**
     * Draws the Name of the given Ghost
     * @param {Ghost} ghost
     */
    drawName(ghost) {
        this.canvas.drawText({
            size  : 2,
            color : ghost.getBodyColor(),
            text  : "‘" + ghost.getName() + "’",
            pos   : DemoData.present.namePos
        });
    }
    
    
    /**
     * Animates all the players
     * @param {number}   speed
     * @param {?boolean} food
     */
    animatePlayers(speed, food) {
        this.canvas.clearSavedRects();
        
        if (food) {
            this.food.wink();
        }
        this.ghosts.forEach((ghost) => {
            ghost.demoAnimate(speed);
        });
        
        if (this.blob) {
            this.blob.animate(speed);
        }
    }
}

var DemoData = (function () {
    "use strict";
    
    return {
        /**
         * Returns the list of animations
         * @return {Array.<string>}
         */
        get animations() {
            return [ "title", "chase", "frighten", "present" ];
        },
        
        
        /**
         * Returns the title data
         * @return {Object}
         */
        get title() {
            return {
                endTime    : 700,
                endTile    : 11,
                leftText   : { x:  9, y: 4 },
                rightText  : { x: 13, y: 4 },
                blobY      : 4.5,
                blobDir    : { x: 1, y: 0 },
                blobMouth  : 5,
                blobRadius : 2.5
            };
        },
        
        /**
         * Returns the chase data
         * @return {Object}
         */
        get chase() {
            return {
                endTile    : 26.5,
                playersY   : 15,
                playersDir : { x: 1, y: 0 },
                scoreInc   : 500,
                scoreTime  : 1000,
                enerX      : 26,
                enerY      : 14.5
            };
        },
        
        /**
         * Returns the frighten data
         * @return {Object}
         */
        get frighten() {
            return {
                endTile    : -4,
                playersDir : { x: -1, y: 0 },
                speedMult  : 0.9,
                textTile   : 15
            };
        },
        
        /**
         * Returns the present data
         * @return {Object}
         */
        get present() {
            return {
                dir     : { x: 1, y: 0 },
                tile    : 20,
                namePos : { x: 14, y: 15 },
                timer   : 1000
            };
        }
    };
}());



/**
 * @extends {Blob}
 * The Big Blob Class. Used in the title animation
 */
class BigBlob extends Blob {
    
    /**
     * The Big Blob constructor
     */
    constructor() {
        super();
        
        this.ctx    = Board.screenCanvas.context;
        this.radius = DemoData.title.blobRadius * Board.tileSize;
        this.x      = -this.radius;
        this.y      = DemoData.title.blobY * Board.tileSize;
        this.dir    = Object.create(DemoData.title.blobDir);
        this.mouth  = DemoData.title.blobMouth;
        this.timer  = 0;
        
        this.endPos = DemoData.title.endTile * Board.tileSize;
    }
    
    
    /**
     * Moves the Big Blob. Specially made for the title animation
     * @param {number} time
     */
    animate(time) {
        this.timer += time;
        this.x      = Math.round(this.timer * this.endPos / DemoData.title.endTime);
        
        this.moveMouth();
        this.draw();
    }
    
    /**
     * When the Blob reaches it positions, it draws it there
     */
    endAnimation() {
        this.mouth = DemoData.title.blobMouth;
        this.x     = this.endPos;
        this.draw();
    }
    
    /**
     * Removes the Canvas Save pos, since is not required
     */
    savePos() {
        return undefined;
    }
}

/**
 * @extends {Blob}
 * The Demo Blob Class
 */
class DemoBlob extends Blob {
    
    /**
     * The Demo Blob Cconstructor
     */
    constructor() {
        super();
        
        this.init(Board.screenCanvas);
    }
    
    /**
     * Initialize some variables for the demo animation
     * @param {{x: number, y: number}} dir
     * @param {number} x
     * @param {number} y
     */
    chaseDemo(dir, x, y) {
        this.dir   = Object.create(dir);
        this.x     = x;
        this.y     = y;
        this.speed = Data.getLevelData("pmSpeed");
    }
    
    /**
     * The second animation of the demo in Frighten mode
     * @param {{x: number, y: number}} dir
     */
    frightenDemo(dir) {
        this.dir   = Object.create(dir);
        this.speed = Data.getLevelData("pmFrightSpeed");
    }
    
    /**
     * The animation used on the Demo
     * @param {number} speed
     */
    animate(speed) {
        this.x += this.dir.x * this.speed * speed;
        
        this.moveMouth();
        this.draw();
    }
}

/**
 * @extends {Food}
 * The Demo Food Class. Used in the chase animation
 */
class DemoFood extends Food {
    
    /**
     * The Demo Food constructor
     */
    constructor() {
        super();
        this.init();
        this.ctx = Board.screenCanvas.context;
    }
    
    /**
     * The wink animation used for the chase anmiation
     */
    wink() {
        let x = Board.getTileCenter(DemoData.chase.enerX),
            y = Board.getTileCenter(DemoData.chase.enerY);
        
        this.calcRadius();
        this.clearEnergizer(x, y);
        this.drawEnergizer(x, y, this.radius);
    }
}

/**
 * @extends {Ghost}
 * The Demo Ghost Class
 */
class DemoGhost extends Ghost {

    /**
     * The Demo Ghost constructor
     * @param {string} name
     * @param {string} color
     */
    constructor(name, color) {
        super();
        
        this.canvas = Board.screenCanvas;
        this.ctx    = this.canvas.context;
        this.feet   = 0;
        
        this.name   = name;
        this.color  = color;
    }
    
    /**
     * Returns the Ghost's name
     * @return {number}
     */
    getName() {
        return this.name;
    }
        
    
    /**
     * Initialize some variables for the chase demo animation
     * @param {{x: number, y: number}} dir
     * @param {number} x
     * @param {number} y
     */
    chaseDemo(dir, x, y) {
        this.dir   = Object.create(dir);
        this.x     = x;
        this.y     = y;
        this.mode  = "chase";
        this.speed = Data.getGhostSpeed(false);
    }
    
    /**
     * Initialize some variables for the frighten demo animation
     * @param {{x: number, y: number}} dir
     * @param {number} speed
     */
    frightenDemo(dir, speed) {
        this.dir   = Object.create(dir);
        this.mode  = "blue";
        this.speed = speed;
    }
    
    /**
     * Initialize some variables for the present demo animation
     * @param {{x: number, y: number}} dir
     */
    presentDemo(dir) {
        this.dir   = Object.create(dir);
        this.x     = -Board.ghostSize;
        this.mode  = "chase";
        this.speed = Data.getGhostSpeed(false);
    }
    
    
    /**
     * The animation used on the Demo
     * @param {number} speed
     */
    demoAnimate(speed) {
        this.x += this.dir.x * this.speed * speed;
        
        this.moveFeet();
        this.draw();
    }
}

(function () {
    "use strict";
    
    var display, demo, animations, sounds, scores,
        score, food, fruit, ghosts, blob,
        animation, startTime, actions, shortcuts,
        soundFiles  = [ "start", "death", "eat1", "eat2", "kill" ],
        specialKeys = {
            "8"  : "BS",
            "13" : "Enter",
            "37" : "Left",
            "65" : "Left",
            "38" : "Up",
            "87" : "Up",
            "39" : "Right",
            "68" : "Right",
            "40" : "Down",
            "83" : "Down"
        };
    
    
    
    /**
     * Calls the Game Over animation and then deletes the game data
     */
    function gameOver() {
        display.set("ready");
        animations.gameOver(() => {
            food   = null;
            fruit  = null;
            ghosts = null;
            blob   = null;
            
            Board.clearAll();
            display.set("gameOver").show();
            scores.setInput();
        });
    }
    
    /**
     * Creates the Blob and the Ghosts, and starts the Ready animation
     * @param {boolean} newLife
     */
    function createPlayers(newLife) {
        ghosts = new Ghosts(newLife ? ghosts : null);
        blob   = new Blob();
        
        blob.draw();
        ghosts.draw();
        animations.ready(() => display.set("playing"));
    }
    
    
    /**
     * Called when the Blob enters a new tile
     */
    function blobEating() {
        let tile   = blob.getTile(),
            atPill = food.isAtPill(tile);
        
        if (atPill) {
            let value = food.eatPill(tile),
                total = food.getLeftPills();
            
            fruit.add(total);
            score.pill(value);
            ghosts.resetPenTimer();
            ghosts.checkElroyDots(total);
            
            if (value === Data.energizerValue) {
                ghosts.frighten(blob);
            }
            sounds[blob.getSound()]();
        
        } else if (fruit.isAtPos(tile)) {
            let text = score.fruit();
            fruit.eat();
            animations.fruitScore(text, Board.fruitTile);
        }
        blob.onEat(atPill, ghosts.areFrighten());
    }
    
    /**
     * Called to do the crash etween a ghost and th blob
     */
    function ghostCrash() {
        ghosts.crash(blob.getTile(), (eyesCounter, tile) => {
            let text = score.kill(eyesCounter);
            animations.ghostScore(text, tile);
            sounds.kill();
        }, () => {
            Board.clearGame();
            animations.death(blob, newLife);
            sounds.death();
        });
    }
    
    
    /**
     * Called after the Blob dies
     */
    function newLife() {
        if (!score.died()) {
            gameOver();
        } else {
            display.set("ready");
            createPlayers(true);
        }
    }
    
    /**
     * Called after we get to a new level
     */
    function newLevel() {
        animations.newLevel(score.getLevel(), () => {
            food  = new Food();
            fruit = new Fruit();
            
            Board.clearGame();
            food.draw();
            score.draw();
            createPlayers(false);
        });
    }
    
    
    /**
     * Request an animation frame
     */
    function requestAnimation() {
        startTime = new Date().getTime();
        animation = window.requestAnimationFrame(() => {
            let time  = new Date().getTime() - startTime,
                speed = time / 16;
            
            if (speed > 5) {
                return requestAnimation();
            }
            
            if (display.isMainScreen()) {
                demo.animate(time, speed);
            } else if (animations.isAnimating()) {
                animations.animate(time);
            } else if (display.isPlaying()) {
                Board.clearGame();
                food.wink();
                fruit.reduceTimer(time);
                ghosts.animate(time, speed, blob);
                let newTile = blob.animate(speed);
                animations.animate(time);
                
                if (newTile) {
                    ghosts.setTargets(blob);
                    blobEating();
                }
                if (food.getLeftPills() === 0) {
                    score.newLevel();
                    animations.endLevel(newLevel);
                }
                ghostCrash();
            }
            requestAnimation();
        });
    }
    
    /**
     * Cancel an animation frame
     */
    function cancelAnimation() {
        window.cancelAnimationFrame(animation);
    }
   
    
    /**
     * Starts a new Game
     */
    function newGame() {
        display.set("ready").show();
        cancelAnimation();
        
        score = new Score();
        food  = new Food();
        fruit = new Fruit();
        
        demo.destroy();
        Board.drawBoard();
        food.draw();
        score.draw();
        
        createPlayers(false);
        requestAnimation();
        sounds.start();
    }
    
    /**
     * Toggles the Game Pause
     */
    function togglePause() {
        if (display.isPaused()) {
            display.set("playing");
            animations.endAll();
        } else {
            display.set("paused");
            animations.paused();
        }
    }
    
    /**
     * Show the High Scores
     */
    function showHighScores() {
        display.set("highScores").show();
        scores.show();
    }
    
    /**
     * Saves the High Score
     */
    function saveHighScore() {
        if (scores.save(score.getLevel(), score.getScore())) {
            showHighScores();
        }
    }
    
    
    
    /**
     * Creates a shortcut object
     */
    function createActionsShortcuts() {
        actions = {
            play       : () => newGame(),
            highScores : () => showHighScores(),
            help       : () => display.set("help").show(),
            sound      : () => sounds.toggle(),
            save       : () => saveHighScore(),
            retore     : () => scores.restore(),
            mainScreen : () => display.set("mainScreen").show()
        };
        
        shortcuts = {
            mainScreen : {
                Enter : "play",
                Down  : "play",
                H     : "highScores",
                C     : "help",
                M     : "sound"
            },
            playing : {
                P     : () => togglePause(),
                M     : () => sounds.toggle(),
                Left  : () => blob.makeTurn({ x: -1, y:  0 }),
                Up    : () => blob.makeTurn({ x:  0, y: -1 }),
                Right : () => blob.makeTurn({ x:  1, y:  0 }),
                Down  : () => blob.makeTurn({ x:  0, y:  1 })
            },
            paused : {
                P     : () => togglePause()
            },
            gameOver : {
                Enter : () => saveHighScore(),
                B     : () => display.set("mainScreen").show()
            },
            highScores : {
                B     : () => display.set("mainScreen").show(),
                R     : () => scores.restore()
            },
            help : {
                B     : () => display.set("mainScreen").show()
            }
        };
    }
    
    /**
     * Stores the used DOM elements and initializes the Event Handlers
     */
    function initDomListeners() {
        document.body.addEventListener("click", (e) => {
            let element = Utils.getTarget(e);
            if (actions[element.dataset.action]) {
                actions[element.dataset.action](element.dataset.data || undefined);
                e.preventDefault();
            }
        });
        
        document.addEventListener("keydown", (e) => {
            var key  = e.keyCode,
                code = specialKeys[key] || String.fromCharCode(key);
            
            if (shortcuts[display.get()] && shortcuts[display.get()][code]) {
                if (typeof shortcuts[display.get()][code] === "string") {
                    actions[shortcuts[display.get()][code]]();
                } else {
                    shortcuts[display.get()][code]();
                }
                e.preventDefault();
            }
        });
    }
    
    /**
     * Destroys the demo when the display changes
     */
    function onShow() {
        if (!display.isMainScreen()) {
            demo.destroy();
        }
    }
    
    /**
     * The main Function
     */
    function main() {
        Board.create();
        display    = new Display(onShow);
        demo       = new Demo();
        animations = new Animations();
        sounds     = new Sounds(soundFiles, "pacman.sound", true);
        scores     = new HighScores();
        
        createActionsShortcuts();
        initDomListeners();
        requestAnimation();
    }
    
    
    // Load the game
    window.addEventListener("load", main, false);
    
}());

var Sounds = (function () {
    "use strict";
    
    /**
     * Returns true if the browser supports Audio
     * @return {boolean}
     */
    function supportsAudio() {
        return !!document.createElement("audio").canPlayType;
    }
    
    /**
     * Returns true if the browser supports MP3 Audio
     * @return {boolean}
     */
    function supportsMP3() {
        var a = document.createElement("audio");
        return !!(a.canPlayType && a.canPlayType("audio/mpeg;").replace(/no/, ""));
    }
    
    /**
     * Returns true if the browser supports OGG Audio
     * @return {boolean}
     */
    function supportsOGG() {
        var a = document.createElement("audio");
        return !!(a.canPlayType && a.canPlayType("audio/ogg; codecs='vorbis'").replace(/no/, ""));
    }
    
    
    
    /**
     * @constructor
     * Sound Controller
     * @param {Array.<string>} soundFiles - An array of sound names to use
     * @param {string} storageName - The name of the storage
     * @param {boolean} usesElement - True if it uses elements
     */
    function Sounds(soundFiles, storageName, usesElement) {
        this.data   = new Storage(storageName, true);
        this.format = supportsOGG() ? ".ogg" : (supportsMP3() ? ".mp3" : null);
        this.mute   = !!this.data.get();
        this.old    = this.mute;
        
        if (usesElement) {
            this.audio = document.querySelector(".audio");
            this.waves = document.querySelector(".waves");
        }
        
        if (this.format) {
            this.setSounds(soundFiles);
            this.setDisplay();
        } else if (this.audio) {
            this.audio.style.display = "none";
        }
    }
    
    /**
     * Create all the Sound Functions
     */
    Sounds.prototype.setSounds = function (soundFiles) {
        var audio, self = this;
        
        soundFiles.forEach(function (sound) {
            self[sound] = function () {
                audio = new Audio("audio/" + sound + self.format);
                if (self.format && !self.mute) {
                    audio.play();
                }
            };
        });
    };
    
    /**
     * Mute/Unmute the sound
     * @param {boolean} mute
     */
    Sounds.prototype.toggle = function (mute) {
        this.mute = mute !== undefined ? mute : !this.mute;
        this.setDisplay();
        this.data.set(this.mute ? 1 : 0);
    };
    
    /**
     * Used to mute the sound for a short period
     */
    Sounds.prototype.startMute = function () {
        this.old = this.mute;
        this.toggle(true);
    };
    
    /**
     * Resets the Mute to the original value
     */
    Sounds.prototype.endMute = function () {
        this.toggle(this.old);
    };
    
    /**
     * Returns true if the sound is off and false if is on
     * @return {boolean}
     */
    Sounds.prototype.isMute = function () {
        return this.mute;
    };
    
    /**
     * Sets the display of the sound waves
     */
    Sounds.prototype.setDisplay = function () {
        if (this.waves) {
            this.waves.style.display = this.mute ? "none" : "block";
        }
    };
    
    
    
    return Sounds;
}());

/**
 * Creates a new Storage. A storage uses local storage capabilities to save JSON data
 */
var Storage = (function () {
    "use strict";
    
    /**
     * Returns true if local storage is supported
     */
    function supportsStorage() {
        return window.localStorage !== "undefined" && window.localStorage !== null;
    }
    
    /**
     * Returns true if the string is an integer
     * @param {string} string
     * @return {boolean}
     */
    function isInteger(string) {
        var validChars = "0123456789-", isNumber = true, i, char;
        
        for (i = 0; i < string.length && isNumber === true; i += 1) {
            char = string.charAt(i);
            if (validChars.indexOf(char) === -1) {
                isNumber = false;
            }
        }
        return isNumber;
    }
    
    
    /**
     * @constructor
     * Creates a new storage
     * @param {string} name  The name of the storage
     * @param {boolean=} single  True to have a storage for a single value
     */
    function Storage(name, single) {
        this.name     = name;
        this.single   = single || false;
        this.supports = supportsStorage();
    }
    
    /**
     * Returns the data in the saved format
     * @param {string} name
     * @return {(boolean|number|string|Object)}
     */
    Storage.prototype.get = function (name) {
        var content = null;
        
        if (this.supports && window.localStorage[this.getName(name)]) {
            content = window.localStorage[this.getName(name)];
            if (content === "true" || content === "false") {
                content = content === "true";
            } else if (isInteger(content)) {
                content = parseInt(content, 10);
            } else {
                content = JSON.parse(content);
            }
        }
        return content;
    };
    
    /**
     * Saves the given data as a JSON object
     * @param {(boolean|number|string|Object)} name  If this is a single value Storage use this param for the value
     * @param {(boolean|number|string|Object)} value
     */
    Storage.prototype.set = function (name, value) {
        if (this.supports) {
            if (this.single) {
                value = name;
                name  = "";
            }
            window.localStorage[this.getName(name)] = JSON.stringify(value);
        }
    };
    
    /**
     * Removes the data with the given name
     * @param {string=} name
     */
    Storage.prototype.remove = function (name) {
        if (this.supports) {
            window.localStorage.removeItem(this.getName(name));
        }
    };
    
    
    /**
     * Returns the key for the given name
     * @param {string=} name
     * @return {string}
     */
    Storage.prototype.getName = function (name) {
        return this.name + (name ? "." + name : "");
    };
    
    /**
     * Returns true if local storage is supported
     */
    Storage.prototype.isSupported = function () {
        return this.supports;
    };
    
    
    
    return Storage;
}());

let Utils = (function () {
    "use strict";

    return {
        /**
         * Returns a random value between from and to
         * @param {number} from
         * @param {number} to
         * @return {number}
         */
        rand(from, to) {
            return Math.floor(Math.random() * (to - from + 1) + from);
        },
        
        /**
         * Returns the value higher than the min and lower than the max
         * @param {number} value
         * @param {number} min
         * @param {number} max
         * @return {number}
         */
        clamp(value, min, max) {
            return Math.max(min, Math.min(max, value));
        },
    
        /**
         * Adds the separator every 3 decimals
         * @param {number} number
         * @param {string} separator
         * @return {string}
         */
        formatNumber(number, separator) {
            let result = "", count = 0, char;
            number = String(number);
            
            for (let i = number.length - 1; i >= 0; i -= 1) {
                char   = number.charAt(i);
                count += 1;
                result = char + result;
                
                if (count === 3 && i > 0) {
                    result = separator + result;
                    count  = 0;
                }
            }
            return result;
        },
        
        /**
         * Returns the angle between two values
         * @param {number} x
         * @param {number} y
         * @return {number}
         */
        calcAngle(x, y) {
            let angle = Math.round(Math.abs(Math.atan(y / x) * 180 / Math.PI));
            if (y < 0 && x >= 0) {
                angle = 360 - angle;
            } else if (y < 0 && x < 0) {
                angle = 180 + angle;
            } else if (y >= 0 && x < 0) {
                angle = 180 - angle;
            }
            return angle;
        },
        
        
        /**
         * Returns the closest element with an action
         * @param {Event}
         * @return {DOMElement}
         */
        getTarget(event) {
            let element = event.target;
            while (element.parentElement && !element.dataset.action) {
                element = element.parentElement;
            }
            return element;
        },
        
        /**
         * Returns the position of an Element in the document
         * @param {DOMElement} element
         * @return {{top: number, left: number}}
         */
        getPosition(element) {
            let top = 0, left = 0;
            if (element.offsetParent !== undefined) {
                top  = element.offsetTop;
                left = element.offsetLeft;
                
                while (element.offsetParent && typeof element.offsetParent === "object") {
                    element = element.offsetParent;
                    top  += element.offsetTop;
                    left += element.offsetLeft;
                }
            } else if (element.x !== undefined) {
                top  = element.y;
                left = element.x;
            }
            return { top, left };
        },
        
        /**
         * Sets the position of the given element or elements
         * @param {DOMElement} element
         * @param {number} top
         * @param {number} lefet
         */
        setPosition(element, top, left) {
            element.style.top  = top  + "px";
            element.style.left = left + "px";
        },
        
        /**
         * Removes the Element from the DOM
         * @param {DOMElement} element
         */
        removeElement(element) {
            var parent = element.parentNode;
            parent.removeChild(element);
        },
    
    
        /**
         * Returns the Mouse Position
         * @param {Event} event
         * @return {{top: number, left: number}}
         */
        getMousePos(event) {
            let top = 0, left = 0;
            if (!event) {
                event = window.event;
            }
            if (event.pageX) {
                top  = event.pageY;
                left = event.pageX;
            } else if (event.clientX) {
                top  = event.clientY + (document.documentElement.scrollTop  || document.body.scrollTop);
                left = event.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft);
            }
            return { top, left };
        },
    
        /**
         * Unselects the elements
         */
        unselect() {
            if (window.getSelection) {
                window.getSelection().removeAllRanges();
            } else if (document.selection) {
                document.selection.empty();
            }
        }
    };
}());