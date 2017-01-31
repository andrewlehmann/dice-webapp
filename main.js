function rollDice()	{

	var numOfDice = document.getElementByID('dice-count-field').value;
	var sides = getRadioVal(document.getElementByID('button-panel'), 'dice');
	var returnString;
	var value;
	var results = [];
	for(var i =0; i<numOfDice; i++)	{
		value = Math.random() % sides;
		// push value into database
		results.push(value);
	}
	if(results.length === 1)	{
		printResults(results[0].toString());
	}
	else  {
		for(var i = 0; i < results.length; i++)	{
			returnString += results[i] + ' + ';
		}
	}
}

function getRadioVal(form, name)	{

	var val;
	var radios = form.elements[name];
	for (var i=0; i<radios.length; i++)	{
		if (radios[i].checked)	{
			val = radios[i].value;
			break;
		}
	}
	return val;
}

function printResults(resultString)	{

	document.getElementByID('output').value = resultString;
}
