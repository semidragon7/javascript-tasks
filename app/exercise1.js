(function ()
{
    'use strict';

    window.exercise1 = {
        getDescendingNumbers: function (numberFrom, numberTo)
        {

            if (typeof numberFrom === 'number' && typeof numberTo === 'number' && numberFrom > numberTo)
            {

                var ciag ='';
                var liczba = numberFrom;
                for(var i=0;i<(numberFrom-numberTo);i++)
                {
                    ciag = ciag+liczba+" ";
                    liczba--;
                }
                ciag = ciag+liczba;
                return ciag;}
            else
            {
                return false;
            }

        },
        deleteString: function (string, array)
        {
            var tablica = new Array();
            var licznik =0;
            for(var i=0;i<array.length;i++)
            {

                if(string != array[i])
                {
                    tablica[licznik]=array[i];
                    licznik++;
                }
            }
            return tablica;
        },

        stringCounter: function (array)
        {
            var person =['a', 'e', 'y', 'u', 'i', 'o', 'ó', 'ą', 'ę'];
            var licznik=0;
            for(var w=0;w<array.length;w++)
            {
                if(typeof array[w] !== 'number')
                {
                    licznik++;
                }
            }
            return licznik;
        },

        squareOdd: function (array)
        {
            for(var i=0;i<array.length;i++)
            {
                if(typeof array[i]!== 'number')
                {
                    array[i]=array[i];
                }
                else
                {
                    if(array[i]%2==0)
                    {
                        array[i]=array[i];
                    }
                    else
                    {
                        array[i]=array[i]*array[i];
                    }
                }

            }
            return array;
        },

        areaOfTrapezoid: function (a, b, h)
        {
            if(typeof a==='number' && typeof b==='number' && typeof h==='number' && a>0 && b>0 && h>0)
            {
                return ((a+b)*0.5)*h;
            }
            else
            {
                return false;
            }
        }
    };
})();