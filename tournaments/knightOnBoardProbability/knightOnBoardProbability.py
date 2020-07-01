
memo = {}

def knightOnBoardProbability(m, n, steps, x, y):
  if x < 0 or x >= m: return 0
  if y < 0 or y >= n: return 0
  if steps == 0: return 1.0
  if (x, y, steps) in memo: return memo[(x, y, steps)]
  p = 0
  for i, j in [(-2, -1), (-2, 1), (-1, -2), (-1, 2)]:
    p += knightOnBoardProbability(m, n, steps-1, x+i, y+j) * 1/8
    p += knightOnBoardProbability(m, n, steps-1, x-i, y-j) * 1/8
  memo[(x, y, steps)] = p
  return p
