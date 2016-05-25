describe('app', function ()
{
    'use strict';

    var app = window.app;

    describe('reverseNumber', function () {
        it('should reverse the number', function () {
            expect(app.reverseNumber(1234)).toEqual(4321);
            expect(app.reverseNumber(331)).toEqual(133);
        });
        it('should reverse the number from "number string"', function () {
            expect(app.reverseNumber('3334433')).toBe(3344333);
            expect(app.reverseNumber('2213')).toBe(3122);
        });
        it('should not return a string', function () {
            expect(app.reverseNumber(4321)).not.toBe('4321');
            expect(app.reverseNumber('23123a')).toEqual(false);

        });
        it('should not accept not number as an argument', function () {
            expect(app.reverseNumber([])).toBeNaN(false);
            expect(app.reverseNumber({})).toEqual(false);
        });
        it('should return single number', function () {
            expect(app.reverseNumber(5)).toBe(5);
            expect(app.reverseNumber(191)).toEqual(191);
        });
    });
});
