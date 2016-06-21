function pow(x,y) {
	var result;
	result = x;
	for (var i=0; i<y-1; i++) {
		result = result * x;	
	}
	return result;
}

var x;
var y;
x = prompt('Enter x: ');
y = prompt('Enter y: ');
console.log(pow(x,y));