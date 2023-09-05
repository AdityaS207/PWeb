FLAG = ''
key = '1'
file = open("output1", "rb").read()
for f in file:
    file.write(chr(f ^ key).encode())

print(FLAG)