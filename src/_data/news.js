// const axios = require("axios");
const axios = require('axios');

const API_KEY = 'f31920bab9ae436bab2b02e8317fad5a'

module.exports = async function () {
  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=gb&apiKey=${API_KEY}&pageSize=5`)
    console.log(response.data)
    return (response.data);
  } catch (err) {
    console.log(err)
  }
}
