export const Activity19  = () => {
  let guestList: string[] = ['Aqsa', 'Maryam', 'Amir', 'Kashaf', 'Ahmer', 'Usama'];

  // Exercise 16
  console.log('Good news! We found a bigger dinner table.');
  
  guestList.unshift('Aiman');
  guestList.splice(Math.floor(guestList.length / 2), 0, 'Ateeb');
  guestList.push('Zahra');

  for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, you are invited to dinner!`);
  }
  
  // Exercise 17
  console.log('\n\nUnfortunately, our new dinner table won\'t arrive in time.');
  
  console.log('We can only invite two people for dinner.\n\n');
  
  while (guestList.length > 2) {
    const removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
  }
  
  for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, you are still invited to dinner!`);
  }
  
  console.log(`\n\nNumber of people invited to dinner: ${guestList.length}`);
}