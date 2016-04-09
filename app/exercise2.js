(function ()
{
    'use strict';

    window.exercise2 = {
        reverseNumber: function (number)
        {
            var ciag='';
            if(typeof number !== 'number')
            {
                return false;
            }
            else
            {   var zamiana = String(number);
                for(var i=String(number).length-1;i>=0;i--)
                {
                    ciag=ciag+zamiana[i];

                }
                return parseInt(ciag);
            }
        },
        squareOrCube: function (array)
        {
            var tablica = new Array();
            if(typeof array ==='string')
            {
                return false;
            }
            else
            {
                for(var i=0;i<array.length;i++)
                {
                    if(array[i]%2==0)
                    {
                        tablica[i]=array[i]*array[i]*array[i];
                    }else
                    {
                        tablica[i]=array[i]*array[i];
                    }
                }
                return tablica;
            }
        },
        replaceString: function (list, string, newString)
        {
            var flaga =false
            for(var i=0;i<list.length;i++)
            {
                if(list[i]==string)
                {
                    list[i]=newString;
                    flaga = true;
                }


            }
            if(flaga == false) {
                return false;
            }
            else {
                return list;
            }

        },
        maxArray: function (array)
        {
            var pom=0;
            for(var i=0;i<array.length;i++)
            {
                if(typeof array[i] === 'number')
                {
                    if(array[i]>pom)
                    {
                        pom = array[i];
                    }
                }else return false;
            }
            return pom;
        },
        getObject: function (list, name)
        {
            for (var i in list) {
                if (list.hasOwnProperty(i)) {
                    if (list[i].name == name) {
                        return list[i];
                    }
                }
            }
            return false

        }


    };
})();
