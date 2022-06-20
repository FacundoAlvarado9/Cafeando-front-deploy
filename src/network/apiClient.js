import axios from 'axios'

export default axios.create({
  baseURL: 'https://cafeando-api.herokuapp.com',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})
