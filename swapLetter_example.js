str = window.prompt();
var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LOWER = 'abcdefghijklmnopqrstuvwxyz';
var result = [];

for(var x=0; x<str.length; x++)
{
    if(UPPER.indexOf(str[x]) !== -1)
    {
        result.push(str[x].toLowerCase());
    }
    else if(LOWER.indexOf(str[x]) !== -1)
    {
        result.push(str[x].toUpperCase());
    }
    else
    {
        result.push(str[x]);
    }
}
alert(result.join(''));