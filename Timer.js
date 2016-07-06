var milli = 0;
var second = 0;

function timerCountdown()
{
  milli--;
  if(milli <0)
  {
    second--;
    milli = 60;
    if(second <0)
    {
      second = 5;
    }
  }
}
function getMilli()
{
  var m;
  if(milli.toString().length < 2)
  {
    m = "0"+milli;
  }else
  {
    m = milli;
  }
  return m;
}
function getSecond()
{
  var s;
  if(second.toString().length < 2)
  {
    s = "0"+second;
  }else
  {
    s = second;
  }
  return s;
}