import {basePath, apiVersion} from './config';

export function CreateReferenceApi(token,data){
    const url =`${basePath}/${apiVersion}/create-reference`;
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