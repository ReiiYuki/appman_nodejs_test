
const request = require('request')

const bangkokForecast = async () => {
  return new Promise((resolve, reject) => request(`https://api.openweathermap.org/data/2.5/forecast/daily?q=Bangkok&cnt=7&appid=e5446373eef6128679c7fa8a1951d788`, (err, res, body) => {
    if (err) reject(err)
    else resolve(JSON.parse(body).list.map(data => {
      const date = new Date(data.dt*1000)
      return {
        date: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
        minTemp: data.temp.min,
        maxTemp: data.temp.max
      }
    }))
  }))
};
module.exports = { bangkokForecast };
