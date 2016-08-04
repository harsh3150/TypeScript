//// [abstractClassInLocalScopeIsAbstract.ts]
(() => {
    abstract class A {}
    class B extends A {}
    new A();
    new B();
})()


//// [abstractClassInLocalScopeIsAbstract.js]
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
(function () {
    var A = (function () {
        function A() {
        }
        return A;
    }());
    var B = (function (_super) {
        __extends(B, _super);
        function B() {
            _super.apply(this, arguments);
        }
        return B;
    }(A));
    new A();
    new B();
})();