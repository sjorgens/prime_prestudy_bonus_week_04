var theNumber = 1;

var michelangelo = function(value){
	value = (value * 2);
	return value;
};

var donatello = function(value, anotherValue){
	value = anotherValue + value;
	anotherValue = value * anotherValue;
	return anotherValue;
};

var leonardo = function(value){
	var anotherValue = value;
	value *= 4;
	theNumber = value / 2;
	return (value + anotherValue);
};

var raphael = function(value, anotherValue, yetAnotherValue){
	value = value * anotherValue + yetAnotherValue;
	return yetAnotherValue;
};

var splinter = function (x, y){
	var z = x * y;
	var cowaBunga = [x, y, z];
	return cowaBunga;
};

//In your email, tell me what the answer to this expression would be:
michelangelo(theNumber) + leonardo(theNumber);

theNumber = theNumber * 2;

//In your email, tell me what the answer to this expression would be:
(donatello(theNumber, 2)) - (raphael(3, 2, theNumber));

//Week 5 Bonus Challenge - console out the Splinter function after passing in 1 and 2 and returning the array
console.log(splinter(1, 2));