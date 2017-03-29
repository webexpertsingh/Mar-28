var operation = process.argv[2];
var fnum = parseFloat(process.argv[3]);
var snum = parseFloat(process.argv[4]);

if(operation == "add" ) {
    var result = fnum + snum;
    console.log("outputs "+result);
}

if(operation == "subtract" ) {
    var result = fnum - snum;
    console.log("outputs "+result);
}

if(operation == "multiply" ) {
    var result = fnum * snum;
    console.log("outputs "+result);
}
if(operation == "divide" ) {
    var result = fnum / snum;
    console.log("outputs "+result);
}
if(operation == "remainder" ) {
    var result = fnum % snum;
    console.log("outputs "+result);
} 