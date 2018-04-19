const minStep = input => {
  if (input%2==0) {
    input /= 2
    if (input > 1) return 1 + minStep(input)
    else return 1
  } else {
    let n1 = input+1
    let n2 = input-1
    const result1 = minStep(n1)
    const result2 = minStep(n2)
    if (result1 < result2) return 1 + result1
    else return 1 + result2
  }
};

module.exports = { minStep };

