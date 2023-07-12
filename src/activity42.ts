export const Activity42 = () => {
  function show_magicians(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
      console.log(magicians[i]);
    }
  }

  function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
      magicians[i] = "the Great " + magicians[i];
    }
  }

  let magicianNames: string[] = ["Samri Jadugar", "Nastoor", "Zakoota", "Hamoon"];

  make_great(magicianNames);
  show_magicians(magicianNames);
}