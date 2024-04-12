import assert from 'assert';
import {greet} from '../greet';
import { language } from '../language';

describe('greeting function', function() {
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

    it("it should test greet in isiXhosa", function(){
        assert.equal("Molo, ngomso", greet('ngomso', language.xhosa))
    })
    it("it should test greet in English", function(){
        assert.equal("Hello, ngomso", greet('ngomso', language.eng))
    })
    it("it should test greet in Afrikaans", function(){
        assert.equal("Goeie more, ngomso", greet('ngomso', language.afr))
    })
});