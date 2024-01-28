import re

text = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

pattern9 = re.compile('9')
match1 = re.search(pattern9, text)
print ("positions: %s, %s; value: %s." % (match1.start(), match1.end(), match1.group(0)))  # (1)

valores = re.findall('[a-f]', text)
print ("values: %s" % valores)                                                             # (2)




# # outputs

# (1) - 
                        # positions: 18, 19; value: 9. 


# (2) -
                        # values: ['a', 'b', 'c', 'd', 'e', 'f']