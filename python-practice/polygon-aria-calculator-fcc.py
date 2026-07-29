class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    #The str method
    def __str__(self):
        return f"Rectangle(width={self.width}, height={self.height})"
    
    #To set the width of the Rectangle 
    def set_width(self, value):
        self.width = value
    
    #To set the height of the Rectangle 
    def set_height(self, value):
        self.height = value
    
    #To get the aria of a Rectangle 
    def get_area(self):
        return self.width * self.height
    
    #To get the perimeter of the Rectangle 
    def get_perimeter(self):
        return 2 * (self.width + self.height)

    #To get the diagonal of the Rectangle 
    def get_diagonal(self):
        return ((self.width ** 2 + self.height ** 2) ** 0.5)
    
    #get_picture method
    def get_picture(self):
        if self.width > 50 or self.height > 50:
            return "Too big for picture."
        string_output = ""
        for i in range(self.height):
            string_output += self.width * "*" + "\n"
        return string_output

    #get_amount_inside method 
    def get_amount_inside(self, shape):
        return (self.width // shape.width) * (self.height // shape.height)

#Square derived class
class Square(Rectangle):
    def __init__(self, side):
        super().__init__(side, side)
    
    #str method 
    def __str__(self):
        return f"Square(side={self.width})"

    #set_width
    def set_width(self, value):
        self.width = value
        self.height = value
    
    #set height 
    def set_height(self, value):
        self.width = value
        self.height = value
    
    #set_side
    def set_side(self, value):
        self.width = value
        self.height = value 
    
    


rect = Rectangle(10, 5)
print(rect.get_area())
rect.set_height(3)
print(rect.get_perimeter())
print(rect)
print(rect.get_picture())

#Square
sq = Square(9)
print(sq.get_area())
sq.set_side(4)
print(sq.get_diagonal())
print(sq)
print(sq.get_picture())

rect.set_height(8)
rect.set_width(16)
print(rect.get_amount_inside(sq))
