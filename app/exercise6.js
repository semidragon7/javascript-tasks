(function ()
{
    'use strict';

    window.exercise6 = {

        isPalindrome: function (str)
        {   var tyl = str.length-1;
            if(typeof str === 'string' && str !=' ' && str !='' ) {
                for (var i = 0; i < str.length; i++) {
                    if (str[i].toLowerCase() == str[tyl].toLowerCase() && i == tyl) {return true;}
                    if (str[i].toLowerCase() == str[tyl].toLowerCase()) {tyl--;}
                    else return false;
                }
            }else return false;
        },

        onlyLetter: function (text)
        {
            var wynik='';
            if(typeof  text !== 'string')return false;
            for(var i=0;i<text.length;i++)
            {
                if(isNaN(parseInt(text[i])))
                {
                    wynik+=text[i];
                }
            }return wynik;
        },

        alphabetOrder: function (str)
        {
            var alfabet =['a','ą','b','c','ć','d','e','ę','f','g','h','i','j','k','l','ł'
                ,'m','n','ń','o','ó','p','r','s','ś','t','u','w','y','z','ź','ż'];
            var licznik = str.length
            var wynik ='';
            if(typeof  str !== 'string')return false;
           for(var x=0;x<alfabet.length;x++)
           {
               for(var i=0;i<str.length;i++)
              {
                  if(str[i].toLowerCase()==alfabet[x]&& isNaN(parseInt(str[i]))) {
                      wynik+=str[i];
                      str.substring(i,i);
                  }
              }
           }return wynik.toLowerCase();
        },

        upperCase: function (str)
        {
            var wynik=str.toLowerCase();
            var napis='0;'
            for(var i=0;i<wynik.length;i++){
                if(i==0)
                {
                   napis+=wynik[i].toUpperCase();
                }else if(wynik[i]==' ')
                {
                    wynik+=wynik[i]+wynik[i+1].toUpperCase;
                    i++;
                }
            }return napis;
        },

        findTheLongestWord: function (str)
        {
        }
    };


})();
