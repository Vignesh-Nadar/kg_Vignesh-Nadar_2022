var input = process.argv.slice(2);
var size = input.length;
var words = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine'];
var i;
for(i in input) 
{
    var num = input[i];
    var temp = new Array();
    var number = "";
    //console.log(num);
    while(num>0)
    {
        var a = num%10;
        temp.push(words[a]);
        num = Math.floor(num/10);
    }
    while(temp.length != 0)
    {
        var l = temp.pop();
        //console.log(l);
        number = number + l
    }
    if(i<size-1)
    process.stdout.write(number+",");
    else
    console.log(number);
}