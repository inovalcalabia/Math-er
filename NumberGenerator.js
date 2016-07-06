function generate()
{
  return Math.floor(Math.random() * 10);
}

function operator(howManyOperator)
{
  var randomize = Math.floor(Math.random() * howManyOperator);
  var operand;
  if(randomize == 0)
    operand = "+";
  else if(randomize == 1)
    operand = "-";
  else if(randomize == 2)
    operand = "*";
  else
    operand = "/"
    
  return operand;
}
