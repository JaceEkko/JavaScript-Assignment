function whoHelpsWho(){
  var helperArr = ['doctor', 'dog', 'cat', 'dogCatcher',
   'catBurgalar', 'policeOfficer', 'fireman', 'mom', 'dad']
  var helpOutcomes = ["It didn't go well", "Everything was resolved",
   "But the problem was too confusing.", "They needed to call for more help.", "Words cannot describe what happened."]

  var helper1 = helperArr[Math.floor(Math.random()*helperArr.length)]; //select the first helper
  var helper2 = helperArr[Math.floor(Math.random()*helperArr.length)]; //select the second helper
  var outcome = helpOutcomes[Math.floor(Math.random()*helpOutcomes.length)]; //select the outcome from the help

  console.log("The " + helper1 + " goes to the " + helper2 + " for help. " + outcome);
}
