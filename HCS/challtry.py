encrypted_flag = b'HCS{????????????????}'  # Make sure this is a bytes object
file = open("output", "wb")

for key in range(256):  # Try all possible byte values
    decrypted_flag = bytes([char ^ key for char in encrypted_flag])
    
    # Check if the decrypted flag contains only printable characters
    if all(32 <= char <= 126 for char in decrypted_flag):
        print(f"Key: {key}, Flag: {decrypted_flag.decode()}")
        break

file.close()
