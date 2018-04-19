const { readFileSync } = require('fs');
const logFilePath = __dirname + '/data-usage.log';

const raw = readFileSync(logFilePath, 'utf8');

const dataUsage = () => new Promise((resolve,reject) => {
  let data = {}
  raw.split('\n').forEach((datum) => {
    const extractedDatum = datum.split(',')
    const user = extractedDatum[1].split('user=')[1]
    const dat = Number(extractedDatum[2].split('data=')[1])
    data[user] = {
      total: data[user]? data[user].total+Number(dat):Number(dat),
      num: data[user]? data[user].num+1:1 
    }
  })

  const val = []
  Object.keys(data).forEach(dat => val.push({ user: dat, total: data[dat].num, average: (data[dat].num/data[dat].total) }))
  resolve(val)
});
module.exports = { dataUsage };
