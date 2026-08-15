const questions = [
  {category : 'python',
   question : 'What is a correct syntax to output "Hello World" in Python?', 
   choices : ['echo"Hello World"', 'print("Hello World")', 'p("Hello World")'], 
   answer : 'print("Hello World")'},

  {category : 'python',
   question : 'How do you insert COMMENTS in Python code?', choices : ['#This is a comment', '//This is a comment', '/*This is a comment'], 
   answer : '#This is a comment'},

  {category : 'python',
   question : 'Which one is NOT a legal variable name?', choices : ['_myvar', 'my-var', 'Myvar'],
   answer : 'my-var'},
   
  {category : 'python',
   question : 'What is the correct file extension for Python files?', 
   choices : ['.pyt', '.py', '.pt'], 
   answer : '.py'},

  {category : 'python', 
  question : 'What is the correct syntax to output the type of a variable or object in Python?', 
  choices : ['print(typeof(x))', 'print(type(x))', 'print(typeof x)'], 
  answer : 'print(type(x))'}
];

function getRandomQuestion(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function getRandomComputerChoice(choicesArray) {
  const randomIndex = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomIndex];
}

function getResults(question, choice) {
  if (question.answer === choice) {
    return 'The computer\'s choice is correct!';
  }
  return `The computer's choice is wrong. The correct answer is: ${question.answer}`
}


const randomQuestion = getRandomQuestion(questions);
const randomChoice = getRandomComputerChoice(randomQuestion.choices);
console.log(randomQuestion);
console.log(randomChoice);
const result = getResults(randomQuestion, randomChoice);
console.log(result);
