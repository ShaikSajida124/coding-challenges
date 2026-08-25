function convertHTML(str) {
  const entity = {
    '&':  '&amp;',
    '<' : '&lt;',
    '>' : '&gt;',
    '"' : '&quot;',
    "'" : '&apos;'
  }
  let final_string = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] in entity) {
      final_string += entity[str[i]];
    } else {
      final_string += str[i];
     }
  }
  return final_string;
}
console.log(convertHTML("Dolce & Gabbana"));
