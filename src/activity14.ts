export const Activity14 = () => {
  const guestList: string[] = ["Maryam", "Ahmer", "Saba"];

  guestList.forEach(guest => {
    const message: string = `Dear ${guest}, you are invited to dinner. Please join us on Sunday at 7:00 PM after PIAIC class.`;
    console.log(message);
  });
}