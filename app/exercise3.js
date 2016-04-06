(function ()
{
    'use strict';

    window.exercise3 = {

        doAdult: function (array)
        {
            for (var i=0 ;i<array.length;i++) {

                    if(array[i].age <18) {
                        array[i].age = 18;
                    }
            }
            return array
        },
        findTheBiggestBox: function (x, y, z)
        {

            if(typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number') return false;
            else
            {
                var boxX =
                {
                    bX: 3 * x,
                    bY: y,
                    bZ: z
                }
                var boxY =
                {
                    bX: x,
                    bY: y * y,
                    bZ: z
                }
                var boxZ=
                {
                    bX: x,
                    bY: y,
                    bZ: y + z
                }
                var wynik1 = boxX.bX*boxX.bY*boxX.bZ;
                var wyni2 = boxY.bX*boxY.bY*boxY.bZ;
                    if(wynik1 < wyni2)
                    {
                        return 2;
                    }else
                    {
                        return 1;
                    }


            }
        },
        reverseText: function (text)
        {
            if(typeof text === 'string')
            {
                var inverse = '';
                var licznik = text.length - 1;
                for (var i = 0; i < text.length; i++) {
                    inverse+=text[licznik];
                    licznik--;
                }
                return inverse;
            }else return false;
        },
        factorial: function (N)
        {
            var tablica = [1];
            for(var i=1;i<=N;i++)
            {
                tablica[i] = tablica[i-1]*i;
            }
            return tablica;
        },
        sumProperties: function (object)
        {
            var sum = 0;
            for( var el in object ) {
                if( object.hasOwnProperty( el ) ) {
                    sum += parseFloat( object[el] );
                }
            }
            return sum;
        }
    };

})();
