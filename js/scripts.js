// Back end
var pingInsert = function(fullArray){
  var pingPonged1 = [];
  fullArray.forEach(function(x) {
    if ((x%5===0)&&(x%3===0)) {
      pingPonged1.push("Ping-Pong");
    } else if (x%3===0) {
      pingPonged1.push("Ping");
    } else if (x%5===0) {
      pingPonged1.push("Pong");
    } else {
      pingPonged1.push(x);
    }
  });
  return pingPonged1;
};
var countTo = function(num) {
  var array1 = [];
  for (var i=0;i<=num;i++) {
    array1.push(i);
  }
  var array2 = array1.slice(1,num+1);
  var pingPonged2 = pingInsert(array2);
  return pingPonged2;
};
// Front end
$(document).ready(function(){
  $("form#input").submit(function(event) {
    event.preventDefault();
    var lastNum = $("input#original").val();
    if(lastNum){
      var result = countTo(lastNum);
      var myNode = document.getElementById("output");
      while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
      }
      for (var i=0;i<result.length;i++){
        var node = document.createElement("li");
        var textnode = document.createTextNode(result[i]);
        node.appendChild(textnode);
        document.getElementById("output").appendChild(node);
      }
    } else {
      alert("Please enter a number!");
    }
  });
});
