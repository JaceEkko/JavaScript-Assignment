function compareNumber(){
  var num1 = document.getElementById("02-var1").value
  var num2 = document.getElementById("02-var2").value

  if(num1 > num2){
    alert(num1 + " is greater than " + num2 + ".")
  }
  else if(num1 < num2){
    alert(num1 + " is less than " + num2 + ".")
  }
  else{
    alert(num1 + " and " + num2 + " are equal.")
  }
}
