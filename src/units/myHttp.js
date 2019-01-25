import http from 'axios'
import {host} from './config'

http.defaults.withCredentials=true;//让ajax携带cookie
export function get(path) {
  return new Promise((resolve, reject) => {
    let url = host + path;
    http.get(url)
      .then((response) => {
        response = response.data.split('\n');
        response[0] = eval('(' + response[0] + ')');
        response[1] = eval('(' + response[1] + ')');
        resolve({
          status : response[0].status,
          data : response[1]
        })
      })
      .catch((error) => {
        reject(error);
      })
  })
}

export function post(path,data) {
  return new Promise((resolve,reject) =>{
    let url = host + path;
    http.post(url,data)
      .then((response) => {
        response = response.data.split('\n');
        response[0] = eval('(' + response[0] + ')');
        response[1] = eval('(' + response[1] + ')');
        resolve({
          status : response[0].status,
          data : response[1]
        })
      })
      .catch((error) => {
      reject(error);
    })
  })
}
export {http}
