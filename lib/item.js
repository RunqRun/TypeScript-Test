"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
class Item {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    say(elem) {
        if (elem) {
            elem.innerHTML = "私は" + this.name + "です。年齢は" + this.age + "歳です。";
        }
    }
}
exports.Item = Item;
