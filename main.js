function rollDice()	{

	var numOfDice = document.getElementById('dice-count-field').value;
	var sides = getRadioVal(document.getElementById('form1'), 'dice');
	var returnString;
	var value;
	var results = [];
	console.log(numOfDice);
	console.log("sides: " + sides);
	for(var i =0; i<numOfDice; i++)	{
		value = Math.ceil(Math.random() * (sides - 1) + 1);
		console.log(value.toString());
		results.push(value);
	}
	if(results.length === 1)	{
		printResults(results[0].toString());
		console.log("1 die");
		return;
	}
	else  {
			returnString = results[0].toString();
		for(var i = 1; i < results.length; i++)	{
			returnString +=  ' + ' + results[i].toString();
		}
		returnString += ' = ' + results.reduce(function(total, num) { return total + num;});
		printResults(returnString);
		//document.getElementById('dice-count-field').value = "";
		console.log("2 dice");
		return;
	}
}

function getRadioVal(form, name)	{

	var val;
	var input = document.getElementsByName("dice");
	console.log("inside getRadioVal");
	var inputList = Array.prototype.slice.call(input);
	for (var i = 0; i < inputList.length; i++)	{
		if(inputList[i].checked)	{
			val = inputList[i].value;
		}
	}
	return val;
}

function printResults(resultString)	{

	document.getElementById('output').value = resultString;
}
