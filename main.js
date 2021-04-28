var input = process.argv.slice(2);
var size = input.length;
var words = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine'];
var i;
//Looping through the input numbers
for(i in input) 
{
    var num = input[i];
    var temp = new Array();
    var number = "";
    //console.log(num);

    //Retrieving the individual numbers of the input and adding the corresponding phonetic to stack
    while(num>0)
    {
        var a = num%10;
        temp.push(words[a]);
        num = Math.floor(num/10);
    }

    //Creating the phonetic equivalent of the input number
    while(temp.length != 0)
    {
        var l = temp.pop();
        //console.log(l);
        number = number + l
    }

    //Display the phonetic equivalent; and ',' until the last input
    if(i<size-1)
    process.stdout.write(number+",");
    else
    console.log(number);
}