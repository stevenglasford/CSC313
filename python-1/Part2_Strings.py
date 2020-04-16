##############################
###### Strings ###############
##############################

# Strings are used in Python to record text information, such as name. Strings
# in Python are actually a *sequence*, which basically means Python keeps track
# of every element in the string as a sequence. 


# Creating a String
# To create a string in Python you need to use either
# single quotes or double quotes. For example:

# string
'This is also a string'

# We can also use double quote
"String built with double quotes"


# Be careful with quotes!
' I'm using single quotes, but will create an error'


# The reason for the error above is because the single quote in I'm stopped the
# string. You can use combinations of double and single quotes to get the complete statement.

"Now I'm ready to use the single quotes inside a string!"


# ## Printing a String

# We can use a print statement to print a string.

print('Hello World 1')
print('Use \n to print a new line')
print('\n')



# String Basics

# We can also use a function called len() to check the length of a string!

len('Hello World')


# ## String Indexing

# In Python, we use brackets [] after an object to call its index. We should
# also note that indexing starts at 0 for Python. Let's create a new object
# called s and the walk through a few examples of indexing.

# Assign s as a string
s = 'Hello World'

# Let's start indexing!
# Show first element (in this case a letter)
print(s[0])

# Next element
print(s[1])

# Next Element
print(s[2])


# We can use a : to perform *slicing* which grabs everything
# up to a designated point. For example:

# Grab everything past the first term all the way to the length of s which is len(s)

print(s[1:])

# Note that there is no change to the original s
print(s)

# Grab everything UP TO the 3rd index
print(s[:3])


# Note the above slicing. Here we're telling Python to grab everything from
# 0 up to 3. It doesn't include the 3rd index. You'll notice this a lot in
# Python, where statements and are usually in the context of "up to, but not including".

#Everything
print(s[:])


# We can also use negative indexing to go backwards.
# Last letter (one index behind 0 so it loops back around)
s[-1]

# Grab everything but the last letter
s[:-1]


# We can also use index and slice notation to grab elements of a sequence by a
# specified step size (the default is 1). For instance we can use two colons in
# a row and then a number specifying the frequency to grab elements. For example:

# Grab everything, but go in steps size of 1
s[::1]

# Grab everything, but go in step sizes of 2
s[::2]

# We can use this to print a string backwards
s[::-1]
print(s[::-1])


# ## String Properties
# Its important to note that strings are immutable.
# This means that once a string is created, the elements within
# it can not be changed or replaced. For example:

s

# Let's try to change the first letter to 'x'
s[0] = 'x'


# Notice how the error tells us directly what we can't do,
# change the item assignment!
#
# Something we can do is concatenate strings!
s

# Concatenate strings!
s + ' concatenate me!'

# We can reassign s completely though!
s = s + ' concatenate me!'

print(s)

# We can use the multiplication symbol to create repetition!

letter = 'z'

letter*10


# ## Basic Built-in String methods
#
# Objects in Python usually have built-in methods. These methods are functions
# inside the object that can perform actions or commands on the object itself.


# Methods are in the form: object.method(parameters)

# Here are some examples of built-in methods in strings:

# Upper Case a string
s.upper()

# Lower case
s.lower()

# Split a string by blank space (this is the default)
s.split()

# Split by a specific element (doesn't include the element that was split on)
s.split('W')

# There are many more methods than the ones covered here.

########################
### Print Formatting ###
########################

# We can use the .format() method to add formatted objects to printed string statements.
#
# The easiest way to show this is through an example:

'Insert another string with curly brackets: {}'.format('The inserted string')

# Using the string .format() method
# The best way to format objects into your strings for print statements is using
# the format method. The syntax is:
#
#  'String here {var1} then also {var2}'.format(var1='something1',var2='something2')
#
# Lets see some examples:


print('This is a string with an {p}'.format(p='insert'))

# Multiple times:
print('One: {p}, Two: {p}, Three: {p}'.format(p='Hi!'))


# Several Objects:
print('Object 1: {a}, Object 2: {b}, Object 3: {c}'.format(a=1,b='two',c=12.3))

