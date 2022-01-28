import {basePath, apiVersion} from './config';


export function getUserReferenceApi(token, status, active){
    const url = `${basePath}/${apiVersion}/get-user-reference/${status}?solicitado=${active}`;
  
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

  export function updateInfoReferenceApi(token, reference, userId){
    const url=`${basePath}/${apiVersion}/update-info-user-reference/${userId}`;
  
    const params={
      method:"PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      body: JSON.stringify(reference)
    }
  
    return fetch(url, params).then(response=>{
      return response.json();
    }).then(result=>{
      return result;
    }).catch(err=>{
      return err.message;
    });
  }