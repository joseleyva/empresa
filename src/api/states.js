import {basePath, apiVersion} from './config';

export function CreateStatesApi(token,data){
    const url =`${basePath}/${apiVersion}/create-states`;
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
        if(result.state){
          return {
            ok:true,
            message:'Estudios enviados correctamente'
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