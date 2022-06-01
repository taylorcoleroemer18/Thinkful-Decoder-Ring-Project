const expect = require("chai").expect
const { substitution } = require("../src/substitution")

describe('substitution() submission tests written by student', () => {
    describe ('error handling', () => {
        it('returns false if alphabet length does not equal 26 characters', () => {
            const actual = substitution("message", "gone");
            expect(actual).to.be.false;
        });

        it("returns false if there are any duplicate characters in the given alphabet", () => {
            const actual = substitution("message", "abcdabcdabcdabcdabcdabcdabcdabcdabcd");
            expect(actual).to.be.false;
        });
    });
    describe('when encoding', () => {
        it("should encode a message using the substitute alphabet", () => {
            const actual = substitution("message", "xoyqmcgrukswaflnthdjpzibev");
            const expected = "amddxgm";
            expect(actual).to.equal(expected);
        });
        it("should maintain spaces", () => {
            const actual = substitution("This is complicated", "xoyqmcgrukswaflnthdjpzibev");
            const expected = "jrud ud ylanwuyxjmq";
            expect(actual).to.equal(expected);
        });
        it("returns lowercase/ignores capital letters", () =>{
            const expected = 'amddxgm';
            const actual = substitution('Message', "xoyqmcgrukswaflnthdjpzibev");
            expect(actual).to.equal(expected);
        });
    });
    describe('when decoding', () => {
        it("should maintain spaces", () => {
            const actual = substitution("jrud ud ylanwuyxjmq", "xoyqmcgrukswaflnthdjpzibev", false);
            const expected = "this is complicated";
            expect(actual).to.equal(expected);
        });
        it("returns lowercase/ignores capital letters", () =>{
            const expected = 'eykkmgy';
            const actual = substitution('Message', "xoyqmcgrukswaflnthdjpzibev", false);
            expect(actual).to.equal(expected);
        });
    });
});
