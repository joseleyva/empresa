import {basePath, apiVersion} from './config';

export function createVacanciesApi(token, data){
    const url =`${basePath}/${apiVersion}/create-vacancies`;
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
         if(result.vacancies){
            return {
              ok:true,
              message:'Vacante creada correctamente'
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
export function updateInfoVacanciesApi(token, vacancies){
    const url=`${basePath}/${apiVersion}/update-vacancies`;
  
    const params={
      method:"PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      body: JSON.stringify(vacancies)
    }
  
    return fetch(url, params).then(response=>{
      return response.json();
    }).then(result=>{
      return result;
    }).catch(err=>{
      return err.message;
    });
  }