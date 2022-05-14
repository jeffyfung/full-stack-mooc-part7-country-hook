import axios from 'axios'

const getCountryByName = async (name) => {
  try {
    let res = await axios.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
    return res.data[0]
  } catch (e) {
  }
}

export { getCountryByName }