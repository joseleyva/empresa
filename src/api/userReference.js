import {basePath, apiVersion} from './config';


export function getUserReferenceApi(token, status){
    const url = `${basePath}/${apiVersion}/get-user-reference/${status}`;
  
    const params={
      method: "GET",
      headers:{
        "Content-Type": "application/json",
        Authorization: token
      }
    };
  
    return fetch(url, params)
    .then((response) => {
      return response.json()
    })
    .then((result) => {
     return result; 
    })
    .catch((err) => {
      return err.message;
    });
  
  }