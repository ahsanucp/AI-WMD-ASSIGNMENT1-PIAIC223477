export const Activity18 = () => {
  let placesToVisit: string[] = ['Kashmir', 'Tokyo', 'Goa', 'London', 'Paris'];

  console.log('Original order:', placesToVisit);
  
  console.log('Alphabetical order:', [...placesToVisit].sort());
  
  console.log('Original order (unchanged):', placesToVisit);
  
  console.log('Reverse alphabetical order:', [...placesToVisit].sort().reverse());
  
  console.log('Original order (unchanged):', placesToVisit);
  
  placesToVisit.reverse();
  
  console.log('Reversed order:', placesToVisit);
  
  placesToVisit.reverse();
  
  console.log('Original order:', placesToVisit);
  
  placesToVisit.sort();
  
  console.log('Sorted order (alphabetical):', placesToVisit);
  
  placesToVisit.sort().reverse();
  
  console.log('Sorted order (reverse alphabetical):', placesToVisit);
}