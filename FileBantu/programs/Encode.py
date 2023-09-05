data = "灩捯䍔䙻ㄶ形楴獟楮獴㌴摟潦弸強㕤㐸㤸扽"

decoded_string = ""
for c in data:
    byte_string = bytes.fromhex(hex(ord(c))[2:])  # Fixed the hex format
    ascii_string = byte_string.decode("utf-8")    # Changed encoding to utf-8
    decoded_string += ascii_string

print(decoded_string)
