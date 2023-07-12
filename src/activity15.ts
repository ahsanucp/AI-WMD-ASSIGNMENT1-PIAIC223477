export const Activity15 = () => {
  let guestList: string[] = ["Maria", "Ahmer", "Hiba"];

  guestList.forEach(guest => {
    const message: string = `Dear ${guest}, you are invited to dinner. Please join us on Saturday at 7:00 PM.`;
    console.log(message);
  });

  // Update the guest list and print the name of the guest who can't make it
  const guestUnableToAttend: string = guestList[1];
  guestList[1] = "Maryam";
  console.log(`\nUnfortunately, ${guestUnableToAttend} can't make it to the dinner.\n`);

  // Print a second set of invitation messages for the updated guest list
  guestList.forEach(guest => {
    const message: string = `Dear ${guest}, you are invited to dinner. Please join us on Saturday at 7:00 PM.`;
    console.log(message);
  });
}