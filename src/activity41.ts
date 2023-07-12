export const Activity41 = () => {
  function show_magicians(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
      console.log(magicians[i]);
    }
  }

  let magicianNames: string[] = ["Samri Jadugar", "Nastoor", "Zakoota", "Hamoon"];

  show_magicians(magicianNames);
}