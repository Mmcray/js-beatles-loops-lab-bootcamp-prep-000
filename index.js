function theBeatlesPlay(musicians, instruments) {
  var beatles = [];
  var i;
  var mus = musicians.length;
  for (i = 0; i < mus; i++) {
  beatles.push(musicians[i] + " plays " + instruments[i]);
  }
  return beatles;
}
function johnLennonFacts(array) {
  let i = 0;
  var facts = array.length;
while (i < facts) {
  array = [array[i] + "!!!"];
  i++;
}
return array;
}