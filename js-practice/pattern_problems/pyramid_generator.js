function pyramid(char, rows, bool) {
  let str_output = '\n';
  if (bool === false) {
    for (let i = 0; i < rows ; i++) {
      const spacesLength = rows - (i + 1);
      const charLength = (2 * i) + 1;
      const row = ' '.repeat(spacesLength) + char.repeat(charLength) + '\n';
      str_output += row;
    }
  } else {
    for (let i = rows; i > 0; i--) {
      const spacesLength = rows - i;
      const charLength = (2 * i) - 1;
      const row = ' '.repeat(spacesLength) + char.repeat(charLength) + '\n';
      str_output += row;
    }
  }
  return str_output;
}
