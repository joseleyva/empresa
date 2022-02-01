import {basePath, apiVersion} from './config';

export function CreateUserEvaluationsApi(token,data){
    const url =`${basePath}/${apiVersion}/create-evaluation`;
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
        if(result.evaluations){
          return {
            ok:true,
            message:'Evaluación creada correctamente'
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