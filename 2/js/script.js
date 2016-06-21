var arr = [];

for (i = 0; i < 5; i++) {
	arr[i] = prompt('Enter name: '); 
}

var name;
var iName;
iName = 0;
name = prompt('Enter your name, please: ');

for (i = 0; i < 4; i++) {
	if (arr[i] == name) {
		iName = name;
	}
}

if (name != 0) {
	alert('Hello, '+iName);
}
else {
	alert('Wrong name!');
}