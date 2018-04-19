
const threeSum = (nums, target) => {
  let result = []
  for (let i = 0;i < nums.length; i++)
    for (let j = 0; j < nums.length; j++)
      if (i!==j)
        for (let k = 0; k<nums.length; k++)
          if (i!==j && k!==j && i!==k)
            if (nums[i]+nums[j]+nums[k] === target)
              if (!result.includes([i,j,k].sort())){
                result.push([i,j,k].sort())
              }
  return Array.from(new Set(result.map(JSON.stringify)), JSON.parse)
};
module.exports = { threeSum };
