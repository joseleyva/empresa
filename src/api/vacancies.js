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
              message:'Vacante creada correctamente',
              valor: result.vacancies
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
export function updateInfoVacanciesApi(token, vacancies, userId){
    const url=`${basePath}/${apiVersion}/update-vacancies/${userId}`;
  
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

  export function getVacanciesActiveApi(token,name, status){
    const url = `${basePath}/${apiVersion}/vacancies-active?active=${status}`;
  
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
  export function deleteVacanciesApi(token, userId){
    const url =`${basePath}/${apiVersion}/delete-vacancies/${userId}`;
  
    const params={
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      }
    }
  
    return fetch(url, params).then(response=>{
      return response.json();
    }).then(result=>{
      return result.message;
    }).catch(err=>{
      return err.message;
    })
  }

  export function activateVacancieApi(token, userId, status){
    const url=`${basePath}/${apiVersion}/activate-vacancie/${userId}`;
  
    const params={
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization:token
      },
      body: JSON.stringify({
        active: status
      })
    };
    return fetch(url, params).then(response=>{
      return response.json();
    }).then(result=>{
      return result.message;
    }).catch(err=>{
      return err.message;
    });
  }