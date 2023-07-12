export const Activity44 = () => {
  function make_sandwich(items: string[]) {
    console.log("Sandwich Summary:");
    console.log("Bread");
    for (let i = 0; i < items.length; i++) {
      console.log(items[i]);
    }
    console.log("Bread");
    console.log();
  }

  make_sandwich(["Chilli Sauce", "Cheese", "Lettuce"]);
  make_sandwich(["Peri peri", "Zinger", "Tomato", "Mayonnaise"]);
  make_sandwich(["Peanut Butter", "Beef"]);
}