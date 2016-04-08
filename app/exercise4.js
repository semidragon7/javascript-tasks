(function ()
{
    'use strict';
    window.exercise4 = {
        countVowels: function(text) {
            var vowels = ['a', 'e', 'y', 'u', 'i', 'o', 'ó', 'ą', 'ę'];
            var counter = 0;
            var text_male = text.toLowerCase();
            if (typeof text_male === 'string') {
                for (var i = 0; i < text_male.length; i++) {
                    for (var x = 0; x < vowels.length; x++) {
                        if (text_male[i] == vowels[x]) {
                            counter++;
                        }
                    }
                }
                return counter;
            } else return false;

        },
        arrayToString: function(array)
        {
            var inscription='';
            for(var i=0;i<array.length;i++) {
                if(i== 0)inscription=inscription+array[i].toString();
                else inscription=inscription+' '+array[i].toString();
            }
            return inscription;
        },

    };
    Number.prototype.add = function(number)
    {
        return this + number;
    }
    Number.prototype.isInTheRange = function (a,b) {
        if(this >=a && this<=b)return true;
        if(a>b) return undefined;
        if(this <a || this > b) return false;
    }


})();
