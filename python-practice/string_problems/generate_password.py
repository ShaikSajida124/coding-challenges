import random
def generatePassword(passwordLength):
  passwordCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'
  password = ''
  for i in range(passwordLength):
    randomIndex = random.randint(0, len(passwordCharacters)-1)
    password += passwordCharacters[randomIndex]
  return password

password = generatePassword(5)
print('Generated Password: ', password)
