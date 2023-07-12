export const Activity17 = () => {
  let guestList: string[] = ['Aqsa', 'Ahsan', 'Mehroz', 'Usama', 'Ateeb', 'Aiman'];

  console.log('Good news! We found a bigger dinner table.');
  
  guestList.unshift('Arooj');
  guestList.splice(Math.floor(guestList.length / 2), 0, 'Nadeem');
  guestList.push('Rabia');
  
  for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, you are invited to dinner!`);
  }
  
  console.log('\n\nUnfortunately, our new dinner table won\'t arrive in time.');
  
  console.log('We can only invite two people for dinner.\n\n');
  
  // Remove guests until only two names remain
  while (guestList.length > 2) {
    const removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
  }

  for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, you are still invited to dinner!`);
  }
  
  // Remove the last two names
  guestList.pop();
  guestList.pop();
  
  // Print the final empty list
  console.log('Final guest list:', guestList);
}