(function ()
{
    'use strict';

    describe('exercise4', function ()
    {
        describe('countVowels', function ()
        {
            it('should return count of vowels ', function ()
            {
                expect(exercise4.countVowels('I am some text')).toEqual(5);
                expect(exercise4.countVowels('aeiouy')).toEqual(6);
                expect(exercise4.countVowels('AEIOUYX')).toEqual(6);
            });
            it('should return 0 for empty string', function ()
            {
                expect(exercise4.countVowels('')).toEqual(0);
            });
        });

        describe('arrayToString', function ()
        {
            it('should return string from the array of strings', function ()
            {
                expect(exercise4.arrayToString(['one', 'two', 'three'])).toEqual('one two three');
            });
            it('should return string from the array of strings and numbers', function ()
            {
                expect(exercise4.arrayToString(['one', 2, 'three', 4])).toEqual('one 2 three 4');
            });
            it('should return from the array of different types of elements', function ()
            {
                expect(exercise4.arrayToString([false, 0, 'one', 2])).toEqual('false 0 one 2');
            });
        });

        describe('add', function ()
        {
            var numbers = [1, -2, 10, 4, 5];
            it('should add number 10 to number 1', function ()
            {

                expect(numbers[0].add(10)).toEqual(11);
            });
            it('should add number 15 to number 10', function ()
            {
                expect(numbers[2].add(15)).toEqual(25);
            });
            it('should add number -2 to number 20', function ()
            {
                expect(numbers[1].add(20)).toEqual(18);
            });
        });

        describe('isInTheRange', function ()
        {
            var number = 123;
            it('should return true when number is in the range', function ()
            {
                expect(number.isInTheRange(11, 140)).toEqual(true);
                expect(number.isInTheRange(122, 125)).toEqual(true);
            });
            it('should return undefined when "b" is less than "a"', function ()
            {
                expect(number.isInTheRange(42, 21)).toEqual(undefined);
            });
            it('should return false when number is out of the range', function ()
            {
                expect(number.isInTheRange(1, 21)).toEqual(false);
                expect(number.isInTheRange(130, 131)).toEqual(false);
            });
        });
    });
})();
