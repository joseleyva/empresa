import {basePath, apiVersion} from './config';

export function CreateReqReferenceApi(token,data){
    const url =`${basePath}/${apiVersion}/create-req-reference`;
    const params ={
        method:"POST",
        body: JSON.stringify(data),
        headers:{
            "Content-Type":"application/json",
            Authorization: token

        }
    };
 return fetch(url, params).then(response => {
  return response.json();
       }).then(result =>{
        if(result.reference){
          return {
            ok:true,
            message:'Referencia enviada correctamente'
          };
        }
       return {
          ok:false,
          message: result.message
       };
     }).catch(err => {
      return {
        ok:false,
        message: err.message
     };
     })
}

export function getReqReferenceApi(token, status, active){
    const url = `${basePath}/${apiVersion}/get-req-reference/${status}?send=${active}`;
  
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
    const url=`${basePath}/${apiVersion}/update-info-reference/${userId}`;
  
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