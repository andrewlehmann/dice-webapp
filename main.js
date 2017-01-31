function rollDice()	{

	var numOfDice = document.getElementById('dice-count-field').value;
	var sides = getRadioVal(document.getElementById('form1'), 'dice');
	var returnString;
	var value;
	var results = [];

	for(var i =0; i<numOfDice; i++)	{
		value = Math.floor(Math.random() * (sides) + 1); //calculate result of dice roll
		results.push(value);	//append to an array of the results
	}
	returnString = results[0].toString(); //initialize return string to first roll's result
	if(results.length === 1)	{
		printResults(returnString);
		return;
	}
	else  {
		returnString = createString(results, returnString);
		printResults(returnString);
		//document.getElementById('dice-count-field').value = "";
		return;
	}
}

function getRadioVal(form, name)	{

	var val;
	var input = document.getElementsByName("dice"); //get radio buttons
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
		}	//get the sum of all the elements of the array, and append to the end of the return string
		returnString += ' = ' + results.reduce(function(total, num) { return total + num;});
		return returnString;
}

function printResults(resultString)	{	//puts return string in the text box

	document.getElementById('output').value = resultString;
}
