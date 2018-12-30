function echo(str,n){
for(var i=0 ; i<n ; i++){
    console.log(str);
}
}

echo("nithin",5);

function average(arr)
{   var sum=0;
    for(var i=0 ; i<arr.length; i++){
        sum += arr[i];
    }
    console.log(sum/arr.length);
}

var a = [12,13];
average(a);