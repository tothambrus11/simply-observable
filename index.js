"use strict";
exports.__esModule = true;
exports.SimpleObservable = void 0;
var SimpleObservable = /** @class */ (function () {
    function SimpleObservable() {
        this.listeners = [];
    }
    SimpleObservable.prototype.subscribe = function (listener) {
        this.listeners.push(listener);
    };
    SimpleObservable.prototype.unsubscribe = function (listener) {
        this.listeners = this.listeners.filter(function (listener_) {
            return listener != listener_;
        });
    };
    SimpleObservable.prototype.next = function (payload) {
        this.listeners.forEach(function (listener) {
            listener(payload);
        });
    };
    return SimpleObservable;
}());
exports.SimpleObservable = SimpleObservable;
