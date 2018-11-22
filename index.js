
/**
 *
 * Addition of bigInteger
 * @param {String} a
 * @param {String} b
 * @returns {String}
 */
const adder = (a, b) => {
  if (!a || !b ||
      typeof (+a) !== 'number' ||
      typeof (+b) !== 'number') {
    return 0
  }
  [a, b] = [a, b].sort((a, b) => +a - +b).map(str => str.split(''))
  let carryNum = 0
  const result = []
  for (let i = b.length - 1, j = a.length - 1; i >= 0; i--, j--) {
    const addedValue = +b[i] + (+a[j] || 0) + carryNum
    carryNum = addedValue >= 10 ? 1 : 0
    result.unshift(addedValue % 10)
  }
  if (carryNum === 1) result.unshift(1)
  return result.join('')
}

exports = module.exports = {
  adder
}
