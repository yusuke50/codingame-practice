# Retro Typewriter Art
# https://www.codingame.com/training/easy/retro-typewriter-art

T = input()
split_array = T.split(' ')
ans = ''

for item in split_array:
    if item == 'nl':
        ans += '\n'
    elif 'sp' in item:
        count = int(item.replace('sp', ''))
        ans += ' ' * count
    elif 'bS' in item:
        count = int(item.replace('bS', ''))
        ans += '\\' * count
    elif 'sQ' in item:
        count = int(item.replace('sQ', ''))
        ans += "'" * count
    else:
        import re
        match = re.search(r'(\d+)([\s\S])', item)
        symbol = match.group(2)
        count = int(match.group(1))
        ans += symbol * count

print(ans)
