const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

describe("polybius() submission tests written by student", () => {
    describe("when encoding", () => {
        it("should translate both 'i' and 'j' to 42", () => {
            const actual = polybius("th(i/j)nkful");
            const expected = "4432(42/42)3352125413";
            expect(actual).to.equal(expected);
        });
        
        it("should return lowercase letters/ignore capital letters", () => {
            const expected = "23513434112251";
            const actual = polybius("Message");
            expect(actual).to.equal(expected);
        });
        
        it("should maintain spaces and other nonalphabetic symbols in the message", () => {
            const expected = "11 23513434112251";
            const actual = polybius("A message");
            expect(actual).to.equal(expected);
        });
    });
    describe("when decoding", () => {
        it("should maintain spaces and other nonalphabetic symbols in the message", () => {
            const expected = "a message";
            const actual = polybius("11 23513434112251", false);
            expect(actual).to.equal(expected);
        });
        it("should translate 42 to i and j", () => {
            const expected = "th(i/j)(i/j)nkful";
            const actual = polybius("443242423352125413", false);
            expect(actual).to.equal(expected)
        })
    });
});