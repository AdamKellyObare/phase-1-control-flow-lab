function scuberGreetingForFeet(distance){
  // I've introduced 'comment' and declared it as a variable in the function for it to be exectued as a prompt.
  let comment;
    if (distance<=400) {
      comment = 'This one is on me'}
    else if (distance>2000 && distance <=2500) {
      comment = 'I will gladly take your thirty'}
    else if (distance>2500) {
        comment = 'No can do'
      }
      return comment
  }



    // tests continue..});

// I've used turnery 
    function ternaryCheckCity(city){
  // Write your code here!
  let comment;
  city === 'NYC' ? (comment ='Ok, sounds good.') : (comment = 'No go.')
  return comment

}

function switchOnCharmFromTip(tip){
  let comment;
  switch (tip) {
    case 'generous':
      comment = 'Thank you so much.';
      break;
      case 'not as generous':
        comment ='Thank you.';
        break;
        default:
          comment = 'Bye.';
          break;
  }
  return comment
}
  

  
 