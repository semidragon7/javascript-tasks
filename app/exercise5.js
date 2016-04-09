(function ()
{
    'use strict';

    window.exercise5 = {
        mergeObject: function (object1, object2)
        {
            if(typeof object1 === 'object' && typeof object2 === 'object')
            {
                var objectWynik ={};
                for(var counter in object1 ){objectWynik[counter] = object1[counter];}
                for(var counter in object2){objectWynik[counter]= object2[counter];}
                return objectWynik;
            }else return false;

        },
        countLetter: function (object, letter)
        {   var licz=0;
            if(typeof object === 'object'){
            for(var counter in object)
            {
               for(var i=0;i<object[counter].length;i++)
               {
                   if(object[counter][i].toLowerCase()==letter)licz++;
               }
            }
            return licz;}else false;
        },
        makeObject: function (array)
        {
            var objekt={};
            if(array.constructor === Array)
            {
                for(var i=0;i<array.length;i++)
                {
                    if(array[i].length ==2)
                    {
                        objekt[array[i][0]] = array[i][1];
                    }else return false;
                }
                return objekt;
            }else false;



        },
        propertyNames: function (object) {
            var tablica = [];
            var licznik = 0;
            if (Object.getOwnPropertyNames(object).length == 0) return [];
            for (var i in object)
            {
                tablica[licznik]=[i,object[i]];
                licznik++;
            }
            return tablica
        }
    };
})();
