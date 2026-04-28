# Horse-racing Duals
# https://www.codingame.com/training/easy/horse-racing-duals

n = int(input())
all = []
for i in range(n):
    all.append(int(input()))
all.sort()

d = 10000000
for i in range(n - 1):
    diff = all[i + 1] - all[i]
    d = min(d, diff)
    if d == 0:
        break

print(d)
