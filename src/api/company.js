import { basePath, apiVersion } from './config';

export function addCompanyApi(token, data, avatar) {
    const url = `${basePath}/${apiVersion}/add-company`;
    const formData= new FormData();
    formData.append("avatar", avatar.file, avatar.file.name);
    formData.append("title", data.title);
    formData.append("description", data.description)
    const params ={
      method: "POST",
      body: formData,
      headers:{
        Authorization: token
      }
    }
    return fetch(url, params).then(response => {
        return response.json();
                
             }).then(result =>{
               if(result.company){
                  return {
                    ok:true,
                    message:'Empresa creada correctamente'
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



export function getCompanyApi() {
    const url = `${basePath}/${apiVersion}/get-company`;

    return fetch(url).then(response => {
        return response.json();
    }).then(result => {
        return result;
    }).catch(err => {
        return err.message;
    })
}

export function getCompanyActiveApi(active) {
    const url = `${basePath}/${apiVersion}/get-company-active?active=${active}`;

    
    return fetch(url).then(response => {
        return response.json();
    }).then(result => {
        return result;
    }).catch(err => {
        return err.message;
    })
}

export function updateCompanyApi(token, id, data) {
    const url = `${basePath}/${apiVersion}/update-company/${id}`;

    const params = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        },
        body: JSON.stringify(data)
    }

    return fetch(url, params).then(response => {
        return response.json();
    }).then(result => {
        return result.message;
    }).catch(err => {
        return err.message;
    })

}


export function activateCompanyApi(token, id, data) {
    const url = `${basePath}/${apiVersion}/activate-company/${id}`;

    const params = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        },
        body: JSON.stringify({ active: data })
    }

    return fetch(url, params).then(response => {
        return response.json();
    }).then(result => {
        return result.message;
    }).catch(err => {
        console.log(err)
    })

}

export function uploadAvatarApi(token, avatar, userId){
    const url= `${basePath}/${apiVersion}/upload-avatar-company/${userId}`;
    const formData= new FormData();
    formData.append("avatar", avatar.file, avatar.file.name);
  
    const params ={
      method: "PUT",
      body: formData,
      headers:{
        Authorization: token
      }
    }
  
    return fetch(url, params).then(response=>{
      return response.json();
    }).then(result=>{
      return result;
    }).catch(err=>{
      return err.message;
    });
  }

  export function deleteCompanyApi(token, userId){
    const url =`${basePath}/${apiVersion}/delete-company/${userId}`;
  
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