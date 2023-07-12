export const Activity16 = () => {
  let guestList: string[] = ['Aqsa', 'Rabia', 'Aiman'];

  for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, you are invited to dinner!`);
  }
  
  const guestCannotMakeIt = guestList[1];
  console.log(`\n\n${guestCannotMakeIt} cannot make it to the dinner.\n\n`);
  
  guestList[1] = 'Mehroz';
  
  for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, you are invited to dinner!`);
  }
  
  console.log('\n\nGood news! We found a bigger dinner table.');
  
  guestList.unshift('Ahmer');
  guestList.splice(Math.floor(guestList.length / 2), 0, 'Ahsan');
  guestList.push('Noman');
  
  for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, you are invited to dinner!`);
  }
}