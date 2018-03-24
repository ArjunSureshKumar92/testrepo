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
    var TestObject = /** @class */ (function (_super) {
        __extends(TestObject, _super);
        function TestObject(image) {
            return _super.call(this, image) || this;
        }
        return TestObject;
    }(createjs.Bitmap));
    objects.TestObject = TestObject;
})(objects || (objects = {}));
//# sourceMappingURL=testObject.js.map