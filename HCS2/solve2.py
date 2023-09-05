v6 =[0] * 22

v6[0] = 67
v6[1] = 117
v6[2] = 73
v6[3] = 117
v6[4] = 82
v6[5] = 69
v6[6] = 88
v6[7] = 117
v6[8] = 75
v6[9] = 68
v6[10] = 78
v6[11] = 117
v6[12] = 75
v6[13] = 88
v6[14] = 88
v6[15] = 75
v6[16] = 83
v6[17] = 117
v6[18] = 27
v6[19] = 26
v6[20] = 79
v6[21] = 78

for i in v6:
    print(chr(i^42), end = '')

    #this code we will get a strings that we must input that into flag_checker
    #after i input that there will be the flag HCS{i_c_xor_and_array_10ed}