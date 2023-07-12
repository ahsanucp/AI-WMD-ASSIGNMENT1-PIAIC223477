export const Activity43 = () => {
  function show_magicians(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
      console.log(magicians[i]);
    }
  }

  function make_great(magicians: string[]): string[] {
      let greatMagicians: string[] = [];

      for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push("the Great " + magicians[i]);
      }

      return greatMagicians;
  }

  let magicianNames: string[] = ["Samri Jadugar", "Nastoor", "Zakoota", "Hamoon"];
  let greatMagicianNames: string[] = make_great([...magicianNames]);

  show_magicians(magicianNames);
  console.log();
  show_magicians(greatMagicianNames);
}