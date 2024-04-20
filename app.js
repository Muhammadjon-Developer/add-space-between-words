function addSpaces(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += str[i] + ' ';
  }
  return result.trim();
}

// Example usage:
const input = prompt('Please enter a text without spaces this program will display the word with spaces: ');
const spacedString = addSpaces(input);
console.log(spacedString);