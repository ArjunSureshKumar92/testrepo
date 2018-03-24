// IIFE - Immediately Invoked Function Expression
(function () {
    // sprites sheet used
    var canvas = document.getElementById("canvas");
    var stage;
    var assestMng;
    var currentScene;
    var assestManifest = [
        { id: "image", src: "./Assets/ocean.gif" }
    ];
    var gameSpriteSheetData = {
        "images": [
            "./Assets/test.png"
        ],
        "frames": [
            [0, 0, 200, 60, 0, 0, 0],
            [200, 0, 200, 60, 0, 0, 0],
            [400, 0, 200, 60, 0, 0, 0],
            [600, 0, 200, 60, 0, 0, 0],
            [0, 60, 200, 60, 0, 0, 0],
            [200, 60, 62, 63, 0, 0, 0],
            [262, 60, 65, 65, 0, 0, 0],
            [327, 60, 65, 65, 0, 0, 0],
            [392, 60, 65, 65, 0, 0, 0],
            [457, 60, 65, 65, 0, 0, 0],
            [522, 60, 226, 178, 0, 0, 0],
            [0, 238, 640, 1440, 0, 0, 0]
        ],
        "animations": {
            "restartButton": { "frames": [0] },
            "nextButton": { "frames": [1] },
            "startButton": { "frames": [2] },
            "backButton": { "frames": [3] },
            "clickMeButton": { "frames": [4] },
            "island": { "frames": [5] },
            "plane3": { "frames": [6] },
            "plane2": { "frames": [7] },
            "plane1": { "frames": [8] },
            "plane": { "frames": [9] },
            "cloud": { "frames": [10] },
            "ocean": { "frames": [11] },
            "all": {
                "frames": [0, 11],
                "speed": 0.5
            }
        }
    };
    // Game Variables
    function Init() {
        console.log("Initialization Started...");
        Start();
    }
    function Start() {
        stage = new createjs.Stage(canvas);
        currentScene = new scene.PlayScene();
        Main();
    }
    function Update() {
        currentScene.Update();
        stage.update();
    }
    function Main() {
        stage.removeAllChildren();
        stage.addChild(currentScene);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map