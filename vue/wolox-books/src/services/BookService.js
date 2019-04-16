import api from '../config/api'
import { getToken } from '../services/LocalStorageService'

const token = getToken()
if (token) {
  api.setHeader('Authorization', token)
}

export default {
  getBooks: () => api.get('/books'),
  getBookByID: id => api.get(`/books/${id}`)
}
