
const axios = require('axios');
// const countries = require('./countries.json');

require('dotenv').config();

module.exports = async function () {
  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=gb&apiKey=${process.env.API_KEY}&pageSize=5`)
    console.log(response.data)
    return (response.data)
  } catch (err) {
    console.log(err)
  }
}

// module.exports = async function () {

//   var newsPromises = countries.map(getNews);
//   return Promise.all(newsPromises).then(newsObjects => {
//     console.log('newsObjects:', newsObjects);
//     return [].concat.apply([], newsObjects);
//   });
// }

