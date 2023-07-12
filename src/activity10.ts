export const Activity10 = () => {
  /**
   * Program 1: Stripping Names
   *
   * This program demonstrates stripping whitespace characters from a person's name.
   */

  // Store the person's name with whitespace characters
  const name: string = "\t   Ahsan Ullah Khan  \n";

  // Print the name with whitespace included
  console.log("Name with whitespace:", name);

  // Strip whitespace from the name using the trim() method
  const strippedName: string = name.trim();

  // Print the name after stripping whitespace
  console.log("Name after stripping whitespace:", strippedName);


  /**
   * Program 2: Favorite Number
   *
   * This program reveals and prints the favorite number.
   */

  // Store the favorite number in a variable
  const favoriteNumber: number = 7;

  // Create a message revealing the favorite number
  const message: string = `My favorite number is ${favoriteNumber}.`;

  // Print the message
  console.log(message);
}