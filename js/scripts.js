$(document).ready(function() {
  $("form#sentence").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#user-sentence").val();
    console.log(userInput);
    var userArray = userInput.split('');
    var vals = ['a', 'e', 'i', 'o', 'u'];
    for (i = 0; i < userArray.length; i += 1) {
      for (v = 0; v < vals.length; v += 1) {
        if (vals[v] === userArray[i]) {
          userArray[i] = '-';
        }
      }
    }
    var userOutput = userArray.join('');
    $(".sentence-output").text(userOutput);


  });
});
