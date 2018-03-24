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
var objects;
(function (objects) {
    var GroundObject = /** @class */ (function (_super) {
        __extends(GroundObject, _super);
        // private variables
        // public variables
        // constructor
        function GroundObject(spriteImage) {
            return _super.call(this, spriteImage, "all") || this;
        }
        return GroundObject;
    }(createjs.Sprite));
    objects.GroundObject = GroundObject;
})(objects || (objects = {}));
//# sourceMappingURL=groundObject.js.map