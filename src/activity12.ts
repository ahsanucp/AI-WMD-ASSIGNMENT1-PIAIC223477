export const Activity12 = () => {
  const names: string[] = ["Ahmer", "Maryam", "Kashaf", "Saba"];

  names.forEach(name => {
    const message: string = `Hello, ${name}!`;
    console.log(message); 
  });
}