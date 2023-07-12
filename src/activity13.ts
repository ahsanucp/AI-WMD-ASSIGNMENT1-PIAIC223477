export const Activity13 = () => {
  const carBrands: string[] = ["Honda", "Toyota", "BMW", "Ford"];

  carBrands.forEach(brand => {
    const statement: string = `I would like to own a ${brand} car.`;
    console.log(statement);
  });
}