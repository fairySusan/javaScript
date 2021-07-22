// 栈的解法

const leftToRight = {
  '{': '}',
  '(':')',
  '[':']'
}



function isValid (str) {
  const len = str.length

  const stack = []

  for (let i =0; i<len; i++) {
    const ch = str[i]

    if (ch === '{' || ch === '[' || ch === '(') {
      stack.unshift(ch)
    } else {
      if (stack.length === 0 || ch !== leftToRight[stack.shift()]) {
        return false
      }
    }
  }

  return stack.length === 0
}

const a = '()[]{}'

console.log(isValid(a))