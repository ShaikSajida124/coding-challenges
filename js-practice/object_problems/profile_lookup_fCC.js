//Build a Profile Lookup fCC
let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];
function lookUpProfile(name, property) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i]['firstName'] === name) {
      if (property in contacts[i]) {
        return contacts[i][property];
      } 
      return 'No such property';
    }
  }
  return 'No such contact';
}
console.log(lookUpProfile('Kristian', 'lastName'));
console.log(lookUpProfile("Sherlock", "likes"));
console.log(lookUpProfile("Harry", "likes"));
console.log(lookUpProfile("Bob", "number"));
