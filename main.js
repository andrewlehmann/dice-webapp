function rollDice()	{

	var numOfDice = document.getElementById('dice-count-field').value;
	var sides = getRadioVal(document.getElementById('form1'), 'dice');
	var returnString;
	var value;
	var results = [];
	console.log("beginning js");
	for(var i =0; i<numOfDice; i++)	{
		value = Math.random() % sides;
		// push value into database
		results.push(value);
	}
	if(results.length === 1)	{
		printResults(results[0].toString());
		console.log("1 die");
		return;
	}
	else  {
		for(var i = 0; i < results.length; i++)	{
			returnString += results[i].toString() + ' + ';
		}
		returnString += ' = ' + results.reduce(add, 0);
		printResults(returnString);
		document.getElementById('dice-count-field').value = "";
		console.log("2 die");
		return;
	}
}

function getRadioVal(form, name)	{

	var val;
	var radios = form.elements[name];
	console.log("inside getRadioVal");
	for (var i=0; i<radios.length; i++)	{
		if (radios[i].checked)	{
			val = radios[i].value;
			break;
		}
	}
	return val;
}

function printResults(resultString)	{

	document.getElementById('output').value = resultString;
}
