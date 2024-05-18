import axios from 'axios'
import config from './config';

const getAll = () => {
  return axios.get(`${config.baseURL}/api/notes`)
}

const create = (newObject) => {
  return axios.post(`${config.baseURL}/api/notes`, newObject)
}

const update = (id, newObject) => {
  return axios.put(`${config.baseURL}/api/notes/${id}`, newObject)
}

export default { 
  getAll: getAll, 
  create: create, 
  update: update 
}