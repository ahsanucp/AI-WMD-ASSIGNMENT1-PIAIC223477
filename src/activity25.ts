export const Activity25 = () => {
  let alien_color = 'green';

  // Passing version
  if (alien_color === 'green') {
      console.log("Version1: Congratulations! You just earned 5 points! with color: ",alien_color);
  }
  
  // Failing version
  if (alien_color === 'red') {
      console.log("Version1: Congratulations! You just earned 5 points! with color: ",alien_color);
  }

  alien_color = 'red';

  // Failing version
  if (alien_color === 'green') {
      console.log("Version2: Congratulations! You just earned 5 points! with color: ",alien_color);
  }
  
  // Passing version
  if (alien_color === 'red') {
      console.log("Version2: Congratulations! You just earned 5 points! with color: ",alien_color);
  }
}