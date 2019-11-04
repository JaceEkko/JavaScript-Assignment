function dogBark(bark){
  //var bark = document.getElementById("04-var").value

  //What the dog says (when 1 - 4 are inputted)
  if(bark == 1){
    console.log("The dog says 'BARK!'");
  }
  else if(bark == 2){
    console.log("The dog says 'ARF!'");
  }
  else if(bark == 3){
    console.log("The dog says 'WOOF!'");
  }
  else if(bark == 4){
    console.log("The dog says 'BOW-WOW!'");
  }
  //When another number is inputted
  else{
    console.log("The dog...Doesn't know what to say :(");
  }
}
