function titleCase(str) {
  let splitted_str = str.split(' ');
  let str_output = '';
  for (let i = 0; i < splitted_str.length; i++) {
    str_output += splitted_str[i][0].toUpperCase()+splitted_str[i].slice(1).toLowerCase();
    if (i !== splitted_str.length-1) {
      str_output += ' ';
    }
  }
  return str_output;
}

const getOutput = titleCase("I'm a little tea pot");
console.log(getOutput);
