"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const greet_1 = require("../greet");
const language_1 = require("../language");
describe('greeting function', function () {
    // it('should test greet with email', function() {
    //     assert.equal("Hello, Bob Crow we will be in touch at bob@crow.com", greet({
    //         firstName:"Bob",
    //         lastName: "Crow",
    //         email: "bob@crow.com"
    //     }));
    // });
    // it('should test greet without email', function() {
    //     assert.equal("Hello, Bob Crow we can't contact you.", greet({
    //         firstName: "Bob",
    //         lastName: "Crow"
    //     }))
    // });
    it("it should test greet in isiXhosa", function () {
        assert_1.default.equal("Molo, ngomso", (0, greet_1.greet)('ngomso', language_1.language.xhosa));
    });
    it("it should test greet in English", function () {
        assert_1.default.equal("Hello, ngomso", (0, greet_1.greet)('ngomso', language_1.language.eng));
    });
    it("it should test greet in Afrikaans", function () {
        assert_1.default.equal("Goeie more, ngomso", (0, greet_1.greet)('ngomso', language_1.language.afr));
    });
});
