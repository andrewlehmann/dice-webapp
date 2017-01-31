function rollDice()	{

	var numOfDice = document.getElementById('dice-count-field').value;
	var sides = getRadioVal(document.getElementById('form1'), 'dice');
	var returnString;
	var value;
	var results = [];

	for(var i =0; i<numOfDice; i++)	{
		value = Math.floor(Math.random() * (sides) + 1);
		results.push(value);
	}
	if(results.length === 1)	{
		printResults(results[0].toString());
		return;
	}
	else  {
		returnString = results[0].toString();
		returnString = createString(results, returnString);
		printResults(returnString);
		//document.getElementById('dice-count-field').value = "";
		return;
	}
}

function getRadioVal(form, name)	{

	var val;
	var input = document.getElementsByName("dice");
	var inputList = Array.prototype.slice.call(input);
	for (var i = 0; i < inputList.length; i++)	{
		if(inputList[i].checked)	{
			val = inputList[i].value;
		}
	}
	return val;
}

function createString(results, returnString) {
	for(var i = 1; i < results.length; i++)	{
			returnString +=  ' + ' + results[i].toString();
		}
		returnString += ' = ' + results.reduce(function(total, num) { return total + num;});
		return returnString;
}

function printResults(resultString)	{

	document.getElementById('output').value = resultString;
}
