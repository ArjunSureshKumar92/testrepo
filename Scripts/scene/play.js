var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scene;
(function (scene) {
    var PlayScene = /** @class */ (function (_super) {
        __extends(PlayScene, _super);
        function PlayScene() {
            var _this = _super.call(this) || this;
            _this.Main();
            return _this;
        }
        PlayScene.prototype.Main = function () {
            console.log("inside play main");
            this.image = new createjs.Bitmap("./Assets/ocean.gif");
            this.addChild(this.image);
            this.y = -960;
            console.log("end play main");
        };
        PlayScene.prototype._checkBounds = function () {
            if (this.y >= 0) {
                this._reset();
            }
        };
        // reset the objects location to some value
        PlayScene.prototype._reset = function () {
            this.y = -960;
        };
        // move the object to some new location
        PlayScene.prototype._move = function () {
            this.y += 5;
        };
        PlayScene.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        return PlayScene;
    }(createjs.Container));
    scene.PlayScene = PlayScene;
})(scene || (scene = {}));
//# sourceMappingURL=play.js.map