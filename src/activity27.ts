export const Activity27 = () => {
  let alien_color = 'green';

  // Version 1 - Green alien
  if (alien_color === 'green') {
      console.log("Congratulations! You just earned 5 points for shooting the green alien.");
  } else if (alien_color === 'yellow') {
      console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
  } else if (alien_color === 'red') {
      console.log("Congratulations! You just earned 15 points for shooting the red alien.");
  }
  
  alien_color = 'yellow';
  
  // Version 2 - Yellow alien
  if (alien_color === 'green') {
      console.log("Congratulations! You just earned 5 points for shooting the green alien.");
  } else if (alien_color === 'yellow') {
      console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
  } else if (alien_color === 'red') {
      console.log("Congratulations! You just earned 15 points for shooting the red alien.");
  }
  
  alien_color = 'red';
  
  // Version 3 - Red alien
  if (alien_color === 'green') {
      console.log("Congratulations! You just earned 5 points for shooting the green alien.");
  } else if (alien_color === 'yellow') {
      console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
  } else if (alien_color === 'red') {
      console.log("Congratulations! You just earned 15 points for shooting the red alien.");
  }
}