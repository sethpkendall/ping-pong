var pingInsert = function(array1){
  var pingPonged1 = [];
  // debugger;
  array1.forEach(function(x) {
    // debugger;
    if ((x%5===0)&&(x%3===3)) {
      pingPonged1.push("pingpong");
    } else if (x%3===0) {
      pingPonged1.push("ping");
    } else if (x%5===0) {
      pingPonged1.push("pong");
    } else {
      pingPonged1.push(x);
    }
  });
  return pingPonged1;
  console.log(pingPonged1);
};


// Back end
var countTo = function(num) {
  var inArray = [];
  for (i=0;i<=num;i++) {
    inArray.push(i);
  }
  console.log(typeof inArray);
  console.log(inArray);
  var inArray2 = inArray.slice(1,num+1);
  console.log(typeof inArray2);
  console.log(inArray2);
  var pingPonged2 = pingInsert(inArray2);
  console.log(pingPonged2);
  return pingPonged2;
};

// Front end
$(document).ready(function(){
  $("form#input").submit(function(event) {
    event.preventDefault();
    var lastNum = $("input#original").val();
    if(lastNum){
      var result = countTo(lastNum);
      $("#output").text(result);
    } else {
      alert("Please enter a number!");
    }
  });
});
