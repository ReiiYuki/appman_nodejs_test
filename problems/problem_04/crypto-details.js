const request = require('request')

const cryptoDetails = async (symbols = []) => {
  let responses = []
  for (let i = 0;i<symbols.length;i++) {
    const response = await new Promise((resolve, reject) => { request(`https://coinbin.org/${symbols[i]}`, (err, res, body) => {
      if (err) reject(err)
      else resolve(JSON.parse(body))
    }) })
    responses.push(response)
  }
  let result = await Promise.all(responses)
  return result
};
module.exports = { cryptoDetails };
