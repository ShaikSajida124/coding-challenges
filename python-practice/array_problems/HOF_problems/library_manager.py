library = [
  {'title': 'Your Next Five Moves: Master the Art of Business Strategy',
  'author' : 'Patrick Bet-David and Greg Dinkin',
  'about' : 'A book on how to plan ahead',
  'pages' : 320},
  
  {
    'title' : 'Atomic Habits',
    'author' : 'James Clear',
    'about' : 'A practical book about how to discard bad habits and building good ones',
    'pages' : 320
  },
  
  {
  'title' : 'Choose Your Enemies Wisely: Business Planning for the Audacious Few',
  'author' : 'Patrick Bet-David',
  'about' : "A book that emphasizes the importance of identifying and understanding one's adversaries to succeed in the business world",
  'pages' : 304
  },
  
  {
  'title' : 'The Embedded Entrepreneur',
  'author' : 'Arvid Kahl',
  'about' : 'A book focusing on how to build an audience-driven business',
  'pages' : 308,
  },
  
  {
  'title' : 'How to Be a Coffee Bean: 111 Life-Changing Ways to Create Positive Change',
  'author' : 'Jon Gordon',
  'about' : 'A book about effective ways to lead a coffee bean lifestyle',
  'pages' : 256
  },
  
  {
  'title' : 'The Creative Mindset: Mastering the Six Skills That Empower Innovation',
  'author' : 'Jeff DeGraff and Staney DeGraff',
  'about' : 'A book on how to develop creativity and innovation skills',
  'pages' : 168,
  },

  {
  'title' : 'Rich Dad Poor Dad',
  'author' : 'Robert Kiyosaki and Sharon Lechter',
  'about' : 'A book about financial literacy, financial independence, and building wealth. ',
   'pages' : 336,
  },
  
  {
   'title' : 'Zero to Sold',
    'author' : 'Arvid Kahl',
    'about' : 'A book on how to bootstrap a business',
    'pages' : 500,
  }
]
print("Books in the Library:\n")
def getBookInformation(catalog):
  books = '\n'.join(map(lambda book: f'{book['title']} by {book['author']}', catalog))
  return books
bookInformation = getBookInformation(library)
print(bookInformation)

print(20*'__')

print("\nList of book summaries:\n")
def getBookSummaries(catalog):
  bookSummaries = '\n'.join(map(lambda book : book['about'], catalog))
  return bookSummaries
summaries = getBookSummaries(library)
print(summaries)

print(20*"__")

print("\nList of books by Arvid Kahl:\n")
def getBooksByAuthor(catalog, author):
  booksByAuthor = list(filter(lambda book : book['author'] == author, catalog))
  return  booksByAuthor
booksByAuthor = getBooksByAuthor(library, 'Arvid Kahl')
print(booksByAuthor)

print(20*"_")
print("Total number of pages for all library books:")

def getTotalPages(catalog):
  total_pages = sum(book['pages'] for book in catalog) 
  return total_pages
