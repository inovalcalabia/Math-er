var milli;
var second;

function timerCountdown()
{
  milli--;
  if(milli <0)
  {
    second--;
    milli = 100;
    if(second <0)
    {
      second = 5;
    }
  }
}
function getMilli()
{
  var m;
  if(milli.length < 1)
  {
    m = "0"+milli;
  }else
  {
    m = milli;
  }
  return milli;
}
function getSecond()
{
  var s;
  if(second.length < 1)
  {
    s = "0"+second;
  }else
  {
    s = second;
  }
  return s;
}