alert("connected");
var array = [1,2,3,4,5];
var i =0;
while(i == 0){
var push= prompt("enter element or q to exit:");
if (push === "q")
{
	i = 1;
}
else if (push === "rev") {
	array.reverse();
	alert(array);
}
else{
	array.push(push);
	alert(array);
}

}