
export const Activity3 = () => {
    const name: string = "Ahsan Ullah Khan";

    const lowercaseName: string = name.toLowerCase();
    const uppercaseName: string = name.toUpperCase();
    const titlecaseName: string = name.replace(/\w\S*/g, (txt: string) => {
      return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
    });

    console.log("Lowercase: " + lowercaseName);
    console.log("Uppercase: " + uppercaseName);
    console.log("Titlecase: " + titlecaseName);
}
