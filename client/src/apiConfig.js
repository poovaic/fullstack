

let apiUrl
const apiUrls = {
  production: 'https://poovai-fullstack1.herokuapp.com/api',
  development: 'http://localhost:4000/api'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl   