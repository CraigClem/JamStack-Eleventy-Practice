
const axios = require('axios');
const countries = require('./countries.json');
console.log(countries)

require('dotenv').config();

async function getNews(country) {
  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.API_KEY}&pageSize=5`)
    console.log(response.data)
    return {
      "country": country,
      "articles": response.data.articles
    }
  } catch (err) {
    console.log(err)
  }
};



module.exports = async function () {

  const newsPromises = countries.map(getNews)
  return Promise.all(newsPromises).then(newsObjects => {
    console.log('newsObjects:', newsObjects)
    return [].concat.apply([], newsObjects)
  })

}


// module.exports = async function () {
//   try {
//     const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=gb&apiKey=${process.env.API_KEY}&pageSize=5`)
//     console.log(response.data)
//     return response.data;
//   } catch (err) {
//     console.log(err)
//   }
// };


