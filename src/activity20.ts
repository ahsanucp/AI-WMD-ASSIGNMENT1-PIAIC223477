export const Activity20 = () => {
  function createList(): string[] {
    const items: string[] = [];

    const mountains: string[] = ["Karakoram", "Himalayas"];
    items.push(...mountains);

    const cities: string[] = ["Lahore", "Karachi", "Islamabad", "Rawalpindi"];
    items.push(...cities);

    const languages: string[] = ["Punjabi", "Urdu", "Sindhi", "Pashto"];
    items.push(...languages);

    return items;
  }

  const myArray: string[] = createList();

  console.log(myArray);
}