#Build a Profile Lookup
contacts = [
  {
    'firstName' : "Akira",
    'lastName' : "Laine",
    'number' : "0543236543",
    'likes' : ["Pizza", "Coding", "Brownie Points"],
  },
  {
    'firstName' : "Harry",
    'lastName' : "Potter",
    'number' : "0994372684",
    'likes' : ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    'firstName' : "Sherlock",
    'lastName' : "Holmes",
    'number' : "0487345643",
    'likes' : ["Intriguing Cases", "Violin"],
  },
  {
    'firstName' : "Kristian",
    'lastName' : "Vos",
    'number' : "unknown",
    'likes' : ["JavaScript", "Gaming", "Foxes"],
  },
];
def lookUpProfile(name, property):
  for contact in contacts:
    if contact["firstName"] == name:
      if property in contact:
        return contact[property] 
      return "No such property"
  return "No such contact"

test = lookUpProfile("Kristian", 'education')
print(test)
