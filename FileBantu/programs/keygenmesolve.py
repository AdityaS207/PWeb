import hashlib

trial = b'SCHOFIELD'
hash = hashlib.sha256(trial).hexdigest()

ans = hash[4] + hash[5] + hash[3] + hash[6] + hash[2] + hash[7] + hash[1] + hash[8]

part1 = "picoCTF{1n_7h3_|<3y_of_"
part2 = ans
part3 = "}"

print(part1 + part2 + part3)