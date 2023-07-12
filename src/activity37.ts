export const Activity37 = () => {
  function make_shirt(size: string = "large", message: string = "I love TypeScript") {
    console.log("The shirt size is " + size + " and it will have the message: " + message);
  }

  make_shirt();
  make_shirt("medium");
  make_shirt("small", "Software Engineer");
}